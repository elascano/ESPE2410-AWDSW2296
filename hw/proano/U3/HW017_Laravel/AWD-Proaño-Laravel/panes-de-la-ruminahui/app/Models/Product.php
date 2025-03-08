<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products_laravel';
    protected $fillable = ['name', 'description', 'price'];
}
