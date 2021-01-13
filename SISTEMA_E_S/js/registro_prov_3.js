    $(document).ready(function(){

        // Step show event
        $("#smartwizard_proveedor_4").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
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
                                          var nombre = $("#inputprov3").val();
                                          //validamos campos
                                          if($.trim(nombre) == ""){
                                          toastr.error("No ha ingresado Razon Social","Error!");
                                          $("#inputprov3").focus();
                                          $("#error1_prov3").css("color","red");
                                          $("#inputprov3").css("background-color","rgb(202, 193, 193)");
                                              return false;
                                          }else{
                                            $("#error1_prov3").css("color","black");
                                            $("#inputprov3").css("background-color","white");
                                          }
                                          if( !letras.test(nombre)){
                                          toastr.error("Razon social solo admite letras","Error!");
                                          $("#inputprov3").focus();
                                          $("#inputprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error1_prov3").css("color","red");
                                            return false;

                                          }else{
                                            $("#error1_prov3").css("color","black");
                                            $("#inputprov3").css("background-color","white");
                                          }
                                           if( !letras1_1.test(nombre)){
                                            toastr.error("Razon social minimo de 3 letras","Error!");
                                            $("#inputprov3").focus();
                                            $("#inputprov3").css("background-color","rgb(202, 193, 193)");
                                            $("#error1_prov3").css("color","red");
                                              return false;

                                            }else{
                                              $("#error1_prov3").css("color","black");
                                              $("#inputprov3").css("background-color","white");
                                            }

                                      
                                          var RFC = $("#inputrfcprov3").val();
                                          //validamos campos
                                          if($.trim(RFC) == ""){
                                          toastr.error("No ha ingresado RFC","Error!");
                                          $("#inputrfcprov3").focus();
                                          $("#inputrfcprov3").css("background-color","rgb(202, 193, 193)");
                                            $("#error5prov3").css("color","red");
                                              return false;
                                          } else{
                                            $("#error5prov3").css("color","black");
                                            $("#inputrfcprov3").focus();
                                            $("#inputrfcprov3").css("background-color","white");
                                          }
                                           if( !letras1.test(RFC)){
                                          toastr.error("RFC solo admite letras y números","Error!");
                                          $("#inputrfcprov3").focus();
                                          $("#inputrfcprov3").css("background-color","rgb(202, 194, 193)");
                                          $("#error5prov3").css("color","red");
                                            return false;
                                          } else{
                                            $("#error5prov3").css("color","black");
                                            $("#inputrfcprov3").focus();
                                            $("#inputrfcprov3").css("background-color","white");
                                          }
                                          if( !letras2_2.test(RFC)){
                                            toastr.error("RFC minimo de 10 caracteres","Error!");
                                            $("#inputrfcprov3").focus();
                                            $("#inputrfcprov3").css("background-color","rgb(202, 193, 193)");
                                            $("#error5prov3").css("color","red");
                                              return false;

                                            } else{
                                              $("#error5prov3").css("color","black");
                                              $("#inputrfcprov3").focus();
                                              $("#inputrfcprov3").css("background-color","white");
                                            }

                                     
                                          var Telefono = $("#inputcelprov3").val();
                                          //validamos campos
                                          if($.trim(Telefono) == ""){
                                          toastr.error("No ha ingresado Telefono","Error!");
                                          $("#inputcelprov3").focus();
                                          $("#inputcelprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error10prov3").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10prov3").css("color","black");
                                            $("#inputcelprov3").focus();
                                            $("#inputcelprov3").css("background-color","white");
                                          }
                                           if( !letras2.test(Telefono)){
                                            toastr.error("Telefono solo admite números","Error!");
                                            $("#inputcelprov3").focus();
                                            $("#inputcelprov3").css("background-color","rgb(202, 193, 193)");
                                            $("#error10prov3").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10prov3").css("color","black");
                                            $("#inputcelprov3").focus();
                                            $("#inputcelprov3").css("background-color","white");
                                          }
                                           if( !letras2_4.test(Telefono)){
                                            toastr.error("Telefono minimo de 10 dígitos","Error!");
                                            $("#inputcelprov3").focus();
                                            $("#inputcelprov3").css("background-color","rgb(202, 193, 193)");
                                            $("#error10prov3").css("color","red");
                                              return false;
                                          }else{
                                            $("#error10prov3").css("color","black");
                                            $("#inputcelprov3").focus();
                                            $("#inputcelprov3").css("background-color","white");
                                          }


                                          var Fecha_Reg = $("#fechaRegProv3").val();
                                          //validamos campos
                                          if($.trim(Fecha_Reg) == ""){
                                          toastr.error("No ha ingresado Fecha de Registro","Error!");
                                          $("#fechaRegProv3").focus();
                                          $("#fechaRegProv3").css("background-color","rgb(202, 193, 193)");
                                          $("#error11prov3").css("color","red");
                                              return false;
                                          }
                                          else{
                                            $("#error11prov3").css("color","black");
                                            $("#fechaRegProv3").focus();
                                            $("#fechaRegProv3").css("background-color","white");
                                          }

                                          var Calle = $("#calleprov3").val();
                                          //validamos campos
                                          if($.trim(Calle) == ""){
                                          toastr.error("No ha ingresado calle","Error!");
                                          $("#calleprov3").focus();
                                          $("#calleprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error12prov3").css("color","red");
                                              return false;
                                          }else{
                                            $("#error12prov3").css("color","black");
                                            $("#calleprov3").focus();
                                            $("#calleprov3").css("background-color","white");
                                          }
                                           if( !letras1.test(Calle)){
                                          toastr.error("Calle solo admite letras y números","Error!");
                                          $("#calleprov3").focus();
                                          $("#calleprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error12prov3").css("color","red");
                                            return false;
                                          }else{
                                            $("#error12prov3").css("color","black");
                                            $("#calleprov3").focus();
                                            $("#calleprov3").css("background-color","white");
                                          }

                                          var Colonia = $("#coloniaprov3").val();
                                          //validamos campos
                                          if($.trim(Colonia) == ""){
                                          toastr.error("No ha ingresado Colonia","Error!");
                                          $("#coloniaprov3").focus();
                                          $("#coloniaprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error13prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error13prov").css("color","black");
                                            $("#coloniaprov3").focus();
                                            $("#coloniaprov3").css("background-color","white");
                                          }
                                          if( !letras1.test(Colonia)){
                                          toastr.error("Colonia solo admite letras y números","Error!");
                                          $("#coloniaprov3").focus();
                                          $("#coloniaprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error13prov").css("color","red");
                                            return false;
                                          }else{
                                            $("#error13prov").css("color","black");
                                            $("#coloniaprov3").focus();
                                            $("#coloniaprov3").css("background-color","white");
                                          }

                                          var NI = $("#No_interiorprov3").val();
                                          //validamos campos
                                          if($.trim(NI) == ""){
                                          toastr.error("No ha ingresado Numero Interior","Error!");
                                          $("#No_interiorprov3").focus();
                                          $("#No_interiorprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error14prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error14prov").css("color","black");
                                            $("#No_interiorprov3").focus();
                                            $("#No_interiorprov3").css("background-color","white");
                                          }
                                          if( !letras1.test(NI)){
                                          toastr.error("Numero Interior solo admite letras y números","Error!");
                                          $("#No_interiorprov3").focus();
                                          $("#No_interiorprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error14prov").css("color","red");
                                            return false;
                                          }else{
                                            $("#error14prov").css("color","black");
                                            $("#No_interiorprov3").focus();
                                            $("#No_interiorprov3").css("background-color","white");
                                          }

                                          var NE = $("#No_exteriorprov3").val();
                                          //validamos campos
                                          if($.trim(NE) == ""){
                                          toastr.error("No ha ingresado Numero Exterior","Error!");
                                          $("#No_exteriorprov3").focus();
                                          $("#No_exteriorprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error15prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error15prov").css("color","black");
                                            $("#No_exteriorprov3").focus();
                                            $("#No_exteriorprov3").css("background-color","white");
                                          }
                                          if( !letras1.test(NE)){
                                          toastr.error("Numero Exterior solo admite letras y números","Error!");
                                          $("#No_exteriorprov3").focus();
                                          $("#No_exteriorprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error15prov").css("color","red");
                                            return false;
                                          }else{
                                            $("#error15prov").css("color","black");
                                            $("#No_exteriorprov3").focus();
                                            $("#No_exteriorprov3").css("background-color","white");
                                          }

                                          var CP = $("#cpprov3").val();
                                          //validamos campos
                                          if($.trim(CP) == ""){
                                          toastr.error("No ha ingresado Codigo Postal","Error!");
                                          $("#cpprov3").focus();
                                          $("#cpprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error16prov").css("color","red");
                                              return false;
                                          }else{
                                            $("#error16prov").css("color","black");
                                            $("#cpprov3").focus();
                                            $("#cpprov3").css("background-color","white");
                                          }
                                          if( !letras2.test(CP)){
                                          toastr.error("Codigo Postal solo admite números","Error!");
                                          $("#cpprov3").focus();
                                          $("#cpprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error16prov").css("color","red");
                                            return false;
                                          }else{
                                            $("#error16prov").css("color","black");
                                            $("#cpprov3").focus();
                                            $("#cpprov3").css("background-color","white");
                                          }

                                          var Municipio = $("#municipioprov3").val();
                                          //validamos campos
                                          if($.trim(Municipio) == ""){
                                          toastr.error("No ha ingresado Municipio","Error!");
                                          $("#municipioprov3").focus();
                                          $("#municipioprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error17prov3").css("color","red");
                                              return false;
                                          }else{
                                            $("#error17prov3").css("color","black");
                                            $("#municipioprov3").focus();
                                            $("#municipioprov3").css("background-color","white");
                                          }

                                          var Localidad = $("#localidadprov3").val();
                                          //validamos campos
                                          if($.trim(Localidad) == ""){
                                          toastr.error("No ha ingresado Localidad","Error!");
                                          $("#localidadprov3").focus();
                                          $("#localidadprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error18prov3").css("color","red");
                                              return false;
                                          }else{
                                            $("#error18prov3").css("color","black");
                                            $("#localidadprov3").focus();
                                            $("#localidadprov3").css("background-color","white");
                                          }
                                          if( !letras1.test(Localidad)){
                                          toastr.error("Localidad solo admite letras y números","Error!");
                                          $("#localidadprov3").focus();
                                          $("#localidadprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error18prov3").css("color","red");
                                            return false;
                                          }else{
                                            $("#error18prov3").css("color","black");
                                            $("#localidadprov3").focus();
                                            $("#localidadprov3").css("background-color","white");
                                          }

                                          var Referencia = $("#refprov3").val();
                                          //validamos campos
                                          if($.trim(Referencia) == ""){
                                          toastr.error("No ha ingresado Referencia","Error!");
                                          $("#refprov3").focus();
                                          $("#refprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error19prov3").css("color","red");
                                              return false;
                                          }else{
                                            $("#error19prov3").css("color","black");
                                            $("#refprov3").focus();
                                            $("#refprov3").css("background-color","white");
                                          }
                                           if( !letras3.test(Referencia)){
                                          toastr.error("Referencia solo admite letras y números","Error!");
                                          $("#refprov3").focus();
                                          $("#refprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error19prov3").css("color","red");
                                            return false;
                                          }else{
                                            $("#error19prov3").css("color","black");
                                            $("#refprov3").focus();
                                            $("#refprov3").css("background-color","white");
                                          }

                                          var Correo = $("#inputcorreoprov3").val();
                                          //validamos campos
                                          if($.trim(Correo) == ""){
                                          toastr.error("No ha ingresado Correo","Error!");
                                          $("#inputcorreoprov3").focus();
                                          $("#inputcorreoprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error20prov3").css("color","red");
                                              return false;
                                          }else{
                                            $("#error20prov3").css("color","black");
                                            $("#inputcorreoprov3").focus();
                                            $("#inputcorreoprov3").css("background-color","white");
                                          }
                                           if( !letras4.test(Correo)){
                                          toastr.error("Ingresar Correo valido","Error!");
                                          $("#inputcorreoprov3").focus();
                                          $("#inputcorreoprov3").css("background-color","rgb(202, 193, 193)");
                                          $("#error20prov3").css("color","red");
                                            return false;
                                          }else{
                                            $("#error20prov3").css("color","black");
                                            $("#inputcorreoprov3").focus();
                                            $("#inputcorreoprov3").css("background-color","white");
                                          }

                                          var Servicio = $("#servicioprov13").val();
                                          //validamos campos
                                          if($.trim(Servicio) == ""){
                                          toastr.error("No ha ingresado Servicio","Advertencia!");
                                          $("#servicioprov13").focus();
                                          $("#servicioprov13").css("background-color","rgb(202, 193, 193)");
                                          $("#error21prov3").css("color","red");
                                              return false;
                                          }else{
                                            $("#error21prov3").css("color","black");
                                            $("#servicioprov13").focus();
                                            $("#servicioprov13").css("background-color","white");
                                          }
                                          if( !letras2_2.test(Servicio)){
                                          toastr.warning("Servicio Debil minimo 10 Caracateres","Error!");
                                          $("#servicioprov13").focus();
                                          $("#servicioprov13").css("background-color","rgb(202, 193, 193)");
                                          $("#error21prov3").css("color","red");
                                            return false;
                                          }else{
                                            $("#error21prov3").css("color","black");
                                            $("#servicioprov13").focus();
                                            $("#servicioprov13").css("background-color","white");
                                          }

                                         

                                       
                                            //  alert('Finish Clicked');
                                            var formData = new FormData($("#formprov")[0]);
                                            var ruta = "../operaciones/actualizar_prov_moral.php";
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
                                                    $("#registrar_proveedor6").modal('hide');
                                                    document.getElementById("formprov").reset();
                                                    // setTimeout('document.location.reload()',2000);
                                                    $.ajax({
                                                      type: "POST",
                                                      url: "../operaciones/ver_tabla_Proveedores_Morales.php",
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
                                                    text: 'PARA ACTUALIZAR SELECCIONE LA OPCION  EN EL MENU!',
                                                    showConfirmButton: false,
                                                    timer: 2000
                                                  });
                                                  $('#smartwizard_proveedor_4').smartWizard("reset");
                                                  $("#registrar_proveedor6").modal('hide');
                                                  // setTimeout('document.location.reload()',2000);
                                                } else if (
                                                  // Read more about handling dismissals
                                                  result.dismiss === Swal.DismissReason.cancel
                                                ) {


                                                }
                                              })



                                            });

        // Smart Wizard 1
        $('#smartwizard_proveedor_4').smartWizard({
                selected: 0,
                theme: 'arrows',
                transitionEffect:'fade',
                showStepURLhash: false,
                toolbarSettings: {toolbarPosition: 'both',
                                  toolbarExtraButtons: [btnFinish, btnCancel]
                                }
        });

    });
