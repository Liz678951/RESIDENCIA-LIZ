$('#tiempo').click(function() { 
    var formData = new FormData($("#tiemp")[0]);
        $.ajax({
            data: formData,
            type: "POST",
            contentType: false,
            processData: false,
            url: "../estadisticas/estadisticas/est_tiempo.php",
            success: function(data) {
                $('#central1').fadeIn(100).html(data);                    
            }
        });
      
        
        return false;
});