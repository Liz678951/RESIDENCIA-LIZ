<?php
if (isset($_FILES["your_pictur"]))
{
  $nombre = $_POST['inputusuario'];
  $apellido_pa = $_POST['inputapellidopaterno'];
  $apellido_ma = $_POST['inputapellidomaterno'];
  $curp = $_POST['inputcurp'];
  $rfc = $_POST['inputrfc'];
  $estudios = $_POST['inputestudios'];
  $telefono = $_POST['inputcel'];
  $edo_civil = $_POST['inputedocivil'];
  $sexo = $_POST['inputsexo'];
  $fecha_nac = $_POST['fechaNac'];
  
  $calle = $_POST['calle'];
  $colonia = $_POST['colonia'];
  $num_int = $_POST['No_interior'];
  $num_ext = $_POST['No_exterior'];
  $localidad = $_POST['localidad'];
  $municipio = $_POST['municipio'];
  $descripcion = $_POST['inputdescripcion'];
  
  $password = $_POST['inputpass2'];
  $usuario = $_POST['inputcorreo'];
  $cargo = $_POST['inputprivilegios'];
  $area_trabajo = $_POST['inputocupacion'];
  $cp = $_POST['cp'];
  // echo 1;
 
    $file = $_FILES["your_pictur"];
    $archivo = $file["name"];
    $tipo = $file["type"];
    $ruta_provisional = $file["tmp_name"];
    $size = $file["size"];
    $dimensiones = getimagesize($ruta_provisional);
    $width = $dimensiones[0];
    $height = $dimensiones[1];
    $carpeta = "../Empleados/";
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
    
      $sql = "INSERT INTO tbl_empleados(Id_empleado, Nombre, Apellido_Paterno, Apellido_Materno, CURP, Sexo,  Fotografia, RFC, Estado_civil, Fecha_Nac, Telefono, Estudios,  Calle, Colonia, Num_int, Num_ext, Localidad, Municipio, Referencia, CP,  Correo, Passw, Privilegios, Ocupacion) VALUES (:Id_empleado, :Nombre, :Apellido_Paterno, :Apellido_Materno, :CURP, :Sexo,  :Fotografia, :RFC, :Estado_civil, :Fecha_Nac, :Telefono, :Estudios,  :Calle, :Colonia, :Num_int, :Num_ext, :Localidad, :Municipio, :Referencia, :CP,  :Correo, :Password, :Privilegios, :Ocupacion)";
      $result =$conexion->prepare($sql);
      $result->execute(array(":Id_empleado"=>NULL,":Nombre"=>$nombre, ":Apellido_Paterno"=>$apellido_pa, ":Apellido_Materno"=>$apellido_ma, ":CURP"=>$curp, ":Sexo"=>$sexo, ":Fotografia"=>$src, ":RFC"=>$rfc, ":Estado_civil"=>$edo_civil, ":Fecha_Nac"=>$fecha_nac,":Telefono"=>$telefono,":Estudios"=>$estudios, ":Calle"=>$calle, ":Colonia"=>$colonia, ":Num_int"=>$num_int, ":Num_ext"=>$num_ext, ":Localidad"=>$localidad, ":Municipio"=>$municipio, ":Referencia"=>$descripcion, ":CP"=>$cp,  ":Correo"=>$usuario, ":Password"=>$password, ":Privilegios"=>$cargo, ":Ocupacion"=>$area_trabajo));
          if($result==true){ 
            echo 1;
          } else { 
            echo 0;
          }
    }
}
?>