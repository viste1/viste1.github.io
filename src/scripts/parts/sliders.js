function initSliderSectionMainFull() {
    $('.section-main__js-slider-full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: false,
        asNavFor: '.section-main__js-slider-mini'
    })
}

function initSliderSectionMainMini() {
    $('.section-main__js-slider-mini').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        infinite: false,
        asNavFor: '.section-main__js-slider-full',
        arrows: false,
        focusOnSelect: true
    })
}

function initSliderSectionPopular() {
    $('.section-popular__js-slider-full').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        variableWidth: true
    })
}

export default function initSliders() {
    initSliderSectionMainFull();
    initSliderSectionMainMini();
    initSliderSectionPopular();
}