<?php
require("../conexion/conexion.php");
$id = $_POST["id"];
$sql = $conexion->prepare('SELECT * FROM tbl_proveedores_fisicos WHERE Tipo = :Tipo');
$sql->execute(array('Tipo' => $id));
$resultado = $sql->fetchAll();
$html="";
        if($sql->rowCount() > 0){
          // echo "entro";
          foreach ($resultado as $row) {
              $html.="<option value='".$row['Nombre']." ". $row['Apellido_Paterno']." ".$row['Apellido_Materno'] ."'>".$row['Nombre']." ". $row['Apellido_Paterno']." ".$row['Apellido_Materno'] ."</option>";
              
          }
          echo $html;
        }else {
          $res = $conexion->prepare('SELECT * FROM tbl_proveedores_morales WHERE Tipo = :Tipo');
          $res->execute(array('Tipo' => $id));
          $resultado = $res->fetchAll();
          foreach ($resultado as $row) {
            $html.="<option value='".$row['Nombre']."'>".$row['Nombre']."</option>";
            
          }
          echo $html;
        }
?>