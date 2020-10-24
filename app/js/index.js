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
// show modal products
  $('.open__modal').on('click', function (){
    $('.main__header .navigation ul li a').toggleClass('active');
    $('.main__header .logo__section .lang__block p').toggleClass('active');
    $('.main__header .logo__section .lang__block svg path').toggleClass('active');
    $('.main__header .contact__section--tel .work__contact').toggleClass('active');
    $('.main__header .navigation ul li  .mine').toggleClass('active');
    $('.main__header .navigation ul li  .plus').toggleClass('active');
    $('.modal__products').toggleClass('show');
  });
});