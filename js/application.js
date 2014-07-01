$(document).ready(function(){

  // for persistent tab colors on click
  var hoverLink = function(link) {
    $('.view-options').removeClass('current');
    $(link).addClass('current');
  }

  // default to #work
  $('#work-link').addClass('current');
  // $('#work').show();
 

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
  
  // for arrow fades
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

  // specifying scroll anchors 
  $(document).scroll(function(){
    var pageScroll = $(this).scrollTop();
    var aboutScroll = $('#aboutAnchor').offset().top - 100;
    var resumeScroll = $('#resumeAnchor').offset().top - 100;

    if (pageScroll <= aboutScroll ) {
      $('.view-options').removeClass('current');
      $('.work').addClass('current');
    }
    if (pageScroll > aboutScroll && pageScroll <= resumeScroll ) {
      $('.view-options').removeClass('current');
      $('.about').addClass('current');
    }
    if (pageScroll > resumeScroll ) {
      $('.view-options').removeClass('current');
      $('.resume').addClass('current');
    }
  })


  //for scrolling to anchor tags in body
  $('a').click(function(){
      $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top 
      }, 'slow' );
      return false;
  });


  // for Owl carousel
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

  
});




