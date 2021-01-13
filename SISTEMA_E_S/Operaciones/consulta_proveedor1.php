<?php
require("../conexion/conexion.php");
$sql = 'SELECT * FROM tbl_proveedores_fisicos ORDER BY Id_Proveedor';
$sql1 = 'SELECT * FROM tbl_proveedores_morales ORDER BY Id_Proveedor';

?>
<?php if( ($_POST["elegido"]==1)){?>

  <select id="prov1" class="form-control form-control-sm" name="prov1" required>
                 <option value="0">SELECCIONAR TIPO DE PROVEEDOR</option>
                 <?php foreach ($conexion ->query($sql)as $row): ?>
                <option value= "<?php echo $row['Nombre']." ". $row['Apellido_Paterno']." ".$row['Apellido_Materno'] ?>">
                  <?php echo $row['Nombre']." ". $row['Apellido_Paterno']." ".$row['Apellido_Materno']  ?>
                </option>
                <?php  endforeach;   ?>            
 </select>     
 <label id="error512en" class="etiqueta">PROVEEDOR</label>
                  
 <?php } ?>       

 <?php if( ($_POST["elegido"]==2)){?>

<select id="prov1" class="form-control form-control-sm" name="prov1" required>
               <option value="0">SELECCIONAR TIPO DE PROVEEDOR</option>
               <?php foreach ($conexion ->query($sql1)as $row1): ?>
              <option value= "<?php echo $row1['Nombre']?>">
                <?php echo $row1['Nombre'] ?>
              </option>
              <?php  endforeach;   ?>            
</select>     
<label id="error512en" class="etiqueta">PROVEEDOR</label>
                
<?php } ?>  