<?php

$host = "autorack.proxy.rlwy.net";  
$port = "54493";  
$username = "root"; 
$password = "hWBJtRMqUAmTbJjAXpaVqaUpfzLCsXzW"; 
$dbname = "railway";   

$conn = new mysqli($host, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$conn->set_charset("utf8");

?>
