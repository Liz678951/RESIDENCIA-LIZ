<?php

  $Chofer = $_POST['choferb'];
  $Accion= $_POST['accionchoferb'];
  $Fecha = $_POST['fechaIchb'];
  $Matricula = $_POST['inputmatriculachofer1b'];
  $Descripcion = $_POST['descripcionchofb'];
  $Revision= $_POST['revision1b'];
  $Id_Accion=  $_POST['actb'];

  require("../conexion/conexion.php");
  $query = $conexion->prepare("UPDATE tbl_entradas_salida_choferes SET Fecha_Hora=?, Chofer=?,  Accion=?, Matricula=?, Notas=?, Revision=? WHERE Id_Accion=?");
  $result = $query->execute([ $Fecha, $Chofer,  $Accion, $Matricula, $Descripcion, $Revision,  $Id_Accion ]);
  
  if($result==true){ 
    echo 1;
  } else { 
    echo 0;
    }
    
?>