$(document).ready(function(){
    // $("#column1").style
    var current_window = 0;
    $(window).scroll(function(){
        current_window = $(this).scrollTop();
        console.log("a", current_window);
    });
    console.log($("#check_height").height());
    console.log($("#check_height2").height());
    console.log($("#check_height3").height());
    console.log($("#home").height());
    // console.log();
    var check = false;
    

    
    
});