$(document).ready(function(){
  let obj = $('#nav');
  let offset = obj.offset();
  let topOffset = offset.top;
  let marginTop = obj.css("marginTop");

  $(window).scroll(function() {
    let scrollTop = $(window).scrollTop();

    if (scrollTop >= topOffset){
      obj.addClass('stickyNav');
      obj.css({
        marginTop: 0,
        position: 'fixed',
        top: 50,

      });
    }

    if (scrollTop < topOffset){
      obj.removeClass('stickyNav');
      obj.css({
        marginTop: 0,
        position: 'relative',
        top: 0

      });
    }
  });
});