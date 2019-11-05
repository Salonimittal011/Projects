$(document).ready(function () {

    //header scroll top
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $("header").addClass("head");
        } else {
            $("header").removeClass("head");
        }
    });


    //onclick link
    $('header a[href*=\\#]').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000);
    });
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        $('.page-section').each(function (i) {
            if ($(this).position().top <= scrollDistance + 200) {
                $('.top-navbar a.active').removeClass('active');
                $('.top-navbar a').eq(i).addClass('active');
            }
        });
    }).scroll();

    //burger-menu
    $('.nav-icon').on('click', function () {
        $(this).toggleClass('open');
        
    });

    //wow function..
    new WOW().init();


    //parallax
    $('.parallax-window').parallax({
        imageSrc: '/images/head-image.png'
    });
             
    //loader
    $(window).on("load", function () {
        $(".page-load").delay(1000).slideUp(1000);
    });

});