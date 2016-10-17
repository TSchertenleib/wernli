$(document).ready(function(){


  // scroll to position

var y = $(window).scrollTop();  //your current y position on the page


  $(".scroll").click(function() {
      $('html, body').animate({
          scrollTop: $(".weiss").offset().top-122
      }, 500);
  });




});


