 	<link rel="shortcut icon" href="img/img4.png">
    <link rel="stylesheet" href="css/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style1.css">
	<link rel="stylesheet" href="css/smoke.min.css">
	<link href="css/smart_wizard.css" rel="stylesheet" type="text/css" />
    <link href="css/style1.css" rel="stylesheet" type="text/css" />

    <!-- Optional SmartWizard theme -->
    <link href="css/smart_wizard_theme_circles.css" rel="stylesheet" type="text/css" />
    <link href="css/smart_wizard_theme_arrows.css" rel="stylesheet" type="text/css" />
    <link href="css/smart_wizard_theme_dots.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <link href="css/jquery.smartmenus.bootstrap-4.css" rel="stylesheet">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/login.css">
	<link rel="stylesheet" href="css/jquery.dataTables.min.css">
	<link rel="stylesheet" type="text/css" href="css/fileinput.min.css">
	<!-- <link rel="stylesheet" href="css/style.css"> -->
	
    <script type="text/javascript">
function mostrarPassword(){
		var cambio = document.getElementById("inputpassword");
		if(cambio.type == "password"){
			cambio.type = "text";
			$('.icon').removeClass('glyphicon glyphicon-eye-close').addClass('glyphicon glyphicon-eye-open');
		}else{
			cambio.type = "password";
			$('.icon').removeClass('glyphicon glyphicon-eye-open').addClass('glyphicon glyphicon-eye-close');
		}
	} 
	
	$(document).ready(function () {
	//CheckBox mostrar contraseña
	$('#ShowPassword').click(function () {
		$('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
	});
});
</script>
   