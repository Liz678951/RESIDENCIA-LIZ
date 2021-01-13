$(document).ready(function () {
    $(document).on('click', '#boton5', function () {
        var id = $(this).val();
        var nombre = $('#nombre1' + id).text();
        var apellido_paterno = $('#apellido_paterno1' + id).text();
        var apellido_materno = $('#apellido_materno1' + id).text();
        var curp = $('#curp' + id).text();
        var rfc = $('#Licencia' + id).text();
        var estado = $('#estado' + id).text();
        var estudios = $('#estudios' + id).text();
        var telefono = $('#telefono' + id).text();
        var sexo = $('#sexo' + id).text();
        var fecha = $('#fecha' + id).text();
        var calle = $('#calle' + id).text();
        var colonia = $('#colonia' + id).text();
        var num_int = $('#num_int' + id).text();
        var num_ext = $('#num_ext' + id).text();
        var localidad = $('#localidad' + id).text();
        var municipio = $('#municipio' + id).text();
        var referencia = $('#referencia' + id).text();
        var correo = $('#correo' + id).text();
        var cp = $('#cp2' + id).text();
        var foto = $('#foto' + id).text();
        var servicio= $('#Serv' + id).text();
      

        $('#registrar_proveedor2').modal('show');
        $('#inputproveedor2').val(nombre);
        $('#inputapellidopaternoproveedor2').val(apellido_paterno);
        $('#inputapellidomaternoproveedor2').val(apellido_materno);
        $('#inputcurpproveedor2').val(curp);
        $('#inputrfcproveedor2').val(rfc);
        $('#inputestudiosproveedor2').val(estudios);
        $('#inputcelproveedor2').val(telefono);
        $('#inputsexoproveedor2').val(sexo);
        $('#inputedocivilproveedor2').val(estado);
        $('#fechaRegproveedor2').val(fecha);
        $('#calleproveedor2').val(calle);
        $('#coloniaproveedor2').val(colonia);
        $('#No_interiorproveedor2').val(num_int);
        $('#No_exteriorproveedor2').val(num_ext);
        $('#localidadproveedor2').val(localidad);
        $('#municipioproveedor2').val(municipio);
        $('#refproveedor2').val(referencia);
        $('#inputcorreoproveedor2').val(correo);
        $('#cpproveedor2').val(cp);
        $('#inputservproveedor2').val(servicio);

        $("#imgprov").attr("src", foto);
      
      
        
        $('#Fotografprov11').val(foto);
        $('#Id_prov').val(id);
    });
});