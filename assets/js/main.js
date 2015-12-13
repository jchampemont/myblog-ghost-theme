$(function() {
  $('article img').addClass('img-responsive');
  $('code').addClass('prettyprint');
  $('article').each(function() {
    if($(this).find('img[alt="img-post-cover"]').length > 0) {
      var imgPostCover = $($(this).find('img[alt="img-post-cover"]')[0]);
      $(this).find('article-cover').attr('src', imgPostCover.attr('src'));
      imgPostCover.remove();
    } else {
      $(this).find('article-cover').remove();
    }
  });
  $.get("https://www.jeanchampemont.com/fr/blog-menu/", function(data) {
    $('.navbar').replaceWith(data);
  });
});
