$(function() {
  $("textarea[id='text-count']").keyup(function count(){
    let number = $("textarea[id='text-count']").val().length;
    $("#count").html(+number);
  });
});