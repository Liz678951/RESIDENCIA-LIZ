<?php

  $Proveedor = $_POST['prov'];
  $Fecha = $_POST['fechaI'];
  $Accion = $_POST['tipo_accion'];
  $Descripcion = $_POST['descripcion'];
  $Revision= $_POST['revision'];
  $tipo= $_POST['tipo_p'];

      require("../conexion/conexion.php");
    
      $sql = "INSERT INTO tbl_entradas_salida_proveedores(Id_Accion, Proveedor, Fecha_Hora, Accion, Notas, Revision,Tipo) VALUES (:Id_Accion, :Proveedor, :Fecha_Hora, :Accion, :Notas, :Revision, :Tipo)";
      $result =$conexion->prepare($sql);
      $result->execute(array( ":Id_Accion"=>NULL, ":Proveedor"=>$Proveedor, ":Fecha_Hora"=>$Fecha, ":Accion"=>$Accion, ":Notas"=>$Descripcion, ":Revision"=>$Revision, ":Tipo"=>$tipo));
          if($result==true){ 
            echo 1;
          } else { 
            echo 0;
          }
    
?>