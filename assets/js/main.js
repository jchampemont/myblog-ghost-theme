$(function() {
  $('article img').addClass('img-responsive');
  $('code').addClass('prettyprint');
  $.get("https://www.jeanchampemont.com/fr/blog-menu/", function(data) {
    $('.navbar').replaceWith(data);
  });
});
