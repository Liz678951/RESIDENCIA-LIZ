<?php
  // sleep(.1);
  include_once("../conexion/conexion_consul.php");
?>
<?php

$query_usuario1= "SELECT *FROM tbl_entradas_salida_proveedores ORDER BY Id_Accion";
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
      <h5>CONSULTA DE ENTRADAS/SALIDAS DE PROVEEDORES</h5>
      <button type="button" class="btn btn-success"  href="#" data-toggle="modal" data-target="#registro" aria-haspopup="true" aria-expanded="false"><span  class="fas fa-plus"></span> NUEVO</button>
      <a type="button" class="btn btn-info fas fa-file-pdf" href="../pdf_General_ESP/reporteGeneral.php" > REPORTE GENERAL</a>
    </center>
  </div>
  <div class="card-body">
    <!-- <div >
      <div class=" box-body"> -->

    <table class="table table-responsive-sm  table-striped" id="tabla" width="100%" cellspacing="0">
      <thead id="encabezado_tabla">
        <tr>
          <th id="encabezado_tabla">PROVEEDOR</th>
          <th id="encabezado_tabla" style="visibility: hidden; display: none;">TIPO</th>
          <th id="encabezado_tabla">FECHA Y HORA</th>
          <th id="encabezado_tabla">ACCION</th>
          <th id="encabezado_tabla">NOTAS</th>
          <th id="encabezado_tabla">REVISION</th>
          <th id="encabezado_tabla" class="opciones">OPCIONES</th>
        </tr>
      </thead>
      <tbody class="cuerpo_table">
        <?php do {       ?>
        <tr>
          <td id="nombre1<?php echo $row_usuario1['Id_Accion']; ?>"><?php echo $row_usuario1['Proveedor']; ?></td>
          <td id="Tipo11<?php echo $row_usuario1['Id_Accion']; ?>" style="visibility: hidden; display: none;"><?php echo$row_usuario1['Tipo'];?></td>
          <td id="fecha<?php echo $row_usuario1['Id_Accion']; ?>" align="center"><?php echo $row_usuario1['Fecha_Hora']; ?></td>
          <td id="Accion<?php echo $row_usuario1['Id_Accion']; ?>" align="center"><?php echo $row_usuario1['Accion']; ?></td>
          <td id="Notas<?php echo $row_usuario1['Id_Accion']; ?>" align="center"><?php echo $row_usuario1['Notas']; ?></td>
          <td id="Revision<?php echo $row_usuario1['Id_Accion']; ?>" align="center"><?php echo $row_usuario1['Revision']; ?></td>

          <td class="opciones">

            <button type="button" class="btn btn-success btn-sm fun boton" title="Actualizar Informacion"
              value="<?php echo $row_usuario1['Id_Accion']; ?>" id="boton18">
              <span class="fas fa-edit"></span>
            </button>
            <button type="button" class="btn btn-danger btn-sm fun boton" title="Eliminar Proveedor"
              value="<?php echo $row_usuario1['Id_Accion']; ?>" id="boton_eliminar1a">
              <span class="fas fa-trash"></span>
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
  $(document).ready(function () {

    if ($.fn.dataTable.isDataTable('#tabla')) {
      table = $('#tabla').DataTable();
      paging: true
      responsive: true
    } else {
      table = $('#tabla').DataTable({
        "language": {
          "lengthMenu": "<p id='leg'>ORDEN</p>_MENU_ ",
          "zeroRecords": "Lo sentimos. No se encontraron registros que coincidan. <p align='center'><br/><h5 class='carga'>Pruebe con otra opción...</h5></p>",
          "info": "PÁGINA _PAGE_ DE _PAGES_",
          "infoEmpty": "No hay registros aún.",
          "infoFiltered": "(Mostrando _TOTAL_ coincidencias de un total de _MAX_ registros)",
          "search": "<p id='leg'>CRITERIO DE BÚSQUEDA</p>",
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
<?php } // Show if recordset not empty ?>