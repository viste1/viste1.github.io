function initSliderSectionMainFull() {
    $('.section-main__js-slider-full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        fade: true,
        infinite: true
    })
}


function initSliderSectionItemFull() {
    $('.item-info__grid-photo__js-slider-full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        fade: true,
        infinite: false,
        arrows: false,
        asNavFor: '.item-info__grid-photo__js-slider-mini'
    })
}

function initSliderSectionItemMini() {
    $('.item-info__grid-photo__js-slider-mini').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        infinite: false,
        asNavFor: '.item-info__grid-photo__js-slider-full',
        arrows: false,
        focusOnSelect: true
    })
}

function initSliderSectionRecommendations() {
    $('.section-recommendations__js-slider-full').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        infinite: true,
        variableWidth: true
    })
}

function initSliderNav() {
    $('.nav__js-slider').slick({
        slidesToShow: 1,
        variableWidth: true,
        infinite: false,
        arrows: false
    })
}

export default function initSliders() {
    initSliderSectionMainFull();
    initSliderSectionItemMini();
    initSliderSectionItemFull();
    initSliderSectionRecommendations();
    initSliderNav();
}