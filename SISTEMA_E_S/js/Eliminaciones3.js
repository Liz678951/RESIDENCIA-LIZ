$(document).on('click', '#boton_eliminar33', function(){
    var id=$(this).val();
    var nombres1=$('#nombre1'+id).text();

    $('#eliminar22').modal('show');
    // $('#eliminar_solisitante').val(nombres);
    $('#id_proveedor2').val(id);
    $('#Inputusuarios22').val(nombres1);
   });
$('#cancelar15').click(function() {
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
          
          $("#eliminar22").modal('hide'); 
        } else if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.cancel
        ) {
         
     
        }
      })

});