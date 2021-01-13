<?php
 if ($_FILES["your_picturprov11"]['tmp_name']!="") {
//Sie no esta vacio el file

$file = $_FILES["your_picturprov11"];
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
$nombre = $_POST['inputproveedor2'];
$apellido_pa = $_POST['inputapellidopaternoproveedor2'];
$apellido_ma = $_POST['inputapellidomaternoproveedor2'];
$curp = $_POST['inputcurpproveedor2'];
$Licencia = $_POST['inputrfcproveedor2'];
$estudios = $_POST['inputestudiosproveedor2'];
$telefono = $_POST['inputcelproveedor2'];
$edo_civil = $_POST['inputedocivilproveedor2'];
$sexo = $_POST['inputsexoproveedor2'];
$fecha_nac = $_POST['fechaRegproveedor2'];
$rfc = $_POST['inputrfcproveedor2'];
$calle = $_POST['calleproveedor2'];
$colonia = $_POST['coloniaproveedor2'];
$num_int = $_POST['No_interiorproveedor2'];
$num_ext = $_POST['No_exteriorproveedor2'];
$cp = $_POST['cpproveedor2'];
$localidad = $_POST['localidadproveedor2'];
$municipio = $_POST['municipioproveedor2'];
$descripcion = $_POST['inputdescripcionproveedor2'];
$usuario = $_POST['inputcorreoproveedor2'];
$serv = $_POST['inputservproveedor2'];
$Id_prov= $_POST['Id_prov'];
$Tipo='1';
$ruta=$_POST['Fotografprov11'];
require("../conexion/conexion.php");
$query = $conexion->prepare("UPDATE tbl_proveedores_fisicos SET Nombre=?, Apellido_Paterno=?, Apellido_Materno=?, CURP=?, Sexo=?,  Fotografia=?, RFC=?, Estado_civil=?, Fecha_Reg=?, Telefono=?, Estudios=?, Calle=?, Colonia=?, Num_int=?, Num_ext=?, Localidad=?, Municipio=?, Referencia=?, CP=?, Correo=?, Servicio=?, Tipo=? WHERE Id_Proveedor=?");
$result = $query->execute([ $nombre, $apellido_pa,$apellido_ma, $curp, $sexo, $ruta, $rfc, $edo_civil, $fecha_nac, $telefono, $estudios, $calle, $colonia, $num_int, $num_ext, $localidad, $municipio, $descripcion, $cp,  $usuario,  $serv, $Tipo, $Id_prov]);

if($result==true){ 
  echo 1;
} else { 
  echo 0;
  }
}
 
}else{
// si esta vacio el file
$nombre = $_POST['inputproveedor2'];
$apellido_pa = $_POST['inputapellidopaternoproveedor2'];
$apellido_ma = $_POST['inputapellidomaternoproveedor2'];
$curp = $_POST['inputcurpproveedor2'];
$Licencia = $_POST['inputrfcproveedor2'];
$estudios = $_POST['inputestudiosproveedor2'];
$telefono = $_POST['inputcelproveedor2'];
$edo_civil = $_POST['inputedocivilproveedor2'];
$sexo = $_POST['inputsexoproveedor2'];
$fecha_nac = $_POST['fechaRegproveedor2'];
$rfc = $_POST['inputrfcproveedor2'];
$calle = $_POST['calleproveedor2'];
$colonia = $_POST['coloniaproveedor2'];
$num_int = $_POST['No_interiorproveedor2'];
$num_ext = $_POST['No_exteriorproveedor2'];
$cp = $_POST['cpproveedor2'];
$localidad = $_POST['localidadproveedor2'];
$municipio = $_POST['municipioproveedor2'];
$descripcion = $_POST['inputdescripcionproveedor2'];
$usuario = $_POST['inputcorreoproveedor2'];
$serv = $_POST['inputservproveedor2'];
$Id_prov= $_POST['Id_prov'];

$Tipo='1';
$ruta=$_POST['Fotografprov11'];
require("../conexion/conexion.php");
$query = $conexion->prepare("UPDATE tbl_proveedores_fisicos SET Nombre=?, Apellido_Paterno=?, Apellido_Materno=?, CURP=?, Sexo=?,  Fotografia=?, RFC=?, Estado_civil=?, Fecha_Reg=?, Telefono=?, Estudios=?, Calle=?, Colonia=?, Num_int=?, Num_ext=?, Localidad=?, Municipio=?, Referencia=?, CP=?, Correo=?, Servicio=?, Tipo=? WHERE Id_Proveedor=?");
$result = $query->execute([ $nombre, $apellido_pa,$apellido_ma, $curp, $sexo, $ruta, $rfc, $edo_civil, $fecha_nac, $telefono, $estudios, $calle, $colonia, $num_int, $num_ext, $localidad, $municipio, $descripcion, $cp,  $usuario,  $serv, $Tipo, $Id_prov]);

if($result==true){ 
  echo 1;
} else { 
  echo 0;
  }
 

 
}
?>