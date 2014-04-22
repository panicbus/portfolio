$(document).ready(function(){

  var hoverLink = function(link) {
    $('.view-options').removeClass('current');
    $(link).addClass('current');
  }

  // default to #work
  $('#work-link').addClass('current');
  $('#work').show();
 

  $('body').on('click',".about", function(event) { 
    hoverLink(this);
  });

  $('body').on('click',".work", function(event) {
    hoverLink(this);
  })

  $('body').on('click',".resume", function(event) {
    hoverLink(this);
  })

  $('.up_arrow').hide();
  
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y <= 100) {
      $('#project_banner').fadeIn();
    }
    if (y > 100) {
      $('.up_arrow').fadeIn();
      $('#project_banner').fadeOut();
    } else {
        $('.up_arrow').fadeOut();
    }
  });


  $(document).scroll(function(){
    var pageScroll = $(this).scrollTop();
    if (pageScroll <= 2693 ) {
      $('.view-options').removeClass('current');
      $('.work').addClass('current');
    }
    if (pageScroll > 2693 && pageScroll <= 3327 ) {
      $('.view-options').removeClass('current');
      $('.about').addClass('current');
    }
    if (pageScroll > 3327 ) {
      $('.view-options').removeClass('current');
      $('.resume').addClass('current');
    }
  })


  // jQuery scrolldown
  $('#project_banner').click(function(){
      $('html, body').animate({
        scrollTop: $('#projectsAnchor').offset().top - 100 //scrolls to anchor tag in body
      }, 'slow');
      return false;
  });

  $('a').click(function(){
      $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top //scrolls to anchor tag in body
      }, 'slow' );
      return false;
  });


});




