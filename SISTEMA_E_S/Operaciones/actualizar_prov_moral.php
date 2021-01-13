<?php
 if ($_FILES["your_picturprov3"]['tmp_name']!="") {
//Sie no esta vacio el file

$file = $_FILES["your_picturprov3"];
$archivo = $file["name"];
$tipo = $file["type"];
$ruta_provisional = $file["tmp_name"];
$size = $file["size"];
$dimensiones = getimagesize($ruta_provisional);
$width = $dimensiones[0];
$height = $dimensiones[1];
$carpeta = "../Proveedores/";
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
$nombre = $_POST['inputprov3'];
$rfc = $_POST['inputrfcprov3'];
$telefono = $_POST['inputcelprov3'];
$fecha_reg = $_POST['fechaRegProv3'];
$calle = $_POST['calleprov3'];
$colonia = $_POST['coloniaprov3'];
$num_int = $_POST['No_interiorprov3'];
$num_ext = $_POST['No_exteriorprov3'];
$cp = $_POST['cpprov3'];
$localidad = $_POST['localidadprov3'];
$municipio = $_POST['municipioprov3'];
$descripcion = $_POST['inputdescripcionprov3'];
$usuario = $_POST['inputcorreoprov3'];
$serv = $_POST['servicioprov3'];
$Id_prov= $_POST['Id_prov3'];
$Tipo='2';
$ruta=$_POST['Fotografprov3'];
require("../conexion/conexion.php");
$query = $conexion->prepare("UPDATE tbl_proveedores_morales SET Nombre=?, RFC=?, Telefono=?, Fecha_Registro=?, Calle=?, Colonia=?, NI=?, NE=?, CP=?,  Municipio=?, Localidad=?,  Referencia=?, Correo=?, Servicio=?, Tipo=?, Fotografia=? WHERE Id_Proveedor=?");
$result = $query->execute([ $nombre, $rfc,  $telefono, $fecha_reg, $calle, $colonia, $num_int, $num_ext, $cp, $municipio,  $localidad, $descripcion,  $usuario,  $serv, $Tipo, $ruta, $Id_prov]);

if($result==true){ 
  echo 1;
} else { 
  echo 0;
  }
}
 
}else{
// si esta vacio el file
$nombre = $_POST['inputprov3'];
$rfc = $_POST['inputrfcprov3'];
$telefono = $_POST['inputcelprov3'];
$fecha_reg = $_POST['fechaRegProv3'];
$calle = $_POST['calleprov3'];
$colonia = $_POST['coloniaprov3'];
$num_int = $_POST['No_interiorprov3'];
$num_ext = $_POST['No_exteriorprov3'];
$cp = $_POST['cpprov3'];
$localidad = $_POST['localidadprov3'];
$municipio = $_POST['municipioprov3'];
$descripcion = $_POST['inputdescripcionprov3'];
$usuario = $_POST['inputcorreoprov3'];
$serv = $_POST['servicioprov3'];
$Id_prov= $_POST['Id_prov3'];

$Tipo='2';
$ruta=$_POST['Fotografprov3'];
require("../conexion/conexion.php");
$query = $conexion->prepare("UPDATE tbl_proveedores_morales SET Nombre=?, RFC=?, Telefono=?, Fecha_Registro=?, Calle=?, Colonia=?, NI=?, NE=?, CP=?,  Municipio=?, Localidad=?,  Referencia=?, Correo=?, Servicio=?, Tipo=?, Fotografia=? WHERE Id_Proveedor=?");
$result = $query->execute([ $nombre, $rfc,  $telefono, $fecha_reg, $calle, $colonia, $num_int, $num_ext, $cp, $municipio,  $localidad, $descripcion,  $usuario,  $serv, $Tipo, $ruta, $Id_prov]);
if($result==true){ 
  echo 1;
} else { 
  echo 0;
  }
 

 
}
?>