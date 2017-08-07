// Selecting the DOM elements
  // The search input places at the top of the dom page
const $searchInput          = $('#search-input');
  // The gallery node already presents within the page
const $gallery              = $('#gallery');
  // This group below is the elements for the overlay
const $overlay              = $('<div id="overlay"></div>');
const $employeeDetail       = $('<div id="employee-detail"></div>');
  // This three elements below are the buttons
const $closeBtn             = $('<p id="close">X</p>');
const $previousBtn          = $('<p id="previous"><</p>');
const $nextBtn              = $('<p id="next">></p>');
const $image                = $('<img>');
const $employeeFullname     = $('<h2></h2>');
const $employeeEmail        = $('<p class="email"></p>');
const $employeeCity         = $('<p></p>');
const $horizontalBreak      = $('<hr>');
const $employeePhone        = $('<p></p>');
const $employeeLocation     = $('<p></p>');
const $employeeBirthDay     = $('<p></p>');

// Append the elements to the DOM
$employeeDetail.append($closeBtn);
$employeeDetail.append($previousBtn);
$employeeDetail.append($nextBtn);
$employeeDetail.append($image);
$employeeDetail.append($employeeFullname);
$employeeDetail.append($employeeEmail);
$employeeDetail.append($employeeCity);
$employeeDetail.append($horizontalBreak);
$employeeDetail.append($employeePhone);
$employeeDetail.append($employeeLocation);
$employeeDetail.append($employeeBirthDay);
$overlay.append($employeeDetail);
$('body').append($overlay);


// Tracking variables used throughout the application
var objectPosition;
var activeObjects;


// This function uses the retrieveAllEmployeesData function in order to display the twelve employees.
function getEmployees() {
  for (let i = 0; i < 12; i++) {
    retrieveAllEmployeesData('https://randomuser.me/api/?nat=us,fr,gb');
  }
}

// This AJAX Request retrieve for each employee in order to display them within the gallery
function retrieveAllEmployeesData(url) {
  $.ajax({
    url: url,
    dataType: 'json',
    success: function(data) {
      // The employee info we need to have
      const employeeObject      = data.results[0];
      const employeeSeed        = data.info.seed;
      const employeeMedium      = employeeObject.picture.medium;
      const employeeName        = employeeObject.name.first + ' ' + employeeObject.name.last;
      const employeeEmail       = employeeObject.email;
      const employeeCity        = employeeObject.location.city;

      // Complete the HTML gallery item
      let html = `
        <div class="card active">
          <a href="https://randomuser.me/api/?seed=${employeeSeed}">
              <img src="${employeeMedium}" alt="Photograph of ${employeeName}" />
              <h2>${employeeName}</h2>
              <p>
                ${employeeEmail}
                <br>
                ${employeeCity}
              </p>
          </a>
        </div>
      `;

      // Then display them
      $gallery.append(html);
    }
  });
}


// This AJAX Request retrieve the info of the employee
function getOneEmployeeDetails(url, currentObj) {

  // Before going further we define if the elements have previous and next buttons
  prevAndNextBtn(currentObj);

  // Then we perform the AJAX request
  $.ajax({
    url: url,
    dataType: 'json',
    success: function(data) {
      $image.attr('src', data.results[0].picture.large);
      $employeeFullname.text(data.results[0].name.first + ' ' + data.results[0].name.last);
      $employeeEmail.text(data.results[0].email);
      $employeeCity.text(data.results[0].location.city);
      $employeePhone.text(data.results[0].cell);
      $employeeLocation.text(data.results[0].location.street + ' ' + data.results[0].location.city + ' ' + data.results[0].location.state + ' ' + data.results[0].location.postcode + ' ' + data.results[0].nat);
      $employeeBirthDay.text("Birthday: " + data.results[0].dob.substring(0,10));
      $overlay.fadeIn('400');
    }
  });
}

// We took the object position within the gallery of active object and the total of objects active
function prevAndNextBtn(employeeObj) {
  objectPosition = $('.active').index(employeeObj);
  activeObjects = $('.active').length;

  // If there is only one item, we hide the previous and next button
  if ($('.active').length === 1) {
    $previousBtn.hide();
    $nextBtn.hide();
  // If the object is in first position, we hide the previous button
  } else if (objectPosition === 0) {
    $previousBtn.hide();
    $nextBtn.show();
  // If the object is in last position, we hide the next button
  } else if (objectPosition === ( activeObjects -1 )) {
    $previousBtn.show();
    $nextBtn.hide();
  // Else we show them both
  } else {
    $previousBtn.show();
    $nextBtn.show();
  }
}


// We perform the second AJAX Request on click and we define the object position for the tracking variables
$gallery.on('click', 'div', function(event) {
  event.preventDefault();
  const employeeSeed = $(this).find('a').attr('href');
  const employeeObj = $(this);
  getOneEmployeeDetails(employeeSeed, employeeObj);
})


// When prevArrow is clicked
$previousBtn.click(function() {
  // We show the previous Object and we update the tracking variables
  let prevObject = $('.active').eq(objectPosition - 1);
  let prevObjectSeed = $('.active').eq(objectPosition - 1).find('a').attr('href');
  getOneEmployeeDetails(prevObjectSeed, prevObject);
});

// When nextArrow is clicked
$nextBtn.click(function() {
  // We show the next Object and we update the tracking variables
  let nextObject = $('.active').eq(objectPosition + 1);
  let nextObjectSeed = $('.active').eq(objectPosition + 1).find('a').attr('href');
  getOneEmployeeDetails(nextObjectSeed, nextObject);
});

// When the close button is clicked, we hide the overlay
$closeBtn.on('click', function() {
  $overlay.fadeOut();
})


// We search for a name in lower case
$searchInput.keyup(function() {
  let searchName = $searchInput.val().toLowerCase();
  $('.card').each(function() {
    let fullname = $(this).find('h2').text();
    // If the name does not match, we hide it
    if (fullname.indexOf(searchName) === -1 ) {
      $(this).removeClass('active');
      $(this).fadeOut('fast');
    // If the name matchs, we show it
    } else {
      $(this).addClass('active');
      $(this).fadeIn('fast');
    }
  })
}).keydown();



// Once the document is fully loaded, perform the first AJAX request
$(document).ready(function() {
  getEmployees();
})
