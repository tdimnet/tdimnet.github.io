//
  // Header event
//
$hamburgerIcon = $('.hamburger');
$mainNav = $('.main-nav ul');


$hamburgerIcon.click(function() {
  $mainNav.toggle('slow');
});



//
  // Story
//
$storybtn = $('.btn');
$story = $('.story');

$storybtn.click(function() {
  console.log('foo');
});
