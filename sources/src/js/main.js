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

    $('.popup-close').on('click', function (){
        $('.popup').removeClass('active');
    });

    $('.popup-open').on('click', function (){
       $('.popup').addClass('active');
    });


})