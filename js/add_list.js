$(document).ready(function(){
    function change_margin_top(w){
        if(w < 1100)
        {
            console.log("enter");
            $("#demo_content").css("margin-top", 0 + "px");
        }
    }
    var current_window = 0;
    var add_list_var = $("#home").outerHeight();
    var check = false;
    /*get windows size*/
    var w = $(window).width();
    var h = $(window).height();
    change_margin_top(w, h);
    $("#demo_list").css("height", h + "px");

    /*windows reszie*/ 
    $(window).resize(function() {
        w = $(window).width();
        h = $(window).height();
        change_margin_top(w);
        
    });
    
     
    $(window).scroll(function(){
        
        current_window = $(this).scrollTop();
        
        
        if(check == false && current_window >= h -  $("#get_hight").height())
        {
            check = true;
            var margin_top = $("#get_hight").height() - h;
            $("#demo_list").css("position", "fixed");
            $("#demo_list").css("margin-top", margin_top + "px");
            $("#demo_list").css("height", "100%");
            $("#demo_content").css("margin-top", "0px");
        }
        else if(check == true && current_window < h-  $("#get_hight").height())
        {
            $("#demo_list").css("position", "relative");
            $("#demo_list").css("margin-top", "0");
            $("#demo_list").css("height", h + "px");
            change_margin_top(w);
            check = false;
        }
    });   
});