// Search for an image - The active class will help for the navigation system
  // When a user writes something inside the search input
  $('#search').keyup(function() {

    // Create a new variable and convert it in lower case
    var searchWord = $('#search').val().toLowerCase();

    // Start looping through the img gallery
    $('#photoGallery a img').each(function() {

      // Convert both img's attributes in lower cases
      var imgAlt = $(this).attr('alt').toLowerCase();
      var imgTitle = $(this).attr('Title').toLowerCase();
      var imgInfo = imgAlt + ' ' + imgTitle;

      // Remove the images when the search does not match
      if (imgInfo.indexOf(searchWord) === -1) {
        $(this).parents('li').removeClass('active');
        $(this).parents('li').fadeOut('fast');

      // Otherwise keep them displayed
      } else {
        $(this).parents('li').addClass('active');
        $(this).parents('li').fadeIn('fast');
      } // Conditionnal statement ends here

    }); // each function ends here

  }).keydown();

// Search for an image end
