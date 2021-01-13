    $(document).ready(function () {
      $("#smartwizard23").on("showStep", function (e, anchorObject, stepNumber, stepDirection, stepPosition) {
        if (stepPosition === 'first') {
          $("#prev-btn").addClass('disabled');
        } else if (stepPosition === 'final') {
          $("#next-btn").addClass('disabled');
        } else {
          $("#prev-btn").removeClass('disabled');
          $("#next-btn").removeClass('disabled');
        }
      });
      var btnFinish = $('<button></button>').text('REGISTRAR')
        .addClass('btn btn-success')
        .on('click', function () {
          var letras = /^([a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{1,25})$/i;
          var letras1_1 = /^([a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,20})$/i;
          var letras1 = /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{1,25})$/i;
          var letras2 = /^([0-9]{3,25})$/i;
          var letras2_1 = /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{18,25})$/i;
          var letras2_2 = /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{10,25})$/i;
          var letras2_3 = /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{5,25})$/i;
          var letras2_4 = /^([0-9]{10,25})$/i;
          var letras3 = /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{2,95})$/i;
          var letras4 = /^([\w._%-]+@[\w.-]+\.[a-zA-Z]{2,4})$/i;
          var nombre = $("#inputusuario").val();
          if ($.trim(nombre) == "") {
            toastr.error("No ha ingresado Nombre", "Error!");
            $("#inputusuario").focus();
            $("#error1_em").css("color", "red");
            $("#inputusuario").css("background-color", "rgb(202, 193, 193)");
            return false;
          } else {
            $("#error1_em").css("color", "black");
            $("#inputusuario").css("background-color", "white");
          }
          if (!letras.test(nombre)) {
            toastr.error("Nombre solo admite letras", "Error!");
            $("#inputusuario").focus();
            $("#inputusuario").css("background-color", "rgb(202, 193, 193)");
            $("#error1_em").css("color", "red");
            return false;

          } else {
            $("#error1").css("color", "black");
            $("#inputusuario").css("background-color", "white");
          }
          if (!letras1_1.test(nombre)) {
            toastr.error("Nombre minimo de 3 letras", "Error!");
            $("#inputusuario").focus();
            $("#inputusuario").css("background-color", "rgb(202, 193, 193)");
            $("#error1_em").css("color", "red");
            return false;

          } else {
            $("#error1_em").css("color", "black");
            $("#inputusuario").css("background-color", "white");
          }

          var Apellido_P = $("#inputapellidopaterno").val();
          if ($.trim(Apellido_P) == "") {
            toastr.error("No ha ingresado Apellido Paterno", "Error!");
            $("#inputapellidopaterno").focus();
            $("#inputapellidopaterno").css("background-color", "rgb(202, 193, 193)");
            $("#error2").css("color", "red");
            return false;
          } else {
            $("#error2").css("color", "black");
            $("#inputapellidopaterno").css("background-color", "white");
          }
          if (!letras.test(Apellido_P)) {
            toastr.error("Apellido Paterno solo admite letras", "Error!");
            $("#inputapellidopaterno").focus();
            $("#inputapellidopaterno").css("background-color", "rgb(202, 193, 193)");
            $("#error2").css("color", "red");
            return false;

          } else {
            $("#error2").css("color", "black");
            $("#inputapellidopaterno").focus();
            $("#inputapellidopaterno").css("background-color", "white");
          }
          if (!letras1_1.test(Apellido_P)) {
            toastr.error("Apellido Paterno minimo de 3 letras", "Error!");
            $("#inputapellidopaterno").focus();
            $("#inputapellidopaterno").css("background-color", "rgb(202, 193, 193)");
            $("#error2").css("color", "red");
            return false;

          } else {
            $("#error2").css("color", "black");
            $("#inputapellidopaterno").focus();
            $("#inputapellidopaterno").css("background-color", "white");
          }

          var Apellido_M = $("#inputapellidomaterno").val();
          if ($.trim(Apellido_M) == "") {
            toastr.error("No ha ingresado Apellido Materno", "Error!");
            $("#inputapellidomaterno").focus();
            $("#inputapellidomaterno").css("background-color", "rgb(202, 193, 193)");
            $("#error3").css("color", "red");
            return false;
          } else {
            $("#error3").css("color", "black");
            $("#inputapellidomaterno").focus();
            $("#inputapellidomaterno").css("background-color", "white");
          }
          if (!letras.test(Apellido_M)) {
            toastr.error("Apellido Materno solo admite letras", "Error!");
            $("#inputapellidomaterno").focus();
            $("#inputapellidomaterno").css("background-color", "rgb(202, 193, 193)");
            $("#error3").css("color", "red");
            return false;

          } else {
            $("#error3").css("color", "black");
            $("#inputapellidomaterno").focus();
            $("#inputapellidomaterno").css("background-color", "white");
          }
          if (!letras1_1.test(Apellido_M)) {
            toastr.error("Apellido Materno minimo de 3 letras", "Error!");
            $("#inputapellidomaterno").focus();
            $("#inputapellidomaterno").css("background-color", "rgb(202, 193, 193)");
            $("#error3").css("color", "red");
            return false;

          } else {
            $("#error3").css("color", "black");
            $("#inputapellidomaterno").focus();
            $("#inputapellidomaterno").css("background-color", "white");
          }

          var Curp = $("#inputcurp").val();
          if ($.trim(Curp) == "") {
            toastr.error("No ha ingresado CURP", "Error!");
            $("#inputcurp").css("background-color", "rgb(202, 193, 193)");
            $("#inputcurp").focus();
            $("#error4").css("color", "red");
            return false;
          } else {
            $("#error4").css("color", "black");
            $("#inputcurp").focus();
            $("#inputcurp").css("background-color", "white");
          }
          if (!letras1.test(Curp)) {
            toastr.error("CURP solo admite letras y números", "Error!");
            $("#inputcurp").css("background-color", "rgb(202, 193, 193)");
            $("#inputcurp").focus();
            $("#error4").css("color", "red");
            return false;

          } else {
            $("#error4").css("color", "black");
            $("#inputcurp").focus();
            $("#inputcurp").css("background-color", "white");
          }
          if (!letras2_1.test(Curp)) {
            toastr.error("CURP minimo de 18 caracteres", "Error!");
            $("#inputcurp").focus();
            $("#inputcurp").css("background-color", "rgb(202, 193, 193)");
            $("#error4").css("color", "red");
            return false;
          } else {
            $("#error4").css("color", "black");
            $("#inputcurp").focus();
            $("#inputcurp").css("background-color", "white");
          }

          var RFC = $("#inputrfc").val();
          if ($.trim(RFC) == "") {
            toastr.error("No ha ingresado Clave de elector", "Error!");
            $("#inputrfc").focus();
            $("#inputrfc").css("background-color", "rgb(202, 193, 193)");
            $("#error5").css("color", "red");
            return false;
          } else {
            $("#error5").css("color", "black");
            $("#inputrfc").focus();
            $("#inputrfc").css("background-color", "white");
          }
          if (!letras1.test(RFC)) {
            toastr.error("Clave de elector solo admite letras y números", "Error!");
            $("#inputrfc").focus();
            $("#inputrfc").css("background-color", "rgb(202, 194, 193)");
            $("#error5").css("color", "red");
            return false;
          } else {
            $("#error5").css("color", "black");
            $("#inputrfc").focus();
            $("#inputrfc").css("background-color", "white");
          }
          if (!letras2_2.test(RFC)) {
            toastr.error("Clave de elector minimo de 18 caracteres", "Error!");
            $("#inputrfc").focus();
            $("#inputrfc").css("background-color", "rgb(202, 193, 193)");
            $("#error5").css("color", "red");
            return false;

          } else {
            $("#error5").css("color", "black");
            $("#inputrfc").focus();
            $("#inputrfc").css("background-color", "white");
          }

          var Estado_Civil = $("#inputedocivil").val();
          if ($.trim(Estado_Civil) == "") {
            toastr.error("No ha ingresado Estado_Civil", "Error!");
            $("#inputedocivil").focus();
            $("#inputedocivil").css("background-color", "rgb(202, 193, 193)");
            $("#error6").css("color", "red");
            return false;
          } else {
            $("#error6").css("color", "black");
            $("#inputedocivil").focus();
            $("#inputedocivil").css("background-color", "white");
          }

          var Sexo = $("#inputsexo").val();
          if ($.trim(Sexo) == "") {
            toastr.error("No ha ingresado Sexo", "Error!");
            $("#inputsexo").focus();
            $("#inputsexo").css("background-color", "rgb(202, 193, 193)");
            $("#error7").css("color", "red");
            return false;
          } else {
            $("#error7").css("color", "black");
            $("#inputsexo").focus();
            $("#inputsexo").css("background-color", "white");
          }


          var Nivel_de_estudios = $("#inputestudios").val();
          if ($.trim(Nivel_de_estudios) == "") {
            toastr.error("No ha ingresado Nivel de estudios", "Error!");
            $("#inputestudios").focus();
            $("#inputestudios").css("background-color", "rgb(202, 193, 193)");
            $("#error8").css("color", "red");
            return false;
          } else {
            $("#error8").css("color", "black");
            $("#inputestudios").focus();
            $("#inputestudios").css("background-color", "white");
          }
          if (!letras1.test(Nivel_de_estudios)) {
            toastr.error("Ocupacion solo admite letras y números", "Error!");
            $("#inputestudios").focus();
            $("#inputestudios").css("background-color", "rgb(202, 193, 193)");
            $("#error8").css("color", "red");
            return false;
          } else {
            $("#error8").css("color", "black");
            $("#inputestudios").focus();
            $("#inputestudios").css("background-color", "white");
          }

          var Ocupacion = $("#inputocupacion").val();
          if ($.trim(Ocupacion) == "") {
            toastr.error("No ha ingresado Ocupación", "Error!");
            $("#inputocupacion").focus();
            $("#inputocupacion").css("background-color", "rgb(202, 193, 193)");
            $("#error9").css("color", "red");
            return false;
          } else {
            $("#error9").css("color", "black");
            $("#inputocupacion").focus();
            $("#inputocupacion").css("background-color", "white");
          }
          if (!letras1.test(Ocupacion)) {
            toastr.error("Ocupacion solo admite letras y numeros", "Error!");
            $("#inputocupacion").focus();
            $("#inputocupacion").css("background-color", "rgb(202, 193, 193)");
            $("#error9").css("color", "red");
            return false;

          } else {
            $("#error9").css("color", "black");
            $("#inputocupacion").focus();
            $("#inputocupacion").css("background-color", "white");
          }
          if (!letras2_3.test(Ocupacion)) {
            toastr.error("Ocupacion minimo de 5 caracteres", "Error!");
            $("#inputocupacion").focus();
            $("#inputocupacion").css("background-color", "rgb(202, 193, 193)");
            $("#error9").css("color", "red");
            return false;

          } else {
            $("#error9").css("color", "black");
            $("#inputocupacion").focus();
            $("#inputocupacion").css("background-color", "white");
          }

          var Telefono = $("#inputcel").val();
          if ($.trim(Telefono) == "") {
            toastr.error("No ha ingresado Telefono", "Error!");
            $("#inputcel").focus();
            $("#inputcel").css("background-color", "rgb(202, 193, 193)");
            $("#error10").css("color", "red");
            return false;
          } else {
            $("#error10").css("color", "black");
            $("#inputcel").focus();
            $("#inputcel").css("background-color", "white");
          }
          if (!letras2.test(Telefono)) {
            toastr.error("Telefono solo admite números", "Error!");
            $("#inputcel").focus();
            $("#inputcel").css("background-color", "rgb(202, 193, 193)");
            $("#error10").css("color", "red");
            return false;
          } else {
            $("#error10").css("color", "black");
            $("#inputcel").focus();
            $("#inputcel").css("background-color", "white");
          }
          if (!letras2_4.test(Telefono)) {
            toastr.error("Telefono minimo de 10 dígitos", "Error!");
            $("#inputcel").focus();
            $("#inputcel").css("background-color", "rgb(202, 193, 193)");
            $("#error10").css("color", "red");
            return false;
          } else {
            $("#error10").css("color", "black");
            $("#inputcel").focus();
            $("#inputcel").css("background-color", "white");
          }


          var Fecha_Nac = $("#fechaNac").val();
          if ($.trim(Fecha_Nac) == "") {
            toastr.error("No ha ingresado Fecha de Nacimiento", "Error!");
            $("#fechaNac").focus();
            $("#fechaNac").css("background-color", "rgb(202, 193, 193)");
            $("#error11").css("color", "red");
            return false;
          } else {
            $("#error11").css("color", "black");
            $("#fechaNac").focus();
            $("#fechaNac").css("background-color", "white");
          }

          var Calle = $("#calle").val();
          if ($.trim(Calle) == "") {
            toastr.error("No ha ingresado calle", "Error!");
            $("#calle").focus();
            $("#calle").css("background-color", "rgb(202, 193, 193)");
            $("#error12").css("color", "red");
            return false;
          } else {
            $("#error12").css("color", "black");
            $("#calle").focus();
            $("#calle").css("background-color", "white");
          }
          if (!letras1.test(Calle)) {
            toastr.error("Calle solo admite letras y números", "Error!");
            $("#calle").focus();
            $("#calle").css("background-color", "rgb(202, 193, 193)");
            $("#error12").css("color", "red");
            return false;
          } else {
            $("#error12").css("color", "black");
            $("#calle").focus();
            $("#calle").css("background-color", "white");
          }

          var Colonia = $("#colonia").val();
          if ($.trim(Colonia) == "") {
            toastr.error("No ha ingresado Colonia", "Error!");
            $("#colonia").focus();
            $("#colonia").css("background-color", "rgb(202, 193, 193)");
            $("#error13").css("color", "red");
            return false;
          } else {
            $("#error13").css("color", "black");
            $("#colonia").focus();
            $("#colonia").css("background-color", "white");
          }
          if (!letras1.test(Colonia)) {
            toastr.error("Colonia solo admite letras y números", "Error!");
            $("#colonia").focus();
            $("#colonia").css("background-color", "rgb(202, 193, 193)");
            $("#error13").css("color", "red");
            return false;
          } else {
            $("#error13").css("color", "black");
            $("#colonia").focus();
            $("#colonia").css("background-color", "white");
          }

          var NI = $("#No_interior").val();
          if ($.trim(NI) == "") {
            toastr.error("No ha ingresado Numero Interior", "Error!");
            $("#No_interior").focus();
            $("#No_interior").css("background-color", "rgb(202, 193, 193)");
            $("#error14").css("color", "red");
            return false;
          } else {
            $("#error14").css("color", "black");
            $("#No_interior").focus();
            $("#No_interior").css("background-color", "white");
          }
          if (!letras1.test(NI)) {
            toastr.error("Numero Interior solo admite letras y números", "Error!");
            $("#No_interior").focus();
            $("#No_interior").css("background-color", "rgb(202, 193, 193)");
            $("#error14").css("color", "red");
            return false;
          } else {
            $("#error14").css("color", "black");
            $("#No_interior").focus();
            $("#No_interior").css("background-color", "white");
          }

          var NE = $("#No_exterior").val();
          if ($.trim(NE) == "") {
            toastr.error("No ha ingresado Numero Exterior", "Error!");
            $("#No_exterior").focus();
            $("#No_exterior").css("background-color", "rgb(202, 193, 193)");
            $("#error15").css("color", "red");
            return false;
          } else {
            $("#error15").css("color", "black");
            $("#No_exterior").focus();
            $("#No_exterior").css("background-color", "white");
          }
          if (!letras1.test(NE)) {
            toastr.error("Numero Exterior solo admite letras y números", "Error!");
            $("#No_exterior").focus();
            $("#No_exterior").css("background-color", "rgb(202, 193, 193)");
            $("#error15").css("color", "red");
            return false;
          } else {
            $("#error15").css("color", "black");
            $("#No_exterior").focus();
            $("#No_exterior").css("background-color", "white");
          }

          var CP = $("#cp").val();
          if ($.trim(CP) == "") {
            toastr.error("No ha ingresado Codigo Postal", "Error!");
            $("#cp").focus();
            $("#cp").css("background-color", "rgb(202, 193, 193)");
            $("#error16").css("color", "red");
            return false;
          } else {
            $("#error16").css("color", "black");
            $("#cp").focus();
            $("#cp").css("background-color", "white");
          }
          if (!letras2.test(CP)) {
            toastr.error("Codigo Postal solo admite números", "Error!");
            $("#cp").focus();
            $("#cp").css("background-color", "rgb(202, 193, 193)");
            $("#error16").css("color", "red");
            return false;
          } else {
            $("#error16").css("color", "black");
            $("#cp").focus();
            $("#cp").css("background-color", "white");
          }

          var Municipio = $("#municipio").val();
          if ($.trim(Municipio) == "") {
            toastr.error("No ha ingresado Municipio", "Error!");
            $("#municipio").focus();
            $("#municipio").css("background-color", "rgb(202, 193, 193)");
            $("#error17").css("color", "red");
            return false;
          } else {
            $("#error17").css("color", "black");
            $("#municipio").focus();
            $("#municipio").css("background-color", "white");
          }

          var Localidad = $("#localidad").val();
          if ($.trim(Localidad) == "") {
            toastr.error("No ha ingresado Localidad", "Error!");
            $("#localidad").focus();
            $("#localidad").css("background-color", "rgb(202, 193, 193)");
            $("#error18").css("color", "red");
            return false;
          } else {
            $("#error18").css("color", "black");
            $("#localidad").focus();
            $("#localidad").css("background-color", "white");
          }
          if (!letras1.test(Localidad)) {
            toastr.error("Localidad solo admite letras y números", "Error!");
            $("#localidad").focus();
            $("#localidad").css("background-color", "rgb(202, 193, 193)");
            $("#error18").css("color", "red");
            return false;
          } else {
            $("#error18").css("color", "black");
            $("#localidad").focus();
            $("#localidad").css("background-color", "white");
          }

          var Referencia = $("#ref").val();
          if ($.trim(Referencia) == "") {
            toastr.error("No ha ingresado Referencia", "Error!");
            $("#ref").focus();
            $("#ref").css("background-color", "rgb(202, 193, 193)");
            $("#error19").css("color", "red");
            return false;
          } else {
            $("#error19").css("color", "black");
            $("#ref").focus();
            $("#ref").css("background-color", "white");
          }
          if (!letras3.test(Referencia)) {
            toastr.error("Referencia solo admite letras y números", "Error!");
            $("#ref").focus();
            $("#ref").css("background-color", "rgb(202, 193, 193)");
            $("#error19").css("color", "red");
            return false;
          } else {
            $("#error19").css("color", "black");
            $("#ref").focus();
            $("#ref").css("background-color", "white");
          }

          var Correo = $("#inputcorreo").val();
          if ($.trim(Correo) == "") {
            toastr.error("No ha ingresado Correo", "Error!");
            $("#inputcorreo").focus();
            $("#inputcorreo").css("background-color", "rgb(202, 193, 193)");
            $("#error20").css("color", "red");
            return false;
          } else {
            $("#error20").css("color", "black");
            $("#inputcorreo").focus();
            $("#inputcorreo").css("background-color", "white");
          }
          if (!letras4.test(Correo)) {
            toastr.error("Ingresar Correo valido", "Error!");
            $("#inputcorreo").focus();
            $("#inputcorreo").css("background-color", "rgb(202, 193, 193)");
            $("#error20").css("color", "red");
            return false;
          } else {
            $("#error20").css("color", "black");
            $("#inputcorreo").focus();
            $("#inputcorreo").css("background-color", "white");
          }

          var Contraseña = $("#inputpass1").val();
          if ($.trim(Contraseña) == "") {
            toastr.error("No ha ingresado Contraseña", "Advertencia!");
            $("#inputpass1").focus();
            $("#inputpass1").css("background-color", "rgb(202, 193, 193)");
            $("#error21").css("color", "red");
            return false;
          } else {
            $("#error21").css("color", "black");
            $("#inputpass1").focus();
            $("#inputpass1").css("background-color", "white");
          }
          if (!letras2_2.test(Contraseña)) {
            toastr.warning("Contraseña Debil minimo 10 Caracateres", "Error!");
            $("#inputpass1").focus();
            $("#inputpass1").css("background-color", "rgb(202, 193, 193)");
            $("#error21").css("color", "red");
            return false;
          } else {
            $("#error21").css("color", "black");
            $("#inputpass1").focus();
            $("#inputpass1").css("background-color", "white");
          }

          var Contraseña2 = $("#inputpass2").val();
          if ($.trim(Contraseña2) == "") {
            toastr.error("No ha Confirmado Contraseña", "Error!");
            $("#inputpass2").focus();
            $("#inputpass2").css("background-color", "rgb(202, 193, 193)");
            $("#error22").css("color", "red");
            return false;
          } else {
            $("#error22").css("color", "black");
            $("#inputpass2").focus();
            $("#inputpass2").css("background-color", "white");
          }
          if (Contraseña != Contraseña2) {
            toastr.error("Las contraseñas no coinciden", "Error!");
            $("#inputpass2").focus();
            $("#inputpass2").val('');
            $("#inputpass2").css("background-color", "rgb(202, 193, 193)");
            $("#error22").css("color", "red");
            $("#error21").css("color", "red");
            return false;
          } else {
            $("#error22").css("color", "black");
            $("#inputpass2").focus();
            $("#inputpass2").css("background-color", "white");
          }

          var usuario = $("#inputprivilegios").val();
          if ($.trim(usuario) == "") {
            toastr.error("No ha seleccionado Tipo de Usuario", "Error!");
            $("#inputprivilegios").focus();
            $("#inputprivilegios").css("background-color", "rgb(202, 193, 193)");
            $("#error23").css("color", "red");
            return false;
          } else {
            $("#error23").css("color", "black");
            $("#inputprivilegios").focus();
            $("#inputprivilegios").css("background-color", "white");
          }

          // var Cader = $("#inputcader").val();
          // if ($.trim(Cader) == "") {
          //   toastr.error("No ha seleccionado CADER", "Error!");
          //   $("#inputcader").focus();
          //   $("#inputcader").css("background-color", "rgb(202, 193, 193)");
          //   $("#error24").css("color", "red");
          //   return false;
          // } else {
          //   $("#error24").css("color", "black");
          //   $("#inputcader").focus();
          //   $("#inputcader").css("background-color", "white");
          // }

          var Foto = $("#your_picture").val();
          if ($.trim(Foto) == "") {
            toastr.error("No ha seleccionado Fotografia", "Error!");
            $("#your_picture").focus();
            $("#your_picture").css("background-color", "rgb(202, 193, 193)");
            $("#error25").css("color", "red");
            return false;
          } else {
            $("#error25").css("color", "black");
            $("#your_picture").focus();
            $("#your_picture").css("background-color", "white");
          }
          var formData = new FormData($("#formempleado_reg")[0]);
          var ruta = "../operaciones/agregar_empleados.php";
          $.ajax({
            url: ruta,
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
          }).done(function (data) {
            if (data == 1) {
              Swal.fire({
                position: 'top-center',
                type: 'success',
                title: 'REGISTRO EXITOSO',
                showConfirmButton: false,
                timer: 1500
              });
              $("#registrar_empleado").modal('hide');
              document.getElementById("formempleado_reg").reset();
              setTimeout('document.location.reload()', 700);
            } else if (data == 3) {
              $.smkAlert({
                text: 'ERROR DE REGISTRO',
                type: 'warning',
                position: 'bottom-center',
                time: 3
              });
            } else {
              Swal.fire({
                type: 'error',
                title: 'ERROR DE REGISTRO',
                text: 'VERIFICA QUE LOS DATOS SEAN CORRECTOS Y QUE TODOS LOS CAMPOS ESTEN COMPLETOS!'
              })
            }
          })
        });
      var btnCancel = $('<a></a>').text('CANCELAR')
        .addClass('btn btn-danger')
        .on('click', function () {
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false,          })

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
              $('#smartwizard23').smartWizard("reset");
              $("#registrar_empleado").modal('hide');
              setTimeout('document.location.reload()', 2000);
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
            }
          })

        });
      $('#smartwizard23').smartWizard({
        selected: 0,
        theme: 'arrows',
        transitionEffect: 'fade',
        showStepURLhash: false,
        toolbarSettings: {
          toolbarPosition: 'both',
          toolbarExtraButtons: [btnFinish, btnCancel]
        }
      });

    });