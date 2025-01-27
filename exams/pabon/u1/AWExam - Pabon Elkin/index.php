<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    
    <title>SINGERS</title>
</head>
<body>

    <h1>SINGERS FORM I</h1>
    <form action="insert.php" method="POST">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>
        
        <label for="genre">Genre:</label><br>
        <input type="text" id="genre" name="genre" required><br><br>
        
        <label for="country">Country:</label><br>
        <input type="text" id="country" name="country" required><br><br>
        
        <label for="debut_year">Debut Year:</label><br>
        <input type="number" id="debut_year" name="debut_year" required><br><br>
        
        <label for="albums_count">Albums Count:</label><br>
        <input type="number" id="albums_count" name="albums_count" required><br><br>

        <input type="submit" value="Insert Singer">
    </form>
</body>
</html>
