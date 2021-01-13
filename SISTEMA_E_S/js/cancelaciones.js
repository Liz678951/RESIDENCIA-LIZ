$('#cancelar1').click(function() {
    swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'CANCELAR REGISTRO?',
            text: "EL AVANCE QUE LLEVA SE PERDERA!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SI, CANCELAR',
            cancelButtonText: 'NO, CANCELAR',
            reverseButtons: true
      }).then((result) => {
        if (result.value) {
            Swal.fire({
              position: 'top-center',
              type: 'error',
              title: 'REGISTRO CANCELADO',
              text: 'PARA REGISTRAR SELECCIONE LA OPCION DE AGREGAR EN EL MENU!',
              showConfirmButton: false,
              timer: 2000
            });
            setTimeout('document.location.reload()', 2000);
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
          }
        })
});


$('#cancelar2').click(function() {
    swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'CANCELAR REGISTRO?',
            text: "EL AVANCE QUE LLEVA SE PERDERA!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SI, CANCELAR',
            cancelButtonText: 'NO, CANCELAR',
            reverseButtons: true
      }).then((result) => {
        if (result.value) {
            Swal.fire({
              position: 'top-center',
              type: 'error',
              title: 'REGISTRO CANCELADO',
              text: 'PARA REGISTRAR SELECCIONE LA OPCION DE AGREGAR EN EL MENU!',
              showConfirmButton: false,
              timer: 2000
            });
            setTimeout('document.location.reload()', 2000);
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
          }
        })


});

$('#cancelar2a').click(function() {
  swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'CANCELAR REGISTRO?',
          text: "EL AVANCE QUE LLEVA SE PERDERA!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'SI, CANCELAR',
          cancelButtonText: 'NO, CANCELAR',
          reverseButtons: true
    }).then((result) => {
      if (result.value) {
          Swal.fire({
            position: 'top-center',
            type: 'error',
            title: 'REGISTRO CANCELADO',
            text: 'PARA REGISTRAR SELECCIONE LA OPCION DE AGREGAR EN EL MENU!',
            showConfirmButton: false,
            timer: 2000
          });
          $.ajax({
            type: "POST",
            url: "../operaciones/ver_tabla_ES_Choferes.php",
            success: function(data) {
                $('#central1').fadeIn(100).html(data);                
            }
        });
        $("#registrar_chofer_2").modal('hide'); 
          // setTimeout('document.location.reload()', 2000);
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
        }
      })


});

$('#cancelar2aa').click(function() {
  swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'CANCELAR REGISTRO?',
          text: "EL AVANCE QUE LLEVA SE PERDERA!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'SI, CANCELAR',
          cancelButtonText: 'NO, CANCELAR',
          reverseButtons: true
    }).then((result) => {
      if (result.value) {
          Swal.fire({
            position: 'top-center',
            type: 'error',
            title: 'REGISTRO CANCELADO',
            text: 'PARA REGISTRAR SELECCIONE LA OPCION DE AGREGAR EN EL MENU!',
            showConfirmButton: false,
            timer: 2000
          });
          $.ajax({
            type: "POST",
            url: "../operaciones/ver_tabla_ES_Choferes.php",
            success: function(data) {
                $('#central1').fadeIn(100).html(data);                
            }
        });
        $("#registrar_chofer_2b").modal('hide'); 
          // setTimeout('document.location.reload()', 2000);
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
        }
      })


});


$('#cancelar3').click(function() {
  swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'CANCELAR REGISTRO?',
          text: "EL AVANCE QUE LLEVA SE PERDERA!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'SI, CANCELAR',
          cancelButtonText: 'NO, CANCELAR',
          reverseButtons: true
    }).then((result) => {
      if (result.value) {
          Swal.fire({
            position: 'top-center',
            type: 'error',
            title: 'REGISTRO CANCELADO',
            text: 'PARA REGISTRAR SELECCIONE LA OPCION DE AGREGAR EN EL MENU!',
            showConfirmButton: false,
            timer: 2000
          });
          $.ajax({
            type: "POST",
            url: "../operaciones/ver_tabla_ES_Proveedores.php",
            success: function(data) {
                $('#central1').fadeIn(100).html(data);                
            }
        });
        $("#registrar_proveedor61").modal('hide'); 
          // setTimeout('document.location.reload()', 2000);
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
        }
      })


});

