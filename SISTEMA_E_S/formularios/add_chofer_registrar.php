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
<div class="modal fade" id="registrar_solicitante" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
		<div id="mod_empleado" class="modal-content">
			<div class="modal-header" id="modal-header">
				<!-- <a class="logo_apoyo_1"></a><br> -->
				<h1 class="title_apoyo1">REGISTRAR CHOFER</h1>
			</div>

			<div class="modal-body">
				<form method="POST" id="formchofer" name="formchofer" action="javascript:()"
					enctype="multipart/form-data">
					<div id="smartwizard">
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
		<input type="text" id="inputchofer" name="inputchofer" autocomplete="off" class="form-control" required minlength="3" maxlength="30" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{4,25}"
			title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"  onkeyup="mayusculas(this);">
			<label class="etiqueta" id="error1chofer" for="inputusuarios">NOMBRE(S)</label>
		</div>
		<div class="col-md-4">
		<input type="text" id="inputapellidopaternochofer" name="inputapellidopaternochofer" class="form-control" autocomplete="off" required minlength="3" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="30" required
			title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"  onkeyup="mayusculas(this);">
			<label class="etiqueta" id="error2chofer" for="inputapellidopaterno">APELLLIDO PATERNO</label>
		</div>
		<div class="col-md-4">
		<input type="text" id="inputapellidomaternochofer" name="inputapellidomaternochofer" class="form-control" autocomplete="off" required minlength="3" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="30" required
			title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 20"  onkeyup="mayusculas(this);">
			<label class="etiqueta" id="error3chofer"	for="inputapellidomaterno">APELLIDO MATERNO</label>
		</div>
	</div>
	<div class="row">
		<div class="col-md-4">
		<input type="date" id="fechaNacchofer" class="form-control" name="fechaNacchofer" max="2001-01-01" min="1961-01-01" required title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"  onkeyup="mayusculas(this);">
		<label class="etiqueta1" id="error11chofer" class="form-control" 	for="fechaNac">FECHA DE NACIMIENTO</label>
		</div>
		<div class="col-md-4">
		
			<input type="text" id="inputcurpchofer" name="inputcurpchofer" autocomplete="off" class="form-control" required minlength="18" maxlength="19" required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{3,25}"
				title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 18"  onkeyup="mayusculas(this);">
				<label class="etiqueta" id="error4chofer" for="inputcurp">CURP</label>
		</div>
		<div class="col-md-4">		
		<input type="text" id="inputlicchofer" name="inputlicchofer" autocomplete="off" class="form-control" required minlength="10" maxlength="10" required pattern="[a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{3,25}" title="Solo se permiten Letras mayusculas. Tamaño mínimo: 3. Tamaño máximo: 10" 	 onkeyup="mayusculas(this);">
		<label class="etiqueta" id="error5chofer" for="inputRfc">CODIGO DE LICENCIA</label>	
	</div>
	</div>
	<div class="row">
		<div class="col-md-3">
		<select id="inputedocivilchofer" class="form-control form-control-sm" name="inputedocivilchofer" required>
			<option value=""> SELECCIONAR</option>
			<option value="CASADO(A)">CASADO(A)</option>
			<option value="SOLTERO(A)">SOLTERO(A)</option>
			<option value="VIUDO(A)">VIUDO(A)</option>
			<option value="DIVORCIADO(A)">DIVORCIADO(A)</option>
		</select>
		<label class="etiqueta1" id="error6chofer" class="form-control" for="fechaNac">ESTADO CIVIL</label>
		</div>
		<div class="col-md-3">
		<select id="inputsexochofer" class="form-control form-control-sm" name="inputsexochofer"
			required>
			<option value="">SELECCIONAR</option>
			<option value="M">MASCULINO</option>
			<option value="F">FEMENINO</option>
		</select>
		<label class="etiqueta1" id="error7chofer" class="form-control" for="fechaNac">SEXO</label>
		</div>
		<div class="col-md-3">
		<select id="inputestudioschofer" name="inputestudioschofer" class="form-control form-control-sm" name="inputestudios" required>
			<option value="">SELECCIONAR</option>
			<option value="N">NINGUNO</option>
			<option value="PRIMARIA">PRIMARIA</option>
			<option value="SECUNDARIA">SECUNDARIA</option>
			<option value="BACHILLERATO">BACHILLERATO</option>
			<option value="LICENCIATURA">LICENCIATURA</option>
		</select>
		<label class="etiqueta1" id="error8chofer" class="form-control" for="fechaNac">NIVEL DE ESTUDIOS</label>
		</div>
		<div class="col-md-3">		
		<input type="text" id="inputcelchofer" name="inputcelchofer" class="form-control" autocomplete="off" required minlength="10" maxlength="10" required pattern="[1-9]+" title="Solo se permiten Numeros. Tamaño mínimo: 10. Tamaño máximo: 10"  onkeyup="mayusculas(this);">
		<label class="etiqueta" id="error10chofer" class="form-control" for="inputcelchofer">TELEFONO</label>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">		
		<input onkeyup="mayusculas(this);" type="text" id="inputocupacionchofer" name="inputocupacionchofer" class="form-control" autocomplete="off" required minlength="7" maxlength="30" required pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" title="Solo se permiten Letras mayusculas. Tamaño mínimo: 7. Tamaño máximo: 20"  onkeyup="mayusculas(this);">
		<label class="etiqueta" id="error9chofer" class="form-control"	for="inputocupacion">OCUPACION EXTRA</label>
	</div>
	</div>
</div>					
</div>
<div id="step-2" class="">
	<div class="container">
		<div class="row">
		<div class="col-md-4">		
			<select id="municipiochofer" class="form-control form-control-sm" name="municipiochofer"
				required>
				<option value="">SELECCIONAR MUNICIPIO</option>
				<option value="TOLUCA">TOLUCA</option>
			</select>
			<label class="etiqueta" id="error17chofer" for="municipio">MUNICIPIO</label>
		</div>
		<div class="col-md-4">
		<select id="localidadchofer" class="form-control" name="localidadchofer" required>
				<option value="">SELECCIONAR LOCALIDAD</option>
				<?php foreach ($registros1 as $fila1): ?>
				<option value="<?php echo $fila1['Localidad'] ?>">
					<?php echo $fila1['Localidad'] ?>
				</option>
				<?php endforeach; ?>
			</select>
			<label class="etiqueta" id="error18chofer" for="localidad">LOCALIDAD</label>
		</div>
		<div class="col-md-4">
		<input  type="text" autocomplete="off" class="form-control" name="callechofer" id="callechofer" required minlength="7" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="40" title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"  onkeyup="mayusculas(this);">
		<label class="etiqueta" id="error12chofer" for="calle">CALLE</label>
		</div>
		</div>
		<div class="row">
			<div class="col-md-6">
			<input type="text" autocomplete="off" class="form-control" name="coloniachofer" id="coloniachofer" required minlength="7" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" maxlength="40" title="Solo se permiten letras. Tamaño mínimo: 10. Tamaño máximo: 10"  onkeyup="mayusculas(this);">
			<label class="etiqueta" id="error13chofer" for="colonia">COLONIA</label>
		</div>
		<div class="col-md-2">
			<input type="text" autocomplete="off" class="form-control" name="cpchofer" id="cpchofer" required minlength="5" maxlength="6" pattern="[0-9]{5,6}" title="Solo se permiten Numeros. Tamaño mínimo: 5. Tamaño máximo: 6"  onkeyup="mayusculas(this);">
			<label class="etiqueta" id="error16chofer" for="No_exte">CODIGO POSTAL</label>
		</div>
		<div class="col-md-2">
			<input type="text" autocomplete="off" class="form-control" name="No_interiorchofer" id="No_interiorchofer" minlength="2" required maxlength="20" pattern="[A-Z0-9]+" title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"  onkeyup="mayusculas(this);">
			<label class="etiqueta" id="error14chofer" for="No_inte">NI</label>
		</div>
		<div class="col-md-2">
			<input type="text" autocomplete="off" class="form-control" name="No_exteriorchofer" id="No_exteriorchofer" minlength="2" required maxlength="20" pattern="[A-Z0-9]+" title="Solo se permiten Numeros o SN. Tamaño mínimo: 2. Tamaño máximo: 10"  onkeyup="mayusculas(this);">
			<label class="etiqueta" id="error15chofer" for="No_exte">NE</label>
		</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<textarea name="inputdescripcionchofer" class="form-control" id="refchofer" cols="100" pattern="[a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,25}" placeholder="REFERENCIA DE UBICACIÓN" rows="4" minlength="2" required maxlength="120" pattern="[A-Z0-9]+" title="Solo se permiten Numeros o letras. Tamaño mínimo: 1. Tamaño máximo: 100"  onkeyup="mayusculas(this);"></textarea>
				<label class="etiqueta" id="error19chofer" for="municipio">REFERENCIA DE DOMICILIO</label>
			</div>
		</div>
	</div>
</div>
							<div id="step-3" class="">
<div class="container">
	<div class="row">
		<div class="col-md-6">	
	<input type="email" autocomplete="off" class="form-control" name="inputcorreochofer" id="inputcorreochofer" required minlength="10" maxlength="50"  onkeyup="mayusculas(this);">
	<label class="etiqueta" id="error20chofer" for="correo">CORREO ELECTRONICO</label>		
</div>
		<div class="col-md-6">		
	<select name="inputmatriculachofer" class="form-control form-control-sm" id="inputmatriculachofer" required> 
		<option value="">SELECCIONAR MATRICULA</option> <?php foreach ($registros2 as $fila2): ?> 
			<option value="<?php echo $fila2['Id_camion'] ?>"> 	<?php echo $fila2['Matricula'] ?> </option> <?php endforeach; ?>
	</select>
	<label class="etiqueta" id="error23chofer" for="inputprvilegios">VEHICULO A CONDUCIR</label>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
		<input type="file" class="inputfile" name="your_picturchofer" id="your_picturechofer" onchange="readURL3(this);"><br>
		<label for="your_picturchofer">
			<figure>
				<img name="img" id="img" src="../img/your-picture.png" alt=""class="foto_reg_sol">
			</figure>
		</label><br>
		<span class="glyphicon glyphicon-camera"></span>
		<span id="error24chofer" class="file-button">SELECCIONAR FOTOGRAFIA</span>

		</div>
	</div>
</div>

								<!-- <div class="form-row">
									<div class="form-group">
										<div class="col-md-6">
											
										</div>

									</div>
									<div class="form-group">
										<div class="col-md-6">
											
										</div>
										<div class="col-md-6">
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="col-md-12"> 
										
									
									</div>
								</div> -->
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