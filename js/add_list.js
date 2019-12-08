$(document).ready(function(){
    var current_window = 0;
    var add_list_var = $("#home").outerHeight();
    var check = false;
    /*get windows size*/
    var w = $(window).width();
    var h = $(window).height();
    console.log(h);
    $("#test123456").css("height", h + "px");
    $("#demo_content123").css("margin-top", -h + "px");
    /*windows reszie*/ 
    $(window).resize(function() {
        var w = $(window).width();
        var h = $(window).height();
        console.log(h)
    });
    console.log($("header").height());

    console.log($("#home").height());
    console.log($("#get_hight").height());
     
    $(window).scroll(function(){
        console.log("a", current_window);
        current_window = $(this).scrollTop();
        
        
        if(check == false && current_window >= h -  $("#get_hight").height())
        {
            console.log($("#home").height());
            console.log($("#get_hight").height());
            check = true;
            var margin_top = $("#get_hight").height() - h;
            $("#test123456").css("position", "fixed");
            $("#test123456").css("margin-top", margin_top + "px");
            $("#test123456").css("height", "100%");
            $("#demo_content123").css("margin-top", "0px");
        }
        else if(check == true && current_window < h-  $("#get_hight").height())
        {
            $("#test123456").css("position", "relative");
            $("#test123456").css("margin-top", "0");
            $("#test123456").css("height", h + "px");
            $("#demo_content123").css("margin-top", -h + "px");
            check = false;
        }
    });
    
    
    
    
});