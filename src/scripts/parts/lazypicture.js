export default function initLazy() {
    $('.js-lazy').each((index, el) => {
        const $image = $(el);
        const realSrc = $image.attr('data-src');

        $image.attr('srcset', realSrc);
    });
}