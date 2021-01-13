$(document).ready(function () {
    $(document).on('click', '#boton22', function () {
        var id = $(this).val();
        var nombre = $('#nombre1' + id).text();
        var rfc = $('#Licencia' + id).text();
       var telefono = $('#telefono' + id).text();
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
      

        $('#registrar_proveedor6').modal('show');
        $('#inputprov3').val(nombre);
        $('#inputrfcprov3').val(rfc);
        $('#inputcelprov3').val(telefono);
       $('#fechaRegProv3').val(fecha);
        $('#calleprov3').val(calle);
        $('#coloniaprov3').val(colonia);
        $('#No_interiorprov3').val(num_int);
        $('#No_exteriorprov3').val(num_ext);
        $('#localidadprov3').val(localidad);
        $('#municipioprov3').val(municipio);
        $('#refprov3').val(referencia);
        $('#inputcorreoprov3').val(correo);
        $('#cpprov3').val(cp);
        $('#servicioprov13').val(servicio);
        $("#img3").attr("src", foto);
        $('#Fotografprov3').val(foto);
        $('#Id_prov3').val(id);
    });
});