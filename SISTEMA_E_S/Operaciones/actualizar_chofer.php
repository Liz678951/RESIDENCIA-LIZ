<?php
 if ($_FILES["your_picturchofer1"]['tmp_name']!="") {
//Sie no esta vacio el file

$file = $_FILES["your_picturchofer1"];
$archivo = $file["name"];
$tipo = $file["type"];
$ruta_provisional = $file["tmp_name"];
$size = $file["size"];
$dimensiones = getimagesize($ruta_provisional);
$width = $dimensiones[0];
$height = $dimensiones[1];
$carpeta = "../Choferes/";
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
$nombre = $_POST['inputchofer1'];
$apellido_pa = $_POST['inputapellidopaternochofer1'];
$apellido_ma = $_POST['inputapellidomaternochofer1'];
$curp = $_POST['inputcurpchofer1'];
$Licencia = $_POST['inputlicchofer1'];
$estudios = $_POST['inputestudioschofer1'];
$telefono = $_POST['inputcelchofer1'];
$edo_civil = $_POST['inputedocivilchofer1'];
$sexo = $_POST['inputsexochofer1'];
$fecha_nac = $_POST['fechaNacchofer1'];

$calle = $_POST['callechofer1'];
$colonia = $_POST['coloniachofer1'];
$num_int = $_POST['No_interiorchofer1'];
$num_ext = $_POST['No_exteriorchofer1'];
$localidad = $_POST['localidadchofer1'];
$municipio = $_POST['municipiochofer1'];
$descripcion = $_POST['inputdescripcionchofer1'];
$rfc=$_POST['inputlicchofer1'];

$usuario = $_POST['inputcorreochofer1'];
$Vehiculo = $_POST['Matchofer1'];
$ocupacion = $_POST['inputocupacionchofer1'];
$cp = $_POST['cpchofer1'];
$Id_chof= $_POST['Id_chof1'];
$ruta=$_POST['Fotograf1'];
require("../conexion/conexion.php");
$query = $conexion->prepare("UPDATE tbl_choferes SET Nombre=?, Apellido_Paterno=?, Apellido_Materno=?, CURP=?, Sexo=?,  Fotografia=?, Licencia=?, Estado_civil=?, Fecha_Nac=?, Telefono=?, Estudios=?, Ocupacion=?, Calle=?, Colonia=?, Num_int=?, Num_ext=?, Localidad=?, Municipio=?, CP=?, Referencia=?, Vehiculo=?, Correo=? WHERE Id_chofer=?");
$result = $query->execute([ $nombre, $apellido_pa,$apellido_ma, $curp, $sexo, $ruta, $rfc, $edo_civil, $fecha_nac, $telefono, $estudios, $ocupacion, $calle, $colonia, $num_int, $num_ext, $localidad, $municipio, $cp, $descripcion,  $Vehiculo, $usuario, $Id_chof ]);

if($result==true){ 
  echo 1;
} else { 
  echo 0;
  }
}
 
}else{
//si esta vacio el file
$nombre = $_POST['inputchofer1'];
$apellido_pa = $_POST['inputapellidopaternochofer1'];
$apellido_ma = $_POST['inputapellidomaternochofer1'];
$curp = $_POST['inputcurpchofer1'];
$Licencia = $_POST['inputlicchofer1'];
$estudios = $_POST['inputestudioschofer1'];
$telefono = $_POST['inputcelchofer1'];
$edo_civil = $_POST['inputedocivilchofer1'];
$sexo = $_POST['inputsexochofer1'];
$fecha_nac = $_POST['fechaNacchofer1'];

$calle = $_POST['callechofer1'];
$colonia = $_POST['coloniachofer1'];
$num_int = $_POST['No_interiorchofer1'];
$num_ext = $_POST['No_exteriorchofer1'];
$localidad = $_POST['localidadchofer1'];
$municipio = $_POST['municipiochofer1'];
$descripcion = $_POST['inputdescripcionchofer1'];
$rfc=$_POST['inputlicchofer1'];

$usuario = $_POST['inputcorreochofer1'];
$Vehiculo = $_POST['Matchofer1'];
$ocupacion = $_POST['inputocupacionchofer1'];
$cp = $_POST['cpchofer1'];
$Id_chof= $_POST['Id_chof1'];
$ruta=$_POST['Fotograf1'];
require("../conexion/conexion.php");
$query = $conexion->prepare("UPDATE tbl_choferes SET Nombre=?, Apellido_Paterno=?, Apellido_Materno=?, CURP=?, Sexo=?,  Fotografia=?, Licencia=?, Estado_civil=?, Fecha_Nac=?, Telefono=?, Estudios=?, Ocupacion=?, Calle=?, Colonia=?, Num_int=?, Num_ext=?, Localidad=?, Municipio=?, CP=?, Referencia=?, Vehiculo=?, Correo=? WHERE Id_chofer=?");
$result = $query->execute([ $nombre, $apellido_pa,$apellido_ma, $curp, $sexo, $ruta, $rfc, $edo_civil, $fecha_nac, $telefono, $estudios, $ocupacion, $calle, $colonia, $num_int, $num_ext, $localidad, $municipio, $cp, $descripcion,  $Vehiculo, $usuario, $Id_chof ]);

if($result==true){ 
  echo 1;
} else { 
  echo 0;
  }
 

 
}
?>