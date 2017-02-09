var main = function() {
  $('.dropdown').children('img').click(function() {
    $(this).next().toggle();
  });

  $('form').submit(function() {
    var email = $('#email').val();
    var password = $('#password').val();
    if(email === '') {
      $('.email-error').text('Please enter your email.');
    }
    if(password === '') {
      $('.password-error').text('Please enter your password.');
    }
    return false;
  });
};

$(document).ready(main);
