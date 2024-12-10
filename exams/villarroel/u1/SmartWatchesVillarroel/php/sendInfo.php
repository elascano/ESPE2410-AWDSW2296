<?php
$servername = "localhost";
$username = "admin";
$password = "admin";
$dbname = "sw_store";

$Name = $_POST["name"];
$Size = $_POST["size"];
$Price = $_POST["price"];
$Stock = $_POST["stock"];

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "INSERT INTO smart_watch (name_product, sizeProduct, price, stock)
  VALUES ('$Name', '$Size', $Price, $Stock)";

  $conn->exec($sql);

} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>