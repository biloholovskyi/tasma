!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t){$((function(){$("textarea[id='text-count']").keyup((function(){let e=$("textarea[id='text-count']").val().length;$("#count").html(+e)}))}))},function(e,t){$(".owl-catalog").owlCarousel({loop:!0,margin:10,nav:!0,dots:!1,responsive:{0:{items:3,dots:!0},600:{items:3,dots:!0},800:{items:4},1200:{items:6}}}),$(".owl-about").owlCarousel({loop:!1,margin:10,nav:!0,dots:!0,items:1})},function(e,t){$(".products__section--item").hover((function(){$(this).children(".product__button").css("opacity","1"),$(this).siblings().addClass("disable")}),(function(){$(this).children(".product__button").css("opacity","0"),$(this).siblings().removeClass("disable")})),$(".products__section--item1").hover((function(){$(this).parent().addClass("hover1")}),(function(){$(this).parent().removeClass("hover1")})),$(".products__section--item2").hover((function(){$(this).parent().addClass("hover2")}),(function(){$(this).parent().removeClass("hover2")})),$(".products__section--item3").hover((function(){$(this).parent().addClass("hover3")}),(function(){$(this).parent().removeClass("hover3")})),$(".products__section--item4").hover((function(){$(this).parent().addClass("hover4")}),(function(){$(this).parent().removeClass("hover4")}))},function(e,t,o){"use strict";o.r(t);const n=e=>{const t=$(e.currentTarget);t.val()?t.parent(".input-wrapper").addClass("input-wrapper--input"):t.parent(".input-wrapper").removeClass("input-wrapper--input")};o(0),o(1),o(2);$(document).ready(()=>{$("input, textarea").on("input",n),$(".vacancies").on("click",(function(){$(".vacancies__modal--overlay").addClass("active"),$("body").addClass("active")})),$(".close").on("click",(function(){$(".vacancies__modal--overlay").removeClass("active"),$("body").removeClass("active")})),$(".open__modal").on("click",(function(){$(".main__header .navigation ul li a").toggleClass("active"),$(".main__header .logo__section .lang__block p").toggleClass("active"),$(".main__header .logo__section .lang__block svg path").toggleClass("active"),$(".main__header .contact__section--tel .work__contact").toggleClass("active"),$(".main__header .navigation ul li  .mine").toggleClass("active"),$(".main__header .navigation ul li  .plus").toggleClass("active"),$(".modal__products").toggleClass("show"),$("body").toggleClass("active")}))}),$(document).on("click",(function(e){let t=$(".vacancies__form"),o=$(".vacancies");o.is(e.target)||0!==o.has(e.target).length||t.is(e.target)||0!==t.has(e.target).length||($(".vacancies__modal--overlay").removeClass("active"),$("body").removeClass("active"))}))}]);