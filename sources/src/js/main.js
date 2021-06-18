$(function (){
    $('.menu-toggle').on('click', function (){
        $(this).toggleClass('active')
        $('.menu-list').slideToggle(250);
    })

    $('.langs-block__active').on('click', function (){
        $('.lang-toggle').toggleClass('active')
        $(this).toggleClass('active')
    })
})