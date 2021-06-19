$(function (){
    $('.menu-toggle').on('click', function (){
        $(this).toggleClass('active')
        $('.menu-list').slideToggle(250);
    })

    $('.langs-block__active').on('click', function (){
        $('.lang-toggle').toggleClass('active')
        $(this).toggleClass('active')
    })

    $('.section-reviews__slider.reviews-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        prevArrow: $('button.slider-arrow__prev.section-reviews__slider-prev'),
        nextArrow: $('button.slider-arrow__next.section-reviews__slider-next'),
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    })

    $('.section-best-clients__body').slick({
        centerMode: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        adaptiveHeight: false,
        centerPadding: "18rem",
        dots: true,
        appendDots: $('.section-best-clients__dots'),
        prevArrow: $('button.section-best-clients__arrow-prev'),
        nextArrow: $('button.section-best-clients__arrow-next'),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    centerPadding: "13.3rem"
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: "8rem"
                }
            }
        ]
    })

    $('.section-best-clients__body').on('afterChange', function (){
        $('.section-best-clients__body').slick('setPosition')
    })

    $('.popup-close').on('click', function (){
        $('.popup').removeClass('active');
    });

    $('.popup-open').on('click', function (){
       $('.popup').addClass('active');
    });

})