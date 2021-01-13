$(document).ready(function () {
    $(document).on('click', '#boton18', function () {
        var id = $(this).val();
        var nombre = $('#nombre1' + id).text();
        var Fecha = $('#fecha' + id).text();
        var Accion = $('#Accion' + id).text();
        var Notas = $('#Notas' + id).text();
        var Revision = $('#Revision' + id).text();
        var Tipo1 = $('#Tipo11' + id).text();

        $('#tipo_p11').val(Tipo1);
        $("#tipo_p11 option:selected").each(function () {
            var elegido = $("#tipo_p11").val();
            $.post("../Operaciones/consulta_proveedor1.php", {
                elegido: elegido
            }, function (data) {
                $("#cont").html(data);
                $('#prov1').val(nombre);
            });

        });

        $('#id_es1a').val(id);
        $('#registrar_proveedor61').modal('show');

        // $('#nombre1').val(value);

        $('#fechaI11a').val(Fecha);
        $('#tipo_accion1a').val(Accion);
        $('#descripcion1a').val(Notas);
        $('#revision1a').val(Revision);


        // $('#prov1').val(nombre);

    });
});