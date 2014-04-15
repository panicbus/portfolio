$(document).ready(function(){

  var hoverLink = function(link) {
    $('.view-options').removeClass('current');
    $(link).addClass('current');
  }

  // default to #work
  $('#work-link').addClass('current');
  $('.nico-view').hide();
  $('#work').show();

  // nico-view = content div
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

  $('body').on('click',".resume", function(event) {
    $('.nico-view').hide();
    $('#resume').show();
    hoverLink(this);
  })

  $('.up_arrow').hide();
  
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y <= 100) {
      $('#project_banner').fadeIn();
    }
    if (y > 100 && y < 1900) {
        $('.up_arrow').fadeIn();
        $('.all_work_wrapper').fadeIn();
        $('#project_banner').fadeOut();
    } else {
        $('.up_arrow').fadeOut(200);
    }
  });


  // jQuery scrolldown in Work
  $('a').click(function(){
      $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 110 //scrolls to anchor tag in body minus 115 px
      }, 'slow');
      return false;
    });

});




