<?php
  include_once("../conexion/conexion.php");
  $sql = "SELECT *FROM tbl_localidades order by Localidad ASC";
  $resultado = $conexion->prepare($sql);
  $resultado->execute();
  $registros = $resultado->fetchAll();
?>
<div class="modal fade" id="registrar_proveedor" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
	  <div id="mod_empleado" class="modal-content">
	  		<div class="modal-header" id="modal-header">
			<!-- <a class="logo_apoyo_1"></a><br> -->
			<h2 align="center">
					REGISTRO DE PROVEEDOR FÍSICO
				</h2>
			</div>
			<!-- <button type="button" class="close" id="close" data-dismiss="modal" aria-label="Close">
        	<span aria-hidden="true">&times;</span>
    		</button> -->
		<div class="modal-body">
		<form method="POST" id="formusuario" name="formusuario" action="javascript:()" enctype="multipart/form-data">

	<div id="smartwizard_proveedor">
		<ul>
			<li><a href="#step-1"><span class="glyphicon glyphicon-user"></span> PERFIL<br /><small></small></a></li>
			<li><a href="#step-2"><span class="glyphicon glyphicon-home"></span> DIRECCIÓN<br /><small></small></a></li>
			<li><a href="#step-3"><span class="glyphicon glyphicon-envelope"></span> EXTRA<br /><small></small></a></li>
		</ul>

		<div>

			<div id="step-1" class="primero">

				<div class="container">
					<div class="row">
						<div class="col-md-3">
							<input type="text" id="inputproveedor" name="inputproveedor" autocomplete="off"
								class="form-control" required minlength="3" maxlength="30"
								pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{4,25}"
								title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error10_reg" for="inputproverdor">NOMBRE(S)</label>
						</div>
						<div class="col-md-3">
							<input type="text" id="inputapellidopaternoproveedor" name="inputapellidopaternoproveedor"
								class="form-control" autocomplete="off" required minlength="3"
								pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="30" required
								title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error201" for="inputapellidopaterno">APELLLIDO PATERNO</label>
						</div>
						<div class="col-md-3">
							<input type="text" id="inputapellidomaternoproveedor" name="inputapellidomaternoproveedor"
								class="form-control" autocomplete="off" required minlength="3"
								pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="30" required
								title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error301" for="inputapellidomaterno">APELLIDO MATERNO</label>
						</div>
						<div class="col-md-3">
							<input type="date" id="fechaRegproveedor" class="form-control" name="fechaRegproveedor"
								required title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta1" id="error1101" class="form-control" for="fechaNac">FECHA DE
								REGISTRO</label>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4">
							<input type="text" id="inputcurpproveedor" name="inputcurpproveedor" autocomplete="off"
								class="form-control" required minlength="18" maxlength="19" required
								pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{3,25}"
								title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 18"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error401" for="inputcurp">CURP</label>
						</div>
						<div class="col-md-4">
							<input type="text" id="inputrfcproveedor" name="inputrfcproveedor" autocomplete="off"
								class="form-control" required minlength="10" maxlength="10" required
								pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{3,25}"
								title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error501" for="inputRfc">RFC</label>
						</div>
						<div class="col-md-4">
							<select id="inputedocivilproveedor" class="form-control  form-control-sm" name="inputedocivilproveedor"
								required>
								<option value="">SELECCIONAR ESTADO CIVIL</option>
								<option value="CASADO(A)">CASADO(A)</option>
								<option value="SOLTERO(A)">SOLTERO(A)</option>
								<option value="VIUDO(A)">VIUDO(A)</option>
								<option value="DIVORCIADO(A)">DIVORCIADO(A)</option>
							</select>
							<label class="etiqueta1" id="error601" class="form-control" for="fechaNac">ESTADO
								CIVIL</label>
						</div>						
					</div>
					<div class="row">
						<div class="col-md-3">
							<select id="inputsexoproveedor" class="form-control  form-control-sm" name="inputsexoproveedor" required>
								<option value="">SELECCIONAR SEXO</option>
								<option value="M">MASCULINO</option>
								<option value="F">FEMENINO</option>
							</select>
							<label class="etiqueta1" id="error701" class="form-control" for="fechaNac">SEXO</label>
						</div>
						<div class="col-md-3">
							<select id="inputestudiosproveedor" name="inputestudiosproveedor" class="form-control  form-control-sm"
								required>
								<option value="">SELECCIONAR </option>
								<option value="CASADO(A)">CASADO(A)</option>
								<option value="SOLTERO(A)">SOLTERO(A)</option>
								<option value="VIUDO(A)">VIUDO(A)</option>
								<option value="DIVORCIADO(A)">DIVORCIADO(A)</option>
							</select>
							<label class="etiqueta" id="error801" class="form-control" for="inputestudios">NIVEL DE
								ESTUDIOS</label>
						</div>
						<div class="col-md-3">
							<input type="text" id="inputocupacionproveedor" name="inputocupacionproveedor"
								class="form-control" autocomplete="off" required minlength="7" maxlength="30" required
								pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}"
								title="Solo se permiten Letras mayusculas. Tamaño mínimo: 7. Tamaño máximo: 20"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error901" class="form-control"
								for="inputocupacion">OCUPACION</label>
						</div>
						<div class="col-md-3">
							<input type="text" id="inputcelproveedor" name="inputcelproveedor" class="form-control"
								autocomplete="off" required minlength="10" maxlength="10" required pattern="[1-9]+"
								title="Solo se permiten Numeros. Tamaño mínimo: 10. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error1001" class="form-control" for="inputtel">TELEFONO</label>
						</div>
					</div>
				</div>
			</div>
			<div id="step-2" class="">

				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<select id="municipioproveedor" class="form-control  form-control-sm" name="municipioproveedor" required>
								<option value="">SELECCIONAR MUNICIPIO</option>
								<option value="TOLUCA">TOLUCA</option>
							</select>
							<label class="etiqueta" id="error1701" for="municipio">MUNICIPIO</label>
						</div>
						<div class="col-md-4">
							<select id="localidadproveedor" class="form-control  form-control-sm" name="localidadproveedor" required>
								<option value="">SELECCIONAR LOCALIDAD</option>
								<?php foreach ($registros as $fila): ?>
								<option value="<?php echo $fila['Localidad'] ?>">
									<?php echo $fila['Localidad'] ?>
								</option>
								<?php endforeach; ?>
							</select>
							<!-- <input type="text"  autocomplete="off"  class="form-control" name="localidad" id="localidad" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" required minlength="5" maxlength="40" title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"  onkeyup="mayusculas(this);"> -->
							<label class="etiqueta" id="error1801" for="localidad">LOCALIDAD</label>
						</div>
						<div class="col-md-4">
							<input type="text" autocomplete="off" class="form-control" name="calleproveedor"
								id="calleproveedor" required minlength="7" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}"
								maxlength="40" title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error1201" for="calle">CALLE</label>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<input type="text" autocomplete="off" class="form-control" name="coloniaproveedor"
								id="coloniaproveedor" required minlength="7" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}"
								maxlength="40" title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error1301" for="colonia">COLONIA</label>
						</div>
						<div class="col-md-2">
							<input type="text" autocomplete="off" class="form-control" name="No_interiorproveedor"
								id="No_interiorproveedor" minlength="2" required maxlength="20" pattern="[A-Z0-9]+"
								title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error1401" for="No_inte">NI</label>
						</div>
						<div class="col-md-2">
							<input type="text" autocomplete="off" class="form-control" name="No_exteriorproveedor"
								id="No_exteriorproveedor" minlength="2" required maxlength="20" pattern="[A-Z0-9]+"
								title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error1501" for="No_exte">NE</label>
						</div>
						<div class="col-md-2">
							<input type="text" autocomplete="off" class="form-control" name="cpproveedor"
								id="cpproveedor" required minlength="5" maxlength="6" pattern="[0-9]{5,6}"
								title="Solo se permiten Numeros. Tamaño mínimo: 5. Tamaño máximo: 6"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error1601" for="No_exte">CODIGO POSTAL</label>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<textarea name="inputdescripcionproveedor" class="form-control" id="refproveedor" cols="100"
								pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" placeholder="REFERENCIA DE UBICACIÓN" rows="4"
								minlength="2" required maxlength="120" pattern="[A-Z0-9]+"
								title="Solo se permiten Numeros o letras. Tamaño mínimo: 1. Tamaño máximo: 100"
								 onkeyup="mayusculas(this);"></textarea>
							<label class="etiqueta" id="error1901" for="municipio">REFERENCIA DE DOMICILIO</label>
						</div>
					</div>
				</div>
			</div>
			<div id="step-3" class="">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
						<input type="email" autocomplete="off" class="form-control" name="inputcorreoproveedor"
								id="inputcorreoproveedor" required minlength="10" maxlength="50"
								 onkeyup="mayusculas(this);">
							<label class="etiqueta" id="error2001" for="correo">CORREO ELECTRONICO</label>

						</div>
						<div class="col-md-6">
						<input  onkeyup="mayusculas(this);" type="text" autocomplete="off" class="form-control" name="inputservproveedor"
								id="inputservproveedor" required minlength="10" maxlength="20">
							<label class="etiqueta" id="error2101" for="pass1">SERVICIO/MERCANCIA</label>
							<input type="text" class="sr-only" autocomplete="off" name="inputprivilegiosproveedor"
								id="inputprivilegiosproveedor" placeholder="Tipo de usuario" required minlength="1"
								maxlength="2" value="1">
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
						<input type="file" class="inputfile" name="your_picturproveedor" id="your_pictureproveedor"
							onchange="readURL3(this);">					
							<figure>
								<img name="img" id="img" src="../img/your-picture.png" alt="" class="foto_reg_sol">
							</figure>
							<label for="your_picture">
							<span class="glyphicon glyphicon-camera"></span>
							<span id="error2401" class="file-button">SELECCIONAR FOTOGRAFIA</span>
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
