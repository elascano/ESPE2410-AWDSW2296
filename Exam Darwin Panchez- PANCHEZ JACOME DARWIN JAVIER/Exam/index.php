<?php
$host = 'junction.proxy.rlwy.net';
$db = 'railway';
$user = 'root';
$pass = 'xtHPdEAalkkUJEonEYAXjbrJgzzuazaD';
$charset = 'utf8';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

$searchQuery = isset($_GET['search']) ? $_GET['search'] : '';

$stmt = $pdo->prepare('SELECT * FROM banks WHERE name LIKE ?');
$stmt->execute(["%$searchQuery%"]);
$banks = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Buscar Información de Bancos</title>
</head>
<body>
    <h1>Buscar Información de Bancos</h1>
    <form method="GET">
        <label for="search">Buscar por Nombre:</label>
        <input type="text" id="search" name="search" value="<?php echo htmlspecialchars($searchQuery); ?>">
        <button type="submit">Buscar</button>
    </form>

    <h2>Lista de Bancos</h2>
    <ul>
        <?php foreach ($banks as $bank): ?>
            <li><?php echo $bank['name'] . " - " . $bank['location']; ?></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>

