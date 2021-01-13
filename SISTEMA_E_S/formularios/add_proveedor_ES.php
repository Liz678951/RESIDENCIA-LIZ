<?php
  include_once("../conexion/conexion.php");
  $sql = "SELECT *FROM tbl_proveedores_fisicos order by Nombre ASC";
  $resultado = $conexion->prepare($sql);
  $resultado->execute();
  $registros = $resultado->fetchAll();

?>

<div class="modal fade registro" id="registro" tabindex="-1" role="dialog" aria-labelledby="registro">
<div class="modal-dialog" role="document">
    <div id="mod_empleado" class="modal-content">
    <div class="modal-header" id="modal-header">
			<a class="logo_es"></a><br>
      <h2 align="center"> ENTRADA/SALIDA DE PROVEEDOR</h2>
			</div>
			<!-- <button type="button" class="close" id="close" data-dismiss="modal" aria-label="Close">
        	<span aria-hidden="true">&times;</span>
    		</button> -->
<div class="modal-body">
<body class="text-center">
    <form  action="javascript:()" id="formes" name="formes" method="post" enctype="multipart/form-data">
<div class="container">
  <div class="row">
    <div class="col-md-6">
    <select id="tipo_p"  class="form-control form-control-sm" name="tipo_p" required>
                <option value="" >SELECCIONAR TIPO DE PROVEEDOR</option>
                <option value="1" >FISICO</option>
                <option value="2" >MORAL</option>
              </select>
              <label id="error50en" class="etiqueta"> TIPO DE PROVEEDOR</label>
    </div>
    <div class="col-md-6">
    <select id="prov"  class="form-control form-control-sm" name="prov" required> 

    </select>
     <label id="error51en" class="etiqueta">PROVEEDOR</label>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
    <input class="form-control" type="datetime-local" id="fechaI"  name="fechaI" required> 
    <label id="error53en" class="etiqueta">FECHA Y HORA DE INGRESO</label>
    </div>
    <div class="col-md-6">
    <select id="tipo_accion"  class="form-control form-control-sm" name="tipo_accion" required>
                <option value="" >SELECCIONAR ACCION</option>
                <option value="ENTRADA" >ENTRADA</option>
                <option value="SALIDA" >SALIDA</option>
         </select>
       <label id="error59en" class="etiqueta"> ENTRADA/ACCIÓN</label>
    </div>
  </div>
  <div class="row">
  <div class="col-md-12">
  <textarea  onkeyup="mayusculas(this);" class="form-control" name="descripcion" id="descripcion" cols="55" rows="2" placeholder="AGREGAR ALGUNA NOTA RELEVANTE"  minlength="15" maxlength="100" title="Solo se permiten Letras mayusculas. Tamaño mínimo: 15. Tamaño máximo: 100" onblur="mayusculas_4(this.name)" required></textarea><label id="error55en" class="etiqueta">NOTAS</label>
                </div>
                <?php
                        include_once("../conexion/conexion.php");
                        $user= $_SESSION['Correo'];
                        $sql = "SELECT *FROM tbl_empleados WHERE Correo= ?";
                        $resultado = $conexion->prepare($sql);
                        $resultado->execute(array($user));
                    ?>
                    <?php  foreach ($resultado as $f): ?>
								<input type="text" class="sr-only" autocomplete="off" name="revision" id="revision" placeholder="reviso"  value="<?php echo " ". $f['Nombre']. " ". $f['Apellido_Paterno']. " ". $f['Apellido_Materno']?>">
                <?php
                        endforeach;
                    ?>
  </div>
</div>
</div>
        <div class="modal-footer pie">
            <a type="button" class="btn btn-danger" id="cancelar1">CANCELAR</a>
            <button type="submit" class="btn btn-success" name="btnreg" id="btnreg">REGISTRAR</button>
        </div>
    </form>
</div>
</div>
</div>
</div>
<!-- Fin de modal de registro -->
