$( function() {
    // Init tads
    $( "#tabs" ).tabs();
    $( "#tabs-portfolio" ).tabs();

    // Init slick carousel
    $('.reviews-carousel').slick({
        dots: true,
        prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left"></i></div></div>',
        nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-right"></i></div></div>',
    });

    // Init slick nav
    $('.header-nav').slicknav({
        appendTo: '.header .container-fluid',
        label: ""
    });
});