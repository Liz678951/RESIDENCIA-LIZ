$('#Proveedores_fisicos').click(function() { 
    // alert("Click choferes");
    // var menus = 'dropdown-menu';
    //     $('#ver_tabla').html('<div class="loading"><img class="imagen_carga" src="../img/imagen-carga.gif" alt="loading" /><br/><h5 class="carga">Espere un momento porfavor...</h5></div>'); 
    $("#ent").click();
        $.ajax({
            type: "POST",
            url: "../operaciones/ver_tabla_Proveedores_Fisicos.php",
            success: function(data) {
                $('#central1').fadeIn(100).html(data);               
            }
        });
        $("#submenu_responsive").menus('hide');
        return false;
});