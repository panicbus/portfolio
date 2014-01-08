var _hidediv = null;
var previousDiv = null;
function showdiv(id) {
   if(_hidediv != null){
    _hidediv();
  }

var div = document.getElementById(id);
  if(div != previousDiv) {
    div.style.display = 'block';
    _hidediv = function() { div.style.display = 'none'; };
    previousDiv = div;
  } else {
    previousDiv = null;
  }
}


$(document).ready(function(){
    $("img").hover(function() {
      $(this).stop().animate({opacity: "0.8"}, 'slow');
    },
    function() {
      $(this).stop().animate({opacity: "1"}, 'slow');
    });
}); // ends document ready function

$(document).ready(function(){
  $("#hamburger").click(function(){
    $( "#the_more_div").slideToggle('slow');
  });
});


// $(function(){
//   var menuItems = $('.links li').on('click', function(){
//     console.log(menuItems);
//     menuItems.removeClass('current');
//     $(this).addClass('current');
//     console.log(this);
//   });
// });

