$('#estch').click(function() { 
   $("#ent").click();
        $.ajax({
            type: "POST",
            url: "../estadisticas/estadisticas/estadisticas_s2.php",
            success: function(data) {
                $('#central1').fadeIn(100).html(data);                    
            }
        });
        return false;
});