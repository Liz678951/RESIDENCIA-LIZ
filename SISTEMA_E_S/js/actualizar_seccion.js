$(document).ready(function(){
    $("#bam").click();
 });
 function entrar(){
 
    console.log("cargando");
 
 }


$('#ingresar').on('click', function() {
        var x = window.matchMedia("(max-width: 767px)")
        myFunction(x) 
        function myFunction(x) {
            if (x.matches) { 
                $.ajax({
                    type: "POST",
                    url: "formularios/add_login.php",
                    success: function(data) {
                        $('.navbar-nav li').removeClass('active');
                        $("#central_prin").css("height","59.7vh");
                        $('#central').fadeIn(100).html(data);                
                    }
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: "formularios/add_login.php",
                    success: function(data) {
                        $('.navbar-nav li').removeClass('active');
                        $("#central_prin").css("height","20.6vh");
                        $("#central_prin").css("margin-bottom","59px");
                        $('#central').fadeIn(100).html(data);                
                    }
                });
            }
          }
    });
    $('#acerca').on('click', function() {
        var x = window.matchMedia("(max-width: 767px)")
        myFunction(x) 
        function myFunction(x) {
            if (x.matches) { 
                $.ajax({
                    type: "POST",
                    url: "formularios/add_inf.php",
                    success: function(data) {
                        $('.navbar-nav li').removeClass('active');
                        $("#central_prin").css("height","79vh");
                        $('#central').fadeIn(100).html(data);                
                    }
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: "formularios/add_inf.php",
                    success: function(data) {
                        $('.navbar-nav li').removeClass('active');
                        $("#central_prin").css("height","53.8vh");
                        $('#central').fadeIn(100).html(data);                
                    }
                });
            }
          }
    });

    $('#ingresar1').on('click', function() {
        var x = window.matchMedia("(max-width: 767px)")
        myFunction(x) 
        function myFunction(x) {
            if (x.matches) { 
                $.ajax({
                    type: "POST",
                    url: "../formularios/add_registro_emp1.php",
                    success: function(data) {
                        $("#central_prin1").css("height","auto");
                        $('#central1').fadeIn(100).html(data);                
                    }
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: "../formularios/add_registro_emp1.php",
                    success: function(data) {
                        $("#central_prin1").css("height","auto");
                        $('#central1').fadeIn(100).html(data);                
                    }
                });
            }
          }
          

    });
    
    $('#empleado').on('click', function() {
        var x = window.matchMedia("(max-width: 767px)")
        myFunction(x) 
        function myFunction(x) {
            if (x.matches) { 
                $.ajax({
                    type: "POST",
                    url: "../formularios/add_chofer_registrar.php",
                    success: function(data) {
                        $("#central_prin1").css("height","auto");
                        $('#central1').fadeIn(100).html(data);                
                    }
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: "../formularios/add_chofer_registrar.php",
                    success: function(data) {
                        $("#central_prin1").css("height","auto");
                        $('#central1').fadeIn(100).html(data);                
                    }
                });
            }
          }
          

    });

    $('#alta_prov1').on('click', function() {
        var x = window.matchMedia("(max-width: 767px)")
        myFunction(x) 
        function myFunction(x) {
            if (x.matches) { 
                $.ajax({
                    type: "POST",
                    url: "../formularios/add_proveedor_registrar_1.php",
                    success: function(data) {
                        $("#central_prin1").css("height","auto");
                        $('#central1').fadeIn(100).html(data);                
                    }
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: "../formularios/add_proveedor_registrar_1.php",
                    success: function(data) {
                        $("#central_prin1").css("height","auto");
                        $('#central1').fadeIn(100).html(data);                
                    }
                });
            }
          }
          

    });

    $('#alta_prov2').on('click', function() {
        var x = window.matchMedia("(max-width: 767px)")
        myFunction(x) 
        function myFunction(x) {
            if (x.matches) { 
                $.ajax({
                    type: "POST",
                    url: "../formularios/add_proveedor_registrar.php",
                    success: function(data) {
                        $("#central_prin1").css("height","auto");
                        $('#central1').fadeIn(100).html(data);                
                    }
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: "../formularios/add_proveedor_registrar.php",
                    success: function(data) {
                        $("#central_prin1").css("height","auto");
                        $('#central1').fadeIn(100).html(data);                
                    }
                });
            }
          }
          

    });
    $('#alta_entrada_P').on('click', function() {

      
        var id=$(this).val();
        var x = window.matchMedia("(max-width: 767px)")
        myFunction(x) 
        function myFunction(x) {
            if (x.matches) { 
                $.ajax({
                    type: "POST",
                    url: "../formularios/add_proveedor_ES.php",
                    data: id,
                    success: function(data) {                      
                        $("#central_prin1").css("height","auto");
                        $('#central1').fadeIn(100).html(data); 
                        $('#revision').val(id);                  
                    }
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: "../formularios/add_proveedor_ES.php",
                    data: id,
                    success: function(data) {
                        $("#central_prin1").css("height","auto");
                        $('#central1').fadeIn(100).html(data);  
                        $('#revision').val(id);               
                    }
                });
            }
          }
          

    });

    $('#alta_chof').on('click', function() {

      
        var id=$(this).val();
        var x = window.matchMedia("(max-width: 767px)")
        myFunction(x) 
        function myFunction(x) {
            if (x.matches) { 
                $.ajax({
                    type: "POST",
                    url: "../formularios/add_chofer_ES.php",
                    data: id,
                    success: function(data) {                      
                        $("#central_prin1").css("height","auto");
                        $('#central1').fadeIn(100).html(data); 
                        $('#revision1').val(id);                  
                    }
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: "../formularios/add_chofer_ES.php",
                    data: id,
                    success: function(data) {
                        $("#central_prin1").css("height","auto");
                        $('#central1').fadeIn(100).html(data);  
                        $('#revision1').val(id);               
                    }
                });
            }
          }
          

    });


