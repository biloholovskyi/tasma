import {inputForm} from "./input";
import './countInput';

$(document).ready(() => {
  $('input, textarea').on('input', inputForm);


  // hover on main page -> section products
  $('.products__section--item').hover(function (){
    $(this).children('.product__button').css('opacity', '1');
    $(this).siblings().addClass('disable');
    },
    function(){
      $(this).children('.product__button').css('opacity', '0');
      $(this).siblings().removeClass('disable');
  })

});