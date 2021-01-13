<?php
 require("../conexion/conexion.php");
$id = $_POST["Id"];
$sql = "DELETE FROM tbl_proveedores_fisicos WHERE Id_proveedor = ?";
$result = $conexion->prepare($sql);
$result->execute(array($id));

if($result==true){ 
    echo 1;
  } else { 
    echo 0;
    }
?>