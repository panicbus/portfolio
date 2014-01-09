$(document).ready(function(){

  var hoverLink = function(link) {
    $('.view-options').removeClass('current');
    $(link).addClass('current');
  }

  $('.nico-view').hide()
  $('#splash').show()

  $('body').on('click',".about", function(event) {
    $('.nico-view').hide()
    $('#about').show()
    hoverLink(this)
  })

  $('body').on('click',".work", function(event) {
    $('.nico-view').hide()
    $('#work').show()
    hoverLink(this)
  })

  $('body').on('click',".photos", function(event) {
    $('.nico-view').hide()
    $('#photos').show()
    hoverLink(this)
  })

  $('body').on('click',".splash", function(event) {
    $('.nico-view').hide();
    $('#splash').show();
    hoverLink(this).hide();
  })


  // image hover effect
  $("img").hover(function(){
    $(this).stop().animate({opacity: "0.8"}, 'slow');
  },
  function() {
    $(this).stop().animate({opacity: "1"}, 'slow');
  });


  // sidebar slide toggle
  $("#hamburger").click(function(){
    $( "#the_more_div").slideToggle('slow');
  });


});

