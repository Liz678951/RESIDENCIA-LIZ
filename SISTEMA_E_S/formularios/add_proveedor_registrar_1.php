<?php
  include_once("../conexion/conexion.php");
  $sql = "SELECT *FROM tbl_localidades order by Localidad ASC";
  $resultado = $conexion->prepare($sql);
  $resultado->execute();
  $registros = $resultado->fetchAll();
?>
<div class="modal fade" id="registrar_proveedor_1" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
	  <div id="mod_empleado" class="modal-content">
	  		<div class="modal-header" id="modal-header">
			<!-- <a class="logo_apoyo_1"></a><br> -->
			<div class="col-md-12">
				<h2 align="center">
					REGISTRO DE PROVEEDOR MORAL
				</h2>
			</div>
			</div>
			<!-- <button type="button" class="close" id="close" data-dismiss="modal" aria-label="Close">
        	<span aria-hidden="true">&times;</span>
    		</button> -->
		<div class="modal-body">
	
<form method="POST" id="formprov0" name="formprov0" action="javascript:()"  enctype="multipart/form-data">
	<!-- Smart Wizard HTML -->
	
	<div id="smartwizard_proveedor_1">
		<ul>
			<li><a href="#step-1"><span class="glyphicon glyphicon-user"></span> PERFIL<br /><small></small></a></li>
			<li><a href="#step-2"><span class="glyphicon glyphicon-home"></span> DIRECCIÓN<br /><small></small></a></li>
			<li><a href="#step-3"><span class="glyphicon glyphicon-envelope"></span> EXTRA<br /><small></small></a></li>
		</ul>

		<div>

			<div id="step-1" class="primero">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<input type="text" id="inputprov" name="inputprov" autocomplete="off" class="form-control"
								required minlength="3" maxlength="30" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{4,25}"
								title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error1_prov" for="inputusuarios">RAZÓN SOCIAL</label>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4">
							<input type="text" id="inputcelprov" name="inputcelprov" class="form-control"
								autocomplete="off" required minlength="10" maxlength="10" required pattern="[1-9]+"
								title="Solo se permiten Numeros. Tamaño mínimo: 10. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error10prov" class="form-control"
								for="inputtel">TELEFONO</label>
						</div>
						<div class="col-md-4">
							<input type="date" id="fechaRegProv" class="form-control" name="fechaRegProv"
								min="1961-01-01" required
								title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta1" id="error11prov" class="form-control" for="fechaNac">FECHA DE
								REGISTRO</label>
						</div>
						<div class="col-md-4">
							<input type="text" id="inputrfcprov" name="inputrfcprov" autocomplete="off"
								class="form-control" required minlength="10" maxlength="10" required
								pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{3,25}"
								title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error5prov" for="inputRfc">RFC</label>
						</div>
					</div>
				</div>

			</div>
			<div id="step-2" class="">

				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<select id="municipioprov" class="form-control  form-control-sm" name="municipioprov" required>
								<option value="">SELECCIONAR MUNICIPIO</option>
								<option value="TOLUCA">TOLUCA</option>
							</select>
							<label class="etiqueta" id="error17prov" for="municipio">MUNICIPIO</label>
						</div>
						<div class="col-md-4">
							<select id="localidadprov" class="form-control  form-control-sm" name="localidadprov" required>
								<option value="">SELECCIONAR LOCALIDAD</option>
								<?php foreach ($registros as $fila): ?>
								<option value="<?php echo $fila['Localidad'] ?>">
									<?php echo $fila['Localidad'] ?>
								</option>
								<?php endforeach; ?>
							</select>
							<label class="etiqueta" id="error18prov" for="localidad">LOCALIDAD</label>
						</div>
						<div class="col-md-4">
							<input type="text" autocomplete="off" class="form-control" name="calleprov" id="calleprov"
								required minlength="5" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="40"
								title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error12prov" for="calle">CALLE</label>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<input type="text" autocomplete="off" class="form-control" name="coloniaprov"
								id="coloniaprov" required minlength="5" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}"
								maxlength="40" title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error13prov" for="colonia">COLONIA</label>
						</div>
						<div class="col-md-2">
							<input type="text" autocomplete="off" class="form-control" name="No_interiorprov"
								id="No_interiorprov" minlength="2" required maxlength="20" pattern="[A-Z0-9]+"
								title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error14prov" for="No_inte">NI</label>
						</div>
						<div class="col-md-2">
							<input type="text" autocomplete="off" class="form-control" name="No_exteriorprov"
								id="No_exteriorprov" minlength="2" required maxlength="20" pattern="[A-Z0-9]+"
								title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error15prov" for="No_exte">NE</label>
						</div>
						<div class="col-md-2">
							<input type="text" autocomplete="off" class="form-control" name="cpprov" id="cpprov"
								required minlength="5" maxlength="6" pattern="[0-9]{5,6}"
								title="Solo se permiten Numeros. Tamaño mínimo: 5. Tamaño máximo: 6"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error16prov" for="No_exte">CODIGO POSTAL</label>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<textarea name="inputdescripcionprov" class="form-control" id="refprov" cols="100"
								pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" placeholder="REFERENCIA DE UBICACIÓN" rows="4"
								minlength="2" required maxlength="120" pattern="[A-Z0-9]+"
								title="Solo se permiten Numeros o letras. Tamaño mínimo: 1. Tamaño máximo: 100"
								 onkeyup="mayusculas(this);"></textarea>
							<label class="etiqueta" id="error19prov" for="municipio">REFERENCIA DE DOMICILIO</label>

						</div>
					</div>
				</div>
			</div>
			<div id="step-3" class="">
				<div class="container">
					<div class="row">
							<div class="col-md-6">
							<input type="email" autocomplete="off" class="form-control" name="inputcorreoprov"
								id="inputcorreoprov" required minlength="10" maxlength="50"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error20prov" for="correo">CORREO ELECTRONICO</label>
							</div>
							<div class="col-md-6">
							<input  onkeyup="mayusculas(this);" type="text" autocomplete="off" class="form-control" name="servicioprov"
								id="servicioprov1" required minlength="5" maxlength="20">
							<label class="etiqueta" id="error21prov" for="pass1">SERVICIO/MERCANCIA</label>
								<input type="text" class="sr-only" autocomplete="off" name="inputprivilegiosp"
								id="inputprivilegiosp" placeholder="Tipo de usuario" required minlength="1"
								maxlength="2" value="2">
							</div>
					</div>
					<div class="row">
							<div class="col-md-12">
							<input type="file" class="inputfile" name="your_picturprov" id="your_pictureprov"
							onchange="readURL4(this);">					
							<figure>
								<img name="img" id="img" src="../img/your-picture.png" alt="" class="foto_reg_sol">
							</figure>
							<label for="your_picture">
							<span class="glyphicon glyphicon-camera"></span>
							<span id="error24prov" class="file-button">SELECCIONAR FOTOGRAFIA</span>
						</label>
							</div>
						</div>
				</div>

		</div>
		<!-- <button type="submit" name="button">Registrar</button> -->
</form>
		  </div>

		</div>
		<!-- <div class="modal-footer">
		  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
		</div> -->
	  </div>
	</div>
  </div>



</div>
<!-- <script src="../js/registro_prov_1.js"></script> -->