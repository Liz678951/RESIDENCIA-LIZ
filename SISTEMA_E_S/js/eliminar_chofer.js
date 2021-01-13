$(document).on('click', '#btneliminar', function () {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
        title: 'IMPORTANTE',
        text: "LA ELIMINACIÓN PERMANENTE !",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ELIMINAR',
        cancelButtonText: 'CANCELAR',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            var id_eliminar = 'Id=' + $('#id_chofer').val();
            var ruta = "../operaciones/eliminar_chofer.php";
            $.ajax({
                url: ruta,
                type: "POST",
                data: id_eliminar,
            }).done(function (data) {
                if (data == 1) {
                    Swal.fire({
                        position: 'top-center',
                        type: 'success',
                        title: 'ELIMINACIÓN EXITOSA',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    $("#eliminar").modal('hide');
                    $('#id_chofer').val('');
                    $('#Inputchofer').val('');
                    $('#Inputapellidopatern').val('');
                    $('#Inputapellidomatern').val('');
                   $.ajax({
                        type: "POST",
                        url: "../operaciones/ver_tabla_chofer.php",
                        success: function (data) {
                            $('#central1').fadeIn(100).html(data);
                        }
                    });
                } else {
                    $.smkAlert({
                        text: "Error al eliminar",
                        type: 'danger',
                        position: 'bottom-center',
                        time: 3
                    });
                }
            })
        } else if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.cancel
        ) {
                
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

        }
    })




});