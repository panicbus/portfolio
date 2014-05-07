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
  

  // for banner and arrow fades
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y <= 100){
      $('.up_arrow').fadeOut();
    }
    if (y > 100 && y <= 4100) {
      $('.up_arrow').fadeIn();
    } 
    if (y > 4100) {
        $('.up_arrow').fadeOut();
    }
  });

  // for current tab changes
  $(document).scroll(function(){
    var pageScroll = $(this).scrollTop();
   
    if (pageScroll <= 1985 ) {
      $('.view-options').removeClass('current');
      $('.work').addClass('current');
    }
    if (pageScroll > 1985 && pageScroll <= 2921 ) {
      $('.view-options').removeClass('current');
      $('.about').addClass('current');
    }
    if (pageScroll > 2921 ) {
      $('.view-options').removeClass('current');
      $('.resume').addClass('current');
    }
  })


  $('a').click(function(){
      $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top //scrolls to anchor tag in body
      }, 'slow' );
      return false;
  });


});




