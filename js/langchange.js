$(function() {
  $('.jqueryOptions').hide();
  $('.opt1').show();

  $('#choose').change(function () {
  /*  $('.jqueryOptions').slideUp();*/
   $('.jqueryOptions').hide();
    $('.jqueryOptions').removeClass('current-opt');
/*    $("." + $(this).val()).slideDown();*/
$("." + $(this).val()).show();
    $("." + $(this).val()).addClass('current-opt');
  });
});
