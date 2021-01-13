    $(document).ready(function(){

        // Step show event
        $("#smartwizard_proveedor2").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
           //alert("You are on step "+stepNumber+" now");
           if(stepPosition === 'first'){
               $("#prev-btn").addClass('disabled');
           }else if(stepPosition === 'final'){
               $("#next-btn").addClass('disabled');
           }else{
               $("#prev-btn").removeClass('disabled');
               $("#next-btn").removeClass('disabled');
           }
        });

        // Toolbar extra buttons
        var btnFinish = $('<button></button>').text('ACTUALIZAR')
                                         .addClass('btn btn-success')
                                         .on('click', function(){
                                          var letras= /^([a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{1,25})$/i;
                                          var letras1_1= /^([a-zA-Z ñáéíóú ÑÁÉÍÓÚ]{3,20})$/i;
                                          var letras1= /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{1,25})$/i;
                                          var letras2= /^([0-9]{3,25})$/i;
                                          var letras2_1= /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{18,25})$/i;
                                          var letras2_2= /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{10,25})$/i;
                                          var letras2_3= /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{5,25})$/i;
                                          var letras2_4= /^([0-9]{10,25})$/i;
                                          var letras3= /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{2,95})$/i;
                                          var letras4= /^([\w._%-]+@[\w.-]+\.[a-zA-Z]{2,4})$/i;
                                          var nombre = $("#inputproveedor2").val();
                                          //validamos campos
                                          if($.trim(nombre) == ""){
                                          toastr.error("No ha ingresado Nombre","Error!");
                                          $("#inputproveedor2").focus();
                                          $("#error10_reg1").css("color","red");
                                          $("#inputproveedor2").css("background-color","rgb(202, 193, 193)");
                                              return false;
                                          }else{
                                            $("#error10_reg1").css("color","black");
                                            $("#inputproveedor2").css("background-color","white");
                                          }
                                          if( !letras.test(nombre)){
                                          toastr.error("Nombre solo admite letras","Error!");
                                          $("#inputproveedor2").focus();
                                          $("#inputproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error10_reg1").css("color","red");
                                            return false;

                                          }else{
                                            $("#error10_reg1").css("color","black");
                                            $("#inputproveedor2").css("background-color","white");
                                          }
                                           if( !letras1_1.test(nombre)){
                                            toastr.error("Nombre minimo de 3 letras","Error!");
                                            $("#inputproveedor2").focus();
                                            $("#inputproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error10_reg1").css("color","red");
                                              return false;

                                            }else{
                                              $("#error10_reg1").css("color","black");
                                              $("#inputproveedor2").css("background-color","white");
                                            }

                                          var Apellido_P = $("#inputapellidopaternoproveedor2").val();
                                          //validamos campos
                                          if($.trim(Apellido_P) == ""){
                                          toastr.error("No ha ingresado Apellido Paterno","Error!");
                                          $("#inputapellidopaternoproveedor2").focus();
                                          $("#inputapellidopaternoproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error2011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error2011").css("color","black");
                                            $("#inputapellidopaternoproveedor2").css("background-color","white");
                                          }
                                          if( !letras.test(Apellido_P)){
                                          toastr.error("Apellido Paterno solo admite letras","Error!");
                                          $("#inputapellidopaternoproveedor2").focus();
                                          $("#inputapellidopaternoproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error2011").css("color","red");
                                            return false;

                                          }else{
                                            $("#error2011").css("color","black");
                                            $("#inputapellidopaternoproveedor2").focus();
                                            $("#inputapellidopaternoproveedor2").css("background-color","white");
                                          }
                                          if( !letras1_1.test(Apellido_P)){
                                            toastr.error("Apellido Paterno minimo de 3 letras","Error!");
                                            $("#inputapellidopaternoproveedor2").focus();
                                            $("#inputapellidopaternoproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error2011").css("color","red");
                                              return false;

                                            }else{
                                              $("#error2011").css("color","black");
                                              $("#inputapellidopaternoproveedor2").focus();
                                              $("#inputapellidopaternoproveedor2").css("background-color","white");
                                            }

                                          var Apellido_M = $("#inputapellidomaternoproveedor2").val();
                                          //validamos campos
                                          if($.trim(Apellido_M) == ""){
                                          toastr.error("No ha ingresado Apellido Materno","Error!");
                                          $("#inputapellidomaternoproveedor2").focus();
                                          $("#inputapellidomaternoproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error3011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error3011").css("color","black");
                                            $("#inputapellidomaternoproveedor2").focus();
                                            $("#inputapellidomaternoproveedor2").css("background-color","white");
                                          }
                                          if( !letras.test(Apellido_M)){
                                          toastr.error("Apellido Materno solo admite letras","Error!");
                                          $("#inputapellidomaternoproveedor2").focus();
                                          $("#inputapellidomaternoproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error3011").css("color","red");
                                            return false;

                                          }else{
                                            $("#error3011").css("color","black");
                                            $("#inputapellidomaternoproveedor2").focus();
                                            $("#inputapellidomaternoproveedor2").css("background-color","white");
                                          }
                                           if( !letras1_1.test(Apellido_M)){
                                            toastr.error("Apellido Materno minimo de 3 letras","Error!");
                                            $("#inputapellidomaternoproveedor2").focus();
                                            $("#inputapellidomaternoproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error3011").css("color","red");
                                              return false;

                                            }else{
                                              $("#error3011").css("color","black");
                                              $("#inputapellidomaternoproveedor2").focus();
                                              $("#inputapellidomaternoproveedor2").css("background-color","white");
                                            }

                                          var Curp = $("#inputcurpproveedor2").val();
                                          //validamos campos
                                          if($.trim(Curp) == ""){
                                          toastr.error("No ha ingresado CURP","Error!");
                                          $("#inputcurpproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#inputcurpproveedor2").focus();
                                          $("#error4011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error4011").css("color","black");
                                            $("#inputcurpproveedor2").focus();
                                            $("#inputcurpproveedor2").css("background-color","white");
                                          }
                                           if( !letras1.test(Curp)){
                                          toastr.error("CURP solo admite letras y números","Error!");
                                          $("#inputcurpproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#inputcurpproveedor2").focus();
                                          $("#error4011").css("color","red");
                                            return false;

                                          }else{
                                            $("#error4011").css("color","black");
                                            $("#inputcurpproveedor2").focus();
                                            $("#inputcurpproveedor2").css("background-color","white");
                                          }
                                          if( !letras2_1.test(Curp)){
                                            toastr.error("CURP minimo de 18 caracteres","Error!");
                                            $("#inputcurpproveedor2").focus();
                                            $("#inputcurpproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error4011").css("color","red");
                                              return false;
                                             }
                                             else{
                                              $("#error4011").css("color","black");
                                              $("#inputcurpproveedor2").focus();
                                              $("#inputcurpproveedor2").css("background-color","white");
                                            }

                                          var RFC = $("#inputrfcproveedor2").val();
                                          //validamos campos
                                          if($.trim(RFC) == ""){
                                          toastr.error("No ha ingresado RFC","Error!");
                                          $("#inputrfcproveedor2").focus();
                                          $("#inputrfcproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error5011").css("color","red");
                                              return false;
                                          } else{
                                            $("#error5011").css("color","black");
                                            $("#inputrfcproveedor2").focus();
                                            $("#inputrfcproveedor2").css("background-color","white");
                                          }
                                           if( !letras1.test(RFC)){
                                          toastr.error("RFC solo admite letras y números","Error!");
                                          $("#inputrfcproveedor2").focus();
                                          $("#inputrfcproveedor2").css("background-color","rgb(202, 194, 193)");
                                          $("#error5011").css("color","red");
                                            return false;
                                          } else{
                                            $("#error5011").css("color","black");
                                            $("#inputrfcproveedor2").focus();
                                            $("#inputrfcproveedor2").css("background-color","white");
                                          }
                                          if( !letras2_2.test(RFC)){
                                            toastr.error("RFC minimo de 10 caracteres","Error!");
                                            $("#inputrfcproveedor2").focus();
                                            $("#inputrfcproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error5011").css("color","red");
                                              return false;

                                            } else{
                                              $("#error5011").css("color","black");
                                              $("#inputrfcproveedor2").focus();
                                              $("#inputrfcproveedor2").css("background-color","white");
                                            }

                                          var Estado_Civil = $("#inputedocivilproveedor2").val();
                                          //validamos campos
                                          if($.trim(Estado_Civil) == ""){
                                          toastr.error("No ha ingresado Estado Civil","Error!");
                                          $("#inputedocivilproveedor2").focus();
                                          $("#inputedocivilproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error6011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error6011").css("color","black");
                                            $("#inputedocivilproveedor2").focus();
                                            $("#inputedocivilproveedor2").css("background-color","white");
                                          }

                                          var Sexo = $("#inputsexoproveedor2").val();
                                          //validamos campos
                                          if($.trim(Sexo) == ""){
                                          toastr.error("No ha ingresado Sexo","Error!");
                                          $("#inputsexoproveedor2").focus();
                                          $("#inputsexoproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error7011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error7011").css("color","black");
                                            $("#inputsexoproveedor2").focus();
                                            $("#inputsexoproveedor2").css("background-color","white");
                                          }


                                          var Nivel_de_estudios = $("#inputestudiosproveedor2").val();
                                          //validamos campos
                                          if($.trim(Nivel_de_estudios) == ""){
                                          toastr.error("No ha ingresado Nivel de estudios","Error!");
                                          $("#inputestudiosproveedor2").focus();
                                          $("#inputestudiosproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error8011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error8011").css("color","black");
                                            $("#inputestudiosproveedor2").focus();
                                            $("#inputestudiosproveedor2").css("background-color","white");
                                          }
                                         if( !letras1.test(Nivel_de_estudios)){
                                            toastr.error("Ocupacion solo admite letras y números","Error!");
                                            $("#inputestudiosproveedor2").focus();
                                            $("#inputestudiosproveedor2").css("background-color","rgb(202, 193, 193)");
                                              $("#error8011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error8011").css("color","black");
                                            $("#inputestudiosproveedor2").focus();
                                            $("#inputestudiosproveedor2").css("background-color","white");
                                          }

                                        

                                          var Telefono = $("#inputcelproveedor2").val();
                                          //validamos campos
                                          if($.trim(Telefono) == ""){
                                          toastr.error("No ha ingresado Telefono","Error!");
                                          $("#inputcelproveedor2").focus();
                                          $("#inputcelproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error10011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10011").css("color","black");
                                            $("#inputcelproveedor2").focus();
                                            $("#inputcelproveedor2").css("background-color","white");
                                          }
                                           if( !letras2.test(Telefono)){
                                            toastr.error("Telefono solo admite números","Error!");
                                            $("#inputcelproveedor2").focus();
                                            $("#inputcelproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error10011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10011").css("color","black");
                                            $("#inputcelproveedor2").focus();
                                            $("#inputcelproveedor2").css("background-color","white");
                                          }
                                           if( !letras2_4.test(Telefono)){
                                            toastr.error("Telefono minimo de 10 dígitos","Error!");
                                            $("#inputcelproveedor2").focus();
                                            $("#inputcelproveedor2").css("background-color","rgb(202, 193, 193)");
                                            $("#error10011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10011").css("color","black");
                                            $("#inputcelproveedor2").focus();
                                            $("#inputcelproveedor2").css("background-color","white");
                                          }


                                          var Fecha_Reg = $("#fechaRegproveedor2").val();
                                          //validamos campos
                                          if($.trim(Fecha_Reg) == ""){
                                          toastr.error("No ha ingresado Fecha de Nacimiento","Error!");
                                          $("#fechaRegproveedor2").focus();
                                          $("#fechaRegproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error11011").css("color","red");
                                              return false;
                                          }
                                          else{
                                            $("#error11011").css("color","black");
                                            $("#fechaRegproveedor2").focus();
                                            $("#fechaRegproveedor2").css("background-color","white");
                                          }

                                          var Calle = $("#calleproveedor2").val();
                                          //validamos campos
                                          if($.trim(Calle) == ""){
                                          toastr.error("No ha ingresado calle","Error!");
                                          $("#calleproveedor2").focus();
                                          $("#calleproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error12011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error12011").css("color","black");
                                            $("#calleproveedor2").focus();
                                            $("#calleproveedor2").css("background-color","white");
                                          }
                                           if( !letras1.test(Calle)){
                                          toastr.error("Calle solo admite letras y números","Error!");
                                          $("#calleproveedor2").focus();
                                          $("#calleproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error12011").css("color","red");
                                            return false;
                                          }else{
                                            $("#error12011").css("color","black");
                                            $("#calleproveedor2").focus();
                                            $("#calleproveedor2").css("background-color","white");
                                          }

                                          var Colonia = $("#coloniaproveedor2").val();
                                          //validamos campos
                                          if($.trim(Colonia) == ""){
                                          toastr.error("No ha ingresado Colonia","Error!");
                                          $("#coloniaproveedor2").focus();
                                          $("#coloniaproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error13011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error13011").css("color","black");
                                            $("#coloniaproveedor2").focus();
                                            $("#coloniaproveedor2").css("background-color","white");
                                          }
                                          if( !letras1.test(Colonia)){
                                          toastr.error("Colonia solo admite letras y números","Error!");
                                          $("#coloniaproveedor2").focus();
                                          $("#coloniaproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error13011").css("color","red");
                                            return false;
                                          }else{
                                            $("#error13011").css("color","black");
                                            $("#coloniaproveedor2").focus();
                                            $("#coloniaproveedor2").css("background-color","white");
                                          }

                                          var NI = $("#No_interiorproveedor2").val();
                                          //validamos campos
                                          if($.trim(NI) == ""){
                                          toastr.error("No ha ingresado Numero Interior","Error!");
                                          $("#No_interiorproveedor2").focus();
                                          $("#No_interiorproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error14011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error14011").css("color","black");
                                            $("#No_interiorproveedor2").focus();
                                            $("#No_interiorproveedor2").css("background-color","white");
                                          }
                                          if( !letras1.test(NI)){
                                          toastr.error("Numero Interior solo admite letras y números","Error!");
                                          $("#No_interiorproveedor2").focus();
                                          $("#No_interiorproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error14011").css("color","red");
                                            return false;
                                          }else{
                                            $("#error14011").css("color","black");
                                            $("#No_interiorproveedor2").focus();
                                            $("#No_interiorproveedor2").css("background-color","white");
                                          }

                                          var NE = $("#No_exteriorproveedor2").val();
                                          //validamos campos
                                          if($.trim(NE) == ""){
                                          toastr.error("No ha ingresado Numero Exterior","Error!");
                                          $("#No_exteriorproveedor2").focus();
                                          $("#No_exteriorproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error1501").css("color","red");
                                              return false;
                                          }else{
                                            $("#error1501").css("color","black");
                                            $("#No_exteriorproveedor2").focus();
                                            $("#No_exteriorproveedor2").css("background-color","white");
                                          }
                                          if( !letras1.test(NE)){
                                          toastr.error("Numero Exterior solo admite letras y números","Error!");
                                          $("#No_exteriorproveedor2").focus();
                                          $("#No_exteriorproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error1501").css("color","red");
                                            return false;
                                          }else{
                                            $("#error1501").css("color","black");
                                            $("#No_exteriorproveedor2").focus();
                                            $("#No_exteriorproveedor2").css("background-color","white");
                                          }

                                          var CP = $("#cpproveedor2").val();
                                          //validamos campos
                                          if($.trim(CP) == ""){
                                          toastr.error("No ha ingresado Codigo Postal","Error!");
                                          $("#cpproveedor2").focus();
                                          $("#cpproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error16011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error16011").css("color","black");
                                            $("#cpproveedor2").focus();
                                            $("#cpproveedor2").css("background-color","white");
                                          }
                                          if( !letras2.test(CP)){
                                          toastr.error("Codigo Postal solo admite números","Error!");
                                          $("#cpproveedor2").focus();
                                          $("#cpproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error16011").css("color","red");
                                            return false;
                                          }else{
                                            $("#error16011").css("color","black");
                                            $("#cpproveedor2").focus();
                                            $("#cpproveedor2").css("background-color","white");
                                          }

                                          var Municipio = $("#municipioproveedor2").val();
                                          //validamos campos
                                          if($.trim(Municipio) == ""){
                                          toastr.error("No ha ingresado Municipio","Error!");
                                          $("#municipioproveedor2").focus();
                                          $("#municipioproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error17011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error17011").css("color","black");
                                            $("#municipioproveedor2").focus();
                                            $("#municipioproveedor2").css("background-color","white");
                                          }

                                          var Localidad = $("#localidadproveedor2").val();
                                          //validamos campos
                                          if($.trim(Localidad) == ""){
                                          toastr.error("No ha ingresado Localidad","Error!");
                                          $("#localidadproveedor2").focus();
                                          $("#localidadproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error18011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error18011").css("color","black");
                                            $("#localidadproveedor2").focus();
                                            $("#localidadproveedor2").css("background-color","white");
                                          }
                                          if( !letras1.test(Localidad)){
                                          toastr.error("Localidad solo admite letras y números","Error!");
                                          $("#localidadproveedor2").focus();
                                          $("#localidadproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error18011").css("color","red");
                                            return false;
                                          }else{
                                            $("#error18011").css("color","black");
                                            $("#localidadproveedor2").focus();
                                            $("#localidadproveedor2").css("background-color","white");
                                          }

                                          var Referencia = $("#refproveedor2").val();
                                          //validamos campos
                                          if($.trim(Referencia) == ""){
                                          toastr.error("No ha ingresado Referencia","Error!");
                                          $("#refproveedor2").focus();
                                          $("#refproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error19011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error19011").css("color","black");
                                            $("#refproveedor2").focus();
                                            $("#refproveedor2").css("background-color","white");
                                          }
                                           if( !letras3.test(Referencia)){
                                          toastr.error("Referencia solo admite letras y números","Error!");
                                          $("#refproveedor2").focus();
                                          $("#refproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error19011").css("color","red");
                                            return false;
                                          }else{
                                            $("#error19011").css("color","black");
                                            $("#refproveedor2").focus();
                                            $("#refproveedor2").css("background-color","white");
                                          }

                                          var Correo = $("#inputcorreoproveedor2").val();
                                          //validamos campos
                                          if($.trim(Correo) == ""){
                                          toastr.error("No ha ingresado Correo","Error!");
                                          $("#inputcorreoproveedor2").focus();
                                          $("#inputcorreoproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error20011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error20011").css("color","black");
                                            $("#inputcorreoproveedor2").focus();
                                            $("#inputcorreoproveedor2").css("background-color","white");
                                          }
                                           if( !letras4.test(Correo)){
                                          toastr.error("Ingresar Correo valido","Error!");
                                          $("#inputcorreoproveedor2").focus();
                                          $("#inputcorreoproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error20011").css("color","red");
                                            return false;
                                          }else{
                                            $("#error20011").css("color","black");
                                            $("#inputcorreoproveedor2").focus();
                                            $("#inputcorreoproveedor2").css("background-color","white");
                                          }

                                          var Contraseña = $("#inputservproveedor2").val();
                                          //validamos campos
                                          if($.trim(Contraseña) == ""){
                                          toastr.error("No ha ingresado Servicio","Advertencia!");
                                          $("#inputservproveedor2").focus();
                                          $("#inputservproveedor2").css("background-color","rgb(202, 193, 193)");
                                          $("#error21011").css("color","red");
                                              return false;
                                          }else{
                                            $("#error21011").css("color","black");
                                            $("#inputservproveedor2").focus();
                                            $("#inputservproveedor2").css("background-color","white");
                                          }
                                        

                                         
                                    

                                            //  alert('Finish Clicked');
                                            var formData = new FormData($("#formusuario2")[0]);
                                            var ruta = "../operaciones/actualizar_proveedor.php";
                                            $.ajax({
                                                url: ruta,
                                                type: "POST",
                                                data: formData,
                                                contentType: false,
                                                processData: false,
                                            }).done(function(data){
                                                if(data==1){
                                                    Swal.fire({
                                                        position: 'top-center',
                                                        type: 'success',
                                                        title: 'ACTUALIZACION EXITOSA',
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                      });
                                                    $("#registrar_proveedor2").modal('hide');
                                                    document.getElementById("formusuario2").reset();
                                                    // setTimeout('document.location.reload()',2000);
                                                    $.ajax({
                                                      type: "POST",
                                                      url: "../operaciones/ver_tabla_Proveedores_Fisicos.php",
                                                      success: function(data) {
                                                          $('#central1').fadeIn(100).html(data);                
                                                      }
                                                  });
                                                }
                                                else if(data==3){
                                                    $.smkAlert({
                                                        text: 'ERROR DE ACTUALIZACION',
                                                        type: 'warning',
                                                        position:'bottom-center',
                                                        time: 3
                                                    });
                                                }
                                                else{
                                                    Swal.fire({
                                                        type: 'error',
                                                        title: 'ERROR DE ACTUALIZACION',
                                                        text: 'VERIFICA QUE LOS DATOS SEAN CORRECTOS Y QUE TODOS LOS CAMPOS ESTEN COMPLETOS!'
                                                      })
                                                }
                                            })

        // fin de registro
                                            });
        var btnCancel = $('<a></a>').text('CANCELAR')
                                         .addClass('btn btn-danger')
                                         .on('click', function(){

                                            const swalWithBootstrapButtons = Swal.mixin({
                                                customClass: {
                                                  confirmButton: 'btn btn-success',
                                                  cancelButton: 'btn btn-danger'
                                                },
                                                buttonsStyling: false,
                                              })

                                              swalWithBootstrapButtons.fire({
                                                title: 'CANCELAR ACTUALIZACION?',
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
                                                    text: 'PARA REGISTRARSE SELECCIONE LA OPCION DE REGISTRO EN EL MENU!',
                                                    showConfirmButton: false,
                                                    timer: 2000
                                                  });
                                                  $('#smartwizard').smartWizard("reset");
                                                  $("#registrar_solicitante").modal('hide');
                                                  setTimeout('document.location.reload()',2000);
                                                } else if (
                                                  // Read more about handling dismissals
                                                  result.dismiss === Swal.DismissReason.cancel
                                                ) {


                                                }
                                              })



                                            });

        // Smart Wizard 1
        $('#smartwizard_proveedor2').smartWizard({
                selected: 0,
                theme: 'arrows',
                transitionEffect:'fade',
                showStepURLhash: false,
                toolbarSettings: {toolbarPosition: 'both',
                                  toolbarExtraButtons: [btnFinish, btnCancel]
                                }
        });

    });
