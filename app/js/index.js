import {inputForm} from "./input";
import './countInput';
import './slider';
import './hover';
import './select';

$(document).ready(() => {
  $('input, textarea').on('input', inputForm);
  // modal on vacancies page
  $('.vacancies').on('click', function (){
      $('.vacancies__modal--overlay').addClass('active');
      $('body').addClass('active');
  });
  $('.close').on('click', function (){
    $('.vacancies__modal--overlay').removeClass('active');
    $('body').removeClass('active');
  });

// show modal products
  $('.open__modal').on('click', function (){
    $('.main__header .navigation ul li a').toggleClass('active');
    $('.main__header .logo__section .lang__block p').toggleClass('active');
    $('.main__header .logo__section .lang__block svg path').toggleClass('active');
    $('.main__header .contact__section--tel .work__contact').toggleClass('active');
    $('.main__header .navigation ul li  .mine').toggleClass('active');
    $('.main__header .navigation ul li  .plus').toggleClass('active');
    $('.modal__products').toggleClass('show');
    $('body').toggleClass('active');
  });
// menu on single item page
  $('.sticky__menu--mobile').on('click', function (){
    $(this).children('.mobile__hidden').toggleClass('active');
    $(this).children('.mobile__item').find('img').toggleClass('active');
  });
  $('.sticky__menu--mobile .mobile__hidden a').on('click', function (){
      $(this).parent().hide();
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      const text = $(this).html();
      $('.sticky__menu--mobile .mobile__item a').html(text);
  });
  // anchors
  $('.anchors').on('click', function (e){
    e.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top - 120;
    $('body,html').animate({scrollTop: top}, 800);
  });
});

$(document).on('click', function (e){
  let modal = $('.vacancies__form');
  let btn = $('.vacancies');

  if(!btn.is(e.target) && btn.has(e.target).length === 0) {
    if(!modal.is(e.target) && modal.has(e.target).length === 0) {
      $('.vacancies__modal--overlay').removeClass('active');
      $('body').removeClass('active');
    }
  }
});