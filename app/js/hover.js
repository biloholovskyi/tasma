// hover on main page -> section products
$('.products__section--item').hover(function (){
    $(this).children('.product__button').css('opacity', '1');
    $(this).siblings().addClass('disable');
  },
  function(){
    $(this).children('.product__button').css('opacity', '0');
    $(this).siblings().removeClass('disable');
  })
$('.products__section--item1').hover(function (){
  $(this).parent().addClass('hover1');
}, function(){
  $(this).parent().removeClass('hover1');
})
$('.products__section--item2').hover(function (){
  $(this).parent().addClass('hover2');
}, function(){
  $(this).parent().removeClass('hover2');
})
$('.products__section--item3').hover(function (){
  $(this).parent().addClass('hover3');
}, function(){
  $(this).parent().removeClass('hover3');
})
$('.products__section--item4').hover(function (){
  $(this).parent().addClass('hover4');
}, function(){
  $(this).parent().removeClass('hover4');
})