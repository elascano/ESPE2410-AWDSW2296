<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar Profesor</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Registro de Profesor</h1>
        <?php
        
        $nombreErr = $materiaErr = $mensajeExito = "";
        $nombre = $materia = "";

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            
            if (empty($_POST["nombre"])) {
                $nombreErr = "El nombre es obligatorio.";
            } else {
                $nombre = limpiarDatos($_POST["nombre"]);
                if (!preg_match("/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/", $nombre)) {
                    $nombreErr = "Solo se permiten letras y espacios.";
                }
            }

            
            if (empty($_POST["materia"])) {
                $materiaErr = "La materia es obligatoria.";
            } else {
                $materia = limpiarDatos($_POST["materia"]);
            }

            
            if (empty($nombreErr) && empty($materiaErr)) {
                $servername = "localhost"; 
                $username = "root"; 
                $password = ""; 
                $dbname = "escuela"; 

          
                $conn = new mysqli($servername, $username, $password, $dbname);

              
                if ($conn->connect_error) {
                    die("Conexión fallida: " . $conn->connect_error);
                }

          
                $sql = "INSERT INTO profesores (nombre, materia) VALUES ('$nombre', '$materia')";

                if ($conn->query($sql) === TRUE) {
                    $mensajeExito = "Registro exitoso.";
                 
                    $nombre = $materia = "";
                } else {
                    echo "<div class='alert alert-danger'>Error: " . $conn->error . "</div>";
                }

               
                $conn->close();
            }
        }

    
        function limpiarDatos($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
        ?>


        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" class="border p-4 bg-light">
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre del Profesor</label>
                <input type="text" class="form-control" id="nombre" name="nombre" value="<?php echo $nombre; ?>">
                <div class="text-danger"><?php echo $nombreErr; ?></div>
            </div>
            <div class="mb-3">
                <label for="materia" class="form-label">Materia que Imparte</label>
                <input type="text" class="form-control" id="materia" name="materia" value="<?php echo $materia; ?>">
                <div class="text-danger"><?php echo $materiaErr; ?></div>
            </div>
            <button type="submit" class="btn btn-primary">Registrar</button>
        </form>

        <?php if (!empty($mensajeExito)): ?>
            <div class="alert alert-success mt-3"><?php echo $mensajeExito; ?></div>
        <?php endif; ?>
    </div>

  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

