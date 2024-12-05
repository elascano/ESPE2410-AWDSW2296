<!DOCTYPE html>
<html lang="en">
<head>
    <title>Report of teams</title>
    <link href="css/estilo.css" rel="stylesheet" type="text/css">
    <link href="css/estilo_barra.css" rel="stylesheet" type="text/css">
</head>
<body>
    <?php include 'barra_navegacion.php'; ?>

    <header style="text-align: left; padding: 2px;">
        <img src="logo.jpg" alt="Header Image" style="max-width: 4%; height: auto;">
    </header>

    <hr size="10" width="100%" noshade color="blue">
    <h1>Report of team</h1>
    <hr size="10" width="100%" noshade color="#2F0CEC">

    <form method="post" action="">
        <label for="student_id">Name of the team:</label>
        <input type="text" id="student_id" name="student_id" placeholder="Ej: 1 o Tonteham" required>
        <button type="submit">Report</button>
    </form>

    <hr size="10" width="100%" noshade color="blue">

    <?php
    
    $student1_id = "1";
    $student1_name = "Tonteham";
    $student1_grades = [
        "Points" => 85,
        "Gols" => 60,
        "Positions" => 1,
        "red card" => 5,
        "yelow card" => 25
    ];

    $student2_id = "102";
    $student2_name = "Ana";
    $student2_grades = [
        "Tests" => 78,
        "Workshops" => 82,
        "Assignments" => 75,
        "Homework" => 88,
        "Exams" => 85
    ];

    
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['student_id'])) {
        $input = trim($_POST['student_id']);

        if ($input === $student1_id || strtolower($input) === strtolower($student1_name)) {
            echo "<h2>Reporte para: $student1_name (ID: $student1_id)</h2>";
            echo "<ul>";
            foreach ($student1_grades as $category => $grade) {
                echo "<li><strong>$category:</strong> $grade</li>";
            }
            echo "</ul>";
        } elseif ($input === $student2_id || strtolower($input) === strtolower($student2_name)) {
            echo "<h2>Reporte para: $student2_name (ID: $student2_id)</h2>";
            echo "<ul>";
            foreach ($student2_grades as $category => $grade) {
                echo "<li><strong>$category:</strong> $grade</li>";
            }
            echo "</ul>";
        } else {
            echo "<p><strong>Not found team with ID or name.</strong></p>";
        }
    }
    ?>

    <hr size="10" width="100%" noshade color="blue">

    <p>Support Team</p>
    <?php include 'footer.php'; ?>
</body>
</html>
