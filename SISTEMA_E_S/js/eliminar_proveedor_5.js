$(document).on('click', '#btneliminar12b', function () {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
        title: 'IMPORTANTE',
        text: "LA ELIMINACIÓN ES PERMANENTE !",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ELIMINAR',
        cancelButtonText: 'CANCELAR',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            var id_eliminar = 'Id=' + $('#id_chofer22').val();
            var ruta = "../operaciones/eliminar_chofer_ES.php";
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
                    $("#eliminar222b").modal('hide');
                    document.getElementById("formeliminar2b").reset();
               $.ajax({
                        type: "POST",
                        url: "../operaciones/ver_tabla_ES_Choferes.php",
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
                  
                  $("#eliminar222b").modal('hide'); 
                } else if (
                  // Read more about handling dismissals
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                 
             
                }
              })

        }
    })




});