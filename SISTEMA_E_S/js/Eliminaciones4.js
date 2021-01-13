$(document).on('click', '#boton_eliminar1a', function(){
    var id=$(this).val();
    var nombres1=$('#nombre1'+id).text();
    var descr1=$('#Notas'+id).text();
    var acc=$('#Accion'+id).text();

    $('#eliminar222').modal('show');
    // $('#eliminar_solisitante').val(nombres);
    $('#id_prover22').val(id);
    $('#Inputusuarios222').val(nombres1);
    $('#desc22').val(descr1);
    $('#accion2').val(acc);

   });
$('#cancelar19').click(function() {
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
          
          $("#eliminar222").modal('hide'); 
        } else if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.cancel
        ) {
         
     
        }
      })

});