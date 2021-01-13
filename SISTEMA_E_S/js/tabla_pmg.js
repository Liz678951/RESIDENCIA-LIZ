$('#estp').click(function() { 
   $("#ent").click();
        $.ajax({
            type: "POST",
            url: "../estadisticas/estadisticas/estadisticas_s.php",
            success: function(data) {
                $('#central1').fadeIn(100).html(data);                    
            }
        });
        return false;
});