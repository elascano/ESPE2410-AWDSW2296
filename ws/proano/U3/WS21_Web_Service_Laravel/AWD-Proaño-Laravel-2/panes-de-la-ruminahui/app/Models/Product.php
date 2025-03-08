<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Product extends Model
{
    protected $collection = 'products_laravel'; 
    protected $fillable = ['name', 'description', 'price'];
}