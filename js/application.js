$(document).ready(function(){

  var hoverLink = function(link) {
    $('.view-options').removeClass('current');
    $(link).addClass('current');
  }

  $('.nico-view').hide()
  $('#splash').show()

  $('body').on('click',".about", function(event) {
    $('.nico-view').hide('slow');
    $('#about').slideDown('slow');
    hoverLink(this);
  })

  $('body').on('click',".work", function(event) {
    $('.nico-view').hide('slow');
    $('#work').slideDown('slow');
    hoverLink(this);
  })

  $('body').on('click',".photos", function(event) {
    $('.nico-view').hide('slow');
    $('#photos').slideDown('slow');
    hoverLink(this)
  })

  $('body').on('click',".resume", function(event) {
    $('.nico-view').hide('slow');
    $('#resume').slideDown('slow');
    hoverLink(this).hide();
  })

   $('body').on('click',".splash", function(event) {
    $('.nico-view').hide('slow');
    $('#splash').slideDown('slow');
    hoverLink(this).hide();
  })


  // image hover effect
  // $("img").hover(function(){
  //   $(this).stop().animate({opacity: "0.8"}, 'slow');
  // },
  // function() {
  //   $(this).stop().animate({opacity: "1"}, 'slow');
  // });


  // sidebar slide toggle
  $("#hamburger").click(function(){
    $( "#the_more_div").slideToggle('slow');
  });


});

