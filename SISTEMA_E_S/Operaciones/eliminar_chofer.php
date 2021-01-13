<?php
 require("../conexion/conexion.php");
$id = $_POST["Id"];
$sql = "DELETE FROM tbl_choferes WHERE Id_chofer = ?";
$result = $conexion->prepare($sql);
$result->execute(array($id));

if($result==true){ 
    echo 1;
  } else { 
    echo 0;
    }
?>