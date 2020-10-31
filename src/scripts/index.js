import initSliders from './parts/sliders';
import initPopups from './parts/popups';
import initIndentSize from './parts/indentSize';
import initLazy from './parts/lazy';
import initDifLazy from './parts/difLazy';
import initStorage from './parts/localStorage';

$(document).on('DOMContentLoaded', () => {
    initSliders();
    initPopups();
    //initIndentSize();
    initLazy();
    initDifLazy();
    //initStorage();
});