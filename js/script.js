/*

Style   : MobApp Script JS
Version : 1.0
Author  : Surjith S M
URI     : https://surjithctly.in/

Copyright © All rights Reserved 

*/

$(function() {
    "use strict";



    /*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------*/
    function menuscroll() {
        var $navmenu = $('.nav-menu');
        if ($(window).scrollTop() > 10) {
            $navmenu.addClass('is-scrolling');
        } else {
            $navmenu.removeClass("is-scrolling");
        }
    }
    menuscroll();
    $(window).on('scroll', function() {
        menuscroll();
    });
    /*-----------------------------------
     * NAVBAR CLOSE ON CLICK
     *-----------------------------------*/

    $('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    /* 
     * NAVBAR TOGGLE BG
     *-----------------*/
    var siteNav = $('#navbar');
    siteNav.on('show.bs.collapse', function(e) {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    })
    siteNav.on('hide.bs.collapse', function(e) {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    })

    /*-----------------------------------
     * ONE PAGE SCROLLING
     *-----------------------------------*/
    // Select all links with hashes

    /**--------------------------------------------------*/
      $('a[href="#Upload"]').click(function() {
                $("html, body").animate({
                    scrollTop:($("#upload").offset().top-125)
                }, "show");
                
        });

      $('a[href="#Upload_demo"]').click(function() {
                $("html, body").animate({
                    scrollTop:($("#upload_demo").offset().top-125)
                }, "show");
                
        });

      $('a[href="#Raw"]').click(function() {
                $("html, body").animate({
                    scrollTop:($("#raw").offset().top-125)
                }, "show");
        });

      $('a[href="#Download"]').click(function() {
                $("html, body").animate({
                    scrollTop:($("#download").offset().top-150)
                }, "show");
        });

      $('a[href="#Download_demo"]').click(function() {
                $("html, body").animate({
                    scrollTop:($("#download_demo2").offset().top-125)
                }, "show");
        });

      $('a[href="#Analysis"]').click(function() {
                $("html, body").animate({
                    scrollTop:($("#ana").offset().top-125)
                }, "show");
        });
    $('a[href="#Managment"]').click(function() {
                $("html, body").animate({
                    scrollTop:($("#mangement").offset().top-125)
                }, "show");
        });
    $('a[href="#Management_demo"]').click(function() {
                $("html, body").animate({
                    scrollTop:($("#mangement_demo").offset().top-125)
                }, "show");
        });
    $('a[href="#Analysis_demo"]').click(function() {
                $("html, body").animate({
                    scrollTop:($("#ana_demo").offset().top-125)
                }, "show");
        });
           
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    /*-----------------------------------
     * OWL CAROUSEL
     *-----------------------------------*/
    var $testimonialsDiv = $('.testimonials');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
        });
    }

    var $galleryDiv = $('.img-gallery');
    if ($galleryDiv.length && $.fn.owlCarousel) {
        $galleryDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }

}); /* End Fn */