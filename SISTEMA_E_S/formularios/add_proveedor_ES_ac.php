<div class="modal fade registro" id="registrar_proveedor61" tabindex="-1" role="dialog" aria-labelledby="registro">
  <div class="modal-dialog" role="document">
    <div id="mod_empleado" class="modal-content">
      <div class="modal-header" id="modal-header">
        <a class="logo_es"></a><br>
        <h2 align="center"> ACTUALIZAR ENTRADA/SALIDA DE PROVEEDOR</h2>
      </div>
      <!-- <button type="button" class="close" id="close" data-dismiss="modal" aria-label="Close">
        	<span aria-hidden="true">&times;</span>
    		</button> -->
      <div class="modal-body">

        <body class="text-center">
          <form action="javascript:()" id="formes1" name="formes1" method="post" enctype="multipart/form-data">
            <div class="continer">
              <div class="row">
                <div class="col-md-6">
                  <select  onkeyup="mayusculas(this);" id="tipo_p11" class="form-control form-control-sm" name="tipo_p11" required>
                    <option value="0">SELECCIONAR TIPO DE PROVEEDOR</option>
                    <option value="1">FISICO</option>
                    <option value="2">MORAL</option>
                  </select>
                  <label id="error50en" class="etiqueta"> TIPO DE PROVEEDOR</label>
                </div>
                <div id="cont" class="col-md-6">
                  <select id="prov1" class="form-control form-control-sm" name="prov1" required>
                    <option value="0">SELECCIONAR TIPO DE PROVEEDOR</option>
                  </select>
                  <label id="error51en" class="etiqueta">PROVEEDOR</label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <input class="form-control" type="datetime-local" id="fechaI11a" name="fechaI11a" required>
                  <input class="form-control sr-only" type="text" id="id_es1a" name="id_es1a" required>
                   <label  id="error53ena" class="etiqueta">FECHA Y HORA DE INGRESO</label>
                </div>
                <div class="col-md-6">
                  <select id="tipo_accion1a" class="form-control form-control-sm" name="tipo_accion1a" required>
                    <option value="">SELECCIONAR ACCION</option>
                    <option value="ENTRADA">ENTRADA</option>
                    <option value="SALIDA">SALIDA</option>
                  </select>
                  <label id="error59ena" class="etiqueta"> ENTRADA/ACCIÓN</label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <input class="sr-only" type="text" name="id_es1" id="id_es1">
                  <textarea class="form-control" name="descripcion1a" id="descripcion1a" cols="55" rows="2"
                    placeholder="AGREGAR ALGUNA NOTA RELEVANTE" minlength="15" maxlength="100"
                    title="Solo se permiten Letras mayusculas. Tamaño mínimo: 15. Tamaño máximo: 100"
                    onkeyup="mayusculas(this);" required></textarea><label id="error55ena"
                    class="etiqueta">NOTAS</label>
                </div>
                <?php
                        include_once("../conexion/conexion.php");
                        $user= $_SESSION['Correo'];
                        $sql = "SELECT *FROM tbl_empleados WHERE Correo= ?";
                        $resultado = $conexion->prepare($sql);
                        $resultado->execute(array($user));
                    ?>
                <?php  foreach ($resultado as $f): ?>
                <input type="text" class="sr-only" autocomplete="off" name="revision1a" id="revision1a"
                  placeholder="reviso"
                  value="<?php echo " ". $f['Nombre']. " ". $f['Apellido_Paterno']. " ". $f['Apellido_Materno']?>">
                <?php
                        endforeach;
                    ?>
              </div>
            </div>
      </div>

      <div class="modal-footer pie">
        <a type="button" class="btn btn-danger" id="cancelar3">CANCELAR</a>
        <button type="submit" class="btn btn-success" name="btnreg1" id="btnreg1">ACTUALIZAR</button>
      </div>
      </form>
    </div>
  </div>
</div>
</div>
<!-- Fin de modal de registro -->