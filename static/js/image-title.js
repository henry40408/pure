$(function() {
  $('.content img[alt]').each(function() {
    $($('<blockquote>').text($(this).attr('alt'))).insertAfter($(this));
  });
});
