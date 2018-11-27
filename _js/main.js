  
$(document).ready(function () {
    $('.jq-back-to-top').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.jq-back-to-top').fadeIn();
        } else {
            $('.jq-back-to-top').fadeOut();
        }
    });

    $('.jq-back-to-top').click(function () {
        $('html,main,body,header').animate({
            scrollTop: 0
        }, 2000);
    });

});



  
$(function () {
    $("div#menu-btn").click(function () {
        $("nav ul#menu-mobile").toggle();
    });

    $(window).resize(function () {
        var largura = $(window).width();
        if (largura >= 701) {
            $("nav ul#menu-mobile").hide();
        }
    });
});