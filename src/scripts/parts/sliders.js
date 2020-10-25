function initSliderSectionMainFull() {
    $('.section-main-js-slider-full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: false,
        asNavFor: '.section-main-js-slider-mini'
    })
}

function initSliderSectionMainMini() {
    $('.section-main-js-slider-mini').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        infinite: false,
        asNavFor: '.section-main-js-slider-full',
        arrows: false,
        focusOnSelect: true
    })
}

function initSliderSectionPopular() {
    $('.section-popular-js-slider-full').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    })
}

export default function initSliders() {
    initSliderSectionMainFull();
    initSliderSectionMainMini();
    initSliderSectionPopular();
}