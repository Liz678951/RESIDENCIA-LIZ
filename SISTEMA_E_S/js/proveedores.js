// $("#respuesta").html("<img src="loader.gif" /> Por favor espera un momento");
$("#tipo_p").change(function () {
    var parametros = "id=" + $("#tipo_p").val();
    // alert (parametros);
    $.ajax({
        data: parametros,
        type: "POST",
        url: "../Operaciones/consulta_proveedor.php",
        success: function (response) {
            $("#prov").html(response);

        }
    });
})

$("#tipo_p11").change(function () {
    var parametros2 = "id=" + $("#tipo_p11").val();
    $.ajax({
        data: parametros2,
        type: "POST",
        url: "../Operaciones/consulta_proveedor.php",
        success: function (response) {
            $("#prov1").html(response);


        }
    });
})