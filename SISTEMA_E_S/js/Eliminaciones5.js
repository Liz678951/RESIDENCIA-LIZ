$(document).on('click', '#boton_eliminar1ch', function(){
    var id=$(this).val();
    var nombres1=$('#nombre1b'+id).text();
    var descr1=$('#Notasb'+id).text();
    var acc=$('#Accionb'+id).text();

    $('#eliminar222b').modal('show');
    // $('#eliminar_solisitante').val(nombres);
    $('#id_chofer22').val(id);
    $('#Inputusuarios222b').val(nombres1);
    $('#desc22b').val(descr1);
    $('#accion2b').val(acc);

   });
$('#cancelar19b').click(function() {
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
          
          $("#eliminar222b").modal('hide'); 
        } else if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.cancel
        ) {
         
     
        }
      })

});