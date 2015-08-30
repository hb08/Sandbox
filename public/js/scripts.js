jQuery( document ).ready(function( $ ) {
  $('#franchiseSubmit').click(function(e){
    e.preventDefault();
    $('.thankYou').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
    $('.contactForm').css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
  })
});
