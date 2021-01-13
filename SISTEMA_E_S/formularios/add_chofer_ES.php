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

<div class="modal fade registro" id="registrar_chofer_2" tabindex="-1" role="dialog" aria-labelledby="registro">
<div class="modal-dialog" role="document">
    <div id="mod_empleado" class="modal-content">
    <div class="modal-header" id="modal-header">
			<a class="logo_apoyo"></a><br>
			<h2 align="center"> ENTRADA/SALIDA DE CHOFER</h2>
			</div>
<div class="modal-body">
<body class="text-center">
    <form  action="javascript:()" id="formchoferes" name="formchoferes" method="post" enctype="multipart/form-data">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
            <select id="chofer" onkeyup="mayusculas(this);"  class="form-control form-control-sm" name="chofer" required>
                  <option value="" >SELECCIONAR CHOFER</option>
                  <?php foreach ($registros as $fila): ?>
                <option value= "<?php echo $fila['Nombre']." ".$fila['Apellido_Paterno']." ".$fila['Apellido_Materno'] ?>">
                  <?php echo $fila['Nombre']." ".$fila['Apellido_Paterno']." ".$fila['Apellido_Materno'] ?>
                </option>
                <?php endforeach; ?>
              </select>
              <label id="error50ch" class="etiqueta"> CHOFER</label>
            </div>
            <div class="col-md-6">
            <select id="accionchofer" onkeyup="mayusculas(this);"  class="form-control form-control-sm" name="accionchofer" required>
    						<option value="" >SELECCIONAR ACCION</option>
    						<option value="ENTRADA" >ENTRADA</option>
    						<option value="SALIDA" >SALIDA</option>
    					</select>
               <label id="error51ch" class="etiqueta">ACCION</label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
            <input class="form-control" type="datetime-local" id="fechaIch"  name="fechaIch" required> 
                   <label id="error52ch" class="etiqueta">FECHA Y HORA DE INGRESO</label>
            </div>
            <div class="col-md-6">
            <select onkeyup="mayusculas(this);" name="inputmatriculachofer1" class="form-control form-control-sm"
												id="inputmatriculachofer1" required>
												<option value="">SELECCIONAR MATRICULA</option>
												<?php foreach ($registros3 as $fila3): ?>
												<option value="<?php echo $fila3['Matricula'] ?>">
													<?php echo $fila3['Matricula'] ?>
												</option>
												<?php endforeach; ?>
											</select>
                      <label class="etiqueta" id="error230chofer" for="inputprvilegios">VEHICULO A
												CONDUCIR</label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
            <textarea onkeyup="mayusculas(this);" class="form-control" name="descripcionchof" id="descripcionchof" cols="55" rows="2" placeholder="AGREGAR ALGUNA NOTA RELEVANTE"  minlength="15" maxlength="100" title="Solo se permiten Letras mayusculas. Tamaño mínimo: 15. Tamaño máximo: 100" onblur="mayusculas_4(this.name)" required></textarea>
            <label id="error55chof" class="etiqueta">NOTAS</label>
            <?php
                        include_once("../conexion/conexion.php");
                        $user= $_SESSION['Correo'];
                        $sql = "SELECT *FROM tbl_empleados WHERE Correo= ?";
                        $resultado = $conexion->prepare($sql);
                        $resultado->execute(array($user));
                    ?>
                    <?php  foreach ($resultado as $f): ?>
								<input type="text" class="sr-only" autocomplete="off" name="revision1" id="revision1" placeholder="reviso"  value="<?php echo " ". $f['Nombre']. " ". $f['Apellido_Paterno']. " ". $f['Apellido_Materno']?>">
                <?php
                        endforeach;
                    ?>
            </div>
          </div>
        </div>
    
    
        <div class="modal-footer pie">
            <a type="button" class="btn btn-danger" id="cancelar2a">CANCELAR</a>
            <button type="submit" class="btn btn-success" name="btneschofer" id="btneschofer">REGISTRAR</button>
        </div>
    </form>
</div>
</div>
</div>
</div>
