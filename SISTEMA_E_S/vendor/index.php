<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>BAMX</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/smoke.min.css">
        <link rel="stylesheet" href="css/style1.css">
        <link rel="stylesheet" href="css/sweetalert2.min.css">
        <link rel="stylesheet" href="css/toastr.min.css">
        <link rel="shortcut icon" href="img/icono.PNG">
        <link href="css/smart_wizard.css" rel="stylesheet" type="text/css" />
        <link href="css/smart_wizard_theme_circles.css" rel="stylesheet" type="text/css" />
        <link href="css/smart_wizard_theme_arrows.css" rel="stylesheet" type="text/css" />
        <link href="css/smart_wizard_theme_dots.css" rel="stylesheet" type="text/css" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="ico/apple-touch-icon-57-precomposed.png">
         
        
    </head>
    <body>
		<nav  class="navbar navbar-inverse">
  <div class="container">
  <a class="navbar-brand" ></a>
  <div style="width: auto; height: auto;">
  </div>
    <div class="navbar-header">	
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
	  </button>
	</div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
	  <li><a href="#"><span class="glyphicon glyphicon-home"></span>  Inicio</a></li>
		<li class="dropdown">
		<a href="#" class="btn-menu" class="dropdown-toggle" data-toggle="modal" data-target="#login" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-log-in"></span> Login
		</a>
		</li>
      </ul>
    </div>
  </div>
</nav>
<?php include('formularios/add_login.php') ?>
<div id="difuminado">
<section id="inicio">

<div class="description">
	  <p class="bienvenida">
        Bienvenido al Sistema para el control de entradas y salidas de proveedores
    </p>
</div>
</section>
</div>
<footer class="contai1">
   Copyright&copy; 2020. Banco de Alimentos de México, Toluca.
</footer>
        <!-- Javascript -->
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/sweetalert2.all.min.js"></script>
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/smoke.min.js"></script>
        <script type="text/javascript" src="js/jquery.smartWizard.min.js"></script>
        <script src="js/funciones.js"></script>
        <!-- <script src="js/main.js"></script>
        <script src="js/imagen.js"></script> -->
        <script src="js/toastr.min.js"></script>
        <script src="js/validar_usuario.js"></script>
        <script>

//importamos configuraciones de toastr
toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-left",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "1000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}


</script>
    </body>
</html>