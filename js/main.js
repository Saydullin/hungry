$(function () {
    const menuSections = document.querySelectorAll('.menu-slider-section');

    $('.specialities-slider').slick({
        arrows: false,
        dots: true,
        disabled: true,
        autoplay: false,
        autoplaySpeed: 2500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        infinite: false
    });
    $('.menu-slider-content').slick({
        slidesToShow: 1,
        dots: false,
        arrows: false,
        fade: true,
        swipe: false,
        adaptiveHeight: true
    })

    $('div[data-slide]').click(function (e) {
        e.preventDefault();
        $('.menu-slider-section').each(function (i) {
            menuSections[i].classList.remove('active');
        });
        $(this).addClass('active');
        let sliderId = $(this).data('slide');
        $('.menu-slider-content').slick('slickGoTo', sliderId - 1);
    });
});

window.onload = function () {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = "none";
    document.querySelector('body').style.overflow = "auto";
}

const allTags = document.querySelectorAll('header a[href*="#"]');

for (let f = 0; f < allTags.length; f++) {
    if (allTags[f]) {
        allTags[f].addEventListener('click', function (e) {
            e.preventDefault();
            tagId = allTags[f].getAttribute('href');
            document.querySelector(tagId).scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        })
    }

}