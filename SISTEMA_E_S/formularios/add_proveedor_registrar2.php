<?php
  include_once("../conexion/conexion.php");
  $sql = "SELECT *FROM tbl_localidades order by Localidad ASC";
  $resultado = $conexion->prepare($sql);
  $resultado->execute();
  $registros = $resultado->fetchAll();
?>
<div class="modal fade" id="registrar_proveedor2" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
		<div id="mod_empleado" class="modal-content">
			<div class="modal-header" id="modal-header">
				<!-- <a class="logo_apoyo_1"></a><br> -->
				<h1 class="title_apoyo1">ACTUALIZAR PROVEEDOR</h1>
			</div>
			<!-- <button type="button" class="close" id="close" data-dismiss="modal" aria-label="Close">
        	<span aria-hidden="true">&times;</span>
    		</button> -->
			<div class="modal-body">
				<form method="POST" id="formusuario2" name="formusuario2" action="javascript:("
					enctype="multipart/form-data">
					<!-- Smart Wizard HTML -->
					<div id="smartwizard_proveedor2">
						<ul>
							<li><a href="#step-1"><span class="glyphicon glyphicon-user"></span>
									PERFIL<br /><small></small></a></li>
							<li><a href="#step-2"><span class="glyphicon glyphicon-home"></span>
									DIRECCIÓN<br /><small></small></a></li>
							<li><a href="#step-3"><span class="glyphicon glyphicon-envelope"></span>
									EXTRA<br /><small></small></a></li>
						</ul>

						<div>

							<div id="step-1" class="primero">
								<div class="container">
									<div class="row">
										<div class="col-md-4">
											<input type="text" id="inputproveedor2" name="inputproveedor2"
												autocomplete="off" class="form-control" required minlength="3"
												maxlength="30" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{4,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error10_reg1"
												for="inputproverdor">NOMBRE(S)</label>
										</div>
										<div class="col-md-4">
											<input type="text" id="inputapellidopaternoproveedor2"
												name="inputapellidopaternoproveedor2" class="form-control"
												autocomplete="off" required minlength="3"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="30" required
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error2011" for="inputapellidopaterno">APELLLIDO
												PATERNO</label>
										</div>
										<div class="col-md-4">
											<input type="text" id="inputapellidomaternoproveedor2"
												name="inputapellidomaternoproveedor2" class="form-control"
												autocomplete="off" required minlength="3"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="30" required
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error3011" for="inputapellidomaterno">APELLIDO
												MATERNO</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-4">
											<input type="text" id="inputcurpproveedor2" name="inputcurpproveedor2"
												autocomplete="off" class="form-control" required minlength="18"
												maxlength="19" required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{3,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 18"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error4011" for="inputcurp">CURP</label>
										</div>
										<div class="col-md-4">
											<input type="text" id="inputrfcproveedor2" name="inputrfcproveedor2"
												autocomplete="off" class="form-control" required minlength="10"
												maxlength="10" required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{3,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error5011" for="inputRfc">RFC</label>
										</div>
										<div class="col-md-4">
											<input type="date" id="fechaRegproveedor2" class="form-control"
												name="fechaRegproveedor2" required
												title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta1" id="error11011" class="form-control"
												for="fechaNac">FECHA DE REGISTRO</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-3">
											<select id="inputedocivilproveedor2" class="form-control form-control-sm"
												name="inputedocivilproveedor2" required>
												<option value="">SELECCIONAR </option>
												<option value="CASADO(A)">CASADO(A)</option>
												<option value="SOLTERO(A)">SOLTERO(A)</option>
												<option value="VIUDO(A)">VIUDO(A)</option>
												<option value="DIVORCIADO(A)">DIVORCIADO(A)</option>
											</select>
											<label class="etiqueta1" id="error6011" class="form-control"
												for="fechaNac">ESTADO CIVIL</label>
										</div>
										<div class="col-md-3">
											<select id="inputsexoproveedor2" class="form-control  form-control-sm"
												name="inputsexoproveedor2" required>
												<option value="">SELECCIONAR</option>
												<option value="M">MASCULINO</option>
												<option value="F">FEMENINO</option>
											</select>
											<label class="etiqueta1" id="error7011" class="form-control"
												for="fechaNac">SEXO</label>
										</div>
										<div class="col-md-3">
											<select id="inputestudiosproveedor2" name="inputestudiosproveedor2"
												class="form-control form-control-sm" required>
												<option value="">SELECCIONAR</option>
												<option value="N">NINGUNO</option>
												<option value="PRIMARIA">PRIMARIA</option>
												<option value="SECUNDARIA">SECUNDARIA</option>
												<option value="BACHILLERATO">BACHILLERATO</option>
												<option value="LICENCIATURA">LICENCIATURA</option>
											</select>
											<label class="etiqueta" id="error8011" class="form-control"
												for="inputestudios">NIVEL DE ESTUDIOS</label>
										</div>
										<div class="col-md-3">
											<input type="text" id="inputcelproveedor2" name="inputcelproveedor2"
												class="form-control" autocomplete="off" required minlength="10"
												maxlength="10" required pattern="[1-9]+"
												title="Solo se permiten Numeros. Tamaño mínimo: 10. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error10011" class="form-control"
												for="inputtel">TELEFONO</label>
										</div>
									</div>
								</div>
							</div>
							<div id="step-2" class="">
								<div class="container">
									<div class="row">
										<div class="col-md-4">
											<select id="municipioproveedor2" class="form-control form-control-sm"
												name="municipioproveedor2" required>
												<option value="">SELECCIONAR MUNICIPIO</option>
												<option value="TOLUCA">TOLUCA</option>
											</select>
											<label class="etiqueta" id="error17011" for="municipio">MUNICIPIO</label>
										</div>

										<div class="col-md-4">
											<select id="localidadproveedor2" class="form-control form-control-sm"
												name="localidadproveedor2" required>
												<option value="">SELECCIONAR LOCALIDAD</option>
												<?php foreach ($registros as $fila): ?>
												<option value="<?php echo $fila['Localidad'] ?>">
													<?php echo $fila['Localidad'] ?>
												</option>
												<?php endforeach; ?>
											</select>
											<!-- <input type="text"  autocomplete="off"  class="form-control" name="localidad" id="localidad" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" required minlength="5" maxlength="40" title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"  onkeyup="mayusculas(this);"> -->
											<label class="etiqueta" id="error18011" for="localidad">LOCALIDAD</label>
										</div>
										<div class="col-md-4">
											<input type="text" autocomplete="off" class="form-control"
												name="calleproveedor2" id="calleproveedor2" required minlength="7"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="40"
												title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error12011" for="calle">CALLE</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<input type="text" autocomplete="off" class="form-control"
												name="coloniaproveedor2" id="coloniaproveedor2" required minlength="7"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="40"
												title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error13011" for="colonia">COLONIA</label>
										</div>
										<div class="col-md-2">
											<input type="text" autocomplete="off" class="form-control"
												name="No_interiorproveedor2" id="No_interiorproveedor2" minlength="2"
												required maxlength="20" pattern="[A-Z0-9]+"
												title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error14011" for="No_inte">NI</label>
										</div>
										<div class="col-md-2">
											<input type="text" autocomplete="off" class="form-control"
												name="No_exteriorproveedor2" id="No_exteriorproveedor2" minlength="2"
												required maxlength="20" pattern="[A-Z0-9]+"
												title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error15011" for="No_exte">NE</label>
										</div>
										<div class="col-md-2">
											<input type="text" autocomplete="off" class="form-control"
												name="cpproveedor2" id="cpproveedor2" required minlength="5"
												maxlength="6" pattern="[0-9]{5,6}"
												title="Solo se permiten Numeros. Tamaño mínimo: 5. Tamaño máximo: 6"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error16011" for="No_exte">CODIGO POSTAL</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-12">
											<textarea name="inputdescripcionproveedor2" class="form-control"
												id="refproveedor2" cols="100" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}"
												placeholder="REFERENCIA DE UBICACIÓN" rows="4" minlength="2" required
												maxlength="120" pattern="[A-Z0-9]+"
												title="Solo se permiten Numeros o letras. Tamaño mínimo: 1. Tamaño máximo: 100"
												 onkeyup="mayusculas(this);"></textarea>
											<label class="etiqueta" id="error19011" for="municipio">REFERENCIA DE
												DOMICILIO</label>
										</div>
									</div>
								</div>
							</div>
							<div id="step-3" class="">
								<div class="container">
									<div class="row">
										<div class="col-md-6">
										<input type="email" autocomplete="off" class="form-control"
												name="inputcorreoproveedor2" id="inputcorreoproveedor2" required
												minlength="10" maxlength="50"  onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error20011" for="correo">CORREO
												ELECTRONICO</label>
										</div>
										<div class="col-md-6">
										<input  onkeyup="mayusculas(this);" type="text" autocomplete="off" class="form-control"
												name="inputservproveedor2" id="inputservproveedor2" required
												minlength="10" maxlength="20">
											<label class="etiqueta" id="error21011"
												for="pass1">SERVICIO/MERCANCIA</label>
										</div>
										<div class="col-md-12">
										<input type="text"  class="sr-only" id="Fotografprov11" name="Fotografprov11"><br>
										<input type="text" id="Id_prov" class="sr-only" name="Id_prov">
										<input type="file" class="inputfile" name="your_picturprov11"
											id="your_pictureprov0" onchange="readURL2(this);"><br>
										<label for="your_picture">
											<figure>
												<img name="imgprov" id="imgprov" src="../img/your-picture.png" alt=""
													class="foto_reg_emp">
											</figure><br>
											<span class="glyphicon glyphicon-camera"></span>
											<span class="file-button" id="error2521">FOTOGRAFIA ACTUAL O SELECCIONAR
												NUEVA FOTOGRAFIA</span>
										</label>
										<input type="text"  class="sr-only" autocomplete="off"
												name="inputprivilegiosproveedor2" id="inputprivilegiosproveedor2"
												placeholder="Tipo de usuario" required minlength="1" maxlength="2"
												value="1">

										</div>
									</div>
								</div>								
						</div>
				</form>
			</div>

		</div>
	</div>
</div>
</div>



</div>