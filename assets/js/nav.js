$(window).scroll(function () {

  if ($(this).scrollTop() > 50) {
      $('#mainNav').addClass("content_fixed");
  } else {
      $('#mainNav').removeClass("content_fixed");
  }
});