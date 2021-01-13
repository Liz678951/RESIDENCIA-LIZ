$(document).on('click', '#boton_eliminar', function(){
    var id=$(this).val();
    var nombres=$('#nombre'+id).text();
    var apellido_pat=$('#apellido_paterno'+id).text();
    var apellido_mat=$('#apellido_materno'+id).text();

    $('#eliminar').modal('show');
    // $('#eliminar_solisitante').val(nombres);
    $('#id_chofer').val(id);
    $('#Inputusuarios').val(nombres);
    $('#Inputapellidopatern').val(apellido_pat);
    $('#Inputapellidomatern').val(apellido_mat);


});
$('#cancelar12').click(function() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false,
      })
      
      swalWithBootstrapButtons.fire({
        title: 'CANCELAR ELIMINACIÓN?',
        text: "ESTA ACCIÓN PUEDE REALIZARLA MÁS TARDE!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'SI',
        cancelButtonText: 'NO',
         reverseButtons: true
      }).then((result) => {
        if (result.value) {
            Swal.fire({
                position: 'top-center',
                type: 'error',
                title: 'ELIMINACION CANCELADA',
                text: 'PARA ELIMINAR SELECCIONE LA OPCION DE ADMINISTRAR EN EL MENU!',
                showConfirmButton: false,
                timer: 2000
              });
          
          $("#eliminar").modal('hide'); 
        } else if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.cancel
        ) {
         
     
        }
      })

});