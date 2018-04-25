$(document).ready(function () {

    $('.icon').click(function () {
        var nav = $('#navbar-top');
        nav.toggle(200);
    });

    new WOW().init();


    $('.slider-title').fadeIn(700);
    $('.slider-subtitle').fadeIn(1600);

    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.slider-title').fadeToggle(0);
        $('.slider-subtitle').fadeToggle(0);
    });


    $('.slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('.slider-title').fadeToggle(700);
        $('.slider-subtitle').fadeToggle(1600);
    });


    $('.slider').slick({
        arrows: true,
        autoplay: true
    });
});