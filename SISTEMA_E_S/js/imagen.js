function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.fotograf_image')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
       
    }
}
function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.fotograf_images')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.foto_reg_emp')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
    
}
function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.foto_reg_sol')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
    
}
function readURL4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.foto_reg_sol')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
    
}
function readURL6(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.foto_reg_sol')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
    
}
