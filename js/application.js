$(document).ready(function(){

  var hoverLink = function(link) {
    $('.view-options').removeClass('current');
    $(link).addClass('current');
  }

  // nico-view is the content div
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
    hoverLink(this);
  })

  $('body').on('click',".resume", function(event) {
    $('.nico-view').hide('slow');
    $('#resume').slideDown('slow');
    hoverLink(this);
  })

   $('body').on('click',".splash", function(event) {
    $('.nico-view').fadeOut('slow');
    $('#splash').fadeIn('slow');
    hoverLink(this);
  })

   // jQuery scrolldown in Work
  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top - 115 //scrolls to anchor tag in body minus 115 px
    }, 'slow');
    return false;
  });

    //photo gallery lightbox
  $('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('img');
      }
    }
  });

});




