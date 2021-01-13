<?php

  $Proveedor = $_POST['prov1'];
  $Accion= $_POST['tipo_accion1a'];
  $Fecha = $_POST['fechaI11a'];
  $Tipo = $_POST['tipo_p11'];
  $Descripcion = $_POST['descripcion1a'];
  $Revision= $_POST['revision1a'];
  $Id_Accion=  $_POST['id_es1a'];

  require("../conexion/conexion.php");
  $query = $conexion->prepare("UPDATE tbl_entradas_salida_proveedores SET Proveedor=?, Fecha_Hora=?, Accion=?, Notas=?, Revision=?,  Tipo=? WHERE Id_Accion=?");
  $result = $query->execute([ $Proveedor, $Fecha, $Accion, $Descripcion, $Revision, $Tipo, $Id_Accion ]);
  
  if($result==true){ 
    echo 1;
  } else { 
    echo 0;
    }
    
?>