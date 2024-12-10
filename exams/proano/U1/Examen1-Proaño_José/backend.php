<?php
require 'vendor/autoload.php'; 

function connectToDatabase() {
    $client = new MongoDB\Client("mongodb+srv://jiproano1:Cota2002@school.h9lw5.mongodb.net/");
    return $client->school->students; 
}
?>
