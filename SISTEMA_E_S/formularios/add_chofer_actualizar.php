<?php
  include_once("../conexion/conexion.php");
  $sql = "SELECT *FROM tbl_camiones order by Matricula ASC";
  $resultado = $conexion->prepare($sql);
  $resultado->execute();
  $registros = $resultado->fetchAll();
  ?>
<?php
    include_once("../conexion/conexion.php");
    $sql1 = "SELECT *FROM tbl_localidades order by Localidad ASC";
    $resultado1 = $conexion->prepare($sql1);
    $resultado1->execute();
    $registros1 = $resultado1->fetchAll();

?>
<?php
  include_once("../conexion/conexion.php");
  $sql2 = "SELECT *FROM tbl_camiones order by Matricula ASC";
  $resultado2 = $conexion->prepare($sql2);
  $resultado2->execute();
  $registros2 = $resultado2->fetchAll();

?>
<div class="modal fade" id="actualizar_chofer" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
		<div id="mod_empleado" class="modal-content">
			<div class="modal-header" id="modal-header">
				<!-- <a class="logo_apoyo_1"></a><br> -->
				<h1 class="title_apoyo1">ACTUALIZAR CHOFER</h1>
			</div>

			<div class="modal-body">
				<form method="POST" id="formchofer1" name="formchofer1" action="javascript:()"
					enctype="multipart/form-data">
					<div id="smartwizardactualizar">
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
										<input  onkeyup="mayusculas(this);" type="text" id="inputchofer1" name="inputchofer1" autocomplete="off"
												class="form-control" required minlength="3" maxlength="30"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{4,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
												onblur="mayusculas(this.name)">
												<label class="etiqueta" id="error1chofer1"
												for="inputusuarios">NOMBRE(S)</label>
										</div>
										<div class="col-md-4">										
											<input  onkeyup="mayusculas(this);" type="text" id="inputapellidopaternochofer1"
												name="inputapellidopaternochofer1" class="form-control"
												autocomplete="off" required minlength="3"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="30" required
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
												onblur="mayusculas(this.name)">
												<label class="etiqueta" id="error2chofer1"
												for="inputapellidopaterno">APELLLIDO PATERNO</label>
										</div>
										<div class="col-md-4">										
											<input  onkeyup="mayusculas(this);" type="text" id="inputapellidomaternochofer1"
												name="inputapellidomaternochofer1" class="form-control"
												autocomplete="off" required minlength="3"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="30" required
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"
												onblur="mayusculas(this.name)">
												<label class="etiqueta" id="error3chofer1"
												for="inputapellidomaterno">APELLIDO MATERNO</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-4">								
											<input type="date" id="fechaNacchofer1" class="form-control"
												name="fechaNacchofer1" max="2001-01-01" min="1961-01-01" required
												title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
												onblur="mayusculas(this.name)">
												<label class="etiqueta1" id="error11chofer1" class="form-control"
												for="fechaNac">FECHA DE NACIMIENTO</label>
										</div>
										<div class="col-md-4">										
											<input  onkeyup="mayusculas(this);" type="text" id="inputcurpchofer1" name="inputcurpchofer1"
												autocomplete="off" class="form-control" required minlength="18"
												maxlength="19" required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{3,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 18"
												onblur="mayusculas(this.name)">
												<label class="etiqueta" id="error4chofer1" for="inputcurp">CURP</label>
										</div>
										<div class="col-md-4">									
											<input  onkeyup="mayusculas(this);" type="text" id="inputlicchofer1" name="inputlicchofer1"
												autocomplete="off" class="form-control" required minlength="10"
												maxlength="10" required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{3,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 10"
												onblur="mayusculas(this.name)">
												<label class="etiqueta" id="error5chofer1" for="inputRfc">CODIGO DE
												LICENCIA</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-3">										
											<select id="inputedocivilchofer1" class="form-control form-control-sm"
												name="inputedocivilchofer1" required>
												<option value=""> SELECCIONAR</option>
												<option value="CASADO(A)">CASADO(A)</option>
												<option value="SOLTERO(A)">SOLTERO(A)</option>
												<option value="VIUDO(A)">VIUDO(A)</option>
												<option value="DIVORCIADO(A)">DIVORCIADO(A)</option>
											</select>
											<label class="etiqueta1" id="error6chofer1" class="form-control"
												for="fechaNac">ESTADO CIVIL</label>
										</div>
										<div class="col-md-3">										
											<select id="inputsexochofer1" class="form-control form-control-sm" name="inputsexochofer1"
												required>
												<option value="">SELECCIONAR</option>
												<option value="M">MASCULINO</option>
												<option value="F">FEMENINO</option>
											</select>
											<label class="etiqueta1" id="error7chofer1" class="form-control"
												for="fechaNac">SEXO</label>
										</div>
										<div class="col-md-3">									
											<select id="inputestudioschofer1" name="inputestudioschofer1"
												class="form-control form-control-sm" name="inputestudios" required>
												<option value="">SELECCIONAR NIVEL DE ESTUDIOS</option>
												<option value="N">NINGUNO</option>
												<option value="PRIMARIA">PRIMARIA</option>
												<option value="SECUNDARIA">SECUNDARIA</option>
												<option value="BACHILLERATO">BACHILLERATO</option>
												<option value="LICENCIATURA">LICENCIATURA</option>
											</select>
											<label class="etiqueta1" id="error8chofer1" class="form-control"
												for="fechaNac">NIVEL DE ESTUDIOS</label>
										</div>
										<div class="col-md-3">										
											<input type="text" id="inputcelchofer1" name="inputcelchofer1"
												class="form-control" autocomplete="off" required  
												title="Solo se permiten Numeros. Tamaño mínimo: 10. Tamaño máximo: 10"
												onblur="mayusculas(this.name)">
												<label class="etiqueta" id="error10chofer1" class="form-control"
												for="inputcelchofer">TELEFONO</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-12">									
											<input  onkeyup="mayusculas(this);" type="text" id="inputocupacionchofer1" name="inputocupacionchofer1"
												class="form-control" autocomplete="off" required minlength="7"
												maxlength="30" required pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}"
												title="Solo se permiten Letras mayusculas. Tamaño mínimo: 7. Tamaño máximo: 20"
												onblur="mayusculas(this.name)">
												<label class="etiqueta" id="error9chofer1" class="form-control"
												for="inputocupacion">OCUPACION EXTRA</label>
										</div>
									</div>
								</div>
							</div>
							<div id="step-2" class="">
								
							<div class="container">
								<div class="row">
									<div class="col-md-4">								
											<select id="municipiochofer1" class="form-control form-control-sm" name="municipiochofer1"
												required>
												<option value="">SELECCIONAR MUNICIPIO</option>
												<option value="TOLUCA">TOLUCA</option>
											</select>
											<label class="etiqueta" id="error17chofer1" for="municipio">MUNICIPIO</label>
									</div>
									<div class="col-md-4">								
											<select  onkeyup="mayusculas(this);" id="localidadchofer1" class="form-control form-control-sm" name="localidadchofer1"
												required>
												<option value="">SELECCIONAR LOCALIDAD</option>
												<?php foreach ($registros1 as $fila1): ?>
												<option value="<?php echo $fila1['Localidad'] ?>">
													<?php echo $fila1['Localidad'] ?>
												</option>
												<?php endforeach; ?>
											</select>
											<label class="etiqueta" id="error18chofer1" for="localidad">LOCALIDAD</label>
									</div>
									<div class="col-md-4">									
											<input  onkeyup="mayusculas(this);" type="text" autocomplete="off" class="form-control"
												name="callechofer1" id="callechofer1" required minlength="7"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="40"
												title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
												onblur="mayusculas(this.name)">
												<label class="etiqueta" id="error12chofer1" for="calle">CALLE</label>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">									
											<input  onkeyup="mayusculas(this);" type="text" autocomplete="off" class="form-control"
												name="coloniachofer1" id="coloniachofer1" required minlength="7"
												pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="40"
												title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"
												onblur="mayusculas(this.name)">
												<label class="etiqueta" id="error13chofer1" for="colonia">COLONIA</label>
									</div>
									<div class="col-md-2">									
											<input  onkeyup="mayusculas(this);" type="text" autocomplete="off" class="form-control" name="cpchofer1"
												id="cpchofer1" required minlength="5" maxlength="6" pattern="[0-9]{5,6}"
												title="Solo se permiten Numeros. Tamaño mínimo: 5. Tamaño máximo: 6"
												onblur="mayusculas(this.name)">
												<label class="etiqueta" id="error16chofer1" for="No_exte">CODIGO POSTAL</label>
									</div>
									<div class="col-md-2">									
											<input  onkeyup="mayusculas(this);" type="text" autocomplete="off" class="form-control"
												name="No_interiorchofer1" id="No_interiorchofer1" minlength="2" required
												maxlength="20" pattern="[A-Z0-9]+"
												title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"
												onblur="mayusculas(this.name)">
												<label class="etiqueta" id="error14chofer1" for="No_inte">NI</label>
									</div>
									
									<div class="col-md-2">							
											<input  onkeyup="mayusculas(this);" type="text" autocomplete="off" class="form-control"
												name="No_exteriorchofer1" id="No_exteriorchofer1" minlength="2" required
												maxlength="20" pattern="[A-Z0-9]+"
												title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"
												onblur="mayusculas(this.name)">
												<label class="etiqueta" id="error15chofer1" for="No_exte">NE</label>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">								
											<textarea  onkeyup="mayusculas(this);" name="inputdescripcionchofer1" class="form-control" id="refchofer1"
												cols="100" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}"
												placeholder="REFERENCIA DE UBICACIÓN" rows="4" minlength="2" required
												maxlength="120" pattern="[A-Z0-9]+"
												title="Solo se permiten Numeros o letras. Tamaño mínimo: 1. Tamaño máximo: 100"
												onblur="mayusculas(this.name)"></textarea>
												<label class="etiqueta" id="error19chofer1" for="municipio">REFERENCIA DE
												DOMICILIO</label>
									</div>
								</div>
							</div>
							</div>
							<div id="step-3" class="">
							<div class="container">
								<div class="row">
									<div class="col-md-6">								
											<input  onkeyup="mayusculas(this);" type="email" autocomplete="off" class="form-control"
												name="inputcorreochofer1" id="inputcorreochofer1" required minlength="10"
												maxlength="50" onblur="mayusculas(this.name)">
												<label class="etiqueta" id="error20chofer1" for="correo">CORREO
												ELECTRONICO</label>
									</div>
									<div class="col-md-6">									
												<select  onkeyup="mayusculas(this);" id="Matchofer1" class="form-control form-control-sm" name="Matchofer1"
												required>
												<option value="">SELECCIONAR VEHICULO</option>
												<?php foreach ($registros as $fila10): ?>
												<option value="<?php echo $fila10['Matricula'] ?>">
													<?php echo $fila10['Matricula'] ?>
												</option>
												<?php endforeach; ?>
											</select>
											<label class="etiqueta" id="error23chofer1" for="inputprvilegios">VEHICULO A
												CONDUCIR</label>
									</div>									
								</div>
								<div class="row">
									<div class="col-md-12">
									<input type="text" class="sr-only" id="Fotograf1" name="Fotograf1">
										<input type="text" class="sr-only" id="Id_chof1" name="Id_chof1">
										
										<input type="file" class="inputfile1" name="your_picturchofer1"
											id="your_picturechofer1" onchange="readURL6(this);"> <br>
										<label for="your_picturchofer">
											<figure>
												<img name="img1" id="img1" src="../img/your-picture.png" alt=""
													class="foto_reg_sol">
											</figure>
										</label><br>
										<span class="glyphicon glyphicon-camera"></span>
										<span id="error24chofer" class="file-button">FOTOGRAFIA ACTUAL</span>
									</div>
								</div>
							</div>
							</div>
						</div>
						<!-- <button type="submit" name="button">Registrar</button> -->
				</form>
			</div>
		</div>
	</div>
</div>
</div>
</div>