$(document).ready(function(){

  var hoverLink = function(link) {
    $('.view-options').removeClass('current');
    $(link).addClass('current');
  }

  $('.nico-view').hide()
  $('#splash').show()

  $('body').on('click',".about", function(event) {
    $('.nico-view').fadeOut('slow');
    $('#about').fadeIn('slow');
    hoverLink(this);
  })

  $('body').on('click',".work", function(event) {
    $('.nico-view').fadeOut('slow');
    $('#work').fadeIn('slow');
    hoverLink(this);
  })

  $('body').on('click',".photos", function(event) {
    $('.nico-view').fadeOut('slow');
    $('#photos').fadeIn('slow');
    hoverLink(this);
  })

  $('body').on('click',".resume", function(event) {
    $('.nico-view').fadeOut('slow');
    $('#resume').fadeIn('slow');
    hoverLink(this);
  })

   $('body').on('click',".splash", function(event) {
    $('.nico-view').fadeOut('slow');
    $('#splash').fadeIn('slow');
    hoverLink(this).hide();
  })


  // image hover effect
  // $("img").hover(function(){
  //   $(this).stop().animate({opacity: "0.8"}, 'slow');
  // },
  // function() {
  //   $(this).stop().animate({opacity: "1"}, 'slow');
  // });


});

