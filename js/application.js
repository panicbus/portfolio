$(document).ready(function(){
    $("img").hover(function() {
      $(this).stop().animate({opacity: "0.8"}, 'slow');
    },
    function() {
      $(this).stop().animate({opacity: "1"}, 'slow');
    });
  });

$(document).ready(function(){
  $("#hamburger").click(function(){
    $( "#the_more_div").slideToggle('slow', 'swing');
  });
});


// $(document).ready ->
//   $(".main").css "display", "none"
//   $(".main").fadeIn(500)

