<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Sale extends Model
{
    protected $fillable = ['product_id', 'amount', 'date'];

    protected $collection = 'sales';
}
