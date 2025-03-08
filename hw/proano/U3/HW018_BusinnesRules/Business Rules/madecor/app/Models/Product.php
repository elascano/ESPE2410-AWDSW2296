<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'quantity', 'price', 'min_stock'];

    protected $collection = 'products';
}
