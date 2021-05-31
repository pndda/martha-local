$(window).scroll(function(){
    $("#theFixed").css("top",Math.max(0,250-$(this).scrollTop()));
});