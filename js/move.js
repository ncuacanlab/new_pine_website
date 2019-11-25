$(document).ready(function(){
    $('a[href="#Upload"]').click(function() {
        $("html, body").animate({
            scrollTop:($("#upload").offset().top-$("#get_hight").height())
        }, "show");
        
    });

    $('a[href="#Upload_demo"]').click(function() {
            $("html, body").animate({
                scrollTop:($("#upload_demo").offset().top-$("#get_hight").height())
            }, "show");
            
    });

    $('a[href="#Raw"]').click(function() {
            $("html, body").animate({
                scrollTop:($("#raw").offset().top-$("#get_hight").height())
            }, "show");
    });

    $('a[href="#Download"]').click(function() {
            $("html, body").animate({
                scrollTop:($("#download").offset().top-$("#get_hight").height())
            }, "show");
    });

    $('a[href="#Download_demo"]').click(function() {
            $("html, body").animate({
                scrollTop:($("#download_demo2").offset().top-$("#get_hight").height())
            }, "show");
    });

    $('a[href="#Analysis"]').click(function() {
            $("html, body").animate({
                scrollTop:($("#ana").offset().top-$("#get_hight").height())
            }, "show");
    });
    $('a[href="#Managment"]').click(function() {
            $("html, body").animate({
                scrollTop:($("#management").offset().top-$("#get_hight").height())
            }, "show");
    });
    $('a[href="#Management_demo"]').click(function() {
            $("html, body").animate({
                scrollTop:($("#management_demo").offset().top-$("#get_hight").height())
            }, "show");
    });
    $('a[href="#Analysis_demo"]').click(function() {
            $("html, body").animate({
                scrollTop:($("#ana_demo").offset().top-$("#get_hight").height())
            }, "show");
    });

    
});