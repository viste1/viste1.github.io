!function(e){var o={};function i(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,o,r){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,o){if(1&o&&(e=i(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)i.d(r,n,function(o){return e[o]}.bind(null,n));return r},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="",i(i.s=0)}([function(e,o,i){"use strict";function r(){$(".section-main__js-slider-full").slick({slidesToShow:1,slidesToScroll:1,lazyLoad:"progressive",fade:!0,infinite:!0}),$(".item-info__grid-photo__js-slider-mini").slick({slidesToShow:3,slidesToScroll:1,lazyLoad:"progressive",infinite:!1,asNavFor:".item-info__grid-photo__js-slider-full",arrows:!1,focusOnSelect:!0}),$(".item-info__grid-photo__js-slider-full").slick({slidesToShow:1,slidesToScroll:1,lazyLoad:"progressive",fade:!0,infinite:!1,asNavFor:".item-info__grid-photo__js-slider-mini"}),$(".section-recommendations__js-slider-full").slick({slidesToShow:4,slidesToScroll:1,lazyLoad:"progressive",infinite:!0,variableWidth:!0})}i.r(o),$(document).on("DOMContentLoaded",()=>{r(),$(".section-footer__js-popup-rules").magnificPopup({type:"inline"})})}]);