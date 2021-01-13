<?php
if (isset($_FILES["your_picturprov"]))
{
  $nombre = $_POST['inputprov'];
  $rfc = $_POST['inputrfcprov'];
  $telefono = $_POST['inputcelprov'];
  $fecha_reg = $_POST['fechaRegProv'];
  
  $calle = $_POST['calleprov'];
  $colonia = $_POST['coloniaprov'];
  $num_int = $_POST['No_interiorprov'];
  $num_ext = $_POST['No_exteriorprov'];
  $localidad = $_POST['localidadprov'];
  $municipio = $_POST['municipioprov'];
  $descripcion = $_POST['inputdescripcionprov'];
  
  $Serv = $_POST['servicioprov'];
  $usuario = $_POST['inputcorreoprov'];
  $cargo = $_POST['inputprivilegiosp'];
  $cp = $_POST['cpprov'];
  // echo 1;
 
    $file = $_FILES["your_picturprov"];
    $archivo = $file["name"];
    $tipo = $file["type"];
    $ruta_provisional = $file["tmp_name"];
    $size = $file["size"];
    $dimensiones = getimagesize($ruta_provisional);
    $width = $dimensiones[0];
    $height = $dimensiones[1];
    $carpeta = "../Proveedores/";
    // echo $nombre . " ".  $apellido_pa . " ".  $apellido_ma . " ".  $curp . " ". $rfc . " ". $estudios . " ". $telefono . " ". $edo_civil . " ". $sexo . " ". $fecha_nac . " ".$calle . " ". $colonia . " ". $num_int . " ". $num_ext . " ". $localidad . " ". $municipio . " ". $descripcion . " ".$password . " ". $usuario . " ". $cargo . " ". $cader . " ". $area_trabajo . " ". $cp. " ". $archivo;
    if ($tipo != 'image/jpg' && $tipo != 'image/jpeg' && $tipo != 'image/png' && $tipo != 'image/gif')
    {
      echo "Error, el archivo no es una imagen"; 
    }
    else if ($size > 90224*90224)
    {
      echo "Error, el tamaño máximo permitido es un 1MB";
    }
    else if ($width > 52000 || $height > 52000)
    {
        echo "Error la anchura y la altura maxima permitida es 500px";
    }
    else if($width < 10 || $height < 10)
    {
        echo "Error la anchura y la altura mínima permitida es 60px";
    }
    else
    {

      $src = $carpeta.$archivo;
      move_uploaded_file($ruta_provisional, $src);
      require("../conexion/conexion.php");
    
      $sql = "INSERT INTO tbl_proveedores_morales(Id_Proveedor, Nombre,  RFC, Telefono, Fecha_Registro,  Calle, Colonia, NI, NE, CP, Municipio, Localidad,  Referencia,  Correo, Servicio, Tipo, Fotografia) VALUES (:Id_Proveedor, :Nombre,  :RFC, :Telefono, :Fecha_Registro,  :Calle, :Colonia, :NI, :NE, :CP, :Municipio, :Localidad,  :Referencia,  :Correo, :Servicio, :Tipo, :Fotografia)";
      $result =$conexion->prepare($sql);
      $result->execute(array(":Id_Proveedor"=>NULL,":Nombre"=>$nombre,  ":RFC"=>$rfc, ":Telefono"=>$telefono,":Fecha_Registro"=>$fecha_reg, ":Calle"=>$calle, ":Colonia"=>$colonia, ":NI"=>$num_int, ":NE"=>$num_ext, ":CP"=>$cp, ":Municipio"=>$municipio, ":Localidad"=>$localidad,  ":Referencia"=>$descripcion,   ":Correo"=>$usuario, ":Servicio"=>$Serv, ":Tipo"=>$cargo,":Fotografia"=>$src,));
          if($result==true){ 
            echo 1;
          } else { 
            echo 0;
          }
    }
}
?>