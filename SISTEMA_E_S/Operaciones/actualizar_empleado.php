<?php
 if ($_FILES["your_pictur11"]['tmp_name']!="") {
//Sie no esta vacio el file

$file = $_FILES["your_pictur11"];
$archivo = $file["name"];
$tipo = $file["type"];
$ruta_provisional = $file["tmp_name"];
$size = $file["size"];
$dimensiones = getimagesize($ruta_provisional);
$width = $dimensiones[0];
$height = $dimensiones[1];
$carpeta = "../Empleados/";
if ($tipo != 'image/jpg' && $tipo != 'image/jpeg' && $tipo != 'image/png' && $tipo != 'image/gif')
{
echo "Error, el archivo no es una imagen";
}
else if ($size > 9024*9024)
{
echo "Error, el tamaño máximo permitido es un 1MB";
}
else if ($width > 5000 || $height > 5000)
{
  echo "Error la anchura y la altura maxima permitida es 500px";
}
else if($width < 100 || $height < 100)
{
  echo "Error la anchura y la altura mínima permitida es 60px";
}
else
{
  $src = $carpeta.$archivo;
  move_uploaded_file($ruta_provisional, $src);
$nombre = $_POST['inputusuario11'];
$apellido_pa = $_POST['inputapellidopaterno11'];
$apellido_ma = $_POST['inputapellidomaterno11'];
$curp = $_POST['inputcurp11'];
$Licencia = $_POST['inputrfc11'];
$estudios = $_POST['inputestudios11'];
$telefono = $_POST['inputcel11'];
$edo_civil = $_POST['inputedocivil11'];
$sexo = $_POST['inputsexo11'];
$fecha_nac = $_POST['fechaNac11'];
$Ocupacion = $_POST['inputocupacion11'];
$rfc = $_POST['inputrfc11'];
$calle = $_POST['calle11'];
$colonia = $_POST['colonia11'];
$num_int = $_POST['No_interior11'];
$num_ext = $_POST['No_exterior11'];
$cp = $_POST['cp11'];
$localidad = $_POST['localidad11'];
$municipio = $_POST['municipio11'];
$descripcion = $_POST['inputdescripcion11'];
$contraseña1=$_POST['inputpass11'];
$contraseña2 = $_POST['inputpass21'];
$usuario = $_POST['inputcorreo11'];
$priv = $_POST['inputprivilegios11'];
$Id_emp= $_POST['Id_emp'];

$ruta=$_POST['Fotografemp'];
require("../conexion/conexion.php");
$query = $conexion->prepare("UPDATE tbl_empleados SET Nombre=?, Apellido_Paterno=?, Apellido_Materno=?, CURP=?, Sexo=?,  Fotografia=?, RFC=?, Estado_civil=?, Fecha_Nac=?, Telefono=?, Estudios=?, Calle=?, Colonia=?, Num_int=?, Num_ext=?, Localidad=?, Municipio=?, Referencia=?, CP=?, Correo=?, Passw=? , Privilegios=?, Ocupacion=? WHERE Id_empleado=?");
$result = $query->execute([ $nombre, $apellido_pa,$apellido_ma, $curp, $sexo, $ruta, $rfc, $edo_civil, $fecha_nac, $telefono, $estudios, $calle, $colonia, $num_int, $num_ext, $localidad, $municipio, $descripcion, $cp,  $usuario, $contraseña1, $priv, $Ocupacion, $Id_emp]);

if($result==true){ 
  echo 1;
} else { 
  echo 0;
  }
}
 
}else{
// si esta vacio el file
$nombre = $_POST['inputusuario11'];
$apellido_pa = $_POST['inputapellidopaterno11'];
$apellido_ma = $_POST['inputapellidomaterno11'];
$curp = $_POST['inputcurp11'];
$rfc = $_POST['inputrfc11'];
$estudios = $_POST['inputestudios11'];
$telefono = $_POST['inputcel11'];
$edo_civil = $_POST['inputedocivil11'];
$sexo = $_POST['inputsexo11'];
$fecha_nac = $_POST['fechaNac11'];
$Ocupacion = $_POST['inputocupacion11'];

$calle = $_POST['calle11'];
$colonia = $_POST['colonia11'];
$num_int = $_POST['No_interior11'];
$num_ext = $_POST['No_exterior11'];
$cp = $_POST['cp11'];
$localidad = $_POST['localidad11'];
$municipio = $_POST['municipio11'];
$descripcion = $_POST['inputdescripcion11'];
$contraseña1=$_POST['inputpass11'];
$contraseña2 = $_POST['inputpass21'];
$usuario = $_POST['inputcorreo11'];
$priv = $_POST['inputprivilegios11'];
$Id_emp= $_POST['Id_emp'];

$ruta=$_POST['Fotografemp'];
require("../conexion/conexion.php");
$query = $conexion->prepare("UPDATE tbl_empleados SET Nombre=?, Apellido_Paterno=?, Apellido_Materno=?, CURP=?, Sexo=?,  Fotografia=?, RFC=?, Estado_civil=?, Fecha_Nac=?, Telefono=?, Estudios=?,  Calle=?, Colonia=?, Num_int=?, Num_ext=?, Localidad=?, Municipio=?, Referencia=?,CP=?,  Correo=?, Passw=?, Privilegios=?, Ocupacion=? WHERE Id_empleado=?");
$result = $query->execute([ $nombre, $apellido_pa,$apellido_ma, $curp, $sexo, $ruta, $rfc, $edo_civil, $fecha_nac, $telefono, $estudios, $calle, $colonia, $num_int, $num_ext, $localidad, $municipio, $descripcion, $cp,  $usuario, $contraseña1,$priv,  $Ocupacion,  $Id_emp ]);

if($result==true){ 
  echo 1;
} else { 
  echo 0;
  }
 

 
}
?>