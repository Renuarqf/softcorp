$(function () {
    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('active')
        $('.menu-list').slideToggle(250);
    })

    $('.langs-block__active').on('click', function () {
        $('.lang-toggle').toggleClass('active')
        $(this).toggleClass('active')
    })

    $('.section-letter__slider.letter-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        prevArrow: $('button.slider-arrow__prev.section-letter__slider-prev'),
        nextArrow: $('button.slider-arrow__next.section-letter__slider-next'),
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

    $('.section-reviews__slider.reviews-slider').slick({
        slidesToScroll: 3,
        slidesToShow: 3,
        prevArrow: $('button.section-reviews__arrow-prev'),
        nextArrow: $('button.section-reviews__arrow-next'),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ]
    })

    $('.section-site-portfolio__slider.site-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        centerPadding: "50rem",
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ]
    })

    $('.section-best-clients__body').on('afterChange', function () {
        $('.section-best-clients__body').slick('setPosition')
    })

    $('.popup-close').on('click', function () {
        $('.popup').removeClass('active');
    });

    $('.popup-open').on('click', function () {
        $('.popup').addClass('active');
    });

})