$(document).ready(function(){
    $("#bam").click();
 });
 function entrar(){
 
    console.log("cargando");
 
 }


$('#btnlogin').click(function () {
    var letras4 = /^([\w._%-]+@[\w.-]+\.[a-zA-Z]{2,4})$/i;
    var letras2_2 = /^([A-Za-z0-9]{8,15})$/;
    var User = $('#inputlogin').val();
    var Pass = $('#inputpassword').val();

    if ($.trim(User) == "") {
        toastr.error("No ha ingresado nombre de usuario", "Error!");
        $("#inputlogin").focus();
        $("#inputlogin").css("background-color", "rgb(202, 193, 193)");
        $("#errorl").css("color", "red");
        return false;
    } else {
        $("#errorl").css("color", "White");
        $("#inputlogin").focus();
        $("#inputlogin").css("background-color", "transparent");
    }
    if (!letras4.test(User)) {
        toastr.error("Usuario incorrecto", "Error!");
        $("#inputlogin").focus();
        $("#inputlogin").css("background-color", "rgb(202, 193, 193)");
        $("#errorl").css("color", "red");
        return false;
    } else {
        $("#errorl").css("color", "white");
        $("#inputlogin").focus();
        $("#inputlogin").css("background-color", "transparent");
    }
    if ($.trim(Pass) == "") {
        toastr.error("No ha ingresado Contraseña", "Advertencia!");
        $("#inputpassword").focus();
        $("#inputpassword").css("background-color", "rgb(202, 193, 193)");
        $("#errorp").css("color", "red");
        return false;
    } else {
        $("#errorp").css("color", "white");
        $("#inputpassword").focus();
        $("#inputpassword").css("background-color", "transparent");
    }

    if (!letras2_2.test(Pass)) {
        toastr.error("Contraseña solo permite letras y numeros", "Error!");
        $("#inputpassword").focus();
        $("#inputpassword").css("background-color", "rgb(202, 193, 193)");
        $("#errorp").css("color", "red");
        return false;
    } else {
        $("#errorp").css("color", "white");
        $("#inputpassword").focus();
        $("#inputpassword").css("background-color", "transparent");
    }
    $.ajax({
        type: "POST",
        url: "login/validar_acceso.php",
        data: {
            Nombre: User,
            Password: Pass
        }
    }).done(function (data) {
         if (data == 1) {
            location = 'consultas/consulta_administra.php';
        }  else if (data == 6) {
            location = 'consultas/consulta_vigilante.php';
        }
        else if (data == 45) {
          toastr.error("Los datos ingresados son incorrectos", "Error!");
          return false;   
      }
    });
});



$('#btnreg').click(function() {
    // alert("Quieres registrar una es");
    // if ($('#formes').smkValidate()) {
         var letras3= /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{2,95})$/i;
        var proveedor = $("#prov").val();
        //validamos campos
        if($.trim(proveedor) == ""){
        toastr.error("No ha ingresado Proveedor","Error!");
        $("#prov").focus();
        $("#prov").css("background-color","rgb(202, 193, 193)");
        $("#error51en").css("color","red"); 
            return false;
        }else{
            $("#error51en").css("color","black");
            $("#prov").focus();
            $("#prov").css("background-color","white");
          } 
        

          var Tipo_P = $("#tipo_p").val();
          //validamos campos
          if($.trim(Tipo_P) == ""){
          toastr.error("No ha ingresado Tipo de Proveedor","Error!");
          $("#tipo_p").focus();
          $("#tipo_p").css("background-color","rgb(202, 193, 193)");
          $("#error50en").css("color","red"); 
              return false;
          }else{
            $("#error50en").css("color","black");
            $("#tipo_p").focus();
            $("#tipo_p").css("background-color","white");
          }

          var Accion = $("#tipo_accion").val();
          //validamos campos
          if($.trim(Accion) == ""){
          toastr.error("No ha ingresado Si es Entrada o Salida","Error!");
          $("#tipo_accion").focus();
          $("#tipo_accion").css("background-color","rgb(202, 193, 193)");
          $("#error59en").css("color","red"); 
              return false;
          }else{
            $("#error59en").css("color","black");
            $("#tipo_accion").focus();
            $("#tipo_accion").css("background-color","white");
          }

          var FI= $("#fechaI").val();
          //validamos campos
          if($.trim(FI) == ""){
          toastr.error("No ha ingresado Fecha de Entrada o Salida","Error!");
          $("#fechaI").focus();
          $("#fechaI").css("background-color","rgb(202, 193, 193)");
          $("#error53en").css("color","red"); 
              return false;
          }else{
            $("#error53en").css("color","black");
            $("#fechaI").focus();
            $("#fechaI").css("background-color","white");
          }

        var Desc = $("#descripcion").val();
          //validamos campos
          if($.trim(Desc) == ""){
          toastr.error("No ha ingresado Descripcion","Error!");
          $("#descripcion").focus();
          $("#descripcion").css("background-color","rgb(202, 193, 193)");
          $("#error55en").css("color","red");
          
              return false;
          }else{
            $("#error55en").css("color","black");
            $("#descripcion").focus();
            $("#descripcion").css("background-color","white");
          }
           if( !letras3.test(Desc)){
          toastr.error("Descripcion  solo admite letras y números","Error!"); 
          $("#descripcion").focus();
          $("#descripcion").css("background-color","rgb(202, 193, 193)");
          $("#error55en").css("color","red"); 
            return false;
    
          }else{
            $("#error55en").css("color","black");
            $("#descripcion").focus();
            $("#descripcion").css("background-color","white");
          }
          if( !letras3.test(Desc)){
            toastr.error("Descripción minimo de 15 letras","Error!"); 
            $("#descripcion").focus();
          $("#descripcion").css("background-color","rgb(202, 193, 193)");
          $("#error55en").css("color","red"); 
              return false;
      
            }else{
                $("#error55en").css("color","black");
                $("#descripcion").focus();
                $("#descripcion").css("background-color","white");
              }

        var formData = new FormData($("#formes")[0]);
        var ruta = "../operaciones/agregar_ES.php";
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
                $("#registro").modal('hide');
                $("#inputnombre").val('');
                $("#inputgenero").val('');
                $("#fechaI").val('');
                $("#fechaT").val('');
                $('#descripcion').val('');
                // setTimeout('document.location.reload()',1800);
                $.ajax({
                  type: "POST",
                  url: "../operaciones/ver_tabla_ES_Proveedores.php",
                  success: function(data) {
                      $('#central1').fadeIn(100).html(data);                
                  }
              });
            }
            else if(data==3){
                $.smkAlert({
                    text: 'Apoyo y convocatoria duplicados, elija otra opcion',
                    type: 'warning',
                    position:'bottom-right',
                    time: 2
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
    // }
});

$('#btneschofer').click(function() {
    // if ($('#formes').smkValidate()) {
         var letras3= /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{2,95})$/i;
        var Chofer = $("#chofer").val();
        //validamos campos
        if($.trim(Chofer) == ""){
        toastr.error("No ha ingresado Chofer","Error!");
        $("#chofer").focus();
        $("#chofer").css("background-color","rgb(202, 193, 193)");
        $("#error50ch").css("color","red"); 
            return false;
        }else{
            $("#error50ch").css("color","black");
            $("#chofer").focus();
            $("#chofer").css("background-color","white");
          } 
        

          var Accion1 = $("#accionchofer").val();
          //validamos campos
          if($.trim(Accion1) == ""){
          toastr.error("No ha ingresado Si es Entrada o Salida","Error!");
          $("#accionchofer").focus();
          $("#accionchofer").css("background-color","rgb(202, 193, 193)");
          $("#error51ch").css("color","red"); 
              return false;
          }else{
            $("#error51ch").css("color","black");
            $("#accionchofer").focus();
            $("#accionchofer").css("background-color","white");
          }

          var FI= $("#fechaIch").val();
          //validamos campos
          if($.trim(FI) == ""){
          toastr.error("No ha ingresado Fecha de Entrada o Salida","Error!");
          $("#fechaIch").focus();
          $("#fechaIch").css("background-color","rgb(202, 193, 193)");
          $("#error52ch").css("color","red"); 
              return false;
          }else{
            $("#error52ch").css("color","black");
            $("#fechaIch").focus();
            $("#fechaIch").css("background-color","white");
          }

          var Camion = $("#inputmatriculachofer1").val();
          //validamos campos
          if($.trim(Camion) == ""){
          toastr.error("No ha ingresado el camion","Error!");
          $("#inputmatriculachofer1").focus();
          $("#inputmatriculachofer1").css("background-color","rgb(202, 193, 193)");
          $("#error230chofer").css("color","red"); 
              return false;
          }else{
            $("#error230chofer").css("color","black");
            $("#inputmatriculachofer1").focus();
            $("#inputmatriculachofer1").css("background-color","white");
          }

        var Desc = $("#descripcionchof").val();
          //validamos campos
          if($.trim(Desc) == ""){
          toastr.error("No ha ingresado Descripcion","Error!");
          $("#descripcionchof").focus();
          $("#descripcionchof").css("background-color","rgb(202, 193, 193)");
          $("#error55chof").css("color","red");
          
              return false;
          }else{
            $("#error55chof").css("color","black");
            $("#descripcionchof").focus();
            $("#descripcionchof").css("background-color","white");
          }
           if( !letras3.test(Desc)){
          toastr.error("Descripcion  solo admite letras y números","Error!"); 
          $("#descripcionchof").focus();
          $("#descripcionchof").css("background-color","rgb(202, 193, 193)");
          $("#error55chof").css("color","red"); 
            return false;
    
          }else{
            $("#error55chof").css("color","black");
            $("#descripcionchof").focus();
            $("#descripcionchof").css("background-color","white");
          }
          if( !letras3.test(Desc)){
            toastr.error("Descripción minimo de 15 letras","Error!"); 
            $("#descripcionchof").focus();
          $("#descripcionchof").css("background-color","rgb(202, 193, 193)");
          $("#error55chof").css("color","red"); 
              return false;
      
            }else{
                $("#error55chof").css("color","black");
                $("#descripcionchof").focus();
                $("#descripcionchof").css("background-color","white");
              }

        var formData = new FormData($("#formchoferes")[0]);
        var ruta = "../operaciones/agregar_chofer_ES.php";
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
              
                $("#registrar_chofer_2").modal('hide');
                document.getElementById("formchoferes").reset();
              $.ajax({
                type: "POST",
                url: "../operaciones/ver_tabla_ES_Choferes.php",
                success: function(data) {
                    $('#central1').fadeIn(100).html(data);                
                }
            });
                // setTimeout('document.location.reload()',1800);
            }
            else if(data==3){
                $.smkAlert({
                    text: 'Elija otra opcion',
                    type: 'warning',
                    position:'bottom-right',
                    time: 2
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
    // }
});


$('#btnreg1').click(function() {
    // alert("Quieres registrar una es");
    // if ($('#formes').smkValidate()) {
         var letras3= /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{2,95})$/i;
        var proveedor = $("#prov1").val();
        //validamos campos
        if($.trim(proveedor) == ""){
        toastr.error("No ha ingresado Proveedor","Error!");
        $("#prov1").focus();
        $("#prov1").css("background-color","rgb(202, 193, 193)");
        $("#error512en").css("color","red"); 
            return false;
        }else{
            $("#error512en").css("color","black");
            $("#prov1").focus();
            $("#prov1").css("background-color","white");
          } 
        

          var Tipo_P = $("#tipo_p11").val();
          //validamos campos
          if($.trim(Tipo_P) == ""){
          toastr.error("No ha ingresado Tipo de Proveedor","Error!");
          $("#tipo_p11").focus();
          $("#tipo_p11").css("background-color","rgb(202, 193, 193)");
          $("#error50en").css("color","red"); 
              return false;
          }else{
            $("#error50en").css("color","black");
            $("#tipo_p11").focus();
            $("#tipo_p11").css("background-color","white");
          }

          var Accion = $("#tipo_accion1a").val();
          //validamos campos
          if($.trim(Accion) == ""){
          toastr.error("No ha ingresado Si es Entrada o Salida","Error!");
          $("#tipo_accion1a").focus();
          $("#tipo_accion1a").css("background-color","rgb(202, 193, 193)");
          $("#error59ena").css("color","red"); 
              return false;
          }else{
            $("#error59ena").css("color","black");
            $("#tipo_accion1a").focus();
            $("#tipo_accion1a").css("background-color","white");
          }

          var FI= $("#fechaI11a").val();
          //validamos campos
          if($.trim(FI) == ""){
          toastr.error("No ha ingresado Fecha de Entrada o Salida","Error!");
          $("#fechaI11a").focus();
          $("#fechaI11a").css("background-color","rgb(202, 193, 193)");
          $("#error53ena").css("color","red"); 
              return false;
          }else{
            $("#error53ena").css("color","black");
            $("#fechaI11a").focus();
            $("#fechaI11a").css("background-color","white");
          }

        var Desc = $("#descripcion1a").val();
          //validamos campos
          if($.trim(Desc) == ""){
          toastr.error("No ha ingresado Descripcion","Error!");
          $("#descripcion1a").focus();
          $("#descripcion1a").css("background-color","rgb(202, 193, 193)");
          $("#error55ena").css("color","red");
          
              return false;
          }else{
            $("#error55ena").css("color","black");
            $("#descripcion1a").focus();
            $("#descripcion1a").css("background-color","white");
          }
           if( !letras3.test(Desc)){
          toastr.error("Descripcion  solo admite letras y números","Error!"); 
          $("#descripcion1a").focus();
          $("#descripcion1a").css("background-color","rgb(202, 193, 193)");
          $("#error55ena").css("color","red"); 
            return false;
    
          }else{
            $("#error55ena").css("color","black");
            $("#descripcion1a").focus();
            $("#descripcion1a").css("background-color","white");
          }
          if( !letras3.test(Desc)){
            toastr.error("Descripción minimo de 15 letras","Error!"); 
            $("#descripcion1a").focus();
          $("#descripcion1a").css("background-color","rgb(202, 193, 193)");
          $("#error55ena").css("color","red"); 
              return false;
      
            }else{
                $("#error55ena").css("color","black");
                $("#descripcion1a").focus();
                $("#descripcion1a").css("background-color","white");
              }

        var formData = new FormData($("#formes1")[0]);
        var ruta = "../operaciones/actualizar_ES_Proveedor.php";
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
                $("#registrar_proveedor61").modal('hide');
                document.getElementById("formes1").reset();
              $.ajax({
                type: "POST",
                url: "../operaciones/ver_tabla_ES_Proveedores.php",
                success: function(data) {
                    $('#central1').fadeIn(100).html(data);                
                }
            });
            }
            else if(data==3){
                $.smkAlert({
                    text: 'Elija otra opcion',
                    type: 'warning',
                    position:'bottom-right',
                    time: 2
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
    // }
});


$('#btneschoferb').click(function() {
       var letras3= /^([a-zA-Z0-9 ñáéíóú ÑÁÉÍÓÚ]{2,95})$/i;
      var proveedor = $("#choferb").val();
      //validamos campos
      if($.trim(proveedor) == ""){
      toastr.error("No ha ingresado Chofer","Error!");
      $("#choferb").focus();
      $("#choferb").css("background-color","rgb(202, 193, 193)");
      $("#error50chb").css("color","red"); 
          return false;
      }else{
          $("#error50chb").css("color","black");
          $("#choferb").focus();
          $("#choferb").css("background-color","white");
        } 
      

        var Tipo_P = $("#inputmatriculachofer1b").val();
        //validamos campos
        if($.trim(Tipo_P) == ""){
        toastr.error("No ha ingresado Matricula","Error!");
        $("#inputmatriculachofer1b").focus();
        $("#inputmatriculachofer1b").css("background-color","rgb(202, 193, 193)");
        $("#error230choferb").css("color","red"); 
            return false;
        }else{
          $("#error230choferb").css("color","black");
          $("#inputmatriculachofer1b").focus();
          $("#inputmatriculachofer1b").css("background-color","white");
        }

        var Accion = $("#accionchoferb").val();
        //validamos campos
        if($.trim(Accion) == ""){
        toastr.error("No ha ingresado Si es Entrada o Salida","Error!");
        $("#accionchoferb").focus();
        $("#accionchoferb").css("background-color","rgb(202, 193, 193)");
        $("#error51chb").css("color","red"); 
            return false;
        }else{
          $("#error51chb").css("color","black");
          $("#accionchoferb").focus();
          $("#accionchoferb").css("background-color","white");
        }

        var FI= $("#fechaIchb").val();
        //validamos campos
        if($.trim(FI) == ""){
        toastr.error("No ha ingresado Fecha de Entrada o Salida","Error!");
        $("#fechaIchb").focus();
        $("#fechaIchb").css("background-color","rgb(202, 193, 193)");
        $("#error52chb").css("color","red"); 
            return false;
        }else{
          $("#error52chb").css("color","black");
          $("#fechaIchb").focus();
          $("#fechaIchb").css("background-color","white");
        }

      var Desc = $("#descripcionchofb").val();
        //validamos campos
        if($.trim(Desc) == ""){
        toastr.error("No ha ingresado Descripcion","Error!");
        $("#descripcionchofb").focus();
        $("#descripcionchofb").css("background-color","rgb(202, 193, 193)");
        $("#error55chofb").css("color","red");
        
            return false;
        }else{
          $("#error55chofb").css("color","black");
          $("#descripcionchofb").focus();
          $("#descripcionchofb").css("background-color","white");
        }
         if( !letras3.test(Desc)){
        toastr.error("Descripcion  solo admite letras y números","Error!"); 
        $("#descripcionchofb").focus();
        $("#descripcionchofb").css("background-color","rgb(202, 193, 193)");
        $("#error55chofb").css("color","red"); 
          return false;
  
        }else{
          $("#error55chofb").css("color","black");
          $("#descripcionchofb").focus();
          $("#descripcionchofb").css("background-color","white");
        }
        if( !letras3.test(Desc)){
          toastr.error("Descripción minimo de 15 letras","Error!"); 
          $("#descripcionchofb").focus();
        $("#descripcionchofb").css("background-color","rgb(202, 193, 193)");
        $("#error55chofb").css("color","red"); 
            return false;
    
          }else{
              $("#error55chofb").css("color","black");
              $("#descripcionchofb").focus();
              $("#descripcionchofb").css("background-color","white");
            }

      var formData = new FormData($("#formchoferesb")[0]);
      var ruta = "../operaciones/actualizar_ES_Chofer.php";
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
              $("#registrar_chofer_2b").modal('hide');
              document.getElementById("formchoferesb").reset();
            $.ajax({
              type: "POST",
              url: "../operaciones/ver_tabla_ES_Choferes.php",
              success: function(data) {
                  $('#central1').fadeIn(100).html(data);                
              }
          });
          }
          else if(data==3){
              $.smkAlert({
                  text: 'Elija otra opcion',
                  type: 'warning',
                  position:'bottom-right',
                  time: 2
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
  // }
});