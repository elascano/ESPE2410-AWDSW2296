<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReportController;

Route::middleware('api')->group(function () {
    Route::get('/products/low-stock', [ProductController::class, 'lowStock']);
    Route::get('/reports/sales-summary', [ReportController::class, 'salesSummary']);
});
