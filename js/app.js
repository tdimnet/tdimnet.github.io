//
  // Header event
//
$hamburgerIcon = $('.hamburger');
$mainNav = $('.main-nav ul');


$hamburgerIcon.click(function() {
  $mainNav.toggle('slow');
});
