$('#tiempo2').click(function() { 
    $("#ent").click();
    var formData = new FormData($("#tiemp1")[0]);
        $.ajax({
            data: formData,
            type: "POST",
            contentType: false,
            processData: false,
            url: "../estadisticas/estadisticas/est_tiempo2.php",
            success: function(data) {
                $('#central1').fadeIn(100).html(data);                    
            }
        });
        return false;
});