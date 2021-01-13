<?php

  $Chofer = $_POST['chofer'];
  $Accion= $_POST['accionchofer'];
  $Fecha = $_POST['fechaIch'];
  $Matricula = $_POST['inputmatriculachofer1'];
  $Descripcion = $_POST['descripcionchof'];
  $Revision= $_POST['revision1'];

      require("../conexion/conexion.php");
    
      $sql = "INSERT INTO tbl_entradas_salida_choferes(Id_Accion, Chofer, Fecha_Hora, Accion, Matricula, Notas, Revision) VALUES (:Id_Accion, :Chofer, :Fecha_Hora, :Accion, :Matricula, :Notas, :Revision)";
      $result =$conexion->prepare($sql);
      $result->execute(array( ":Id_Accion"=>NULL, ":Chofer"=>$Chofer, ":Fecha_Hora"=>$Fecha, ":Accion"=>$Accion,  ":Matricula"=>$Matricula, ":Notas"=>$Descripcion, ":Revision"=>$Revision));
          if($result==true){ 
            echo 1;
          } else { 
            echo 0;
          }
    
?>