<?php
    $current_page = basename($_SERVER['PHP_SELF']);
    if ($current_page == 'index.php') {
        $direction = "";
    } else {
        $direction = "../";
    }
?>
<head>
   <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NatuLove Products</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
 
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

	
</head>

<body>
	<div>
	<center>	
	  <p><img src="<?php echo $direction ?>imagenes/logo1.png" width="791" height="112" alt=""/></p>
	</center>
	</div>
		
		


<nav class="navbar navbar-expand-lg bg-body border-bottom border-3 border-danger">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center" href="<?php echo $direction ?>index.php">
            <i class="bi bi-house-door fs-4"></i> 
          </a>
        </li>
        <li class="nav-item d-flex align-items-center">
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<?php echo $direction ?>php/insertSmartWatch.php">Insert Products</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


</br>




	
</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>