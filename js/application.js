$(document).ready(function(){

  var colorLink = function(link) {
    $('.view-options').removeClass('current');
    $(link).addClass('current');
  }

  $('.nico-view').hide()
  $('#splash').show()

  $('body').on('click',".about", function(event) {
    $('.nico-view').hide()
    $('#about').show()
    colorLink(this)
  })

  $('body').on('click',".work", function(event) {
    $('.nico-view').hide()
    $('#work').show()
    colorLink(this)
  })

  $('body').on('click',".photos", function(event) {
    $('.nico-view').hide()
    $('#photos').show()
    colorLink(this)
  })

  $('body').on('click',".splash", function(event) {
    $('.nico-view').hide();
    $('#splash').show();
    colorLink(this).hide();
  })

 // function showDiv(view) {
 //    $('.nico-view').hide()
 //    $('#' + view).show()
 //  }

 //  showDiv('splash');
 //  $('body').on('click', '.about', showDiv('about'))
 //  $('body').on('click', '.work',  showDiv('work'))
 //  $('body').on('click', '.photos',showDiv('photos'))


    $("img").hover(function(){
      $(this).stop().animate({opacity: "0.8"}, 'slow');
    },
    function() {
      $(this).stop().animate({opacity: "1"}, 'slow');
    });

  $("#hamburger").click(function(){
    $( "#the_more_div").slideToggle('slow');
  });


});

