<div id="intro">
  <div class="login-dark">
    <form action="javascript:()" id="formlogin" name="formlogin" method="post" enctype="multipart/form-data">
      <h2 class="sr-only">INICIO</h2>
      <div id="log_log" class="illustration"></div>
      <div class="form-group">
      <input class="form-control" type="email" name="inputlogin" id="inputlogin" placeholder="Email">
      </div>
      <div class="form-group"><input class="form-control" type="password"name="inputpassword" id="inputpassword" placeholder="Password"></div>
      <div class="form-group"><button class="btn btn-success btn-block" id="btnlogin" type="submit">INGRESAR</button></div>
    </form>
  </div>
</div>
<script src="js/toastr.min.js"></script>
<script src="js/funciones.js"></script>
<script>
toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-left",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "1000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}


</script>

