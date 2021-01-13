    $(document).ready(function () {
      $("#smartwizard230").on("showStep", function (e, anchorObject, stepNumber, stepDirection, stepPosition) {
        if (stepPosition === 'first') {
          $("#prev-btn").addClass('disabled');
        } else if (stepPosition === 'final') {
          $("#next-btn").addClass('disabled');
        } else {
          $("#prev-btn").removeClass('disabled');
          $("#next-btn").removeClass('disabled');
        }
      });
      var btnFinish = $('<button></button>').text('ACTUALIZAR')
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
          var nombre = $("#inputusuario11").val();
          if ($.trim(nombre) == "") {
            toastr.error("No ha ingresado Nombre", "Error!");
            $("#inputusuario11").focus();
            $("#error1_em2").css("color", "red");
            $("#inputusuario11").css("background-color", "rgb(202, 193, 193)");
            return false;
          } else {
            $("#error1_em2").css("color", "black");
            $("#inputusuario11").css("background-color", "white");
          }
          if (!letras.test(nombre)) {
            toastr.error("Nombre solo admite letras", "Error!");
            $("#inputusuario11").focus();
            $("#inputusuario11").css("background-color", "rgb(202, 193, 193)");
            $("#error1_em2").css("color", "red");
            return false;

          } else {
            $("#error1_em2").css("color", "black");
            $("#inputusuario11").css("background-color", "white");
          }
          if (!letras1_1.test(nombre)) {
            toastr.error("Nombre minimo de 3 letras", "Error!");
            $("#inputusuario11").focus();
            $("#inputusuario11").css("background-color", "rgb(202, 193, 193)");
            $("#error1_em2").css("color", "red");
            return false;

          } else {
            $("#error1_em2").css("color", "black");
            $("#inputusuario11").css("background-color", "white");
          }

          var Apellido_P = $("#inputapellidopaterno11").val();
          if ($.trim(Apellido_P) == "") {
            toastr.error("No ha ingresado Apellido Paterno", "Error!");
            $("#inputapellidopaterno11").focus();
            $("#inputapellidopaterno11").css("background-color", "rgb(202, 193, 193)");
            $("#error222").css("color", "red");
            return false;
          } else {
            $("#error222").css("color", "black");
            $("#inputapellidopaterno11").css("background-color", "white");
          }
          if (!letras.test(Apellido_P)) {
            toastr.error("Apellido Paterno solo admite letras", "Error!");
            $("#inputapellidopaterno11").focus();
            $("#inputapellidopaterno11").css("background-color", "rgb(202, 193, 193)");
            $("#error222").css("color", "red");
            return false;

          } else {
            $("#error222").css("color", "black");
            $("#inputapellidopaterno11").focus();
            $("#inputapellidopaterno11").css("background-color", "white");
          }
          if (!letras1_1.test(Apellido_P)) {
            toastr.error("Apellido Paterno minimo de 3 letras", "Error!");
            $("#inputapellidopaterno11").focus();
            $("#inputapellidopaterno11").css("background-color", "rgb(202, 193, 193)");
            $("#error222").css("color", "red");
            return false;

          } else {
            $("#error222").css("color", "black");
            $("#inputapellidopaterno11").focus();
            $("#inputapellidopaterno11").css("background-color", "white");
          }

          var Apellido_M = $("#inputapellidomaterno11").val();
          if ($.trim(Apellido_M) == "") {
            toastr.error("No ha ingresado Apellido Materno", "Error!");
            $("#inputapellidomaterno11").focus();
            $("#inputapellidomaterno11").css("background-color", "rgb(202, 193, 193)");
            $("#error32").css("color", "red");
            return false;
          } else {
            $("#error32").css("color", "black");
            $("#inputapellidomaterno11").focus();
            $("#inputapellidomaterno11").css("background-color", "white");
          }
          if (!letras.test(Apellido_M)) {
            toastr.error("Apellido Materno solo admite letras", "Error!");
            $("#inputapellidomaterno11").focus();
            $("#inputapellidomaterno11").css("background-color", "rgb(202, 193, 193)");
            $("#error32").css("color", "red");
            return false;

          } else {
            $("#error32").css("color", "black");
            $("#inputapellidomaterno11").focus();
            $("#inputapellidomaterno11").css("background-color", "white");
          }
          if (!letras1_1.test(Apellido_M)) {
            toastr.error("Apellido Materno minimo de 3 letras", "Error!");
            $("#inputapellidomaterno11").focus();
            $("#inputapellidomaterno11").css("background-color", "rgb(202, 193, 193)");
            $("#error32").css("color", "red");
            return false;

          } else {
            $("#error32").css("color", "black");
            $("#inputapellidomaterno11").focus();
            $("#inputapellidomaterno11").css("background-color", "white");
          }

          var Curp = $("#inputcurp11").val();
          if ($.trim(Curp) == "") {
            toastr.error("No ha ingresado CURP", "Error!");
            $("#inputcurp11").css("background-color", "rgb(202, 193, 193)");
            $("#inputcurp11").focus();
            $("#error42").css("color", "red");
            return false;
          } else {
            $("#error42").css("color", "black");
            $("#inputcurp11").focus();
            $("#inputcurp11").css("background-color", "white");
          }
          if (!letras1.test(Curp)) {
            toastr.error("CURP solo admite letras y números", "Error!");
            $("#inputcurp11").css("background-color", "rgb(202, 193, 193)");
            $("#inputcurp11").focus();
            $("#error42").css("color", "red");
            return false;

          } else {
            $("#error42").css("color", "black");
            $("#inputcurp11").focus();
            $("#inputcurp11").css("background-color", "white");
          }
          if (!letras2_1.test(Curp)) {
            toastr.error("CURP minimo de 18 caracteres", "Error!");
            $("#inputcurp11").focus();
            $("#inputcurp11").css("background-color", "rgb(202, 193, 193)");
            $("#error42").css("color", "red");
            return false;
          } else {
            $("#error42").css("color", "black");
            $("#inputcurp11").focus();
            $("#inputcurp11").css("background-color", "white");
          }

          var RFC = $("#inputrfc11").val();
          if ($.trim(RFC) == "") {
            toastr.error("No ha ingresado Clave de elector", "Error!");
            $("#inputrfc11").focus();
            $("#inputrfc11").css("background-color", "rgb(202, 193, 193)");
            $("#error52").css("color", "red");
            return false;
          } else {
            $("#error52").css("color", "black");
            $("#inputrfc11").focus();
            $("#inputrfc11").css("background-color", "white");
          }
          if (!letras1.test(RFC)) {
            toastr.error("Clave de elector solo admite letras y números", "Error!");
            $("#inputrfc11").focus();
            $("#inputrfc11").css("background-color", "rgb(202, 194, 193)");
            $("#error52").css("color", "red");
            return false;
          } else {
            $("#error52").css("color", "black");
            $("#inputrfc11").focus();
            $("#inputrfc11").css("background-color", "white");
          }
          if (!letras2_2.test(RFC)) {
            toastr.error("Clave de elector minimo de 18 caracteres", "Error!");
            $("#inputrfc11").focus();
            $("#inputrfc11").css("background-color", "rgb(202, 193, 193)");
            $("#error52").css("color", "red");
            return false;

          } else {
            $("#error52").css("color", "black");
            $("#inputrfc11").focus();
            $("#inputrfc11").css("background-color", "white");
          }

          var Estado_Civil = $("#inputedocivil11").val();
          if ($.trim(Estado_Civil) == "") {
            toastr.error("No ha ingresado Estado_Civil", "Error!");
            $("#inputedocivil11").focus();
            $("#inputedocivil11").css("background-color", "rgb(202, 193, 193)");
            $("#error62").css("color", "red");
            return false;
          } else {
            $("#error62").css("color", "black");
            $("#inputedocivil11").focus();
            $("#inputedocivil11").css("background-color", "white");
          }

          var Sexo = $("#inputsexo11").val();
          if ($.trim(Sexo) == "") {
            toastr.error("No ha ingresado Sexo", "Error!");
            $("#inputsexo11").focus();
            $("#inputsexo11").css("background-color", "rgb(202, 193, 193)");
            $("#error72").css("color", "red");
            return false;
          } else {
            $("#error72").css("color", "black");
            $("#inputsexo11").focus();
            $("#inputsexo11").css("background-color", "white");
          }


          var Nivel_de_estudios = $("#inputestudios11").val();
          if ($.trim(Nivel_de_estudios) == "") {
            toastr.error("No ha ingresado Nivel de estudios", "Error!");
            $("#inputestudios11").focus();
            $("#inputestudios11").css("background-color", "rgb(202, 193, 193)");
            $("#error82").css("color", "red");
            return false;
          } else {
            $("#error82").css("color", "black");
            $("#inputestudios11").focus();
            $("#inputestudios11").css("background-color", "white");
          }
          if (!letras1.test(Nivel_de_estudios)) {
            toastr.error("Estudios solo admite letras y números", "Error!");
            $("#inputestudios11").focus();
            $("#inputestudios11").css("background-color", "rgb(202, 193, 193)");
            $("#error82").css("color", "red");
            return false;
          } else {
            $("#error82").css("color", "black");
            $("#inputestudios11").focus();
            $("#inputestudios11").css("background-color", "white");
          }

          var Ocupacion = $("#inputocupacion11").val();
          if ($.trim(Ocupacion) == "") {
            toastr.error("No ha ingresado Ocupación", "Error!");
            $("#inputocupacion11").focus();
            $("#inputocupacion11").css("background-color", "rgb(202, 193, 193)");
            $("#error92").css("color", "red");
            return false;
          } else {
            $("#error92").css("color", "black");
            $("#inputocupacion11").focus();
            $("#inputocupacion11").css("background-color", "white");
          }
          if (!letras1.test(Ocupacion)) {
            toastr.error("Ocupacion solo admite letras y numeros", "Error!");
            $("#inputocupacion11").focus();
            $("#inputocupacion11").css("background-color", "rgb(202, 193, 193)");
            $("#error92").css("color", "red");
            return false;

          } else {
            $("#error92").css("color", "black");
            $("#inputocupacion11").focus();
            $("#inputocupacion11").css("background-color", "white");
          }
          if (!letras2_3.test(Ocupacion)) {
            toastr.error("Ocupacion minimo de 5 caracteres", "Error!");
            $("#inputocupacion11").focus();
            $("#inputocupacion11").css("background-color", "rgb(202, 193, 193)");
            $("#error92").css("color", "red");
            return false;

          } else {
            $("#error92").css("color", "black");
            $("#inputocupacion11").focus();
            $("#inputocupacion11").css("background-color", "white");
          }

          var Telefono = $("#inputcel11").val();
          if ($.trim(Telefono) == "") {
            toastr.error("No ha ingresado Telefono", "Error!");
            $("#inputcel11").focus();
            $("#inputcel11").css("background-color", "rgb(202, 193, 193)");
            $("#error102").css("color", "red");
            return false;
          } else {
            $("#error102").css("color", "black");
            $("#inputcel11").focus();
            $("#inputcel11").css("background-color", "white");
          }
          if (!letras2.test(Telefono)) {
            toastr.error("Telefono solo admite números", "Error!");
            $("#inputcel11").focus();
            $("#inputcel11").css("background-color", "rgb(202, 193, 193)");
            $("#error102").css("color", "red");
            return false;
          } else {
            $("#error102").css("color", "black");
            $("#inputcel11").focus();
            $("#inputcel11").css("background-color", "white");
          }
          if (!letras2_4.test(Telefono)) {
            toastr.error("Telefono minimo de 10 dígitos", "Error!");
            $("#inputcel11").focus();
            $("#inputcel11").css("background-color", "rgb(202, 193, 193)");
            $("#error102").css("color", "red");
            return false;
          } else {
            $("#error102").css("color", "black");
            $("#inputcel11").focus();
            $("#inputcel11").css("background-color", "white");
          }


          var Fecha_Nac = $("#fechaNac11").val();
          if ($.trim(Fecha_Nac) == "") {
            toastr.error("No ha ingresado Fecha de Nacimiento", "Error!");
            $("#fechaNac11").focus();
            $("#fechaNac11").css("background-color", "rgb(202, 193, 193)");
            $("#error112").css("color", "red");
            return false;
          } else {
            $("#error112").css("color", "black");
            $("#fechaNac11").focus();
            $("#fechaNac11").css("background-color", "white");
          }

          var Calle = $("#calle11").val();
          if ($.trim(Calle) == "") {
            toastr.error("No ha ingresado calle11", "Error!");
            $("#calle11").focus();
            $("#calle11").css("background-color", "rgb(202, 193, 193)");
            $("#error122").css("color", "red");
            return false;
          } else {
            $("#error122").css("color", "black");
            $("#calle11").focus();
            $("#calle11").css("background-color", "white");
          }
          if (!letras1.test(Calle)) {
            toastr.error("Calle solo admite letras y números", "Error!");
            $("#calle11").focus();
            $("#calle11").css("background-color", "rgb(202, 193, 193)");
            $("#error122").css("color", "red");
            return false;
          } else {
            $("#error122").css("color", "black");
            $("#calle11").focus();
            $("#calle11").css("background-color", "white");
          }

          var Colonia = $("#colonia11").val();
          if ($.trim(Colonia) == "") {
            toastr.error("No ha ingresado Colonia", "Error!");
            $("#colonia11").focus();
            $("#colonia11").css("background-color", "rgb(202, 193, 193)");
            $("#error132").css("color", "red");
            return false;
          } else {
            $("#error132").css("color", "black");
            $("#colonia11").focus();
            $("#colonia11").css("background-color", "white");
          }
          if (!letras1.test(Colonia)) {
            toastr.error("Colonia solo admite letras y números", "Error!");
            $("#colonia11").focus();
            $("#colonia11").css("background-color", "rgb(202, 193, 193)");
            $("#error132").css("color", "red");
            return false;
          } else {
            $("#error132").css("color", "black");
            $("#colonia11").focus();
            $("#colonia11").css("background-color", "white");
          }

          var NI = $("#No_interior11").val();
          if ($.trim(NI) == "") {
            toastr.error("No ha ingresado Numero Interior", "Error!");
            $("#No_interior11").focus();
            $("#No_interior11").css("background-color", "rgb(202, 193, 193)");
            $("#error142").css("color", "red");
            return false;
          } else {
            $("#error142").css("color", "black");
            $("#No_interior11").focus();
            $("#No_interior11").css("background-color", "white");
          }
          if (!letras1.test(NI)) {
            toastr.error("Numero Interior solo admite letras y números", "Error!");
            $("#No_interior11").focus();
            $("#No_interior11").css("background-color", "rgb(202, 193, 193)");
            $("#error142").css("color", "red");
            return false;
          } else {
            $("#error142").css("color", "black");
            $("#No_interior11").focus();
            $("#No_interior11").css("background-color", "white");
          }

          var NE = $("#No_exterior11").val();
          if ($.trim(NE) == "") {
            toastr.error("No ha ingresado Numero Exterior", "Error!");
            $("#No_exterior11").focus();
            $("#No_exterior11").css("background-color", "rgb(202, 193, 193)");
            $("#error152").css("color", "red");
            return false;
          } else {
            $("#error152").css("color", "black");
            $("#No_exterior11").focus();
            $("#No_exterior11").css("background-color", "white");
          }
          if (!letras1.test(NE)) {
            toastr.error("Numero Exterior solo admite letras y números", "Error!");
            $("#No_exterior11").focus();
            $("#No_exterior11").css("background-color", "rgb(202, 193, 193)");
            $("#error152").css("color", "red");
            return false;
          } else {
            $("#error152").css("color", "black");
            $("#No_exterior11").focus();
            $("#No_exterior11").css("background-color", "white");
          }

          var CP = $("#cp11").val();
          if ($.trim(CP) == "") {
            toastr.error("No ha ingresado Codigo Postal", "Error!");
            $("#cp11").focus();
            $("#cp11").css("background-color", "rgb(202, 193, 193)");
            $("#error162").css("color", "red");
            return false;
          } else {
            $("#error162").css("color", "black");
            $("#cp11").focus();
            $("#cp11").css("background-color", "white");
          }
          if (!letras2.test(CP)) {
            toastr.error("Codigo Postal solo admite números", "Error!");
            $("#cp11").focus();
            $("#cp11").css("background-color", "rgb(202, 193, 193)");
            $("#error162").css("color", "red");
            return false;
          } else {
            $("#error162").css("color", "black");
            $("#cp11").focus();
            $("#cp11").css("background-color", "white");
          }

          var Municipio = $("#municipio11").val();
          if ($.trim(Municipio) == "") {
            toastr.error("No ha ingresado Municipio", "Error!");
            $("#municipio11").focus();
            $("#municipio11").css("background-color", "rgb(202, 193, 193)");
            $("#error172").css("color", "red");
            return false;
          } else {
            $("#error172").css("color", "black");
            $("#municipio11").focus();
            $("#municipio11").css("background-color", "white");
          }

          var Localidad = $("#localidad11").val();
          if ($.trim(Localidad) == "") {
            toastr.error("No ha ingresado Localidad", "Error!");
            $("#localidad11").focus();
            $("#localidad11").css("background-color", "rgb(202, 193, 193)");
            $("#error182").css("color", "red");
            return false;
          } else {
            $("#error182").css("color", "black");
            $("#localidad11").focus();
            $("#localidad11").css("background-color", "white");
          }
          if (!letras1.test(Localidad)) {
            toastr.error("Localidad solo admite letras y números", "Error!");
            $("#localidad11").focus();
            $("#localidad11").css("background-color", "rgb(202, 193, 193)");
            $("#error182").css("color", "red");
            return false;
          } else {
            $("#error182").css("color", "black");
            $("#localidad11").focus();
            $("#localidad11").css("background-color", "white");
          }

          var Referencia = $("#ref11").val();
          if ($.trim(Referencia) == "") {
            toastr.error("No ha ingresado Referencia", "Error!");
            $("#ref11").focus();
            $("#ref11").css("background-color", "rgb(202, 193, 193)");
            $("#error192").css("color", "red");
            return false;
          } else {
            $("#error192").css("color", "black");
            $("#ref11").focus();
            $("#ref11").css("background-color", "white");
          }
          if (!letras3.test(Referencia)) {
            toastr.error("Referencia solo admite letras y números", "Error!");
            $("#ref11").focus();
            $("#ref11").css("background-color", "rgb(202, 193, 193)");
            $("#error192").css("color", "red");
            return false;
          } else {
            $("#error192").css("color", "black");
            $("#ref11").focus();
            $("#ref11").css("background-color", "white");
          }

          var Correo = $("#inputcorreo11").val();
          if ($.trim(Correo) == "") {
            toastr.error("No ha ingresado Correo", "Error!");
            $("#inputcorreo11").focus();
            $("#inputcorreo11").css("background-color", "rgb(202, 193, 193)");
            $("#error202").css("color", "red");
            return false;
          } else {
            $("#error202").css("color", "black");
            $("#inputcorreo11").focus();
            $("#inputcorreo11").css("background-color", "white");
          }
          if (!letras4.test(Correo)) {
            toastr.error("Ingresar Correo valido", "Error!");
            $("#inputcorreo11").focus();
            $("#inputcorreo11").css("background-color", "rgb(202, 193, 193)");
            $("#error202").css("color", "red");
            return false;
          } else {
            $("#error202").css("color", "black");
            $("#inputcorreo11").focus();
            $("#inputcorreo11").css("background-color", "white");
          }

          var Contraseña = $("#inputpass11").val();
          if ($.trim(Contraseña) == "") {
            toastr.error("No ha ingresado Contraseña", "Advertencia!");
            $("#inputpass11").focus();
            $("#inputpass11").css("background-color", "rgb(202, 193, 193)");
            $("#error212").css("color", "red");
            return false;
          } else {
            $("#error212").css("color", "black");
            $("#inputpass11").focus();
            $("#inputpass11").css("background-color", "white");
          }
          if (!letras2_2.test(Contraseña)) {
            toastr.warning("Contraseña Debil minimo 10 Caracateres", "Error!");
            $("#inputpass11").focus();
            $("#inputpass11").css("background-color", "rgb(202, 193, 193)");
            $("#error212").css("color", "red");
            return false;
          } else {
            $("#error212").css("color", "black");
            $("#inputpass11").focus();
            $("#inputpass11").css("background-color", "white");
          }

          var Contraseña2 = $("#inputpass21").val();
          if ($.trim(Contraseña2) == "") {
            toastr.error("No ha Confirmado Contraseña", "Error!");
            $("#inputpass21").focus();
            $("#inputpass21").css("background-color", "rgb(202, 193, 193)");
            $("#error222").css("color", "red");
            return false;
          } else {
            $("#error222").css("color", "black");
            $("#inputpass21").focus();
            $("#inputpass21").css("background-color", "white");
          }
          if (Contraseña != Contraseña2) {
            toastr.error("Las contraseñas no coinciden", "Error!");
            $("#inputpass21").focus();
            $("#inputpass21").val('');
            $("#inputpass21").css("background-color", "rgb(202, 193, 193)");
            $("#error222").css("color", "red");
            $("#error212").css("color", "red");
            return false;
          } else {
            $("#error222").css("color", "black");
            $("#inputpass21").focus();
            $("#inputpass21").css("background-color", "white");
          }

          var usuario = $("#inputprivilegios11").val();
          if ($.trim(usuario) == "") {
            toastr.error("No ha seleccionado Tipo de Usuario", "Error!");
            $("#inputprivilegios11").focus();
            $("#inputprivilegios11").css("background-color", "rgb(202, 193, 193)");
            $("#error232").css("color", "red");
            return false;
          } else {
            $("#error232").css("color", "black");
            $("#inputprivilegios11").focus();
            $("#inputprivilegios11").css("background-color", "white");
          }


          // var Foto = $("#your_picture").val();
          // if ($.trim(Foto) == "") {
          //   toastr.error("No ha seleccionado Fotografia", "Error!");
          //   $("#your_picture").focus();
          //   $("#your_picture").css("background-color", "rgb(202, 193, 193)");
          //   $("#error25").css("color", "red");
          //   return false;
          // } else {
          //   $("#error25").css("color", "black");
          //   $("#your_picture").focus();
          //   $("#your_picture").css("background-color", "white");
          // }
          var formData = new FormData($("#formempleado_act")[0]);
          var ruta = "../operaciones/actualizar_empleado.php";
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
                title: 'ACTUALIZACION EXITOSA',
                showConfirmButton: false,
                timer: 1500
              });
              $("#actualizar_empleado").modal('hide');
              document.getElementById("formempleado_act").reset();
              $.ajax({
                type: "POST",
                url: "../operaciones/ver_tabla_empleado.php",
                success: function(data) {
                    $('#central1').fadeIn(100).html(data);                
                }
            });
            $("#submenu_responsive").menus('hide');
            return false;
              // setTimeout('document.location.reload()', 700);
            } else if (data == 3) {
              $.smkAlert({
                text: 'ERROR DE ACTUALIZACION',
                type: 'warning',
                position: 'bottom-center',
                time: 3
              });
            } else {
         
              Swal.fire({
                type: 'error',
                title: 'ERROR DE ACTUALIZACION',
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
            title: 'CANCELAR ACTUALIZACION',
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
                title: 'ACTUALIZACION CANCELADA',
                text: 'PARA ACTUALIZAR SELECCIONE LA OPCION DE AGREGAR EN EL MENU!',
                showConfirmButton: false,
                timer: 2000
              });
              $('#smartwizard230').smartWizard("reset");
              $("#actualizar_empleado").modal('hide');
              // setTimeout('document.location.reload()', 2000);
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
            }
          })

        });
      $('#smartwizard230').smartWizard({
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