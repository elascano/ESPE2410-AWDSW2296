<?php
require 'database.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $genre = $_POST['genre'];
    $country = $_POST['country'];
    $debut_year = $_POST['debut_year'];
    $albums_count = $_POST['albums_count'];

    $sql = "INSERT INTO singers (name, genre, country, debut_year, albums_count)
            VALUES (?, ?, ?, ?, ?)";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("sssid", $name, $genre, $country, $debut_year, $albums_count);

        if ($stmt->execute()) {
            echo "<h3>Singer inserted correctly</h3>";
        } else {
            echo "<h3>ERROR TO INSERT: " . $stmt->error . "</h3>";
        }

        $stmt->close();
    } else {
        echo "<h3>ERROR TO THE CONSULT: " . $conn->error . "</h3>";
    }
}

$conn->close();
?>
