$(document).ready(function(){


  // scroll to position


  // navigation
  $(".scroll-start").click(function() {
      $('html, body').animate({
          scrollTop: $(".error-page").offset().top
      }, 1000);
  });

  $(".scroll-projects").click(function() {
      $('html, body').animate({
          scrollTop: $(".projects-gallery").offset().top
      }, 1000);
  });

  $(".scroll-about").click(function() {
      $('html, body').animate({
          scrollTop: $(".about-thomas").offset().top
      }, 1000);
  });

  $(".scroll-contact").click(function() {
      $('html, body').animate({
          scrollTop: $(".contact-photo").offset().top
      }, 1000);
  });

  // buttons
  $(".one").click(function() {
      $('html, body').animate({
          scrollTop: $(".scroll-gallery").offset().top
      }, 600);
  });

  $(".two").click(function() {
      $('html, body').animate({
          scrollTop: $(".contact-photo").offset().top
      }, 1300);
  });


  // $('.one').click(function() {
  //   $('.scroll-gallery').scrollView();
  // });

// fullscreen video



});



// $(function(){
//   $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
//
//   // If you want to keep full screen on window resize
//   $(window).resize(function(){
//     $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
//   });
// });
