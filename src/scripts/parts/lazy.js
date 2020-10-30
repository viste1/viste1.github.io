export default function initLazy() {
    $('.js-lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true
    });
}