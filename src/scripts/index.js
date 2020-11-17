import initSliders from './parts/sliders';
import initPopups from './parts/popups';
import initLazy from './parts/lazypicture';

$(document).on('DOMContentLoaded', () => {
    initLazy();
    initSliders();
    initPopups();
})