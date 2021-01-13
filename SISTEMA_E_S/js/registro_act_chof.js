    $(document).ready(function(){

        // Step show event
        $("#smartwizardactualizar").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
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
                                          var nombre = $("#inputchofer1").val();
                                          //validamos campos
                                          if($.trim(nombre) == ""){
                                          toastr.error("No ha ingresado Nombre","Error!");
                                          $("#inputchofer1").focus();
                                          $("#error1chofer1").css("color","red");
                                          $("#inputchofer1").css("background-color","rgb(202, 193, 193)");
                                              return false;
                                          }else{
                                            $("#error1chofer1").css("color","black");
                                            $("#inputchofer1").css("background-color","white");
                                          }
                                          if( !letras.test(nombre)){
                                          toastr.error("Nombre solo admite letras","Error!");
                                          $("#inputchofer1").focus();
                                          $("#inputchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error1chofer1").css("color","red");
                                            return false;

                                          }else{
                                            $("#error1chofer1").css("color","black");
                                            $("#inputchofer1").css("background-color","white");
                                          }
                                           if( !letras1_1.test(nombre)){
                                            toastr.error("Nombre minimo de 3 letras","Error!");
                                            $("#inputchofer1").focus();
                                            $("#inputchofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error1chofer1").css("color","red");
                                              return false;

                                            }else{
                                              $("#error1chofer1").css("color","black");
                                              $("#inputchofer1").css("background-color","white");
                                            }

                                          var Apellido_P = $("#inputapellidopaternochofer1").val();
                                          //validamos campos
                                          if($.trim(Apellido_P) == ""){
                                          toastr.error("No ha ingresado Apellido Paterno","Error!");
                                          $("#inputapellidopaternochofer1").focus();
                                          $("#inputapellidopaternochofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error2chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error2chofer1").css("color","black");
                                            $("#inputapellidopaternochofer1").css("background-color","white");
                                          }
                                          if( !letras.test(Apellido_P)){
                                          toastr.error("Apellido Paterno solo admite letras","Error!");
                                          $("#inputapellidopaternochofer1").focus();
                                          $("#inputapellidopaternochofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error2chofer1").css("color","red");
                                            return false;

                                          }else{
                                            $("#error2chofer1").css("color","black");
                                            $("#inputapellidopaternochofer1").focus();
                                            $("#inputapellidopaternochofer1").css("background-color","white");
                                          }
                                          if( !letras1_1.test(Apellido_P)){
                                            toastr.error("Apellido Paterno minimo de 3 letras","Error!");
                                            $("#inputapellidopaternochofer1").focus();
                                            $("#inputapellidopaternochofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error2chofer1").css("color","red");
                                              return false;

                                            }else{
                                              $("#error2chofer1").css("color","black");
                                              $("#inputapellidopaternochofer1").focus();
                                              $("#inputapellidopaternochofer1").css("background-color","white");
                                            }

                                          var Apellido_M = $("#inputapellidomaternochofer1").val();
                                          //validamos campos
                                          if($.trim(Apellido_M) == ""){
                                          toastr.error("No ha ingresado Apellido Materno","Error!");
                                          $("#inputapellidomaternochofer1").focus();
                                          $("#inputapellidomaternochofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error3chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error3chofer1").css("color","black");
                                            $("#inputapellidomaternochofer1").focus();
                                            $("#inputapellidomaternochofer1").css("background-color","white");
                                          }
                                          if( !letras.test(Apellido_M)){
                                          toastr.error("Apellido Materno solo admite letras","Error!");
                                          $("#inputapellidomaternochofer1").focus();
                                          $("#inputapellidomaternochofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error3chofer1").css("color","red");
                                            return false;

                                          }else{
                                            $("#error3chofer1").css("color","black");
                                            $("#inputapellidomaternochofer1").focus();
                                            $("#inputapellidomaternochofer1").css("background-color","white");
                                          }
                                           if( !letras1_1.test(Apellido_M)){
                                            toastr.error("Apellido Materno minimo de 3 letras","Error!");
                                            $("#inputapellidomaternochofer1").focus();
                                            $("#inputapellidomaternochofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error3chofer1").css("color","red");
                                              return false;

                                            }else{
                                              $("#error3chofer1").css("color","black");
                                              $("#inputapellidomaternochofer1").focus();
                                              $("#inputapellidomaternochofer1").css("background-color","white");
                                            }

                                          var Curp = $("#inputcurpchofer1").val();
                                          //validamos campos
                                          if($.trim(Curp) == ""){
                                          toastr.error("No ha ingresado CURP","Error!");
                                          $("#inputcurpchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#inputcurpchofer1").focus();
                                          $("#error4chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error4chofer1").css("color","black");
                                            $("#inputcurpchofer1").focus();
                                            $("#inputcurpchofer1").css("background-color","white");
                                          }
                                           if( !letras1.test(Curp)){
                                          toastr.error("CURP solo admite letras y números","Error!");
                                          $("#inputcurpchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#inputcurpchofer1").focus();
                                          $("#error4chofer1").css("color","red");
                                            return false;

                                          }else{
                                            $("#error4chofer1").css("color","black");
                                            $("#inputcurpchofer1").focus();
                                            $("#inputcurpchofer1").css("background-color","white");
                                          }
                                          if( !letras2_1.test(Curp)){
                                            toastr.error("CURP minimo de 18 caracteres","Error!");
                                            $("#inputcurpchofer1").focus();
                                            $("#inputcurpchofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error4chofer1").css("color","red");
                                              return false;
                                             }
                                             else{
                                              $("#error4chofer1").css("color","black");
                                              $("#inputcurpchofer1").focus();
                                              $("#inputcurpchofer1").css("background-color","white");
                                            }

                                          var RFC = $("#inputlicchofer1").val();
                                          //validamos campos
                                          if($.trim(RFC) == ""){
                                          toastr.error("No ha ingresado Licencia","Error!");
                                          $("#inputlicchofer1").focus();
                                          $("#inputlicchofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error5chofer1").css("color","red");
                                              return false;
                                          } else{
                                            $("#error5chofer1").css("color","black");
                                            $("#inputlicchofer1").focus();
                                            $("#inputlicchofer1").css("background-color","white");
                                          }
                                           if( !letras1.test(RFC)){
                                          toastr.error("Licencia solo admite letras y números","Error!");
                                          $("#inputlicchofer1").focus();
                                          $("#inputlicchofer1").css("background-color","rgb(202, 194, 193)");
                                          $("#error5chofer1").css("color","red");
                                            return false;
                                          } else{
                                            $("#error5chofer1").css("color","black");
                                            $("#inputlicchofer1").focus();
                                            $("#inputlicchofer1").css("background-color","white");
                                          }
                                          if( !letras2_2.test(RFC)){
                                            toastr.error("Licencia minimo de 10 caracteres","Error!");
                                            $("#inputlicchofer1").focus();
                                            $("#inputlicchofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error5chofer1").css("color","red");
                                              return false;

                                            } else{
                                              $("#error5chofer1").css("color","black");
                                              $("#inputlicchofer1").focus();
                                              $("#inputlicchofer1").css("background-color","white");
                                            }

                                          var Estado_Civil = $("#inputedocivilchofer1").val();
                                          //validamos campos
                                          if($.trim(Estado_Civil) == ""){
                                          toastr.error("No ha ingresado Estado_Civil","Error!");
                                          $("#inputedocivilchofer1").focus();
                                          $("#inputedocivilchofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error6chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error6chofer1").css("color","black");
                                            $("#inputedocivilchofer1").focus();
                                            $("#inputedocivilchofer1").css("background-color","white");
                                          }

                                          var Sexo = $("#inputsexochofer1").val();
                                          //validamos campos
                                          if($.trim(Sexo) == ""){
                                          toastr.error("No ha ingresado Sexo","Error!");
                                          $("#inputsexochofer1").focus();
                                          $("#inputsexochofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error7chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error7chofer1").css("color","black");
                                            $("#inputsexochofer1").focus();
                                            $("#inputsexochofer1").css("background-color","white");
                                          }


                                          var Nivel_de_estudios = $("#inputestudioschofer1").val();
                                          //validamos campos
                                          if($.trim(Nivel_de_estudios) == ""){
                                          toastr.error("No ha ingresado Nivel de estudios","Error!");
                                          $("#inputestudioschofer1").focus();
                                          $("#inputestudioschofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error8chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error8chofer1").css("color","black");
                                            $("#inputestudioschofer1").focus();
                                            $("#inputestudioschofer1").css("background-color","white");
                                          }
                                         if( !letras1.test(Nivel_de_estudios)){
                                            toastr.error("Ocupacion solo admite letras y números","Error!");
                                            $("#inputestudioschofer1").focus();
                                            $("#inputestudioschofer1").css("background-color","rgb(202, 193, 193)");
                                              $("#error8chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error8chofer1").css("color","black");
                                            $("#inputestudioschofer1").focus();
                                            $("#inputestudioschofer1").css("background-color","white");
                                          }

                                          var Ocupacion = $("#inputocupacionchofer1").val();
                                          //validamos campos
                                          if($.trim(Ocupacion) == ""){
                                          toastr.error("No ha ingresado Ocupación","Error!");
                                          $("#inputocupacionchofer1").focus();
                                          $("#inputocupacionchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error9chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error9chofer1").css("color","black");
                                            $("#inputocupacionchofer1").focus();
                                            $("#inputocupacionchofer1").css("background-color","white");
                                          }
                                          if( !letras1.test(Ocupacion)){
                                            toastr.error("Ocupacion solo admite letras y numeros","Error!");
                                          $("#inputocupacionchofer1").focus();
                                          $("#inputocupacionchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error9chofer1").css("color","red");
                                              return false;

                                            }
                                            else{
                                              $("#error9chofer1").css("color","black");
                                              $("#inputocupacionchofer1").focus();
                                              $("#inputocupacionchofer1").css("background-color","white");
                                            }
                                            if( !letras2_3.test(Ocupacion)){
                                              toastr.error("Ocupacion minimo de 5 caracteres","Error!");
                                              $("#inputocupacionchofer1").focus();
                                              $("#inputocupacionchofer1").css("background-color","rgb(202, 193, 193)");
                                              $("#error9chofer1").css("color","red");
                                                return false;

                                              }else{
                                                $("#error9chofer1").css("color","black");
                                                $("#inputocupacionchofer1").focus();
                                                $("#inputocupacionchofer1").css("background-color","white");
                                              }

                                          var Telefono = $("#inputcelchofer1").val();
                                          //validamos campos
                                          if($.trim(Telefono) == ""){
                                          toastr.error("No ha ingresado Telefono","Error!");
                                          $("#inputcelchofer1").focus();
                                          $("#inputcelchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error10chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10chofer1").css("color","black");
                                            $("#inputcelchofer1").focus();
                                            $("#inputcelchofer1").css("background-color","white");
                                          }
                                           if( !letras2.test(Telefono)){
                                            toastr.error("Telefono solo admite números","Error!");
                                            $("#inputcelchofer1").focus();
                                            $("#inputcelchofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error10chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10chofer1").css("color","black");
                                            $("#inputcelchofer1").focus();
                                            $("#inputcelchofer1").css("background-color","white");
                                          }
                                           if( !letras2_4.test(Telefono)){
                                            toastr.error("Telefono minimo de 10 dígitos","Error!");
                                            $("#inputcelchofer1").focus();
                                            $("#inputcelchofer1").css("background-color","rgb(202, 193, 193)");
                                            $("#error10chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10chofer1").css("color","black");
                                            $("#inputcelchofer1").focus();
                                            $("#inputcelchofer1").css("background-color","white");
                                          }


                                          var Fecha_Nac = $("#fechaNacchofer1").val();
                                          //validamos campos
                                          if($.trim(Fecha_Nac) == ""){
                                          toastr.error("No ha ingresado Fecha de Nacimiento","Error!");
                                          $("#fechaNacchofer1").focus();
                                          $("#fechaNacchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error11chofer1").css("color","red");
                                              return false;
                                          }
                                          else{
                                            $("#error11chofer1").css("color","black");
                                            $("#fechaNacchofer1").focus();
                                            $("#fechaNacchofer1").css("background-color","white");
                                          }

                                          var Calle = $("#callechofer1").val();
                                          //validamos campos
                                          if($.trim(Calle) == ""){
                                          toastr.error("No ha ingresado callechofer1","Error!");
                                          $("#callechofer1").focus();
                                          $("#callechofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error12chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error12chofer1").css("color","black");
                                            $("#callechofer1").focus();
                                            $("#callechofer1").css("background-color","white");
                                          }
                                           if( !letras1.test(Calle)){
                                          toastr.error("Calle solo admite letras y números","Error!");
                                          $("#callechofer1").focus();
                                          $("#callechofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error12chofer1").css("color","red");
                                            return false;
                                          }else{
                                            $("#error12chofer1").css("color","black");
                                            $("#callechofer1").focus();
                                            $("#callechofer1").css("background-color","white");
                                          }

                                          var Colonia = $("#coloniachofer1").val();
                                          //validamos campos
                                          if($.trim(Colonia) == ""){
                                          toastr.error("No ha ingresado Colonia","Error!");
                                          $("#coloniachofer1").focus();
                                          $("#coloniachofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error13chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error13chofer1").css("color","black");
                                            $("#coloniachofer1").focus();
                                            $("#coloniachofer1").css("background-color","white");
                                          }
                                          if( !letras1.test(Colonia)){
                                          toastr.error("Colonia solo admite letras y números","Error!");
                                          $("#coloniachofer1").focus();
                                          $("#coloniachofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error13chofer1").css("color","red");
                                            return false;
                                          }else{
                                            $("#error13chofer1").css("color","black");
                                            $("#coloniachofer1").focus();
                                            $("#coloniachofer1").css("background-color","white");
                                          }

                                          var NI = $("#No_interiorchofer1").val();
                                          //validamos campos
                                          if($.trim(NI) == ""){
                                          toastr.error("No ha ingresado Numero Interior","Error!");
                                          $("#No_interiorchofer1").focus();
                                          $("#No_interiorchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error14chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error14chofer1").css("color","black");
                                            $("#No_interiorchofer1").focus();
                                            $("#No_interiorchofer1").css("background-color","white");
                                          }
                                          if( !letras1.test(NI)){
                                          toastr.error("Numero Interior solo admite letras y números","Error!");
                                          $("#No_interiorchofer1").focus();
                                          $("#No_interiorchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error14chofer1").css("color","red");
                                            return false;
                                          }else{
                                            $("#error14chofer1").css("color","black");
                                            $("#No_interiorchofer1").focus();
                                            $("#No_interiorchofer1").css("background-color","white");
                                          }

                                          var NE = $("#No_exteriorchofer1").val();
                                          //validamos campos
                                          if($.trim(NE) == ""){
                                          toastr.error("No ha ingresado Numero Exterior","Error!");
                                          $("#No_exteriorchofer1").focus();
                                          $("#No_exteriorchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error15chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error15chofer1").css("color","black");
                                            $("#No_exteriorchofer1").focus();
                                            $("#No_exteriorchofer1").css("background-color","white");
                                          }
                                          if( !letras1.test(NE)){
                                          toastr.error("Numero Exterior solo admite letras y números","Error!");
                                          $("#No_exteriorchofer1").focus();
                                          $("#No_exteriorchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error15chofer1").css("color","red");
                                            return false;
                                          }else{
                                            $("#error15chofer1").css("color","black");
                                            $("#No_exteriorchofer1").focus();
                                            $("#No_exteriorchofer1").css("background-color","white");
                                          }

                                          var CP = $("#cpchofer1").val();
                                          //validamos campos
                                          if($.trim(CP) == ""){
                                          toastr.error("No ha ingresado Codigo Postal","Error!");
                                          $("#cpchofer1").focus();
                                          $("#cpchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error16chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error16chofer1").css("color","black");
                                            $("#cpchofer1").focus();
                                            $("#cpchofer1").css("background-color","white");
                                          }
                                          if( !letras2.test(CP)){
                                          toastr.error("Codigo Postal solo admite números","Error!");
                                          $("#cpchofer1").focus();
                                          $("#cpchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error16chofer1").css("color","red");
                                            return false;
                                          }else{
                                            $("#error16chofer1").css("color","black");
                                            $("#cpchofer1").focus();
                                            $("#cpchofer1").css("background-color","white");
                                          }

                                          var Municipio = $("#municipiochofer1").val();
                                          //validamos campos
                                          if($.trim(Municipio) == ""){
                                          toastr.error("No ha ingresado Municipio","Error!");
                                          $("#municipiochofer1").focus();
                                          $("#municipiochofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error17chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error17chofer1").css("color","black");
                                            $("#municipiochofer1").focus();
                                            $("#municipiochofer1").css("background-color","white");
                                          }

                                          var Localidad = $("#localidadchofer1").val();
                                          //validamos campos
                                          if($.trim(Localidad) == ""){
                                          toastr.error("No ha ingresado Localidad","Error!");
                                          $("#localidadchofer1").focus();
                                          $("#localidadchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error18chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error18chofer1").css("color","black");
                                            $("#localidadchofer1").focus();
                                            $("#localidadchofer1").css("background-color","white");
                                          }
                                          if( !letras1.test(Localidad)){
                                          toastr.error("Localidad solo admite letras y números","Error!");
                                          $("#localidadchofer1").focus();
                                          $("#localidadchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error18chofer1").css("color","red");
                                            return false;
                                          }else{
                                            $("#error18chofer1").css("color","black");
                                            $("#localidadchofer1").focus();
                                            $("#localidadchofer1").css("background-color","white");
                                          }

                                          var Referencia = $("#refchofer1").val();
                                          //validamos campos
                                          if($.trim(Referencia) == ""){
                                          toastr.error("No ha ingresado Referencia","Error!");
                                          $("#refchofer1").focus();
                                          $("#refchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error19chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error19chofer1").css("color","black");
                                            $("#refchofer1").focus();
                                            $("#refchofer1").css("background-color","white");
                                          }
                                           if( !letras3.test(Referencia)){
                                          toastr.error("Referencia solo admite letras y números","Error!");
                                          $("#refchofer1").focus();
                                          $("#refchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error19chofer1").css("color","red");
                                            return false;
                                          }else{
                                            $("#error19chofer1").css("color","black");
                                            $("#refchofer1").focus();
                                            $("#refchofer1").css("background-color","white");
                                          }

                                          var Correo = $("#inputcorreochofer1").val();
                                          //validamos campos
                                          if($.trim(Correo) == ""){
                                          toastr.error("No ha ingresado Correo","Error!");
                                          $("#inputcorreochofer1").focus();
                                          $("#inputcorreochofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error20chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error20chofer1").css("color","black");
                                            $("#inputcorreochofer1").focus();
                                            $("#inputcorreochofer1").css("background-color","white");
                                          }
                                           if( !letras4.test(Correo)){
                                          toastr.error("Ingresar Correo valido","Error!");
                                          $("#inputcorreochofer1").focus();
                                          $("#inputcorreochofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error20chofer1").css("color","red");
                                            return false;
                                          }else{
                                            $("#error20chofer1").css("color","black");
                                            $("#inputcorreochofer1").focus();
                                            $("#inputcorreochofer1").css("background-color","white");
                                          }

                                    
                                          var Mat = $("#Matchofer1").val();
                                          //validamos campos
                                          if($.trim(Mat) == ""){
                                          toastr.error("No ha seleccionado Matricula","Error!");
                                          $("#Matchofer1").focus();
                                          $("#Matchofer1").css("background-color","rgb(202, 193, 193)");
                                          $("#error23chofer1").css("color","red");
                                              return false;
                                          }else{
                                            $("#error23chofer1").css("color","black");
                                            $("#Matchofer1").focus();
                                            $("#Matchofer1").css("background-color","white");
                                          }

                                         

                                            //  alert('Finish Clicked');
                                            var formData = new FormData($("#formchofer1")[0]);
                                            var ruta = "../operaciones/actualizar_chofer.php";
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
                                                    $("#actualizar_chofer").modal('hide');
                                                    document.getElementById("formchofer1").reset();
                                                    // setTimeout('document.location.reload()',2000);
                                                    $.ajax({
                                                      type: "POST",
                                                      url: "../operaciones/ver_tabla_chofer.php",
                                                      success: function(data) {
                                                          $('#central1').fadeIn(100).html(data);                
                                                      }
                                                  });
                                                }
                                                else if(data==4){
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
                                                    title: 'ATUALIZACION CANCELADA',
                                                    text: 'PARA ACTUALIZAR SELECCIONE LA OPCION EN EL MENU!',
                                                    showConfirmButton: false,
                                                    timer: 2000
                                                  });
                                                  $('#smartwizardactualizar').smartWizard("reset");
                                                  $("#actualizar_chofer").modal('hide');
                                                  setTimeout('document.location.reload()',2000);
                                                } else if (
                                                  // Read more about handling dismissals
                                                  result.dismiss === Swal.DismissReason.cancel
                                                ) {


                                                }
                                              })



                                            });

        // Smart Wizard 1
        $('#smartwizardactualizar').smartWizard({
                selected: 0,
                theme: 'arrows',
                transitionEffect:'fade',
                showStepURLhash: false,
                toolbarSettings: {toolbarPosition: 'both',
                                  toolbarExtraButtons: [btnFinish, btnCancel]
                                }
        });

    });
