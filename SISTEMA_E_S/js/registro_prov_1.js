$(document).ready(function(){

        // Step show event
        $("#smartwizard_proveedor_1").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
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
                                          var nombre = $("#inputprov").val();
                                          //validamos campos
                                          if($.trim(nombre) == ""){
                                          toastr.error("No ha ingresado Razon Social","Error!");
                                          $("#inputprov").focus();
                                          $("#error1_prov").css("color","red");
                                          $("#inputprov").css("background-color","rgb(202, 193, 193)");
                                              return false;
                                          }else{
                                            $("#error1_prov").css("color","black");
                                            $("#inputprov").css("background-color","white");
                                          }
                                          if( !letras.test(nombre)){
                                          toastr.error("Razon social solo admite letras","Error!");
                                          $("#inputprov").focus();
                                          $("#inputprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error1_prov").css("color","red");
                                            return false;

                                          }else{
                                            $("#error1_prov").css("color","black");
                                            $("#inputprov").css("background-color","white");
                                          }
                                           if( !letras1_1.test(nombre)){
                                            toastr.error("Razon social minimo de 3 letras","Error!");
                                            $("#inputprov").focus();
                                            $("#inputprov").css("background-color","rgb(202, 193, 193)");
                                            $("#error1_prov").css("color","red");
                                              return false;

                                            }else{
                                              $("#error1_prov").css("color","black");
                                              $("#inputprov").css("background-color","white");
                                            }

                                          // var Apellido_P = $("#inputapellidopaterno").val();
                                          // //validamos campos
                                          // if($.trim(Apellido_P) == ""){
                                          // toastr.error("No ha ingresado Apellido Paterno","Error!");
                                          // $("#inputapellidopaterno").focus();
                                          // $("#inputapellidopaterno").css("background-color","rgb(202, 193, 193)");
                                          //   $("#error2").css("color","red");
                                          //     return false;
                                          // }else{
                                          //   $("#error2").css("color","black");
                                          //   $("#inputapellidopaterno").css("background-color","white");
                                          // }
                                          // if( !letras.test(Apellido_P)){
                                          // toastr.error("Apellido Paterno solo admite letras","Error!");
                                          // $("#inputapellidopaterno").focus();
                                          // $("#inputapellidopaterno").css("background-color","rgb(202, 193, 193)");
                                          //   $("#error2").css("color","red");
                                          //   return false;

                                          // }else{
                                          //   $("#error2").css("color","black");
                                          //   $("#inputapellidopaterno").focus();
                                          //   $("#inputapellidopaterno").css("background-color","white");
                                          // }
                                          // if( !letras1_1.test(Apellido_P)){
                                          //   toastr.error("Apellido Paterno minimo de 3 letras","Error!");
                                          //   $("#inputapellidopaterno").focus();
                                          //   $("#inputapellidopaterno").css("background-color","rgb(202, 193, 193)");
                                          //   $("#error2").css("color","red");
                                          //     return false;

                                          //   }else{
                                          //     $("#error2").css("color","black");
                                          //     $("#inputapellidopaterno").focus();
                                          //     $("#inputapellidopaterno").css("background-color","white");
                                          //   }

                                          // var Apellido_M = $("#inputapellidomaterno").val();
                                          // //validamos campos
                                          // if($.trim(Apellido_M) == ""){
                                          // toastr.error("No ha ingresado Apellido Materno","Error!");
                                          // $("#inputapellidomaterno").focus();
                                          // $("#inputapellidomaterno").css("background-color","rgb(202, 193, 193)");
                                          //   $("#error3").css("color","red");
                                          //     return false;
                                          // }else{
                                          //   $("#error3").css("color","black");
                                          //   $("#inputapellidomaterno").focus();
                                          //   $("#inputapellidomaterno").css("background-color","white");
                                          // }
                                          // if( !letras.test(Apellido_M)){
                                          // toastr.error("Apellido Materno solo admite letras","Error!");
                                          // $("#inputapellidomaterno").focus();
                                          // $("#inputapellidomaterno").css("background-color","rgb(202, 193, 193)");
                                          //   $("#error3").css("color","red");
                                          //   return false;

                                          // }else{
                                          //   $("#error3").css("color","black");
                                          //   $("#inputapellidomaterno").focus();
                                          //   $("#inputapellidomaterno").css("background-color","white");
                                          // }
                                          //  if( !letras1_1.test(Apellido_M)){
                                          //   toastr.error("Apellido Materno minimo de 3 letras","Error!");
                                          //   $("#inputapellidomaterno").focus();
                                          //   $("#inputapellidomaterno").css("background-color","rgb(202, 193, 193)");
                                          //   $("#error3").css("color","red");
                                          //     return false;

                                          //   }else{
                                          //     $("#error3").css("color","black");
                                          //     $("#inputapellidomaterno").focus();
                                          //     $("#inputapellidomaterno").css("background-color","white");
                                          //   }

                                          // var Curp = $("#inputcurp").val();
                                          // //validamos campos
                                          // if($.trim(Curp) == ""){
                                          // toastr.error("No ha ingresado CURP","Error!");
                                          // $("#inputcurp").css("background-color","rgb(202, 193, 193)");
                                          // $("#inputcurp").focus();
                                          // $("#error4").css("color","red");
                                          //     return false;
                                          // }else{
                                          //   $("#error4").css("color","black");
                                          //   $("#inputcurp").focus();
                                          //   $("#inputcurp").css("background-color","white");
                                          // }
                                          //  if( !letras1.test(Curp)){
                                          // toastr.error("CURP solo admite letras y números","Error!");
                                          // $("#inputcurp").css("background-color","rgb(202, 193, 193)");
                                          // $("#inputcurp").focus();
                                          // $("#error4").css("color","red");
                                          //   return false;

                                          // }else{
                                          //   $("#error4").css("color","black");
                                          //   $("#inputcurp").focus();
                                          //   $("#inputcurp").css("background-color","white");
                                          // }
                                          // if( !letras2_1.test(Curp)){
                                          //   toastr.error("CURP minimo de 18 caracteres","Error!");
                                          //   $("#inputcurp").focus();
                                          //   $("#inputcurp").css("background-color","rgb(202, 193, 193)");
                                          //   $("#error4").css("color","red");
                                          //     return false;
                                          //    }
                                          //    else{
                                          //     $("#error4").css("color","black");
                                          //     $("#inputcurp").focus();
                                          //     $("#inputcurp").css("background-color","white");
                                          //   }

                                          var RFC = $("#inputrfcprov").val();
                                          //validamos campos
                                          if($.trim(RFC) == ""){
                                          toastr.error("No ha ingresado RFC","Error!");
                                          $("#inputrfcprov").focus();
                                          $("#inputrfcprov").css("background-color","rgb(202, 193, 193)");
                                            $("#error5prov").css("color","red");
                                              return false;
                                          } else{
                                            $("#error5prov").css("color","black");
                                            $("#inputrfcprov").focus();
                                            $("#inputrfcprov").css("background-color","white");
                                          }
                                           if( !letras1.test(RFC)){
                                          toastr.error("RFC solo admite letras y números","Error!");
                                          $("#inputrfcprov").focus();
                                          $("#inputrfcprov").css("background-color","rgb(202, 194, 193)");
                                          $("#error5prov").css("color","red");
                                            return false;
                                          } else{
                                            $("#error5prov").css("color","black");
                                            $("#inputrfcprov").focus();
                                            $("#inputrfcprov").css("background-color","white");
                                          }
                                          if( !letras2_2.test(RFC)){
                                            toastr.error("RFC minimo de 10 caracteres","Error!");
                                            $("#inputrfcprov").focus();
                                            $("#inputrfcprov").css("background-color","rgb(202, 193, 193)");
                                            $("#error5prov").css("color","red");
                                              return false;

                                            } else{
                                              $("#error5prov").css("color","black");
                                              $("#inputrfcprov").focus();
                                              $("#inputrfcprov").css("background-color","white");
                                            }

                                          // var Estado_Civil = $("#inputedocivil").val();
                                          // //validamos campos
                                          // if($.trim(Estado_Civil) == ""){
                                          // toastr.error("No ha ingresado Estado_Civil","Error!");
                                          // $("#inputedocivil").focus();
                                          // $("#inputedocivil").css("background-color","rgb(202, 193, 193)");
                                          //   $("#error6").css("color","red");
                                          //     return false;
                                          // }else{
                                          //   $("#error6").css("color","black");
                                          //   $("#inputedocivil").focus();
                                          //   $("#inputedocivil").css("background-color","white");
                                          // }

                                          // var Sexo = $("#inputsexo").val();
                                          // //validamos campos
                                          // if($.trim(Sexo) == ""){
                                          // toastr.error("No ha ingresado Sexo","Error!");
                                          // $("#inputsexo").focus();
                                          // $("#inputsexo").css("background-color","rgb(202, 193, 193)");
                                          //   $("#error7").css("color","red");
                                          //     return false;
                                          // }else{
                                          //   $("#error7").css("color","black");
                                          //   $("#inputsexo").focus();
                                          //   $("#inputsexo").css("background-color","white");
                                          // }


                                        //   var Nivel_de_estudios = $("#inputestudios").val();
                                        //   //validamos campos
                                        //   if($.trim(Nivel_de_estudios) == ""){
                                        //   toastr.error("No ha ingresado Nivel de estudios","Error!");
                                        //   $("#inputestudios").focus();
                                        //   $("#inputestudios").css("background-color","rgb(202, 193, 193)");
                                        //     $("#error8").css("color","red");
                                        //       return false;
                                        //   }else{
                                        //     $("#error8").css("color","black");
                                        //     $("#inputestudios").focus();
                                        //     $("#inputestudios").css("background-color","white");
                                        //   }
                                        //  if( !letras1.test(Nivel_de_estudios)){
                                        //     toastr.error("Ocupacion solo admite letras y números","Error!");
                                        //     $("#inputestudios").focus();
                                        //     $("#inputestudios").css("background-color","rgb(202, 193, 193)");
                                        //       $("#error8").css("color","red");
                                        //       return false;
                                        //   }else{
                                        //     $("#error8").css("color","black");
                                        //     $("#inputestudios").focus();
                                        //     $("#inputestudios").css("background-color","white");
                                        //   }

                                        //   var Ocupacion = $("#inputocupacion").val();
                                        //   //validamos campos
                                        //   if($.trim(Ocupacion) == ""){
                                        //   toastr.error("No ha ingresado Ocupación","Error!");
                                        //   $("#inputocupacion").focus();
                                        //   $("#inputocupacion").css("background-color","rgb(202, 193, 193)");
                                        //   $("#error9").css("color","red");
                                        //       return false;
                                        //   }else{
                                        //     $("#error9").css("color","black");
                                        //     $("#inputocupacion").focus();
                                        //     $("#inputocupacion").css("background-color","white");
                                        //   }
                                        //   if( !letras1.test(Ocupacion)){
                                        //     toastr.error("Ocupacion solo admite letras y numeros","Error!");
                                        //   $("#inputocupacion").focus();
                                        //   $("#inputocupacion").css("background-color","rgb(202, 193, 193)");
                                        //   $("#error9").css("color","red");
                                        //       return false;

                                        //     }
                                        //     else{
                                        //       $("#error9").css("color","black");
                                        //       $("#inputocupacion").focus();
                                        //       $("#inputocupacion").css("background-color","white");
                                        //     }
                                        //     if( !letras2_3.test(Ocupacion)){
                                        //       toastr.error("Ocupacion minimo de 5 caracteres","Error!");
                                        //       $("#inputocupacion").focus();
                                        //       $("#inputocupacion").css("background-color","rgb(202, 193, 193)");
                                        //       $("#error9").css("color","red");
                                        //         return false;

                                        //       }else{
                                        //         $("#error9").css("color","black");
                                        //         $("#inputocupacion").focus();
                                        //         $("#inputocupacion").css("background-color","white");
                                        //       }

                                          var Telefono = $("#inputcelprov").val();
                                          //validamos campos
                                          if($.trim(Telefono) == ""){
                                          toastr.error("No ha ingresado Telefono","Error!");
                                          $("#inputcelprov").focus();
                                          $("#inputcelprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error10prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10prov").css("color","black");
                                            $("#inputcelprov").focus();
                                            $("#inputcelprov").css("background-color","white");
                                          }
                                           if( !letras2.test(Telefono)){
                                            toastr.error("Telefono solo admite números","Error!");
                                            $("#inputcelprov").focus();
                                            $("#inputcelprov").css("background-color","rgb(202, 193, 193)");
                                            $("#error10prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10prov").css("color","black");
                                            $("#inputcelprov").focus();
                                            $("#inputcelprov").css("background-color","white");
                                          }
                                           if( !letras2_4.test(Telefono)){
                                            toastr.error("Telefono minimo de 10 dígitos","Error!");
                                            $("#inputcelprov").focus();
                                            $("#inputcelprov").css("background-color","rgb(202, 193, 193)");
                                            $("#error10prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10prov").css("color","black");
                                            $("#inputcelprov").focus();
                                            $("#inputcelprov").css("background-color","white");
                                          }


                                          var Fecha_Reg = $("#fechaRegProv").val();
                                          //validamos campos
                                          if($.trim(Fecha_Reg) == ""){
                                          toastr.error("No ha ingresado Fecha de Registro","Error!");
                                          $("#fechaRegProv").focus();
                                          $("#fechaRegProv").css("background-color","rgb(202, 193, 193)");
                                          $("#error11prov").css("color","red");
                                              return false;
                                          }
                                          else{
                                            $("#error11prov").css("color","black");
                                            $("#fechaRegProv").focus();
                                            $("#fechaRegProv").css("background-color","white");
                                          }

                                          var Calle = $("#calleprov").val();
                                          //validamos campos
                                          if($.trim(Calle) == ""){
                                          toastr.error("No ha ingresado calle","Error!");
                                          $("#calleprov").focus();
                                          $("#calleprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error12prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error12prov").css("color","black");
                                            $("#calleprov").focus();
                                            $("#calleprov").css("background-color","white");
                                          }
                                           if( !letras1.test(Calle)){
                                          toastr.error("Calle solo admite letras y números","Error!");
                                          $("#calleprov").focus();
                                          $("#calleprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error12prov").css("color","red");
                                            return false;
                                          }else{
                                            $("#error12prov").css("color","black");
                                            $("#calleprov").focus();
                                            $("#calleprov").css("background-color","white");
                                          }

                                          var Colonia = $("#coloniaprov").val();
                                          //validamos campos
                                          if($.trim(Colonia) == ""){
                                          toastr.error("No ha ingresado Colonia","Error!");
                                          $("#coloniaprov").focus();
                                          $("#coloniaprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error13prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error13prov").css("color","black");
                                            $("#coloniaprov").focus();
                                            $("#coloniaprov").css("background-color","white");
                                          }
                                          if( !letras1.test(Colonia)){
                                          toastr.error("Colonia solo admite letras y números","Error!");
                                          $("#coloniaprov").focus();
                                          $("#coloniaprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error13prov").css("color","red");
                                            return false;
                                          }else{
                                            $("#error13prov").css("color","black");
                                            $("#coloniaprov").focus();
                                            $("#coloniaprov").css("background-color","white");
                                          }

                                          var NI = $("#No_interiorprov").val();
                                          //validamos campos
                                          if($.trim(NI) == ""){
                                          toastr.error("No ha ingresado Numero Interior","Error!");
                                          $("#No_interiorprov").focus();
                                          $("#No_interiorprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error14prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error14prov").css("color","black");
                                            $("#No_interiorprov").focus();
                                            $("#No_interiorprov").css("background-color","white");
                                          }
                                          if( !letras1.test(NI)){
                                          toastr.error("Numero Interior solo admite letras y números","Error!");
                                          $("#No_interiorprov").focus();
                                          $("#No_interiorprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error14prov").css("color","red");
                                            return false;
                                          }else{
                                            $("#error14prov").css("color","black");
                                            $("#No_interiorprov").focus();
                                            $("#No_interiorprov").css("background-color","white");
                                          }

                                          var NE = $("#No_exteriorprov").val();
                                          //validamos campos
                                          if($.trim(NE) == ""){
                                          toastr.error("No ha ingresado Numero Exterior","Error!");
                                          $("#No_exteriorprov").focus();
                                          $("#No_exteriorprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error15prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error15prov").css("color","black");
                                            $("#No_exteriorprov").focus();
                                            $("#No_exteriorprov").css("background-color","white");
                                          }
                                          if( !letras1.test(NE)){
                                          toastr.error("Numero Exterior solo admite letras y números","Error!");
                                          $("#No_exteriorprov").focus();
                                          $("#No_exteriorprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error15prov").css("color","red");
                                            return false;
                                          }else{
                                            $("#error15prov").css("color","black");
                                            $("#No_exteriorprov").focus();
                                            $("#No_exteriorprov").css("background-color","white");
                                          }

                                          var CP = $("#cpprov").val();
                                          //validamos campos
                                          if($.trim(CP) == ""){
                                          toastr.error("No ha ingresado Codigo Postal","Error!");
                                          $("#cpprov").focus();
                                          $("#cpprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error16prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error16prov").css("color","black");
                                            $("#cpprov").focus();
                                            $("#cpprov").css("background-color","white");
                                          }
                                          if( !letras2.test(CP)){
                                          toastr.error("Codigo Postal solo admite números","Error!");
                                          $("#cpprov").focus();
                                          $("#cpprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error16prov").css("color","red");
                                            return false;
                                          }else{
                                            $("#error16prov").css("color","black");
                                            $("#cpprov").focus();
                                            $("#cpprov").css("background-color","white");
                                          }

                                          var Municipio = $("#municipioprov").val();
                                          //validamos campos
                                          if($.trim(Municipio) == ""){
                                          toastr.error("No ha ingresado Municipio","Error!");
                                          $("#municipioprov").focus();
                                          $("#municipioprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error17prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error17prov").css("color","black");
                                            $("#municipioprov").focus();
                                            $("#municipioprov").css("background-color","white");
                                          }

                                          var Localidad = $("#localidadprov").val();
                                          //validamos campos
                                          if($.trim(Localidad) == ""){
                                          toastr.error("No ha ingresado Localidad","Error!");
                                          $("#localidadprov").focus();
                                          $("#localidadprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error18prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error18prov").css("color","black");
                                            $("#localidadprov").focus();
                                            $("#localidadprov").css("background-color","white");
                                          }
                                          if( !letras1.test(Localidad)){
                                          toastr.error("Localidad solo admite letras y números","Error!");
                                          $("#localidadprov").focus();
                                          $("#localidadprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error18prov").css("color","red");
                                            return false;
                                          }else{
                                            $("#error18prov").css("color","black");
                                            $("#localidadprov").focus();
                                            $("#localidadprov").css("background-color","white");
                                          }

                                          var Referencia = $("#refprov").val();
                                          //validamos campos
                                          if($.trim(Referencia) == ""){
                                          toastr.error("No ha ingresado Referencia","Error!");
                                          $("#refprov").focus();
                                          $("#refprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error19prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error19prov").css("color","black");
                                            $("#refprov").focus();
                                            $("#refprov").css("background-color","white");
                                          }
                                           if( !letras3.test(Referencia)){
                                          toastr.error("Referencia solo admite letras y números","Error!");
                                          $("#refprov").focus();
                                          $("#refprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error19prov").css("color","red");
                                            return false;
                                          }else{
                                            $("#error19prov").css("color","black");
                                            $("#refprov").focus();
                                            $("#refprov").css("background-color","white");
                                          }

                                          var Correo = $("#inputcorreoprov").val();
                                          //validamos campos
                                          if($.trim(Correo) == ""){
                                          toastr.error("No ha ingresado Correo","Error!");
                                          $("#inputcorreoprov").focus();
                                          $("#inputcorreoprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error20prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error20prov").css("color","black");
                                            $("#inputcorreoprov").focus();
                                            $("#inputcorreoprov").css("background-color","white");
                                          }
                                           if( !letras4.test(Correo)){
                                          toastr.error("Ingresar Correo valido","Error!");
                                          $("#inputcorreoprov").focus();
                                          $("#inputcorreoprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error20prov").css("color","red");
                                            return false;
                                          }else{
                                            $("#error20prov").css("color","black");
                                            $("#inputcorreoprov").focus();
                                            $("#inputcorreoprov").css("background-color","white");
                                          }

                                          var Servicio = $("#servicioprov1").val();
                                          //validamos campos
                                          if($.trim(Servicio) == ""){
                                          toastr.error("No ha ingresado Servicio","Advertencia!");
                                          $("#servicioprov1").focus();
                                          $("#servicioprov1").css("background-color","rgb(202, 193, 193)");
                                          $("#error21").css("color","red");
                                              return false;
                                          }else{
                                            $("#error21").css("color","black");
                                            $("#servicioprov1").focus();
                                            $("#servicioprov1").css("background-color","white");
                                          }
                                          if( !letras2_2.test(Servicio)){
                                          toastr.warning("Servicio Debil minimo 10 Caracateres","Error!");
                                          $("#servicioprov1").focus();
                                          $("#servicioprov1").css("background-color","rgb(202, 193, 193)");
                                          $("#error21").css("color","red");
                                            return false;
                                          }else{
                                            $("#error21").css("color","black");
                                            $("#servicioprov1").focus();
                                            $("#servicioprov1").css("background-color","white");
                                          }

                                          // var Contraseña2 = $("#inputpass2").val();
                                          // //validamos campos
                                          // if($.trim(Contraseña2) == ""){
                                          // toastr.error("No ha Confirmado Contraseña","Error!");
                                          // $("#inputpass2").focus();
                                          // $("#inputpass2").css("background-color","rgb(202, 193, 193)");
                                          // $("#error22").css("color","red");
                                          //     return false;
                                          // }else{
                                          //   $("#error22").css("color","black");
                                          //   $("#inputpass2").focus();
                                          //   $("#inputpass2").css("background-color","white");
                                          // }
                                          // if( Contraseña != Contraseña2){
                                          // toastr.error("Las contraseñas no coinciden","Error!");
                                          // $("#inputpass2").focus();
                                          // $("#inputpass2").val('');
                                          // $("#inputpass2").css("background-color","rgb(202, 193, 193)");
                                          // $("#error22").css("color","red");
                                          // $("#error21").css("color","red");
                                          //   return false;
                                          // }else{
                                          //   $("#error22").css("color","black");
                                          //   $("#inputpass2").focus();
                                          //   $("#inputpass2").css("background-color","white");
                                          // }

                                          // var Cader = $("#inputcader").val();
                                          // //validamos campos
                                          // if($.trim(Cader) == ""){
                                          // toastr.error("No ha seleccionado CADER","Error!");
                                          // $("#inputcader").focus();
                                          // $("#inputcader").css("background-color","rgb(202, 193, 193)");
                                          // $("#error23").css("color","red");
                                          //     return false;
                                          // }else{
                                          //   $("#error23").css("color","black");
                                          //   $("#inputcader").focus();
                                          //   $("#inputcader").css("background-color","white");
                                          // }

                                          var Foto = $("#your_pictureprov").val();
                                          //validamos campos
                                          if($.trim(Foto) == ""){
                                          toastr.error("No ha seleccionado Fotografia","Error!");
                                          $("#your_pictureprov").focus();
                                          $("#your_pictureprov").css("background-color","rgb(202, 193, 193)");
                                          $("#error24prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error24prov").css("color","black");
                                            $("#your_pictureprov").focus();
                                            $("#your_pictureprov").css("background-color","white");
                                          }

                                            //  alert('Finish Clicked');
                                            var formData = new FormData($("#formprov0")[0]);
                                            var ruta = "../operaciones/agregar_prov_moral.php";
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
                                                    $("#registrar_proveedor_1").modal('hide');
                                                    document.getElementById("formprov0").reset();
                                                    $.ajax({
                                                      type: "POST",
                                                      url: "../operaciones/ver_tabla_Proveedores_Morales.php",
                                                      success: function(data) {
                                                          $('#central1').fadeIn(100).html(data);                    
                                                      }
                                                  });
                                                  return false;
                                                    // setTimeout('document.location.reload()',2000);
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
                                                  alert(data);
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
                                                    url: "../operaciones/ver_tabla_Proveedores_Morales.php",
                                                    success: function(data) {
                                                        $('#central1').fadeIn(100).html(data);       
                                                    $("#registrar_proveedor_1").modal('hide');

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
        $('#smartwizard_proveedor_1').smartWizard({
                selected: 0,
                theme: 'arrows',
                transitionEffect:'fade',
                showStepURLhash: false,
                toolbarSettings: {toolbarPosition: 'both',
                                  toolbarExtraButtons: [btnFinish, btnCancel]
                                }
        });

    });
