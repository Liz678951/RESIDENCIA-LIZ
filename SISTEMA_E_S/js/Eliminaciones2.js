$(document).on('click', '#boton_eliminar5', function(){
    var id=$(this).val();
    var nombres1=$('#nombre1'+id).text();
    var apellido_pat1=$('#apellido_paterno1'+id).text();
    var apellido_mat1=$('#apellido_materno1'+id).text();

    $('#eliminar2').modal('show');
    // $('#eliminar_solisitante').val(nombres);
    $('#id_proveedor').val(id); 
    $('#Inputusuarios2').val(nombres1);
    $('#Inputapellidopatern2').val(apellido_pat1);
    $('#Inputapellidomatern2').val(apellido_mat1);


});
$('#cancelar14').click(function() {
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
          
          $("#eliminar2").modal('hide'); 
        } else if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.cancel
        ) {
         
     
        }
      })

});