<!DOCTYPE html>
<?php
    session_start();
    $usuario =$_SESSION["Correo"];
?>
<html lang="en">
<?php
    include("../seguridad/seguridad.php");
?>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>BAMX</title>
  <link rel="shortcut icon" href="../img/icono.PNG">
  <link rel="stylesheet" href="../vendors/mdi/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="../vendors/css/vendor.bundle.base.css">
  <link rel="stylesheet" href="../fontawesome-free/css/all.min.css">
  <link rel="stylesheet" href="../css/toastr.min.css">
  <link rel="stylesheet" href="../css/sweetalert2.min.css">
  <link href="../css/smart_wizard.css" rel="stylesheet" type="text/css" />
  <link href="../css/smart_wizard_theme_circles.css" rel="stylesheet" type="text/css" />
  <link href="../css/smart_wizard_theme_arrows.css" rel="stylesheet" type="text/css" />
  <link href="../css/smart_wizard_theme_dots.css" rel="stylesheet" type="text/css" />
  <link href="../vendors/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
  <link href="../css/smart_wizard.css" rel="stylesheet" type="text/css" />
  <link href="../css/smart_wizard_theme_circles.css" rel="stylesheet" type="text/css" />
  <link href="../css/smart_wizard_theme_arrows.css" rel="stylesheet" type="text/css" />
  <link href="../css/smart_wizard_theme_dots.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="../css/style.css">
</head>

<body>
<?php include('../formularios/add_empleado_registrar.php')?>
  <?php include('../formularios/add_empleado_actualizar.php')?>
  <?php include('../formularios/add_chofer_registrar.php')?>
  <?php include('../formularios/add_proveedor_registrar.php')?>
  <?php include('../formularios/add_proveedor_registrar2.php')?>
  <?php include('../formularios/add_proveedor_registrar_2.php')?>
  <?php include('../formularios/add_proveedor_registrar_1.php')?>
  <?php include('../formularios/add_proveedor_ES.php')?>
  <?php include('../formularios/add_proveedor_ES_ac.php')?>
  <?php include('../formularios/add_chofer_actualizar.php')?>
  <?php include('../formularios/add_chofer_ES.php')?>
  <?php include('../formularios/add_chofer_ES_Actualizar.php')?>
  <?php include('../formularios/add_eliminar_chofer.php')?>
  <?php include('../formularios/add_eliminar_empleado.php')?>
  <?php include('../formularios/add_eliminar_proveedor.php')?>
  <?php include('../formularios/add_eliminar_proveedor_moral.php')?>
  <?php include('../formularios/add_eliminar_proveedor_ES.php')?>
  <?php include('../formularios/add_eliminar_chofer_ES.php')?>
  <div  class="container-scroller d-flex">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">

      <ul class="nav">
        <!--  -->
<a class="navbar-brand"
        style="
    width: auto;
    height: 95px;
    background: url(../img/logo21.png) center center no-repeat;
    text-indent: -99999px;
    background-size: contain;
    margin-left: 25px;
        "
        >
      </a>
<!--  -->
        <li class="nav-item sidebar-category">
        <center>
          <p>PRINCIPAL</p>
          </center>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="consulta_administra.php">
            <i class="fas fa-home"></i>
            <span class="menu-title" style="margin-left:4px;"> INICIO</span>
          </a>
        </li>
        <li class="nav-item sidebar-category">
        <center>
          <p>CONSULTAS</p>
          </center>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
            <i class="fas fa-truck-moving"></i>
            <span class="menu-title" style="margin-left:4px;"> PROVEEDORES</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="ui-basic"  style="margin-left:4px;">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"> <a class="nav-link" href="#" id="Proveedor_moral">MORALES</a></li>
              <li class="nav-item"> <a class="nav-link" href="#" id="Proveedores_fisicos">FISICOS</a></li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="empleado_mod" title="Consultar Empleado(s)" >
            <i class="fas fa-user"></i>
            <span class="menu-title" style="margin-left:4px;">ADMINISTRADOR</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="choferes" title="Consultar Chofer(es)" href="#">
            <i class="fas fa-truck"></i>
            <span class="menu-title" style="margin-left:4px;">CHOFER</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
            <i class="fas fa-arrows-alt-h"></i>
            <span class="menu-title" style="margin-left:4px;">ENTRADA/SALIDA</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="auth"  style="margin-left:4px;">
            <ul class="nav flex-column sub-menu">          
              <li class="nav-item"> <a class="nav-link"  id="Proveedores_es" href="#"> PROVEEDOR </a></li>
              <li class="nav-item"> <a class="nav-link"  id="estp" href="#">GRAFICA PROVEEDOR </a></li>
              <li class="nav-item"> <a class="nav-link" id="Chofer_es" href="#"> CHOFER </a></li>
              <li class="nav-item"> <a class="nav-link"  id="estch" href="#">GRAFICA CHOFER</a></li>

            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="collapse" href="#authy" aria-expanded="false" aria-controls="authy">
            <i class="fas fa-file-pdf"></i>
            <span class="menu-title" style="margin-left:4px;">REPORTE (EXCEL)</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="authy"  style="margin-left:4px;">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"> <a class="nav-link"  title="Informes de Proveedor en Exel" href="../operaciones/reporte_proveedor.php">PROVEEDOR FISICOS </a></li>
              <li class="nav-item"> <a class="nav-link"  title="Informes de Proveedor en Exel" href="../operaciones/reporte_proveedor2.php">PROVEEDOR MORAL </a></li>
              <li class="nav-item"> <a class="nav-link"  title="Informes de Proveedor en Exel" href="../operaciones/reporte_chofer.php">CHOFERES</a></li>
              <li class="nav-item"> <a class="nav-link"  title="Informes de Proveedor en Exel" href="../operaciones/reporte_ESP.php">PROVEEDOR E/S</a></li>
              <li class="nav-item"> <a class="nav-link"  title="Informes de Proveedor en Exel" href="../operaciones/reporte_ESCH.php">CHOFER E/S</a></li>

            </ul>
          </div>
        </li>

      </ul>
    </nav>
    <div class="container-fluid page-body-wrapper">
      <nav class="navbar col-lg-12 col-12 px-0 py-0 py-lg-4 d-flex flex-row">
        <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span class="mdi mdi-menu"></span>
          </button>
          <?php
                include_once("../conexion/conexion.php");
                $user= $_SESSION['Correo'];
                $sql = "SELECT *FROM tbl_empleados WHERE Correo= ?";
                $resultado = $conexion->prepare($sql);
                $resultado->execute(array($user));
            ?>
          <?php  foreach ($resultado as $f): ?>
          <a href="#"><img class="rounded-circle"
              style="margin-left: 16px; display:inline-block;  background: rgba(255, 68, 0, 0); width: 48px; height: 48px; border: 2px solid white; border-radius: 4px; text-align:center;"
              src="<?php echo $f['Fotografia'];?>"></a>

          <h4 style="margin-left: 16px;" class="font-weight-bold mb-0 d-none d-md-block mt-1">


            <?php echo $f['Nombre']." ". $f['Apellido_Paterno']." ".$f['Apellido_Materno'];?>

            <?php
                endforeach;
                ?>
          </h4>

          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item">
              <h5 style="font-size:13px;" class="mb-0 font-weight-bold d-none d-xl-block">
              <i class="mdi mdi-calendar mx-0"></i>

                <?php
                      $week_days = array ("DOMINGO", "LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO");  
                      $months = array ("", "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "N0VIEMBRE", "DICIEMBRE");  
                      $year_now = date ("Y");  
                      $month_now = date ("n");  
                      $day_now = date ("j");  
                      $date = ($day_now-1) . " DE " . $months[$month_now] . " DE " . $year_now;   
                      // return $date;  


                      date_default_timezone_set('America/Mexico_City');
                      echo  $date 

                ?>

              </h5>
            </li>
            <li class="nav-item dropdown mr-1">
              <a class="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                id="messageDropdown" href="#" data-toggle="dropdown">
                <i class="fas fa-plus-circle"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="messageDropdown">
                <p class="mb-0 font-weight-normal float-center dropdown-header">OTRAS OPCIONES</p>
                <a class="dropdown-item preview-item" href="../seguridad/logout.php">
                <?php
                      include_once("../conexion/conexion.php");
                      $user= $_SESSION['Correo'];
                      $sql = "SELECT *FROM tbl_empleados WHERE Correo= ?";
                      $resultado = $conexion->prepare($sql);
                      $resultado->execute(array($user));
                  ?>
                  <div class="preview-thumbnail">
                    <img src="<?php echo $f['Fotografia'];?>" alt="image" class="profile-pic">
                  </div>
                  <div class="preview-item-content flex-grow">
                 
                    <?php  foreach ($resultado as $f): ?>
                    <h6 class="preview-subject ellipsis font-weight-normal">
                      <?php echo $f['Nombre']." ". $f['Apellido_Paterno']." ".$f['Apellido_Materno'];?>
                    </h6>
                    <?php
                    endforeach;
                    ?>
                    <p  class="font-weight-light small-text text-muted mb-0">
                    <i class="fas fa-sign-out-alt"></i> SALIR
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
            data-toggle="offcanvas">
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
         </nav>
      <!-- partial -->
      <div  class="main-panel">
        <div  class="content-wrapper">

          <div  class="container-fluid">

            <section id="central_prin1" class="page-section clearfix">
              <div id="central1" class="container">

                <div  class="row">
                  <div class="col-md-12">
                    <h5 id="proy">
                      SISTEMA DE INFORMACIÓN PARA EL REGISTRO Y CONTROL DE ENTRADAS Y SALIDAS
                    </h5>
                  </div>
                </div>
                <div class="row">
                  <div id="op1" class="col-md-12">
                 
                    <div id="op"></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <p id="proy1">
                      BAMX es una OSC (Organización de la sociedad civil) sin fines de lucro y apartidista, cuya red
                      está compuesta por 55 Bancos de Alimentos los cuales rescatan
                      alimento a lo largo de toda la cadena de valor para llevarlo a familias,
                      comunidades e instituciones que lo necesitan y así mejorar la alimentación y la nutrición en
                      México.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="../estadisticas/estadisticas/js/jquery.min.js"></script>
  <script src="../vendors/js/vendor.bundle.base.js"></script>
<script src="../estadisticas/estadisticas/js/highcharts/js/highcharts.js"></script>
<script src="../estadisticas/estadisticas/js/highcharts/js/themes/grid.js"></script>
<script src="../estadisticas/estadisticas/js/highcharts/js/modules/exporting.js"></script>
<script src="../js/off-canvas.js"></script>
  <script src="../js/hoverable-collapse.js"></script>
  <script src="../js/template.js"></script>
  <script src="../js/dashboard.js"></script>
  <script type="text/javascript" src="../js/jquery.smartWizard.min.js"></script>
  <script src="../vendors/datatables/jquery.dataTables.min.js"></script>
  <script src="../vendors/datatables/dataTables.bootstrap4.min.js"></script>
  <script src="../js/funciones.js"></script>
  <script src="../js/dataTables.bootstrap4.min.js"></script>
  <script src="../js/sweetalert2.all.min.js"></script>
  <script src="../js/imagen.js"></script>
  <script src="../js/toastr.min.js"></script>
  <script src="../js/tablas.js"></script>
  <script src="../js/tabla_pf.js"></script>
  <script src="../js/tabla_emp.js"></script>
  <script src="../js/tabla_pm.js"></script>
  <script src="../js/tabla_pmg.js"></script>
  <script src="../js/tabla_chg.js"></script>
  <script src="../js/tabla_pmg_tiempo.js"></script>
  <script src="../js/tabla_chg_tiempo.js"></script>
  <script src="../js/tabla_es_chof.js"></script>
  <script src="../js/tabla_es_prov.js"></script>
  <script src="../js/registro_prov.js"></script>
  <script src="../js/registro_prov.js"></script>
  <script src="../js/registro_prov_1.js"></script>
  <script src="../js/registro_prov_2.js"></script>
  <script src="../js/registro_prov_3.js"></script>
  <script src="../js/registro_emp.js"></script>
  <script src="../js/registro_emp_act.js"></script>
  <script src="../js/registro_act_chof.js"></script>
  <script src="../js/registro_sol.js"></script>
    <script src="../js/rellenar.js"></script> 
    <script src="../js/rellenar1.js"></script>
    <script src="../js/rellenar_2.js"></script>
    <script src="../js/rellenar_3.js"></script>
    <script src="../js/rellenar_4.js"></script>
    <script src="../js/rellenar_5.js"></script>
    <script src="../js/eliminar_chofer.js"></script>
    <script src="../js/eliminar_empleado.js"></script>
    <script src="../js/eliminar_proveedor.js"></script>
    <script src="../js/eliminar_proveedor_3.js"></script>
    <script src="../js/eliminar_proveedor_4.js"></script>
    <script src="../js/eliminar_proveedor_5.js"></script>
    <script src="../js/Eliminaciones.js"></script>
    <script src="../js/Eliminaciones1.js"></script>
    <script src="../js/Eliminaciones2.js"></script>
    <script src="../js/Eliminaciones3.js"></script>
    <script src="../js/Eliminaciones4.js"></script>
    <script src="../js/Eliminaciones5.js"></script>
    <script src="../js/validar_usuario.js"></script>
    <script src="../js/menu.js"></script>
    <script src="../js/cambio_ruta.js"></script>
    <script src="../js/proveedores.js"></script>
    <script src="../js/cancelaciones.js"></script>
    <script src="../js/mayusculas.js"></script>
    <script>
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