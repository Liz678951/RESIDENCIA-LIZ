<?php
  include_once("../conexion/conexion.php");
  $sql = "SELECT *FROM tbl_localidades order by Localidad ASC";
  $resultado = $conexion->prepare($sql);
  $resultado->execute();
  $registros = $resultado->fetchAll();
?>
<div class="modal fade" id="actualizar_empleado" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
		<div id="mod_empleado" class="modal-content">
			<div class="modal-header" id="modal-header">
				<!-- <a class="logo_apoyo"></a><br> -->
				<h1 class="title_apoyo1">ACTUALIZAR EMPLEADO</h1>
			</div>
			<!-- <button type="button" class="close" id="close" data-dismiss="modal" aria-label="Close"> -->
			<!-- <span aria-hidden="true">&times;</span> -->
			</button>
			<div class="modal-body">
				<form method="POST" id="formempleado_act" name="formempleado_act" action="javascript:()"
					enctype="multipart/form-data">
					<!-- Smart Wizard HTML -->
					<div id="smartwizard230">
						<ul>
							<li><a href="#step-1"><span class="glyphicon glyphicon-user"></span>
									PERFIL<br /><small></small></a></li>
							<li><a href="#step-2"><span class="glyphicon glyphicon-home"></span>
									DIRECCION<br /><small></small></a></li>
							<li><a href="#step-3"><span class="glyphicon glyphicon-briefcase"></span>
									CUENTA<br /><small></small></a></li>
						</ul>

						<div>

							<div id="step-1" class="primero">

								<div class="container">
									<div class="row">
										<div class="col-md-4">
											<input type="text" id="inputusuario11" name="inputusuario11"
												autocomplete="off" class="form-control" required minlength="3"
												maxlength="30" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{4,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error1_em2" for="inputusuario">NOMBRE(S)</label>
										</div>
										<div class="col-md-4">
											<input type="text" id="inputapellidopaterno11" name="inputapellidopaterno11"
												class="form-control" autocomplete="off" required minlength="3"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{4,25}" maxlength="30" required
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error22" for="inputapellidopaterno">APELLIDO
												PATERNO</label>
										</div>
										<div class="col-md-4">
											<input type="text" id="inputapellidomaterno11" name="inputapellidomaterno11"
												class="form-control" autocomplete="off" required minlength="3"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{4,25}" maxlength="30" required
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error32" for="inputapellidomaterno">APELLIDO
												MATERNO</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-4"><input type="date" id="fechaNac11" class="form-control"
												name="fechaNac11" max="2001-01-01" min="1961-01-01" required>
											<label class="etiqueta1" id="error112" class="form-control"
												for="fechaNac">FECHA DE NACIMIENTO</label>
										</div>
										<div class="col-md-4">
											<input type="text" id="inputcurp11" name="inputcurp11" autocomplete="off"
												class="form-control" required minlength="18" maxlength="19" required
												pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error42" for="inputcurp">CURP</label>
										</div>
										<div class="col-md-4">
											<input type="text" id="inputrfc11" name="inputrfc11" autocomplete="off"
												class="form-control" required minlength="18" maxlength="19" required
												pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error52" for="inputRfc">CLAVE DE ELECTOR</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-3">
											<select id="inputedocivil11" class="form-control form-control-sm"
												name="inputedocivil11" required>
												<option value="">SELECCIONAR</option>
												<option value="CASADO(A)">CASADO(A)</option>
												<option value="SOLTERO(A)">SOLTERO(A)</option>
												<option value="VIUDO(A)">VIUDO(A)</option>
												<option value="DIVORCIADO(A)">DIVORCIADO(A)</option>
											</select>
											<label class="etiqueta1" id="error62" class="form-control"
												for="fechaNac">ESTADO CIVIL</label>
										</div>
										<div class="col-md-3">
											<select id="inputestudios11" class="form-control form-control-sm"
												name="inputestudios11" required>
												<option value="">SELECCIONAR</option>
												<option value="N">NINGUNO</option>
												<option value="PRIMARIA">PRIMARIA</option>
												<option value="SECUNDARIA">SECUNDARIA</option>
												<option value="BACHILLERATO">BACHILLERATO</option>
												<option value="LICENCIATURA">LICENCIATURA</option>
											</select>
											<label class="etiqueta" id="error82" class="form-control"
												for="inputestudios">NIVEL DE ESTUDIOS</label>
										</div>
										<div class="col-md-3">
											<select id="inputsexo11" class="form-control form-control-sm"
												name="inputsexo11" required>
												<option value="">SELECCIONAR</option>
												<option value="M">MASCULINO</option>
												<option value="F">FEMENINO</option>
											</select>
											<label class="etiqueta1" id="error72" class="form-control"
												for="fechaNac">SEXO</label>
										</div>
										<div class="col-md-3">
											<input type="text" id="inputcel11" name="inputcel11" class="form-control"
												autocomplete="off" minlength="10" maxlength="10" required
												pattern="[1-9]+"
												title="Solo se permiten Numeros. Tamaño mínimo: 10. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error102" class="form-control"
												for="inputtel">TELEFONO</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-12">
											<input type="text" id="inputocupacion11" name="inputocupacion11"
												class="form-control" autocomplete="off" required minlength="7"
												maxlength="30" required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 7. Tamaño máximo: 20"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error92" class="form-control"
												for="inputocupacion">OCUPACION EXTRA</label>
										</div>
									</div>
								</div>
							</div>
							<div id="step-2" class="">
								<div class="container">
									<div class="row">
										<div class="col-md-4">
											<select id="municipio11" class="form-control form-control-sm"
												name="municipio11" required>
												<option value="">SELECCIONAR</option>
												<option value="TOLUCA">TOLUCA</option>
											</select>
											<label class="etiqueta" id="error172" for="municipio">MUNICIPIO</label>
										</div>
										<div class="col-md-4">
											<select id="localidad11" class="form-control form-control-sm"
												name="localidad11" required>
												<option value="">SELECCIONAR LOCALIDAD</option>
												<?php foreach ($registros as $fila): ?>
												<option value="<?php echo $fila['Localidad'] ?>">
													<?php echo $fila['Localidad'] ?>
												</option>
												<?php endforeach; ?>
											</select>
											<!-- <input type="text"  autocomplete="off"  class="form-control" name="localidad" id="localidad"  required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}" minlength="5" maxlength="40" title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"  onkeyup="mayusculas(this);"> -->
											<label class="etiqueta" id="error182" for="localidad">LOCALIDAD</label>
										</div>
										<div class="col-md-4">
											<input type="text" autocomplete="off" class="form-control" name="colonia11"
												id="colonia11" required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}"
												minlength="7" maxlength="40"
												title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error132" for="colonia">COLONIA</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<input type="text" autocomplete="off" class="form-control" name="calle11"
												id="calle11" required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}"
												minlength="7" maxlength="40"
												title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error122" for="calle">CALLE</label>
										</div>
										<div class="col-md-2">
											<input type="text" autocomplete="off" class="form-control"
												name="No_interior11" id="No_interior11" minlength="2" required
												maxlength="20" pattern="[A-Z0-9]+"
												title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error142" for="No_inte">NI</label>
										</div>
										<div class="col-md-2">
											<input type="text" autocomplete="off" class="form-control"
												name="No_exterior11" id="No_exterior11" minlength="2" required
												maxlength="20" pattern="[A-Z0-9]+"
												title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error152" for="No_exte">NE</label>
										</div>
										<div class="col-md-2">
											<input type="text" autocomplete="off" class="form-control" name="cp11"
												id="cp11" required minlength="5" maxlength="6" pattern="[0-9]{5,6}"
												title="Solo se permiten Numeros. Tamaño mínimo: 5. Tamaño máximo: 6"
												 onkeyup="mayusculas(this);">
											<label class="etiqueta" id="error162" for="No_exte">CODIGO POSTAL</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-12">
											<textarea name="inputdescripcion11" class="form-control" id="ref11"
												cols="100" placeholder="REFERENCIA DE UBICACION DEL DOMICILIO" rows="4"
												required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}" maxlength="120"
												pattern="[A-Z0-9]+"
												title="Solo se permiten Numeros o letras. Tamaño mínimo: 1. Tamaño máximo: 100"
												 onkeyup="mayusculas(this);"></textarea>
											<label class="etiqueta" id="error192" for="municipio">REFERENCIA DE
												DOMICILIO</label>
										</div>
									</div>
								</div>
							</div>
							<div id="step-3" class="">
								<div class="container">
									<div class="row">
										<div class="col-md-6">
										<input type="email" autocomplete="off" class="form-control" name="inputcorreo11"
											id="inputcorreo11" required minlength="10" maxlength="50"
											 onkeyup="mayusculas(this);">
										<label class="etiqueta" id="error202" for="correo">CORREO
											ELECTRONICO</label>
										</div>
										<div class="col-md-6">
										<input type="password" autocomplete="off" class="form-control"
											name="inputpass11" id="inputpass11" required minlength="10" maxlength="20">
										<label class="etiqueta" id="error212" for="pass1">CONTRASEÑA</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
										<input type="password" autocomplete="off" class="form-control"
											name="inputpass21" id="inputpass21" required minlength="10" maxlength="20">
										<label class="etiqueta" id="error222" for="pass2">CONFIRMAR
											CONTRASEÑA</label>
										</div>
										<div class="col-md-6">
										<select id="inputprivilegios11" class="form-control form-control-sm" name="inputprivilegios11"
											required>
											<option value="">SELECCIONAR</option>
											<option value="V">VIGILANTE</option>
											<option value="A">ADMINISTRADOR</option>
										</select>
										<label class="etiqueta" id="error232" for="inputprvilegios">TIPO DE
											USUARIO</label>
										</div>
										
									</div>
									<div class="row">
									<div class="col-md-6">
										<input type="text" class="sr-only" id="Fotografemp" name="Fotografemp">
									<input type="text" class="sr-only" id="Id_emp" name="Id_emp">
									<input type="file" class="inputfile" name="your_pictur11" id="your_picture11"
										onchange="readURL2(this);">
									<label for="your_picture">
										<figure>
											<img name="img111" id="img111" src="../img/your-picture.png" alt=""
												class="foto_reg_emp">
										</figure>
										<span class="glyphicon glyphicon-camera"></span>
										<span class="file-button" id="error252">FOTOGRAFIA ACTUAL O SELECCIONAR
											NUEVA
											FOTOGRAFIA</span>
									</label>
										</div>
									</div>
								</div>
						</div>
					</div>
					<!-- <button type="submit">Reg</button> -->
				</form>
			</div>

		</div>
	</div>
</div>
</div>



</div>