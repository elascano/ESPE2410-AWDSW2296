<?php
require 'backend.php';

$collection = connectToDatabase();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $students = $collection->find();
    $result = [];
    foreach ($students as $student) {
        $student['_id'] = (string) $student['_id'];
        $result[] = $student;
    }    
    echo json_encode($result);
}
?>
