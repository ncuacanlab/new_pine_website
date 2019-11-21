$(document).ready(function(){
    var current_window = 0;
    var add_list_var = $("#home").outerHeight();
    var check = false;
    /*get windows size*/
    var w = $(window).width();
    var h = $(window).height();
    
    /*windows reszie*/ 
    $(window).resize(function() {
        var w = $(window).width();
        var h = $(window).height();
    });

     
    $(window).scroll(function(){
        current_window = $(this).scrollTop();
        // console.log("a", current_window);
        
        if(check == false && current_window >= add_list_var)
        {
            console.log("123");
            check = true;
            var margin_top = 100 - h;
            $("#test123456").css("position", "fixed");
            $("#test123456").css("margin-top", margin_top + "px");

            // $("#test123456").css("margin-left", "200px");
            
            // $("#demo_content123").css("margin-top", "0px");
            // console.log($("#column1").css("display"));
        }
        else if(check == true && current_window < add_list_var)
        {
            console.log("456");
            $("#test123456").css("position", "relative");
            $("#test123456").css("margin-top", "0px");
            check = false;
        }
    });
    
    
    
    
});