    $(document).ready(function(){

        // Step show event
        $("#smartwizard_proveedor").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
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
        var btnFinish = $('<button></button>').text('REGISTRAR')
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
                                          var nombre = $("#inputproveedor").val();
                                          //validamos campos
                                          if($.trim(nombre) == ""){
                                          toastr.error("No ha ingresado Nombres","Error!");
                                          $("#inputproveedor").focus();
                                          $("#error10_reg").css("color","red");
                                          $("#inputproveedor").css("background-color","rgb(202, 193, 193)");
                                              return false;
                                          }else{
                                            $("#error10_reg").css("color","black");
                                            $("#inputproveedor").css("background-color","white");
                                          }
                                          if( !letras.test(nombre)){
                                          toastr.error("Nombre solo admite letras","Error!");
                                          $("#inputproveedor").focus();
                                          $("#inputproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error10_reg").css("color","red");
                                            return false;

                                          }else{
                                            $("#error10_reg").css("color","black");
                                            $("#inputproveedor").css("background-color","white");
                                          }
                                           if( !letras1_1.test(nombre)){
                                            toastr.error("Nombre minimo de 3 letras","Error!");
                                            $("#inputproveedor").focus();
                                            $("#inputproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error10_reg").css("color","red");
                                              return false;

                                            }else{
                                              $("#error10_reg").css("color","black");
                                              $("#inputproveedor").css("background-color","white");
                                            }

                                          var Apellido_P = $("#inputapellidopaternoproveedor").val();
                                          //validamos campos
                                          if($.trim(Apellido_P) == ""){
                                          toastr.error("No ha ingresado Apellido Paterno","Error!");
                                          $("#inputapellidopaternoproveedor").focus();
                                          $("#inputapellidopaternoproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error201").css("color","red");
                                              return false;
                                          }else{
                                            $("#error201").css("color","black");
                                            $("#inputapellidopaternoproveedor").css("background-color","white");
                                          }
                                          if( !letras.test(Apellido_P)){
                                          toastr.error("Apellido Paterno solo admite letras","Error!");
                                          $("#inputapellidopaternoproveedor").focus();
                                          $("#inputapellidopaternoproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error201").css("color","red");
                                            return false;

                                          }else{
                                            $("#error201").css("color","black");
                                            $("#inputapellidopaternoproveedor").focus();
                                            $("#inputapellidopaternoproveedor").css("background-color","white");
                                          }
                                          if( !letras1_1.test(Apellido_P)){
                                            toastr.error("Apellido Paterno minimo de 3 letras","Error!");
                                            $("#inputapellidopaternoproveedor").focus();
                                            $("#inputapellidopaternoproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error201").css("color","red");
                                              return false;

                                            }else{
                                              $("#error201").css("color","black");
                                              $("#inputapellidopaternoproveedor").focus();
                                              $("#inputapellidopaternoproveedor").css("background-color","white");
                                            }

                                          var Apellido_M = $("#inputapellidomaternoproveedor").val();
                                          //validamos campos
                                          if($.trim(Apellido_M) == ""){
                                          toastr.error("No ha ingresado Apellido Materno","Error!");
                                          $("#inputapellidomaternoproveedor").focus();
                                          $("#inputapellidomaternoproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error301").css("color","red");
                                              return false;
                                          }else{
                                            $("#error301").css("color","black");
                                            $("#inputapellidomaternoproveedor").focus();
                                            $("#inputapellidomaternoproveedor").css("background-color","white");
                                          }
                                          if( !letras.test(Apellido_M)){
                                          toastr.error("Apellido Materno solo admite letras","Error!");
                                          $("#inputapellidomaternoproveedor").focus();
                                          $("#inputapellidomaternoproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error301").css("color","red");
                                            return false;

                                          }else{
                                            $("#error301").css("color","black");
                                            $("#inputapellidomaternoproveedor").focus();
                                            $("#inputapellidomaternoproveedor").css("background-color","white");
                                          }
                                           if( !letras1_1.test(Apellido_M)){
                                            toastr.error("Apellido Materno minimo de 3 letras","Error!");
                                            $("#inputapellidomaternoproveedor").focus();
                                            $("#inputapellidomaternoproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error301").css("color","red");
                                              return false;

                                            }else{
                                              $("#error301").css("color","black");
                                              $("#inputapellidomaternoproveedor").focus();
                                              $("#inputapellidomaternoproveedor").css("background-color","white");
                                            }

                                          var Curp = $("#inputcurpproveedor").val();
                                          //validamos campos
                                          if($.trim(Curp) == ""){
                                          toastr.error("No ha ingresado CURP","Error!");
                                          $("#inputcurpproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#inputcurpproveedor").focus();
                                          $("#error401").css("color","red");
                                              return false;
                                          }else{
                                            $("#error401").css("color","black");
                                            $("#inputcurpproveedor").focus();
                                            $("#inputcurpproveedor").css("background-color","white");
                                          }
                                           if( !letras1.test(Curp)){
                                          toastr.error("CURP solo admite letras y números","Error!");
                                          $("#inputcurpproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#inputcurpproveedor").focus();
                                          $("#error401").css("color","red");
                                            return false;

                                          }else{
                                            $("#error401").css("color","black");
                                            $("#inputcurpproveedor").focus();
                                            $("#inputcurpproveedor").css("background-color","white");
                                          }
                                          if( !letras2_1.test(Curp)){
                                            toastr.error("CURP minimo de 18 caracteres","Error!");
                                            $("#inputcurpproveedor").focus();
                                            $("#inputcurpproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error401").css("color","red");
                                              return false;
                                             }
                                             else{
                                              $("#error401").css("color","black");
                                              $("#inputcurpproveedor").focus();
                                              $("#inputcurpproveedor").css("background-color","white");
                                            }

                                          var RFC = $("#inputrfcproveedor").val();
                                          //validamos campos
                                          if($.trim(RFC) == ""){
                                          toastr.error("No ha ingresado RFC","Error!");
                                          $("#inputrfcproveedor").focus();
                                          $("#inputrfcproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error501").css("color","red");
                                              return false;
                                          } else{
                                            $("#error501").css("color","black");
                                            $("#inputrfcproveedor").focus();
                                            $("#inputrfcproveedor").css("background-color","white");
                                          }
                                           if( !letras1.test(RFC)){
                                          toastr.error("RFC solo admite letras y números","Error!");
                                          $("#inputrfcproveedor").focus();
                                          $("#inputrfcproveedor").css("background-color","rgb(202, 194, 193)");
                                          $("#error501").css("color","red");
                                            return false;
                                          } else{
                                            $("#error501").css("color","black");
                                            $("#inputrfcproveedor").focus();
                                            $("#inputrfcproveedor").css("background-color","white");
                                          }
                                          if( !letras2_2.test(RFC)){
                                            toastr.error("RFC minimo de 10 caracteres","Error!");
                                            $("#inputrfcproveedor").focus();
                                            $("#inputrfcproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error501").css("color","red");
                                              return false;

                                            } else{
                                              $("#error501").css("color","black");
                                              $("#inputrfcproveedor").focus();
                                              $("#inputrfcproveedor").css("background-color","white");
                                            }

                                          var Estado_Civil = $("#inputedocivilproveedor").val();
                                          //validamos campos
                                          if($.trim(Estado_Civil) == ""){
                                          toastr.error("No ha ingresado Estado Civil","Error!");
                                          $("#inputedocivilproveedor").focus();
                                          $("#inputedocivilproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error601").css("color","red");
                                              return false;
                                          }else{
                                            $("#error601").css("color","black");
                                            $("#inputedocivilproveedor").focus();
                                            $("#inputedocivilproveedor").css("background-color","white");
                                          }

                                          var Sexo = $("#inputsexoproveedor").val();
                                          //validamos campos
                                          if($.trim(Sexo) == ""){
                                          toastr.error("No ha ingresado Sexo","Error!");
                                          $("#inputsexoproveedor").focus();
                                          $("#inputsexoproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error701").css("color","red");
                                              return false;
                                          }else{
                                            $("#error701").css("color","black");
                                            $("#inputsexoproveedor").focus();
                                            $("#inputsexoproveedor").css("background-color","white");
                                          }


                                          var Nivel_de_estudios = $("#inputestudiosproveedor").val();
                                          //validamos campos
                                          if($.trim(Nivel_de_estudios) == ""){
                                          toastr.error("No ha ingresado Nivel de estudios","Error!");
                                          $("#inputestudiosproveedor").focus();
                                          $("#inputestudiosproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error801").css("color","red");
                                              return false;
                                          }else{
                                            $("#error801").css("color","black");
                                            $("#inputestudiosproveedor").focus();
                                            $("#inputestudiosproveedor").css("background-color","white");
                                          }
                                         if( !letras1.test(Nivel_de_estudios)){
                                            toastr.error("Ocupacion solo admite letras y números","Error!");
                                            $("#inputestudiosproveedor").focus();
                                            $("#inputestudiosproveedor").css("background-color","rgb(202, 193, 193)");
                                              $("#error801").css("color","red");
                                              return false;
                                          }else{
                                            $("#error801").css("color","black");
                                            $("#inputestudiosproveedor").focus();
                                            $("#inputestudiosproveedor").css("background-color","white");
                                          }

                                          var Ocupacion = $("#inputocupacionproveedor").val();
                                          //validamos campos
                                          if($.trim(Ocupacion) == ""){
                                          toastr.error("No ha ingresado Ocupación","Error!");
                                          $("#inputocupacionproveedor").focus();
                                          $("#inputocupacionproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error901").css("color","red");
                                              return false;
                                          }else{
                                            $("#error901").css("color","black");
                                            $("#inputocupacionproveedor").focus();
                                            $("#inputocupacionproveedor").css("background-color","white");
                                          }
                                          if( !letras1.test(Ocupacion)){
                                            toastr.error("Ocupacion solo admite letras y numeros","Error!");
                                          $("#inputocupacionproveedor").focus();
                                          $("#inputocupacionproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error901").css("color","red");
                                              return false;

                                            }
                                            else{
                                              $("#error901").css("color","black");
                                              $("#inputocupacionproveedor").focus();
                                              $("#inputocupacionproveedor").css("background-color","white");
                                            }
                                            if( !letras2_3.test(Ocupacion)){
                                              toastr.error("Ocupacion minimo de 5 caracteres","Error!");
                                              $("#inputocupacionproveedor").focus();
                                              $("#inputocupacionproveedor").css("background-color","rgb(202, 193, 193)");
                                              $("#error901").css("color","red");
                                                return false;

                                              }else{
                                                $("#error901").css("color","black");
                                                $("#inputocupacionproveedor").focus();
                                                $("#inputocupacionproveedor").css("background-color","white");
                                              }

                                          var Telefono = $("#inputcelproveedor").val();
                                          //validamos campos
                                          if($.trim(Telefono) == ""){
                                          toastr.error("No ha ingresado Telefono","Error!");
                                          $("#inputcelproveedor").focus();
                                          $("#inputcelproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1001").css("color","red");
                                              return false;
                                          }else{
                                            $("#error1001").css("color","black");
                                            $("#inputcelproveedor").focus();
                                            $("#inputcelproveedor").css("background-color","white");
                                          }
                                           if( !letras2.test(Telefono)){
                                            toastr.error("Telefono solo admite números","Error!");
                                            $("#inputcelproveedor").focus();
                                            $("#inputcelproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error1001").css("color","red");
                                              return false;
                                          }else{
                                            $("#error1001").css("color","black");
                                            $("#inputcelproveedor").focus();
                                            $("#inputcelproveedor").css("background-color","white");
                                          }
                                           if( !letras2_4.test(Telefono)){
                                            toastr.error("Telefono minimo de 10 dígitos","Error!");
                                            $("#inputcelproveedor").focus();
                                            $("#inputcelproveedor").css("background-color","rgb(202, 193, 193)");
                                            $("#error1001").css("color","red");
                                              return false;
                                          }else{
                                            $("#error1001").css("color","black");
                                            $("#inputcelproveedor").focus();
                                            $("#inputcelproveedor").css("background-color","white");
                                          }


                                          var Fecha_Reg = $("#fechaRegproveedor").val();
                                          //validamos campos
                                          if($.trim(Fecha_Reg) == ""){
                                          toastr.error("No ha ingresado Fecha de Nacimiento","Error!");
                                          $("#fechaNacproveedor").focus();
                                          $("#fechaNacproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1101").css("color","red");
                                              return false;
                                          }
                                          else{
                                            $("#error1101").css("color","black");
                                            $("#fechaNacproveedor").focus();
                                            $("#fechaNacproveedor").css("background-color","white");
                                          }

                                          var Calle = $("#calleproveedor").val();
                                          //validamos campos
                                          if($.trim(Calle) == ""){
                                          toastr.error("No ha ingresado calle","Error!");
                                          $("#calleproveedor").focus();
                                          $("#calleproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1201").css("color","red");
                                              return false;
                                          }else{
                                            $("#error1201").css("color","black");
                                            $("#calleproveedor").focus();
                                            $("#calleproveedor").css("background-color","white");
                                          }
                                           if( !letras1.test(Calle)){
                                          toastr.error("Calle solo admite letras y números","Error!");
                                          $("#calleproveedor").focus();
                                          $("#calleproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1201").css("color","red");
                                            return false;
                                          }else{
                                            $("#error1201").css("color","black");
                                            $("#calleproveedor").focus();
                                            $("#calleproveedor").css("background-color","white");
                                          }

                                          var Colonia = $("#coloniaproveedor").val();
                                          //validamos campos
                                          if($.trim(Colonia) == ""){
                                          toastr.error("No ha ingresado Colonia","Error!");
                                          $("#coloniaproveedor").focus();
                                          $("#coloniaproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1301").css("color","red");
                                              return false;
                                          }else{
                                            $("#error1301").css("color","black");
                                            $("#coloniaproveedor").focus();
                                            $("#coloniaproveedor").css("background-color","white");
                                          }
                                          if( !letras1.test(Colonia)){
                                          toastr.error("Colonia solo admite letras y números","Error!");
                                          $("#coloniaproveedor").focus();
                                          $("#coloniaproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1301").css("color","red");
                                            return false;
                                          }else{
                                            $("#error1301").css("color","black");
                                            $("#coloniaproveedor").focus();
                                            $("#coloniaproveedor").css("background-color","white");
                                          }

                                          var NI = $("#No_interiorproveedor").val();
                                          //validamos campos
                                          if($.trim(NI) == ""){
                                          toastr.error("No ha ingresado Numero Interior","Error!");
                                          $("#No_interiorproveedor").focus();
                                          $("#No_interiorproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1401").css("color","red");
                                              return false;
                                          }else{
                                            $("#error1401").css("color","black");
                                            $("#No_interiorproveedor").focus();
                                            $("#No_interiorproveedor").css("background-color","white");
                                          }
                                          if( !letras1.test(NI)){
                                          toastr.error("Numero Interior solo admite letras y números","Error!");
                                          $("#No_interiorproveedor").focus();
                                          $("#No_interiorproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1401").css("color","red");
                                            return false;
                                          }else{
                                            $("#error1401").css("color","black");
                                            $("#No_interiorproveedor").focus();
                                            $("#No_interiorproveedor").css("background-color","white");
                                          }

                                          var NE = $("#No_exteriorproveedor").val();
                                          //validamos campos
                                          if($.trim(NE) == ""){
                                          toastr.error("No ha ingresado Numero Exterior","Error!");
                                          $("#No_exteriorproveedor").focus();
                                          $("#No_exteriorproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error150").css("color","red");
                                              return false;
                                          }else{
                                            $("#error150").css("color","black");
                                            $("#No_exteriorproveedor").focus();
                                            $("#No_exteriorproveedor").css("background-color","white");
                                          }
                                          if( !letras1.test(NE)){
                                          toastr.error("Numero Exterior solo admite letras y números","Error!");
                                          $("#No_exteriorproveedor").focus();
                                          $("#No_exteriorproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error150").css("color","red");
                                            return false;
                                          }else{
                                            $("#error150").css("color","black");
                                            $("#No_exteriorproveedor").focus();
                                            $("#No_exteriorproveedor").css("background-color","white");
                                          }

                                          var CP = $("#cpproveedor").val();
                                          //validamos campos
                                          if($.trim(CP) == ""){
                                          toastr.error("No ha ingresado Codigo Postal","Error!");
                                          $("#cpproveedor").focus();
                                          $("#cpproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1601").css("color","red");
                                              return false;
                                          }else{
                                            $("#error1601").css("color","black");
                                            $("#cpproveedor").focus();
                                            $("#cpproveedor").css("background-color","white");
                                          }
                                          if( !letras2.test(CP)){
                                          toastr.error("Codigo Postal solo admite números","Error!");
                                          $("#cpproveedor").focus();
                                          $("#cpproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1601").css("color","red");
                                            return false;
                                          }else{
                                            $("#error1601").css("color","black");
                                            $("#cpproveedor").focus();
                                            $("#cpproveedor").css("background-color","white");
                                          }

                                          var Municipio = $("#municipioproveedor").val();
                                          //validamos campos
                                          if($.trim(Municipio) == ""){
                                          toastr.error("No ha ingresado Municipio","Error!");
                                          $("#municipioproveedor").focus();
                                          $("#municipioproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1701").css("color","red");
                                              return false;
                                          }else{
                                            $("#error1701").css("color","black");
                                            $("#municipioproveedor").focus();
                                            $("#municipioproveedor").css("background-color","white");
                                          }

                                          var Localidad = $("#localidadproveedor").val();
                                          //validamos campos
                                          if($.trim(Localidad) == ""){
                                          toastr.error("No ha ingresado Localidad","Error!");
                                          $("#localidadproveedor").focus();
                                          $("#localidadproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1801").css("color","red");
                                              return false;
                                          }else{
                                            $("#error1801").css("color","black");
                                            $("#localidadproveedor").focus();
                                            $("#localidadproveedor").css("background-color","white");
                                          }
                                          if( !letras1.test(Localidad)){
                                          toastr.error("Localidad solo admite letras y números","Error!");
                                          $("#localidadproveedor").focus();
                                          $("#localidadproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1801").css("color","red");
                                            return false;
                                          }else{
                                            $("#error1801").css("color","black");
                                            $("#localidadproveedor").focus();
                                            $("#localidadproveedor").css("background-color","white");
                                          }

                                          var Referencia = $("#refproveedor").val();
                                          //validamos campos
                                          if($.trim(Referencia) == ""){
                                          toastr.error("No ha ingresado Referencia","Error!");
                                          $("#refproveedor").focus();
                                          $("#refproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1901").css("color","red");
                                              return false;
                                          }else{
                                            $("#error1901").css("color","black");
                                            $("#refproveedor").focus();
                                            $("#refproveedor").css("background-color","white");
                                          }
                                           if( !letras3.test(Referencia)){
                                          toastr.error("Referencia solo admite letras y números","Error!");
                                          $("#refproveedor").focus();
                                          $("#refproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error1901").css("color","red");
                                            return false;
                                          }else{
                                            $("#error1901").css("color","black");
                                            $("#refproveedor").focus();
                                            $("#refproveedor").css("background-color","white");
                                          }

                                          var Correo = $("#inputcorreoproveedor").val();
                                          //validamos campos
                                          if($.trim(Correo) == ""){
                                          toastr.error("No ha ingresado Correo","Error!");
                                          $("#inputcorreoproveedor").focus();
                                          $("#inputcorreoproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error2001").css("color","red");
                                              return false;
                                          }else{
                                            $("#error2001").css("color","black");
                                            $("#inputcorreoproveedor").focus();
                                            $("#inputcorreoproveedor").css("background-color","white");
                                          }
                                           if( !letras4.test(Correo)){
                                          toastr.error("Ingresar Correo valido","Error!");
                                          $("#inputcorreoproveedor").focus();
                                          $("#inputcorreoproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error2001").css("color","red");
                                            return false;
                                          }else{
                                            $("#error2001").css("color","black");
                                            $("#inputcorreoproveedor").focus();
                                            $("#inputcorreoproveedor").css("background-color","white");
                                          }

                                          var Contraseña = $("#inputservproveedor").val();
                                          //validamos campos
                                          if($.trim(Contraseña) == ""){
                                          toastr.error("No ha ingresado Servicio","Advertencia!");
                                          $("#inputservproveedor").focus();
                                          $("#inputservproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error2101").css("color","red");
                                              return false;
                                          }else{
                                            $("#error2101").css("color","black");
                                            $("#inputservproveedor").focus();
                                            $("#inputservproveedor").css("background-color","white");
                                          }
                                        

                                         
                                          var Foto = $("#your_pictureproveedor").val();
                                          //validamos campos
                                          if($.trim(Foto) == ""){
                                          toastr.error("No ha seleccionado Fotografia","Error!");
                                          $("#your_pictureproveedor").focus();
                                          $("#your_pictureproveedor").css("background-color","rgb(202, 193, 193)");
                                          $("#error2401").css("color","red");
                                              return false;
                                          }else{
                                            $("#error2401").css("color","black");
                                            $("#your_pictureproveedor").focus();
                                            $("#your_pictureproveedor").css("background-color","white");
                                          }

                                            //  alert('Finish Clicked');
                                            var formData = new FormData($("#formusuario")[0]);
                                            var ruta = "../operaciones/agregar_proveedor.php";
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
                                                        title: 'REGISTRO EXITOSO',
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                      });
                                                    $("#registrar_solicitante").modal('hide');
                                                    document.getElementById("formusuario").reset();
                                                    setTimeout('document.location.reload()',2000);
                                                }
                                                else if(data==3){
                                                    $.smkAlert({
                                                        text: 'ERROR DE REGISTRO',
                                                        type: 'warning',
                                                        position:'bottom-center',
                                                        time: 3
                                                    });
                                                }
                                                else{
                                                    Swal.fire({
                                                        type: 'error',
                                                        title: 'ERROR DE REGISTRO',
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
                                                    text: 'PARA REGISTRARSE SELECCIONE LA OPCION DE REGISTRO EN EL MENU!',
                                                    showConfirmButton: false,
                                                    timer: 2000
                                                  });
                                                  $.ajax({
                                                    type: "POST",
                                                    url: "../operaciones/ver_tabla_Proveedores_Fisicos.php",
                                                    success: function(data) {
                                                      $("#registrar_proveedor").modal('hide'); 
                                                        $('#central1').fadeIn(100).html(data);          
                                                       
                                                    }
                                                });

                                                } else if (
                                                  // Read more about handling dismissals
                                                  result.dismiss === Swal.DismissReason.cancel
                                                ) {


                                                }
                                              })



                                            });

        // Smart Wizard 1
        $('#smartwizard_proveedor').smartWizard({
                selected: 0,
                theme: 'arrows',
                transitionEffect:'fade',
                showStepURLhash: false,
                toolbarSettings: {toolbarPosition: 'both',
                                  toolbarExtraButtons: [btnFinish, btnCancel]
                                }
        });

    });
