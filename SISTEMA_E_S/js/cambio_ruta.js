       $(function()
       {
           $('#your_picturechofer1').on('change',function (event)
           {
            var tmppath =document.getElementById('your_picturechofer1').files[0].name;
               var inputNombre = document.getElementById("Fotograf1");
               inputNombre.value ="../Choferes/".concat(tmppath) ;
               
           });
       });


       $(function()
       {
           $('#your_picture11').on('change',function (event)
           {
            var tmppath =document.getElementById('your_picture11').files[0].name;
               var inputNombre = document.getElementById("Fotografemp");
               inputNombre.value ="../Empleados/".concat(tmppath) ;
               
           });
       });

       $(function()
       {
           $('#your_pictureprov').on('change',function (event)
           {
            var tmppath =document.getElementById('your_pictureprov').files[0].name;
               var inputNombre = document.getElementById("Fotografprov");
               inputNombre.value ="../Proveedores/".concat(tmppath) ;
               
           });
       });

       $(function()
       {
           $('#your_pictureprov3').on('change',function (event)
           {
            var tmppath =document.getElementById('your_pictureprov3').files[0].name;
               var inputNombre = document.getElementById("Fotografprov3");
               inputNombre.value ="../Proveedores/".concat(tmppath) ;
               
           });
       });


       $(function()
       {
           $('#your_pictureprov0').on('change',function (event)
           {
            var tmppath =document.getElementById('your_pictureprov0').files[0].name;
               var inputNombre = document.getElementById("Fotografprov11");
               inputNombre.value ="../Proveedores/".concat(tmppath) ;
               
           });
       });
