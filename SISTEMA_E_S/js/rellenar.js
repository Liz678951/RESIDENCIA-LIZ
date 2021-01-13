$(document).ready(function () {
    $(document).on('click', '#boton', function () {
        var id = $(this).val();
        var nombre = $('#nombre' + id).text();
        var apellido_paterno = $('#apellido_paterno' + id).text();
        var apellido_materno = $('#apellido_materno' + id).text();
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
        var ocupacion = $('#Ocupacion' + id).text();
        var cp = $('#cp' + id).text();
        var vehiculo = $('#Vehiculo' + id).text();
        var foto = $('#foto' + id).text();

        $('#actualizar_chofer').modal('show');
        $('#inputchofer1').val(nombre);
        $('#inputapellidopaternochofer1').val(apellido_paterno);
        $('#inputapellidomaternochofer1').val(apellido_materno);
        $('#inputcurpchofer1').val(curp);
        $('#inputlicchofer1').val(rfc);
        $('#inputestudioschofer1').val(estudios);
        $('#inputcelchofer1').val(telefono);
        $('#inputsexochofer1').val(sexo);
        $('#inputedocivilchofer1').val(estado);
        $('#fechaNacchofer1').val(fecha);
        $('#callechofer1').val(calle);
        $('#coloniachofer1').val(colonia);
        $('#No_interiorchofer1').val(num_int);
        $('#No_exteriorchofer1').val(num_ext);
        $('#localidadchofer1').val(localidad);
        $('#municipiochofer1').val(municipio);
        $('#refchofer1').val(referencia);
        $('#inputcorreochofer1').val(correo);
        $('#inputocupacionchofer1').val(ocupacion);
        $('#cpchofer1').val(cp);
        $('#Matchofer1').val(vehiculo);

        $("#img1").attr("src", foto);
      
        $('#your_picturchofer1').val(foto);
        
        $('#Fotograf1').val(foto);
        $('#Id_chof1').val(id);
    });
});