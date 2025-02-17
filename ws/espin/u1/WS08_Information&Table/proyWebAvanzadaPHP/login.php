
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - CPED</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/stylesLogin.css">
    <link rel="stylesheet" href="./assets/css/styleWhatsappBtn.css">
</head>
<body>
    <!-- Barra de navegación -->
    <?php include_once './layouts/navbar.php';?> 
    
    <div class="container pt-4">
        <form action="./auth.php" method="POST" class="login-container form-control">
          <?php
            if (isset($_GET['status']) && $_GET['status'] === 'error') {
                echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>¡Error!</strong> Verifica usuario o contraseña.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>';
            }
          ?>
          <h1 class="h3 mb-3 fw-normal">Accede a tu cuenta del club CPED</h1>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="username" name="username" placeholder="Username">
            <label for="username">Usuario</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="passwordLogin" name="passwordLogin" placeholder="Password">
            <label for="passwordLogin">Contraseña</label>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">Iniciar Sesion</button>
      </form>
    </div>
    <div class="modal fade" id="modal-dialog-msg" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="modalTitle">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="modalText">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <?php include_once './layouts/bottonWhatsApp.php';?>
    <script src="./assets/scriptsJs/menu.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="./assets/scriptsJs/resetQuerys.js"></script>
</body>
</html>
