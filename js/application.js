$(document).ready(function(){

  var hoverLink = function(link) {
    $('.view-options').removeClass('current');
    $(link).addClass('current');
  }

  // nico-view is the content div
  // $('.nico-view').hide()
  // $('#splash').show()

  $('body').on('click',".about", function(event) {
    $('.nico-view').hide();
    $('#about').show();
    hoverLink(this);
  })

  $('body').on('click',".work", function(event) {
    $('.nico-view').hide();
    $('#work').show();
    hoverLink(this);
  })

  $('body').on('click',".writing", function(event) {
    $('.nico-view').hide();
    $('#writing').show();
    hoverLink(this);
  })

  $('body').on('click',".resume", function(event) {
    $('.nico-view').hide();
    $('#resume').show();
    hoverLink(this);
  })

   $('body').on('click',".splash", function(event) {
    $('.nico-view').hide();
    $('#splash').show();
    hoverLink(this);
  })

   // jQuery scrolldown in Work
  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top - 115 //scrolls to anchor tag in body minus 115 px
    }, 'slow');
    return false;
  });


});




