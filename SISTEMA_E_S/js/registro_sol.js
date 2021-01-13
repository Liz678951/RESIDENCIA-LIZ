    $(document).ready(function(){

        // Step show event
        $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
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
                                          var nombre = $("#inputchofer").val();
                                          //validamos campos
                                          if($.trim(nombre) == ""){
                                          toastr.error("No ha ingresado Nombre","Error!");
                                          $("#inputchofer").focus();
                                          $("#error1chofer").css("color","red");
                                          $("#inputchofer").css("background-color","rgb(202, 193, 193)");
                                              return false;
                                          }else{
                                            $("#error1chofer").css("color","black");
                                            $("#inputchofer").css("background-color","white");
                                          }
                                          if( !letras.test(nombre)){
                                          toastr.error("Nombre solo admite letras","Error!");
                                          $("#inputchofer").focus();
                                          $("#inputchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error1chofer").css("color","red");
                                            return false;

                                          }else{
                                            $("#error1chofer").css("color","black");
                                            $("#inputchofer").css("background-color","white");
                                          }
                                           if( !letras1_1.test(nombre)){
                                            toastr.error("Nombre minimo de 3 letras","Error!");
                                            $("#inputchofer").focus();
                                            $("#inputchofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error1chofer").css("color","red");
                                              return false;

                                            }else{
                                              $("#error1chofer").css("color","black");
                                              $("#inputchofer").css("background-color","white");
                                            }

                                          var Apellido_P = $("#inputapellidopaternochofer").val();
                                          //validamos campos
                                          if($.trim(Apellido_P) == ""){
                                          toastr.error("No ha ingresado Apellido Paterno","Error!");
                                          $("#inputapellidopaternochofer").focus();
                                          $("#inputapellidopaternochofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error2chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error2chofer").css("color","black");
                                            $("#inputapellidopaternochofer").css("background-color","white");
                                          }
                                          if( !letras.test(Apellido_P)){
                                          toastr.error("Apellido Paterno solo admite letras","Error!");
                                          $("#inputapellidopaternochofer").focus();
                                          $("#inputapellidopaternochofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error2chofer").css("color","red");
                                            return false;

                                          }else{
                                            $("#error2chofer").css("color","black");
                                            $("#inputapellidopaternochofer").focus();
                                            $("#inputapellidopaternochofer").css("background-color","white");
                                          }
                                          if( !letras1_1.test(Apellido_P)){
                                            toastr.error("Apellido Paterno minimo de 3 letras","Error!");
                                            $("#inputapellidopaternochofer").focus();
                                            $("#inputapellidopaternochofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error2chofer").css("color","red");
                                              return false;

                                            }else{
                                              $("#error2chofer").css("color","black");
                                              $("#inputapellidopaternochofer").focus();
                                              $("#inputapellidopaternochofer").css("background-color","white");
                                            }

                                          var Apellido_M = $("#inputapellidomaternochofer").val();
                                          //validamos campos
                                          if($.trim(Apellido_M) == ""){
                                          toastr.error("No ha ingresado Apellido Materno","Error!");
                                          $("#inputapellidomaternochofer").focus();
                                          $("#inputapellidomaternochofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error3chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error3chofer").css("color","black");
                                            $("#inputapellidomaternochofer").focus();
                                            $("#inputapellidomaternochofer").css("background-color","white");
                                          }
                                          if( !letras.test(Apellido_M)){
                                          toastr.error("Apellido Materno solo admite letras","Error!");
                                          $("#inputapellidomaternochofer").focus();
                                          $("#inputapellidomaternochofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error3chofer").css("color","red");
                                            return false;

                                          }else{
                                            $("#error3chofer").css("color","black");
                                            $("#inputapellidomaternochofer").focus();
                                            $("#inputapellidomaternochofer").css("background-color","white");
                                          }
                                           if( !letras1_1.test(Apellido_M)){
                                            toastr.error("Apellido Materno minimo de 3 letras","Error!");
                                            $("#inputapellidomaternochofer").focus();
                                            $("#inputapellidomaternochofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error3chofer").css("color","red");
                                              return false;

                                            }else{
                                              $("#error3chofer").css("color","black");
                                              $("#inputapellidomaternochofer").focus();
                                              $("#inputapellidomaternochofer").css("background-color","white");
                                            }

                                          var Curp = $("#inputcurpchofer").val();
                                          //validamos campos
                                          if($.trim(Curp) == ""){
                                          toastr.error("No ha ingresado CURP","Error!");
                                          $("#inputcurpchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#inputcurpchofer").focus();
                                          $("#error4chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error4chofer").css("color","black");
                                            $("#inputcurpchofer").focus();
                                            $("#inputcurpchofer").css("background-color","white");
                                          }
                                           if( !letras1.test(Curp)){
                                          toastr.error("CURP solo admite letras y números","Error!");
                                          $("#inputcurpchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#inputcurpchofer").focus();
                                          $("#error4chofer").css("color","red");
                                            return false;

                                          }else{
                                            $("#error4chofer").css("color","black");
                                            $("#inputcurpchofer").focus();
                                            $("#inputcurpchofer").css("background-color","white");
                                          }
                                          if( !letras2_1.test(Curp)){
                                            toastr.error("CURP minimo de 18 caracteres","Error!");
                                            $("#inputcurpchofer").focus();
                                            $("#inputcurpchofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error4chofer").css("color","red");
                                              return false;
                                             }
                                             else{
                                              $("#error4chofer").css("color","black");
                                              $("#inputcurpchofer").focus();
                                              $("#inputcurpchofer").css("background-color","white");
                                            }

                                          var RFC = $("#inputlicchofer").val();
                                          //validamos campos
                                          if($.trim(RFC) == ""){
                                          toastr.error("No ha ingresado Licencia","Error!");
                                          $("#inputlicchofer").focus();
                                          $("#inputlicchofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error5chofer").css("color","red");
                                              return false;
                                          } else{
                                            $("#error5chofer").css("color","black");
                                            $("#inputlicchofer").focus();
                                            $("#inputlicchofer").css("background-color","white");
                                          }
                                           if( !letras1.test(RFC)){
                                          toastr.error("Licencia solo admite letras y números","Error!");
                                          $("#inputlicchofer").focus();
                                          $("#inputlicchofer").css("background-color","rgb(202, 194, 193)");
                                          $("#error5chofer").css("color","red");
                                            return false;
                                          } else{
                                            $("#error5chofer").css("color","black");
                                            $("#inputlicchofer").focus();
                                            $("#inputlicchofer").css("background-color","white");
                                          }
                                          if( !letras2_2.test(RFC)){
                                            toastr.error("Licencia minimo de 10 caracteres","Error!");
                                            $("#inputlicchofer").focus();
                                            $("#inputlicchofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error5chofer").css("color","red");
                                              return false;

                                            } else{
                                              $("#error5chofer").css("color","black");
                                              $("#inputlicchofer").focus();
                                              $("#inputlicchofer").css("background-color","white");
                                            }

                                          var Estado_Civil = $("#inputedocivilchofer").val();
                                          //validamos campos
                                          if($.trim(Estado_Civil) == ""){
                                          toastr.error("No ha ingresado Estado_Civil","Error!");
                                          $("#inputedocivilchofer").focus();
                                          $("#inputedocivilchofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error6chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error6chofer").css("color","black");
                                            $("#inputedocivilchofer").focus();
                                            $("#inputedocivilchofer").css("background-color","white");
                                          }

                                          var Sexo = $("#inputsexochofer").val();
                                          //validamos campos
                                          if($.trim(Sexo) == ""){
                                          toastr.error("No ha ingresado Sexo","Error!");
                                          $("#inputsexochofer").focus();
                                          $("#inputsexochofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error7chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error7chofer").css("color","black");
                                            $("#inputsexochofer").focus();
                                            $("#inputsexochofer").css("background-color","white");
                                          }


                                          var Nivel_de_estudios = $("#inputestudioschofer").val();
                                          //validamos campos
                                          if($.trim(Nivel_de_estudios) == ""){
                                          toastr.error("No ha ingresado Nivel de estudios","Error!");
                                          $("#inputestudioschofer").focus();
                                          $("#inputestudioschofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error8chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error8chofer").css("color","black");
                                            $("#inputestudioschofer").focus();
                                            $("#inputestudioschofer").css("background-color","white");
                                          }
                                         if( !letras1.test(Nivel_de_estudios)){
                                            toastr.error("Ocupacion solo admite letras y números","Error!");
                                            $("#inputestudioschofer").focus();
                                            $("#inputestudioschofer").css("background-color","rgb(202, 193, 193)");
                                              $("#error8chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error8chofer").css("color","black");
                                            $("#inputestudioschofer").focus();
                                            $("#inputestudioschofer").css("background-color","white");
                                          }

                                          var Ocupacion = $("#inputocupacionchofer").val();
                                          //validamos campos
                                          if($.trim(Ocupacion) == ""){
                                          toastr.error("No ha ingresado Ocupación","Error!");
                                          $("#inputocupacionchofer").focus();
                                          $("#inputocupacionchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error9chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error9chofer").css("color","black");
                                            $("#inputocupacionchofer").focus();
                                            $("#inputocupacionchofer").css("background-color","white");
                                          }
                                          if( !letras1.test(Ocupacion)){
                                            toastr.error("Ocupacion solo admite letras y numeros","Error!");
                                          $("#inputocupacionchofer").focus();
                                          $("#inputocupacionchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error9chofer").css("color","red");
                                              return false;

                                            }
                                            else{
                                              $("#error9chofer").css("color","black");
                                              $("#inputocupacionchofer").focus();
                                              $("#inputocupacionchofer").css("background-color","white");
                                            }
                                            if( !letras2_3.test(Ocupacion)){
                                              toastr.error("Ocupacion minimo de 5 caracteres","Error!");
                                              $("#inputocupacionchofer").focus();
                                              $("#inputocupacionchofer").css("background-color","rgb(202, 193, 193)");
                                              $("#error9chofer").css("color","red");
                                                return false;

                                              }else{
                                                $("#error9chofer").css("color","black");
                                                $("#inputocupacionchofer").focus();
                                                $("#inputocupacionchofer").css("background-color","white");
                                              }

                                          var Telefono = $("#inputcelchofer").val();
                                          //validamos campos
                                          if($.trim(Telefono) == ""){
                                          toastr.error("No ha ingresado Telefono","Error!");
                                          $("#inputcelchofer").focus();
                                          $("#inputcelchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error10chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10chofer").css("color","black");
                                            $("#inputcelchofer").focus();
                                            $("#inputcelchofer").css("background-color","white");
                                          }
                                           if( !letras2.test(Telefono)){
                                            toastr.error("Telefono solo admite números","Error!");
                                            $("#inputcelchofer").focus();
                                            $("#inputcelchofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error10chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10chofer").css("color","black");
                                            $("#inputcelchofer").focus();
                                            $("#inputcelchofer").css("background-color","white");
                                          }
                                           if( !letras2_4.test(Telefono)){
                                            toastr.error("Telefono minimo de 10 dígitos","Error!");
                                            $("#inputcelchofer").focus();
                                            $("#inputcelchofer").css("background-color","rgb(202, 193, 193)");
                                            $("#error10chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10chofer").css("color","black");
                                            $("#inputcelchofer").focus();
                                            $("#inputcelchofer").css("background-color","white");
                                          }


                                          var Fecha_Nac = $("#fechaNacchofer").val();
                                          //validamos campos
                                          if($.trim(Fecha_Nac) == ""){
                                          toastr.error("No ha ingresado Fecha de Nacimiento","Error!");
                                          $("#fechaNacchofer").focus();
                                          $("#fechaNacchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error11chofer").css("color","red");
                                              return false;
                                          }
                                          else{
                                            $("#error11chofer").css("color","black");
                                            $("#fechaNacchofer").focus();
                                            $("#fechaNacchofer").css("background-color","white");
                                          }

                                          var Calle = $("#callechofer").val();
                                          //validamos campos
                                          if($.trim(Calle) == ""){
                                          toastr.error("No ha ingresado callechofer","Error!");
                                          $("#callechofer").focus();
                                          $("#callechofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error12chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error12chofer").css("color","black");
                                            $("#callechofer").focus();
                                            $("#callechofer").css("background-color","white");
                                          }
                                           if( !letras1.test(Calle)){
                                          toastr.error("Calle solo admite letras y números","Error!");
                                          $("#callechofer").focus();
                                          $("#callechofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error12chofer").css("color","red");
                                            return false;
                                          }else{
                                            $("#error12chofer").css("color","black");
                                            $("#callechofer").focus();
                                            $("#callechofer").css("background-color","white");
                                          }

                                          var Colonia = $("#coloniachofer").val();
                                          //validamos campos
                                          if($.trim(Colonia) == ""){
                                          toastr.error("No ha ingresado Colonia","Error!");
                                          $("#coloniachofer").focus();
                                          $("#coloniachofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error13chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error13chofer").css("color","black");
                                            $("#coloniachofer").focus();
                                            $("#coloniachofer").css("background-color","white");
                                          }
                                          if( !letras1.test(Colonia)){
                                          toastr.error("Colonia solo admite letras y números","Error!");
                                          $("#coloniachofer").focus();
                                          $("#coloniachofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error13chofer").css("color","red");
                                            return false;
                                          }else{
                                            $("#error13chofer").css("color","black");
                                            $("#coloniachofer").focus();
                                            $("#coloniachofer").css("background-color","white");
                                          }

                                          var NI = $("#No_interiorchofer").val();
                                          //validamos campos
                                          if($.trim(NI) == ""){
                                          toastr.error("No ha ingresado Numero Interior","Error!");
                                          $("#No_interiorchofer").focus();
                                          $("#No_interiorchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error14chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error14chofer").css("color","black");
                                            $("#No_interiorchofer").focus();
                                            $("#No_interiorchofer").css("background-color","white");
                                          }
                                          if( !letras1.test(NI)){
                                          toastr.error("Numero Interior solo admite letras y números","Error!");
                                          $("#No_interiorchofer").focus();
                                          $("#No_interiorchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error14chofer").css("color","red");
                                            return false;
                                          }else{
                                            $("#error14chofer").css("color","black");
                                            $("#No_interiorchofer").focus();
                                            $("#No_interiorchofer").css("background-color","white");
                                          }

                                          var NE = $("#No_exteriorchofer").val();
                                          //validamos campos
                                          if($.trim(NE) == ""){
                                          toastr.error("No ha ingresado Numero Exterior","Error!");
                                          $("#No_exteriorchofer").focus();
                                          $("#No_exteriorchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error15chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error15chofer").css("color","black");
                                            $("#No_exteriorchofer").focus();
                                            $("#No_exteriorchofer").css("background-color","white");
                                          }
                                          if( !letras1.test(NE)){
                                          toastr.error("Numero Exterior solo admite letras y números","Error!");
                                          $("#No_exteriorchofer").focus();
                                          $("#No_exteriorchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error15chofer").css("color","red");
                                            return false;
                                          }else{
                                            $("#error15chofer").css("color","black");
                                            $("#No_exteriorchofer").focus();
                                            $("#No_exteriorchofer").css("background-color","white");
                                          }

                                          var CP = $("#cpchofer").val();
                                          //validamos campos
                                          if($.trim(CP) == ""){
                                          toastr.error("No ha ingresado Codigo Postal","Error!");
                                          $("#cpchofer").focus();
                                          $("#cpchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error16chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error16chofer").css("color","black");
                                            $("#cpchofer").focus();
                                            $("#cpchofer").css("background-color","white");
                                          }
                                          if( !letras2.test(CP)){
                                          toastr.error("Codigo Postal solo admite números","Error!");
                                          $("#cpchofer").focus();
                                          $("#cpchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error16chofer").css("color","red");
                                            return false;
                                          }else{
                                            $("#error16chofer").css("color","black");
                                            $("#cpchofer").focus();
                                            $("#cpchofer").css("background-color","white");
                                          }

                                          var Municipio = $("#municipiochofer").val();
                                          //validamos campos
                                          if($.trim(Municipio) == ""){
                                          toastr.error("No ha ingresado Municipio","Error!");
                                          $("#municipiochofer").focus();
                                          $("#municipiochofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error17chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error17chofer").css("color","black");
                                            $("#municipiochofer").focus();
                                            $("#municipiochofer").css("background-color","white");
                                          }

                                          var Localidad = $("#localidadchofer").val();
                                          //validamos campos
                                          if($.trim(Localidad) == ""){
                                          toastr.error("No ha ingresado Localidad","Error!");
                                          $("#localidadchofer").focus();
                                          $("#localidadchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error18chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error18chofer").css("color","black");
                                            $("#localidadchofer").focus();
                                            $("#localidadchofer").css("background-color","white");
                                          }
                                          if( !letras1.test(Localidad)){
                                          toastr.error("Localidad solo admite letras y números","Error!");
                                          $("#localidadchofer").focus();
                                          $("#localidadchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error18chofer").css("color","red");
                                            return false;
                                          }else{
                                            $("#error18chofer").css("color","black");
                                            $("#localidadchofer").focus();
                                            $("#localidadchofer").css("background-color","white");
                                          }

                                          var Referencia = $("#refchofer").val();
                                          //validamos campos
                                          if($.trim(Referencia) == ""){
                                          toastr.error("No ha ingresado Referencia","Error!");
                                          $("#refchofer").focus();
                                          $("#refchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error19chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error19chofer").css("color","black");
                                            $("#refchofer").focus();
                                            $("#refchofer").css("background-color","white");
                                          }
                                           if( !letras3.test(Referencia)){
                                          toastr.error("Referencia solo admite letras y números","Error!");
                                          $("#refchofer").focus();
                                          $("#refchofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error19chofer").css("color","red");
                                            return false;
                                          }else{
                                            $("#error19chofer").css("color","black");
                                            $("#refchofer").focus();
                                            $("#refchofer").css("background-color","white");
                                          }

                                          var Correo = $("#inputcorreochofer").val();
                                          //validamos campos
                                          if($.trim(Correo) == ""){
                                          toastr.error("No ha ingresado Correo","Error!");
                                          $("#inputcorreochofer").focus();
                                          $("#inputcorreochofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error20chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error20chofer").css("color","black");
                                            $("#inputcorreochofer").focus();
                                            $("#inputcorreochofer").css("background-color","white");
                                          }
                                           if( !letras4.test(Correo)){
                                          toastr.error("Ingresar Correo valido","Error!");
                                          $("#inputcorreochofer").focus();
                                          $("#inputcorreochofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error20chofer").css("color","red");
                                            return false;
                                          }else{
                                            $("#error20chofer").css("color","black");
                                            $("#inputcorreochofer").focus();
                                            $("#inputcorreochofer").css("background-color","white");
                                          }

                                          // var Contraseña = $("#inputpass1").val();
                                          // //validamos campos
                                          // if($.trim(Contraseña) == ""){
                                          // toastr.error("No ha ingresado Contraseña","Advertencia!");
                                          // $("#inputpass1").focus();
                                          // $("#inputpass1").css("background-color","rgb(202, 193, 193)");
                                          // $("#error21").css("color","red");
                                          //     return false;
                                          // }else{
                                          //   $("#error21").css("color","black");
                                          //   $("#inputpass1").focus();
                                          //   $("#inputpass1").css("background-color","white");
                                          // }
                                          // if( !letras2_2.test(Contraseña)){
                                          // toastr.warning("Contraseña Debil minimo 10 Caracateres","Error!");
                                          // $("#inputpass1").focus();
                                          // $("#inputpass1").css("background-color","rgb(202, 193, 193)");
                                          // $("#error21").css("color","red");
                                          //   return false;
                                          // }else{
                                          //   $("#error21").css("color","black");
                                          //   $("#inputpass1").focus();
                                          //   $("#inputpass1").css("background-color","white");
                                          // }
                                          //
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

                                          var Mat = $("#inputmatriculachofer").val();
                                          //validamos campos
                                          if($.trim(Mat) == ""){
                                          toastr.error("No ha seleccionado CADER","Error!");
                                          $("#inputmatriculachofer").focus();
                                          $("#inputmatriculachofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error23chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error23chofer").css("color","black");
                                            $("#inputmatriculachofer").focus();
                                            $("#inputmatriculachofer").css("background-color","white");
                                          }

                                          var Foto = $("#your_picturechofer").val();
                                          //validamos campos
                                          if($.trim(Foto) == ""){
                                          toastr.error("No ha seleccionado Fotografia","Error!");
                                          $("#your_picturechofer").focus();
                                          $("#your_picturechofer").css("background-color","rgb(202, 193, 193)");
                                          $("#error24chofer").css("color","red");
                                              return false;
                                          }else{
                                            $("#error24chofer").css("color","black");
                                            $("#your_picturechofer").focus();
                                            $("#your_picturechofer").css("background-color","white");
                                          }

                                            //  alert('Finish Clicked');
                                            var formData = new FormData($("#formchofer")[0]);
                                            var ruta = "../operaciones/agregar_chofer.php";
                                            // alert(formData);
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
                                                    document.getElementById("formchofer").reset();
                                                    // setTimeout('document.location.reload()',2000);
                                                    $.ajax({
                                                      type: "POST",
                                                      url: "../operaciones/ver_tabla_chofer.php",
                                                      success: function(data) {
                                                          $('#central1').fadeIn(100).html(data);                
                                                      }
                                                  });
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
                                                  $('#smartwizard').smartWizard("reset");
                                                  $("#registrar_solicitante").modal('hide');
                                                  // setTimeout('document.location.reload()',2000);
                                                } else if (
                                                  // Read more about handling dismissals
                                                  result.dismiss === Swal.DismissReason.cancel
                                                ) {


                                                }
                                              })



                                            });

        // Smart Wizard 1
        $('#smartwizard').smartWizard({
                selected: 0,
                theme: 'arrows',
                transitionEffect:'fade',
                showStepURLhash: false,
                toolbarSettings: {toolbarPosition: 'both',
                                  toolbarExtraButtons: [btnFinish, btnCancel]
                                }
        });

    });
