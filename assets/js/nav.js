$(window).scroll(function () {
  if ($(window).width() < 767) {
    console.log('hello');
    if ($(this).scrollTop() > 100) {
      $('#mainNav').addClass("content_fixed-mob");
    } else {
      $('#mainNav').removeClass("content_fixed-mob");
    }
  } else {

  //   $(function(){
  //     $(document).scroll(function(){
  //         if($(this).scrollTop() >= $('#mainNav').offset().top - 450) {
  //             $("#mainNav").css("background","red");
  //         } else {
  //             $("#mainNav").css("background","orange");
  //         }
  //     });
  // });

    if ($(this).scrollTop() > 750) {
      $('#mainNav').addClass("content_fixed");
    } else {
      $('#mainNav').removeClass("content_fixed");
    }
  }

  // if ($(this).scrollTop() > 50) {
  //     $('#mainNav').addClass("content_fixed");
  // } else {
  //     $('#mainNav').removeClass("content_fixed");
  // }
});