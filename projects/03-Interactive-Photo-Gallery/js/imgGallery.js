// Creating the variables
var $overlay = $('<div id="overlay"></div>');
var $imageBlock = $('<div id="imgBlock"></div>');
var $image = $('<img>');
var $closeArrow = $('<img id="close" class="arrow" src="img/close.png" alt="Close the overlay">');
var $prevArrow = $('<img id="prev" class="arrow" src="img/prev.png" alt="See the previous image">');
var $nextArrow = $('<img id="next" class="arrow" src="img/next.png" alt="See the next image">');
var $imageCaption = $('<p></p>');

// Tracking variables
var objectPosition;
var activeObjects;


// Creating the functions
  // This function creates the image's overlay and show or hide the arrows
  function showImage(imageToShow) {
    // Get the information about the image clicked
    var objectToWorkWith = $(imageToShow);
    objectPosition = $('.active').index($(objectToWorkWith).parent());
    activeObjects = $('.active').length;

    // If the image is in first position, hide the prev arrow
    if (objectPosition === 0) {
      $prevArrow.hide();
      $nextArrow.show();

    // If the position is the last item, hide next arrow
  } else  if (objectPosition === (activeObjects - 1)) {
      $prevArrow.show();
      $nextArrow.hide();

    // Otherwise show both arrows
    } else {
      $prevArrow.show();
      $nextArrow.show();
    }

    // Set the information inside the overlay
    var imageSrc = objectToWorkWith.attr('href');
    var imageText = objectToWorkWith.find('img').attr('title');
    $image.attr('src', imageSrc);
    $imageCaption.text(imageText);

    // Display the overlay
    $overlay.fadeIn('400');
  }



// Adding the elements to the web page
  // Adding the elements to the imageBlock item
  $imageBlock.append($image);
  $imageBlock.append($closeArrow);
  $imageBlock.append($prevArrow);
  $imageBlock.append($nextArrow);

  // Adding the elements to the overlay
  $overlay.append($imageBlock);
  $overlay.append($imageCaption);

// Adding all elements to the web page
$('body').append($overlay);





// Start coding the process here
  // When a user clicks an image
  $('#photoGallery a').click(function(event) {
    // Prevents the default behavior of the web browser
    event.preventDefault();
    showImage(this);
  });

  // When the cross button is clicked
  $closeArrow.click(function() {
    // Hide the overlay
    $overlay.fadeOut('400');
  });

  // When prevArrow is clicked
  $prevArrow.click(function() {
    // Show the previous image
    showImage($('.active').eq(objectPosition - 1).children('a'));
  });

  // When nextArrow is clicked
  $nextArrow.click(function() {
    // Show the next image
    showImage($('.active').eq(objectPosition + 1).children('a'));
  });



  $(document).keydown(function(event) {
    if ((event.which === 37) && (objectPosition !== 0)) {
      showImage($('.active').eq(objectPosition - 1).children('a'));
    } else if (event.which === 39 &&  (objectPosition != ($('.active').length - 1))) {
      showImage($('.active').eq(objectPosition + 1).children('a'));
    } else if (event.which === 27) {
      $overlay.fadeOut('400');
    }
  });
