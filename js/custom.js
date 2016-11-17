$(document).ready(function(){


  // scroll to position

var y = $(window).scrollTop();  //your current y position on the page

$(window).on("resize", function(event){
  console.log( $(this).width() );
});

  $(".scroll").click(function() {
if ($(window).width() > 752) {
      $('html, body').animate({
          scrollTop: $(".weiss").offset().top-122
      }, 500);
 } else {
      $('html, body').animate({
          scrollTop: $(".weiss").offset().top-80
      }, 500);
}    

  });


});


