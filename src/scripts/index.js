import initSliders from './parts/sliders';
import initPopups from './parts/popups';
import initIndentSize from './parts/indentSize';
import initStorage from './parts/localStorage';

$(document).on('DOMContentLoaded', () => {
    initSliders();
    initPopups();
    initIndentSize();
    initStorage();
});