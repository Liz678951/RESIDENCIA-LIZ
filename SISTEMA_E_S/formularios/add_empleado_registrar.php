<?php
  include_once("../conexion/conexion.php");
  $sql = "SELECT *FROM tbl_localidades order by Localidad ASC";
  $resultado = $conexion->prepare($sql);
  $resultado->execute();
  $registros = $resultado->fetchAll();
?>
<div class="modal fade" id="registrar_empleado" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
		<div id="mod_empleado" class="modal-content">
			<div class="modal-header" id="modal-header">
				<!-- <a class="logo_apoyo"></a><br> -->
				<h1 class="title_apoyo1">REGISTRAR EMPLEADO</h1>
			</div>
			<!-- <button type="button" class="close" id="close" data-dismiss="modal" aria-label="Close"> -->
			<!-- <span aria-hidden="true">&times;</span> -->
			</button>
			<div class="modal-body">
				<form method="POST" id="formempleado_reg" name="formempleado_reg" action="javascript:()"
					enctype="multipart/form-data">
					<!-- Smart Wizard HTML -->
					<div id="smartwizard23">
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
											<input type="text" id="inputusuario" name="inputusuario" autocomplete="off"
												class="form-control" required minlength="3" maxlength="30"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{4,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
												onblur="mayusculas_3(this.name)">
											<label class="etiqueta" id="error1_em" for="inputusuario">NOMBRE(S)</label>
										</div>
										<div class="col-md-4">
											<input type="text" id="inputapellidopaterno" name="inputapellidopaterno"
												class="form-control" autocomplete="off" required minlength="3"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{4,25}" maxlength="30" required
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
												onblur="mayusculas_3(this.name)">
											<label class="etiqueta" id="error2" for="inputapellidopaterno">APELLIDO
												PATERNO</label>
										</div>
										<div class="col-md-4">
											<input type="text" id="inputapellidomaterno" name="inputapellidomaterno"
												class="form-control" autocomplete="off" required minlength="3"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{4,25}" maxlength="30" required
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
												onblur="mayusculas_3(this.name)">
											<label class="etiqueta" id="error3" for="inputapellidomaterno">APELLIDO
												MATERNO</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-4">
											<input type="date" id="fechaNac" class="form-control" name="fechaNac"
												max="2001-01-01" min="1961-01-01" required>
											<label class="etiqueta1" id="error11" class="form-control"
												for="fechaNac">FECHA DE NACIMIENTO</label>
										</div>
										<div class="col-md-4">
											<input type="text" id="inputcurp" name="inputcurp" autocomplete="off"
												class="form-control" required minlength="18" maxlength="19" required
												pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 10"
												onblur="mayusculas_3(this.name)">
											<label class="etiqueta" id="error4" for="inputcurp">CURP</label>
										</div>
										<div class="col-md-4">
											<input type="text" id="inputrfc" name="inputrfc" autocomplete="off"
												class="form-control" required minlength="18" maxlength="19" required
												pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 10"
												onblur="mayusculas_3(this.name)">
											<label class="etiqueta" id="error5" for="inputRfc">CLAVE DE ELECTOR</label>
										</div>
									</div>
									<div class="row">
									<div class="col-md-3">
									<select id="inputedocivil" class="form-control form-control-sm" name="inputedocivil"
												required>
												<option value="">SELECCIONAR</option>
												<option value="CASADO(A)">CASADO(A)</option>
												<option value="SOLTERO(A)">SOLTERO(A)</option>
												<option value="VIUDO(A)">VIUDO(A)</option>
												<option value="DIVORCIADO(A)">DIVORCIADO(A)</option>
											</select>
											<label class="etiqueta1" id="error6" class="form-control"
												for="fechaNac">ESTADO CIVIL</label>
									</div>
									<div class="col-md-3">
									<select id="inputestudios" class="form-control form-control-sm" name="inputestudios"
												required>
												<option value="">SELECCIONAR</option>
												<option value="N">NINGUNO</option>
												<option value="Primaria">PRIMARIA</option>
												<option value="Secundaria">SECUNDARIA</option>
												<option value="Bachillerato">BACHILLERATO</option>
												<option value="Licenciatura">LICENCIATURA</option>
											</select>
											<label class="etiqueta" id="error8" class="form-control"
												for="inputestudios">NIVEL DE ESTUDIOS</label>
									</div>
									<div class="col-md-3">
									<select id="inputsexo" class="form-control form-control-sm" name="inputsexo" required>
												<option value="">SELECCIONAR</option>
												<option value="M">MASCULINO</option>
												<option value="F">FEMENINO</option>
											</select>
											<label class="etiqueta1" id="error7" class="form-control"
												for="fechaNac">SEXO</label>
									</div>
									<div class="col-md-3">
									<input type="text" id="inputcel" name="inputcel" class="form-control"
												autocomplete="off" minlength="10" maxlength="10" required
												pattern="[1-9]+"
												title="Solo se permiten Numeros. Tamaño mínimo: 10. Tamaño máximo: 10"
												onblur="mayusculas_3(this.name)">
											<label class="etiqueta" id="error10" class="form-control"
												for="inputtel">TELEFONO</label>
									</div>
									</div>									
								</div>
							</div>
							<div id="step-2" class="">
								<div class="container">
									<div class="row">
									<div class="col-md-4">
									<select id="municipio" class="form-control form-control-sm" name="municipio" required>
												<option value="">SELECCIONAR MUNICIPIO</option>
												<option value="Toluca">Toluca</option>
											</select>
											<label class="etiqueta" id="error17" for="municipio">MUNICIPIO</label>
									</div>
									<div class="col-md-4">
									<select id="localidad" class="form-control form-control-sm" name="localidad" required>
												<option value="">SELECCIONAR LOCALIDAD</option>
												<?php foreach ($registros as $fila): ?>
												<option value="<?php echo $fila['Localidad'] ?>">
													<?php echo $fila['Localidad'] ?>
												</option>
												<?php endforeach; ?>
											</select>
											<!-- <input type="text"  autocomplete="off"  class="form-control" name="localidad" id="localidad"  required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}" minlength="5" maxlength="40" title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10" onblur="mayusculas_3(this.name)"> -->
											<label class="etiqueta" id="error18" for="localidad">LOCALIDAD</label>
									</div>
									<div class="col-md-4">
									<input type="text" autocomplete="off" class="form-control " name="calle"
												id="calle" required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}"
												minlength="7" maxlength="40"
												title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
												onblur="mayusculas_3(this.name)">
											<label class="etiqueta" id="error12" for="calle">CALLE</label>
									</div>
									</div>
									<div class="row">
									<div class="col-md-6">
									<input type="text" autocomplete="off" class="form-control" name="colonia"
												id="colonia" required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}"
												minlength="7" maxlength="40"
												title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
												onblur="mayusculas_3(this.name)">
											<label class="etiqueta" id="error13" for="colonia">COLONIA</label>
									</div>
									<div class="col-md-2">
									<input type="text" autocomplete="off" class="form-control"
												name="No_interior" id="No_interior" minlength="2" required
												maxlength="20" pattern="[A-Z0-9]+"
												title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"
												onblur="mayusculas_3(this.name)">
											<label class="etiqueta" id="error14" for="No_inte">NI</label>
									</div>
									<div class="col-md-2">
									<input type="text" autocomplete="off" class="form-control"
												name="No_exterior" id="No_exterior" minlength="2" required
												maxlength="20" pattern="[A-Z0-9]+"
												title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"
												onblur="mayusculas_3(this.name)">
											<label class="etiqueta" id="error15" for="No_exte">NE</label>
									</div>
									<div class="col-md-2">
									<input type="text" autocomplete="off" class="form-control" name="cp" id="cp"
												required minlength="5" maxlength="6" pattern="[0-9]{5,6}"
												title="Solo se permiten Numeros. Tamaño mínimo: 5. Tamaño máximo: 6"
												onblur="mayusculas_3(this.name)">
											<label class="etiqueta" id="error16" for="No_exte">CODIGO POSTAL</label>
									</div>
									</div>
									<div class="row">
									<div class="col-md-12">
									<textarea name="inputdescripcion" class="form-control" id="ref" cols="100"
												placeholder="REFERENCIA DE UBICACION DEL DOMICILIO" rows="4" required
												pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}" maxlength="120"
												pattern="[A-Z0-9]+"
												title="Solo se permiten Numeros o letras. Tamaño mínimo: 1. Tamaño máximo: 100"
												onblur="mayusculas_3(this.name)"></textarea>
											<label class="etiqueta" id="error19" for="municipio">REFERENCIA DE
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
								name="inputcorreo" id="inputcorreo" required minlength="10" maxlength="50" onblur="mayusculas_3(this.name)">
									<label class="etiqueta" id="error20" for="correo">CORREO ELECTRONICO</label>
							</div>
							<div class="col-md-3">
							<input type="password" autocomplete="off" class="form-control" name="inputpass" id="inputpass1" required minlength="10" maxlength="20">
								<label class="etiqueta" id="error21" for="pass1">CONTRASEÑA</label>
							</div>
							<div class="col-md-3">
							<input type="password" autocomplete="off" class="form-control" name="inputpass2" id="inputpass2" required minlength="10" maxlength="20">
								<label class="etiqueta" id="error22" for="pass2">CONFIRMAR	CONTRASEÑA</label>
							</div>
							</div>
							<div class="row">
								<div class="col-md-6">
								<select id="inputprivilegios" class="form-control form-control-sm" name="inputprivilegios"
												required>
												<option value="">SELECCIONAR PRIVILEGIOS</option>
												<option value="V">VIGILANTE</option>
												<option value="A">ADMINISTRADOR</option>
											</select>
											<label class="etiqueta" id="error23" for="inputprvilegios">TIPO DE USUARIO</label>
								</div>
								<div class="col-md-6">
								<input type="text" id="inputocupacion" name="inputocupacion" class="form-control"  autocomplete="off" required minlength="7" maxlength="30" required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{4,25}" title="Solo se permiten Letras mayusculas. Tamaño mínimo: 7. Tamaño máximo: 20" onblur="mayusculas_3(this.name)">
								 <label class="etiqueta" id="error9"   class="form-control" for="inputocupacion">OCUPACION EXTRA</label>
								</div>													
							</div>
							<div class="col-md-12">
							<div class="col-md-6">
							<input type="file" class="inputfile" name="your_pictur" id="your_picture"
											onchange="readURL2(this);" required>
										<label for="your_picture">
											<figure>
												<img name="img" id="img" src="../img/your-picture.png" alt=""
													class="foto_reg_emp">
											</figure>
											<span class="glyphicon glyphicon-camera"></span>
											<span class="file-button" id="error25">SELECCIONAR FOTOGRAFIA</span>
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