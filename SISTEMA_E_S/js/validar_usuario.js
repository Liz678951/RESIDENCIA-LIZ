function validaCampos(){

    var nombre = $("#inputusuario").val();
    //validamos campos
    if($.trim(nombre) == ""){
    toastr.error("No ha ingresado Nombre","Aviso!");
        return false;
    }
    
    
    }