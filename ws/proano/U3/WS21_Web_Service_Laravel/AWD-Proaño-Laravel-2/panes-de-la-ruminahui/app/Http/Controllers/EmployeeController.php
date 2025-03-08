<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Employee;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::select('id', 'name', 'role')->get();
        return response()->json($employees);
    }

    public function promote($id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return response()->json(['error' => 'Employee not found'], 404);
        }

        switch ($employee->role) {
            case 'office manager':
                $employee->role = 'senior office manager';
                break;
            case 'senior office manager':
                $employee->role = 'ceo';
                break;
            case 'ceo':
                return response()->json(['message' => 'This employee is already a CEO and cannot be promoted'], 400);
            default:
                return response()->json(['message' => 'This employee cannot be promoted'], 400);
        }

        $employee->save();
        return response()->json(['message' => 'Employee promoted successfully', 'employee' => $employee]);    
    }
}
