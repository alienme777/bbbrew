
//variables 
var $overlay = $('<div id="overlay"></div>');
var $img = $("<img>");
var $cap = $("<p></p>");

//Add image and caption to overlay
$overlay.append($img);

$overlay.append($cap);

//Add overlay
$("body").append($overlay);

//Capture the click event
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imgLocation = $(this).attr("href");
  
  //Update overlay with the image linked in the link and show
  $img.attr("src", imgLocation);
  
  $overlay.show();
  
  //Get child's alt attribute and set caption
  var capText = $(this).children("img").attr("alt");
  $cap.text(capText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});










