var index = 0;

    var listaimg = ["../img/fondo_menu.jpg", "../img/fondo_menu_2.jpg", "../img/fondo_ind.jpg", "../img/verdura4.jpg", "../img/verdura3.jpg"];

$(function() {
  
    setInterval(changeImage, 15000);
  
});

function changeImage() {
  
 
   $('.navbar').css("background-image", 'url(' + listaimg[index] + ')');
                  
   index++;
                  
   if(index == 4)
      index = 0;
    
    
}