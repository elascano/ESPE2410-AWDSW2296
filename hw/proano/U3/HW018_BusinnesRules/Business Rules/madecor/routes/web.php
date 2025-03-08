<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReportController;

// API routes can be grouped and prefixed so they’re separate from your web routes.
Route::group(['prefix' => 'api'], function () {
    // Business rule: List products with low stock
    Route::get('products/low-stock', [ProductController::class, 'lowStock']);
    
    // Business rule: Generate a sales summary report
    Route::get('reports/sales-summary', [ReportController::class, 'salesSummary']);
});
