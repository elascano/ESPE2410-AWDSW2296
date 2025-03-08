<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use Illuminate\Http\Request;
use MongoDB\BSON\UTCDateTime;

class ReportController extends Controller
{
    /**
     * Business Rule:
     * Generate a sales summary report for a specified date range.
     *
     * Query Parameters:
     *  - start: (optional) start date in Y-m-d format (defaults to the first day of the current month)
     *  - end:   (optional) end date in Y-m-d format (defaults to today)
     */
    public function salesSummary(Request $request)
    {
        // Determine the date range; use defaults if not provided.
        $startDate = $request->query('start', now()->startOfMonth()->toDateString());
        $endDate   = $request->query('end', now()->toDateString());

        // Convert dates to MongoDB UTCDateTime (note: UTCDateTime expects milliseconds)
        $startUTC = new UTCDateTime(strtotime($startDate) * 1000);
        $endUTC   = new UTCDateTime(strtotime($endDate . ' 23:59:59') * 1000);

        // Use a raw MongoDB aggregation to produce the summary.
        $aggregation = Sale::raw(function($collection) use ($startUTC, $endUTC) {
            return $collection->aggregate([
                [
                    '$match' => [
                        'date' => [
                            '$gte' => $startUTC,
                            '$lte' => $endUTC,
                        ],
                    ],
                ],
                [
                    '$group' => [
                        '_id'       => null,
                        'totalSales'=> ['$sum' => '$amount'],
                        'salesCount'=> ['$sum' => 1],
                    ],
                ],
            ]);
        });

        // Convert the aggregation result to an array.
        $result = $aggregation->toArray();
        $summary = count($result) > 0 ? $result[0] : ['totalSales' => 0, 'salesCount' => 0];

        return response()->json([
            'sales_summary' => $summary,
            'date_range' => [
                'start' => $startDate,
                'end'   => $endDate,
            ],
        ]);
    }
}
