import {inputForm} from "./input";

$(document).ready(() => {
  $('input, textarea').on('input', inputForm);

  $('.products__section--item').hover(function (){
    $(this).children('.product__button').css('opacity', '1');
    $(this).siblings().addClass('disable');
    },
    function(){
      $(this).children('.product__button').css('opacity', '0');
      $(this).siblings().removeClass('disable');
  })

});