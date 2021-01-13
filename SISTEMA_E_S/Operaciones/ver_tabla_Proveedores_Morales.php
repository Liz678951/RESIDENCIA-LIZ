<?php
  // sleep(.1);
  include_once("../conexion/conexion_consul.php");
?>
<?php

$query_usuario1= "SELECT *FROM tbl_proveedores_morales ORDER BY Id_Proveedor";
$usuario1= mysqli_query($conex, $query_usuario1) or die(mysqli_error());
$row_usuario1= mysqli_fetch_assoc($usuario1);
$totalRows_usuarios= mysqli_num_rows($usuario1);
?>

<?php if ($totalRows_usuarios == 0) { // Show if recordset empty ?>
 <br><br>
    <div class="alert alert-info alert-dismissible">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
      <h4><i class="icon fa fa-info"></i> Alert!</h4>
      <strong>No hay usuarios registrados.</strong> Si desea puede agregar uno nuevo.
    </div>

  <?php } // Show if recordset empty ?>
  <?php if ($totalRows_usuarios > 0) { // Show if recordset not empty ?>
</div>

<div class="card mb-4">
  <div class="card-header">
    <center>
    <h5>CONSULTA DE PROVEEDORES MORALES REGISTRADOS</h5>
    <a type="button" class="btn btn-success" class="dropdown-item" href="#" data-toggle="modal" data-target="#registrar_proveedor_1"
                          aria-haspopup="true" aria-expanded="false">NUEVO</a>
    </center>
  </div>
  <div class="card-body">
    <!-- <div >
      <div class=" box-body">
   -->
  <table class="table table-responsive-sm  table-striped" id="tabla" width="100%" cellspacing="0">
  <thead id="encabezado_tabla">
        <tr>
          <th id="encabezado_tabla">NOMBRE</th>
          <th id="encabezado_tabla">TELEFONO</th>
          <th id="encabezado_tabla">CORREO</th>
          <th id="encabezado_tabla">RFC</th>
          <th id="encabezado_tabla"  style="visibility: hidden; display: none;" >Fecha de Registro</th>
          <th id="encabezado_tabla" style="visibility: hidden; display: none;">Calle</th>
          <th id="encabezado_tabla" style="visibility: hidden; display: none;">Colonia</th>
          <th id="encabezado_tabla" style="visibility: hidden; display: none;">Num. Interior</th>
          <th id="encabezado_tabla" style="visibility: hidden; display: none;">Num. exterior</th>
          <th id="encabezado_tabla" style="visibility: hidden; display: none;">Localidad</th>
          <th id="encabezado_tabla"  style="visibility: hidden; display: none;">Municipio</th>
          <th id="encabezado_tabla" style="visibility: hidden; display: none;">Referencia</th>
          <th id="encabezado_tabla" style="visibility: hidden; display: none;">CP</th>
          <th id="encabezado_tabla">Fotografia</th>
          <th id="encabezado_tabla" style="visibility: hidden; display: none;">Foto</th>
          <th id="encabezado_tabla" style="visibility: hidden; display: none;">SERVICIO</th>
          <th id="encabezado_tabla"  style="visibility: hidden; display: none;" >Tipo</th>
          <th id="encabezado_tabla" class="opciones">OPCIONES</th>
        </tr>
      </thead>
      <tbody class="cuerpo_table">
        <?php do {       ?>
        <tr>
          <td id="nombre1<?php echo $row_usuario1['Id_Proveedor']; ?>"><?php echo $row_usuario1['Nombre']; ?></td>
          <td id="telefono<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center"><?php echo $row_usuario1['Telefono']; ?></td>
          <td id="correo<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center"><?php echo $row_usuario1['Correo']; ?></td>
          <td id="Licencia<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center"><?php echo $row_usuario1['RFC']; ?></td>
          <td id="fecha<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center"  style="visibility: hidden; display: none;" ><?php echo $row_usuario1['Fecha_Registro']; ?></td>
          <td id="calle<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center" style="visibility: hidden; display: none;"><?php echo $row_usuario1['Calle']; ?></td>
          <td id="colonia<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center"  style="visibility: hidden; display: none;"><?php echo $row_usuario1['Colonia']; ?></td>
          <td id="num_int<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center"  style="visibility: hidden; display: none;"><?php echo $row_usuario1['NI']; ?></td>
          <td id="num_ext<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center" style="visibility: hidden; display: none;"><?php echo $row_usuario1['NE']; ?></td>
          <td id="localidad<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center" style="visibility: hidden; display: none;"><?php echo $row_usuario1['Localidad']; ?></td>
          <td id="municipio<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center"  style="visibility: hidden; display: none;"><?php echo $row_usuario1['Municipio']; ?></td>
          <td id="referencia<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center" style="visibility: hidden; display: none;"><?php echo $row_usuario1['Referencia']; ?></td>
          <td id="cp2<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center" style="visibility: hidden; display: none;"><?php echo $row_usuario1['CP']; ?></td>
          <td id="foto1<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center"> <img id="img_tab"  src="<?php echo $row_usuario1['Fotografia']; ?>" alt=""></td>
          <td id="foto<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center" style="visibility: hidden; display: none;"> <?php echo $row_usuario1['Fotografia']; ?></td>

          <td id="Serv<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center" style="visibility: hidden; display: none;"><?php echo $row_usuario1['Servicio']; ?></td>
          <td id="Tipo<?php echo $row_usuario1['Id_Proveedor']; ?>" align="center"style="visibility: hidden; display: none;"><?php echo $row_usuario1['Tipo']; ?></td>



          <td class="opciones">
            <a type="button" title="Generar Reporte PDF" class="btn btn-info btn-sm fun boton"
              href="../pdf_proveedor_moral/reporteGeneral.php?Id_Proveedor=<?php echo $row_usuario1['Id_Proveedor']; ?>">
              <span class="fas fa-file-pdf"></span>
            </a>
            <button type="button" class="btn btn-success btn-sm fun boton" title="Actualizar Informacion"
              value="<?php echo $row_usuario1['Id_Proveedor']; ?>" id="boton22">
              <span class="fas fa-edit"></span>
            </button>
            <button type="button" class="btn btn-danger btn-sm fun boton" title="Eliminar Proveedor"
              value="<?php echo $row_usuario1['Id_Proveedor']; ?>" id="boton_eliminar33" >
              <span class="fas fa-trash-alt"></span>
            </button>
          </td>
        </tr>
        <?php } while ($row_usuario1 = mysqli_fetch_assoc($usuario1)); ?>
      </tbody>
        <!-- <tfoot id="encabezado_tabla">
        <tr>
        <th id="encabezado_tabla">Nombre</th>
        <th id="encabezado_tabla">Apellido Paterno</th>
        <th id="encabezado_tabla">Apellido Materno</th>
        <th id="encabezado_tabla">CURP</th>
        <th id="encabezado_tabla">RFC</th>
        <th id="encabezado_tabla">Telefono</th>
        <th id="encabezado_tabla">Correo</th>
        <th id="encabezado_tabla" class="opciones">OPCIONES</th>
        </tr>
        </tfoot> -->
      </table>
      </div>
      </div>
<script>
$(document).ready(function() {
    
if ( $.fn.dataTable.isDataTable( '#tabla' ) ) {
table = $('#tabla').DataTable( );
 paging: true
 responsive: true
}
else {
table =  $('#tabla').DataTable({
  "language":{
   "lengthMenu":"<p id='leg'>ORDEN</p>_MENU_ ",
   "zeroRecords": "Lo sentimos. No se encontraron registros que coincidan. <p align='center'><br/><h5 class='carga'>Pruebe con otra opción...</h5></p>",
         "info": "PÁGINA _PAGE_ DE _PAGES_",
         "infoEmpty": "No hay registros aún.",
         "infoFiltered": "(Mostrando _TOTAL_ coincidencias de un total de _MAX_ registros)",
         "search" : "<p id='leg'>CRITERIO DE BÚSQUEDA</p>",
         "LoadingRecords": "Cargando ...",
         "Processing": "Procesando...",
         "SearchPlaceholder": "Comience a teclear...",
         "paginate": {
 "previous": "ANTERIOR",
 "next": "SIGUIENTE",
 }
  }


 });
}

});
</script>
<script src="../js/actualizar_seccion.js"></script>
<script src="../js/imagen.js"></script>
 <?php } // Show if recordset not empty ?>