<?php
  $nombre = $_POST['inputchofer'];
  $apellido_pa = $_POST['inputapellidopaternochofer'];
  $apellido_ma = $_POST['inputapellidomaternochofer'];
  $curp = $_POST['inputcurpchofer'];
  $Licencia = $_POST['inputlicchofer'];
  $estudios = $_POST['inputestudioschofer'];
  $telefono = $_POST['inputcelchofer'];
  $edo_civil = $_POST['inputedocivilchofer'];
  $sexo = $_POST['inputsexochofer'];
  $fecha_nac = $_POST['fechaNacchofer'];

  $calle = $_POST['callechofer'];
  $colonia = $_POST['coloniachofer'];
  $num_int = $_POST['No_interiorchofer'];
  $num_ext = $_POST['No_exteriorchofer'];
  $localidad = $_POST['localidadchofer'];
  $municipio = $_POST['municipiochofer'];
  $descripcion = $_POST['inputdescripcionchofer'];

  $usuario = $_POST['inputcorreochofer'];
  $Vehiculo = $_POST['inputmatriculachofer']; 
  $ocupacion = $_POST['inputocupacionchofer'];
  $cp = $_POST['cpchofer'];

    $file = $_FILES["your_picturchofer"];
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
      require("../conexion/conexion.php");
      $sql = "INSERT INTO tbl_choferes(Id_chofer, Nombre, Apellido_Paterno, Apellido_Materno, CURP, Sexo,  Fotografia, Licencia, Estado_civil, Fecha_Nac, Telefono, Estudios, Ocupacion, Calle, Colonia, Num_int, Num_ext, Localidad, Municipio, CP, Referencia, Vehiculo, Correo) VALUES (:Id_chofer, :Nombre, :Apellido_Paterno, :Apellido_Materno, :CURP, :Sexo,  :Fotografia, :Licencia, :Estado_civil, :Fecha_Nac, :Telefono, :Estudios, :Ocupacion, :Calle, :Colonia, :Num_int, :Num_ext, :Localidad, :Municipio, :CP, :Referencia, :Vehiculo, :Correo)";
      $result =$conexion->prepare($sql);
      $result->execute(array(":Id_chofer"=>NULL,":Nombre"=>$nombre, ":Apellido_Paterno"=>$apellido_pa, ":Apellido_Materno"=>$apellido_ma, ":CURP"=>$curp, ":Sexo"=>$sexo, ":Fotografia"=>$src, ":Licencia"=>$Licencia, ":Estado_civil"=>$edo_civil, ":Fecha_Nac"=>$fecha_nac,":Telefono"=>$telefono,":Estudios"=>$estudios,
      ":Ocupacion"=>$ocupacion, ":Calle"=>$calle, ":Colonia"=>$colonia, ":Num_int"=>$num_int, ":Num_ext"=>$num_ext, ":Localidad"=>$localidad, ":Municipio"=>$municipio, ":CP"=>$cp, ":Referencia"=>$descripcion, ":Vehiculo"=>$Vehiculo, ":Correo"=>$usuario));
          if($result==true){
            echo 1;
          } else {
            echo 0;
          }
    }
?>