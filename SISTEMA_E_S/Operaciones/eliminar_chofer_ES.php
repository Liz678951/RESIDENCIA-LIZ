<?php
 require("../conexion/conexion.php");
$id = $_POST["Id"];
$sql = "DELETE FROM tbl_entradas_salida_choferes WHERE Id_Accion = ?";
$result = $conexion->prepare($sql);
$result->execute(array($id));

if($result==true){ 
    echo 1;
  } else { 
    echo 0;
    }
?>