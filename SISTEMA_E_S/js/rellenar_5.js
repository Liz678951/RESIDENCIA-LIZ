$(document).ready(function () {
    $(document).on('click', '#boton1c', function () {
        var id = $(this).val();
        var nombre = $('#nombre1b' + id).text();
        var Fecha = $('#fechab' + id).text();
        var Accion = $('#Accionb' + id).text();
        var Notas = $('#Notasb' + id).text();
        var Revision = $('#Revisionb' + id).text();
        var Matricula= $('#Matb' + id).text();

        // $('#tipo_p11').val(Tipo1);
        // $("#tipo_p11 option:selected").each(function () {
        //     var elegido = $("#tipo_p11").val();
        //     $.post("../Operaciones/consulta_proveedor1.php", {
        //         elegido: elegido
        //     }, function (data) {
        //         $("#cont").html(data);
        //         $('#prov1').val(nombre);
        //     });

        // });

        $('#actb').val(id);
        $('#registrar_chofer_2b').modal('show');

        // $('#nombre1').val(value);
        $('#choferb').val(nombre);
        $('#fechaIchb').val(Fecha);
        $('#accionchoferb').val(Accion);
        $('#inputmatriculachofer1b').val(Matricula);
        $('#descripcionchofb').val(Notas);
        $('#revision1b').val(Revision);


        // $('#prov1').val(nombre);

    });
});