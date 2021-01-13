<?php
  include_once("../conexion/conexion.php");
  $sql = "SELECT *FROM tbl_choferes order by Nombre ASC";
  $resultado = $conexion->prepare($sql);
  $resultado->execute();
  $registros = $resultado->fetchAll();
?>

<?php
  include_once("../conexion/conexion.php");
  $sql2 = "SELECT *FROM tbl_camiones order by Matricula ASC";
  $resultado3 = $conexion->prepare($sql2);
  $resultado3->execute();
  $registros3 = $resultado3->fetchAll();

?>

<div class="modal fade registro" id="registrar_chofer_2b" tabindex="-1" role="dialog" aria-labelledby="registro">
<div class="modal-dialog" role="document">
    <div id="mod_empleado" class="modal-content">
    <div class="modal-header" id="modal-header">
			<a class="logo_apoyo"></a><br>
			<h2 align="center"> ENTRADA/SALIDA DE CHOFER</h2>
			</div>
<div class="modal-body">
<body class="text-center">
    <form  action="javascript:()" id="formchoferesb" name="formchoferesb" method="post" enctype="multipart/form-data">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
            <select id="choferb"  onkeyup="mayusculas(this);"   class="form-control form-control-sm" name="choferb" required>
                  <option value="" >SELECCIONAR CHOFER</option>
                  <?php foreach ($registros as $fila): ?>
                <option value= "<?php echo $fila['Nombre']." ".$fila['Apellido_Paterno']." ".$fila['Apellido_Materno'] ?>">
                  <?php echo $fila['Nombre']." ".$fila['Apellido_Paterno']." ".$fila['Apellido_Materno'] ?>
                </option>
                <?php endforeach; ?>
              </select>
              <label id="error50chb" class="etiqueta"> CHOFER</label>
            </div>
            <div class="col-md-6">
            <select id="accionchoferb"  onkeyup="mayusculas(this);"   class="form-control form-control-sm" name="accionchoferb" required>
    						<option value="" >SELECCIONAR ACCION</option>
    						<option value="ENTRADA" >ENTRADA</option>
    						<option value="SALIDA" >SALIDA</option>
    					</select>
               <label id="error51chb" class="etiqueta">ACCION</label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
            <input class="form-control" type="datetime-local" id="fechaIchb"  name="fechaIchb" required> 
            <input type="text" class="sr-only" name="actb" id="actb">
                   <label id="error52chb" class="etiqueta">FECHA Y HORA DE INGRESO</label>
            </div>
            <div class="col-md-6">
            <select  onkeyup="mayusculas(this);"  name="inputmatriculachofer1b" class="form-control form-control-sm"
												id="inputmatriculachofer1b" required>
												<option value="">SELECCIONAR MATRICULA</option>
												<?php foreach ($registros3 as $fila3): ?>
												<option value="<?php echo $fila3['Matricula'] ?>">
													<?php echo $fila3['Matricula'] ?>
												</option>
												<?php endforeach; ?>
											</select>
                      <label class="etiqueta" id="error230choferb" for="inputprvilegios">VEHICULO A
												CONDUCIR</label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
            <textarea class="form-control"  onkeyup="mayusculas(this);"  name="descripcionchofb" id="descripcionchofb" cols="55" rows="2" placeholder="AGREGAR ALGUNA NOTA RELEVANTE"  minlength="15" maxlength="100" title="Solo se permiten Letras mayusculas. Tamaño mínimo: 15. Tamaño máximo: 100" onblur="mayusculas_4(this.name)" required></textarea>
            <label id="error55chofb" class="etiqueta">NOTAS</label>
            <?php
                        include_once("../conexion/conexion.php");
                        $user= $_SESSION['Correo'];
                        $sql = "SELECT *FROM tbl_empleados WHERE Correo= ?";
                        $resultado = $conexion->prepare($sql);
                        $resultado->execute(array($user));
                    ?>
                    <?php  foreach ($resultado as $f): ?>
								<input type="text" class="sr-only" autocomplete="off" name="revision1b" id="revision1b" placeholder="reviso"  value="<?php echo " ". $f['Nombre']. " ". $f['Apellido_Paterno']. " ". $f['Apellido_Materno']?>">
                <?php
                        endforeach;
                    ?>
            </div>
          </div>
        </div>
    
    
        <div class="modal-footer pie">
            <a type="button" class="btn btn-danger" id="cancelar2aa">CANCELAR</a>
            <button type="submit" class="btn btn-success" name="btneschoferb" id="btneschoferb">ACTUALIZAR</button>
        </div>
    </form>
</div>
</div>
</div>
</div>
