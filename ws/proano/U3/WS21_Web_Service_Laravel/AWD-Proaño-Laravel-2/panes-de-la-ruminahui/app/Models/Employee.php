<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model as Eloquent;

class Employee extends Eloquent
{
    protected $collection = 'employees';
    protected $fillable = ['name', 'role', 'salary'];
}
