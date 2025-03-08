<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Business Rule:
     * Return all products whose quantity is less than their defined minimum stock.
     *
     * This endpoint can be used to trigger a low-stock alert.
     */
    public function lowStock()
    {
        // Using MongoDB’s aggregation expression to compare fields:
        $lowStockProducts = Product::whereRaw([
            '$expr' => [
                '$lt' => ['$quantity', '$min_stock']
            ]
        ])->get();

        return response()->json([
            'low_stock_products' => $lowStockProducts
        ]);
    }
}
