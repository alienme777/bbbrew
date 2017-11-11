

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Add image and caption to overlay
$overlay.append($image);

$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click event
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  
  //Update overlay with the image linked in the link and show
  $image.attr("src", imageLocation);
  
  $overlay.show();
  
  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});










