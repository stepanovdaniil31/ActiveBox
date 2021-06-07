$(function(){

    // Fixed header
    let header = $('#header');
    let intro = $('#intro');
    let introH;
    let scrollPos = $(window).scrollTop();
    let nav = $('#nav');
    let navToggle = $('#navToggle')

    $(window).on('scroll load resize', function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        console.log(scrollPos);
        
        if (scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }

    });
    
    // Smooth scroll
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset - 70
        }, 1000);
        
        nav.removeClass('show');
    });
    
    // Nav toggle
    navToggle.on('click', function (event) {
        event.preventDefault();

        nav.toggleClass('show');
    });

    // Reviews: https://kenwheeler.github.io/slick/
    let slider = $('#reviewsSlider')
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        
      });

});