<?php

if (isset($_FILES["your_picturproveedor"]))
{
  $nombre = $_POST['inputproveedor'];
  $apellido_pa = $_POST['inputapellidopaternoproveedor'];
  $apellido_ma = $_POST['inputapellidomaternoproveedor'];
  $curp = $_POST['inputcurpproveedor'];
  $rfc = $_POST['inputrfcproveedor'];
  $estudios = $_POST['inputestudiosproveedor'];
  $telefono = $_POST['inputcelproveedor'];
  $edo_civil = $_POST['inputedocivilproveedor'];
  $sexo = $_POST['inputsexoproveedor'];
  $fecha_reg = $_POST['fechaRegproveedor'];
  
  $calle = $_POST['calleproveedor'];
  $colonia = $_POST['coloniaproveedor'];
  $num_int = $_POST['No_interiorproveedor'];
  $num_ext = $_POST['No_exteriorproveedor'];
  $localidad = $_POST['localidadproveedor'];
  $municipio = $_POST['municipioproveedor'];
  $descripcion = $_POST['inputdescripcionproveedor'];
  
  $Serv = $_POST['inputservproveedor'];
  $usuario = $_POST['inputcorreoproveedor'];
  $cargo = $_POST['inputprivilegiosproveedor'];
  // $area_trabajo = $_POST['inputocupacionproveedor'];
  $cp = $_POST['cpproveedor'];
  // echo 1;
 
    $file = $_FILES["your_picturproveedor"];
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
      require("../conexion/conexion.php");
    
      $sql = "INSERT INTO tbl_proveedores_fisicos(Id_Proveedor, Nombre, Apellido_Paterno, Apellido_Materno, CURP, Sexo,  Fotografia, RFC, Estado_civil, Fecha_Reg, Telefono, Estudios,  Calle, Colonia, Num_int, Num_ext, Localidad, Municipio, Referencia, CP,  Correo, Servicio, Tipo) VALUES (:Id_proveedor, :Nombre, :Apellido_Paterno, :Apellido_Materno, :CURP, :Sexo,  :Fotografia, :RFC, :Estado_civil, :Fecha_Reg, :Telefono, :Estudios,  :Calle, :Colonia, :Num_int, :Num_ext, :Localidad, :Municipio, :Referencia, :CP,  :Correo, :Servicio, :Tipo)";
      $result =$conexion->prepare($sql);
      $result->execute(array(":Id_proveedor"=>NULL,":Nombre"=>$nombre, ":Apellido_Paterno"=>$apellido_pa, ":Apellido_Materno"=>$apellido_ma, ":CURP"=>$curp, ":Sexo"=>$sexo, ":Fotografia"=>$src, ":RFC"=>$rfc, ":Estado_civil"=>$edo_civil, ":Fecha_Reg"=>$fecha_reg,":Telefono"=>$telefono,":Estudios"=>$estudios, ":Calle"=>$calle, ":Colonia"=>$colonia, ":Num_int"=>$num_int, ":Num_ext"=>$num_ext, ":Localidad"=>$localidad, ":Municipio"=>$municipio, ":Referencia"=>$descripcion, ":CP"=>$cp,  ":Correo"=>$usuario, ":Servicio"=>$Serv, ":Tipo"=>$cargo));
          if($result==true){ 
            echo 1;
          } else { 
            echo 0;
          }
    }
}
?>