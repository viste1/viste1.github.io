export default function initDifLazy() {
    $('.js-difLazy').each((index, el) => {
        const $image = $(el);
        const realSrc = $image.attr('data-src');
        $image.attr('src', realSrc);
    });
}