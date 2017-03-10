// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


// The array of quotes (source: https://addicted2success.com/quotes/30-famous-quotes-that-will-inspire-success-in-you/)
var quotes = [
  {
    quote     : "You can do anything but not everything",
    source    : "David Allen",
    citation  : "Making it All Work"
  },
  {
    quote     : "If you don’t build your dream, someone else will hire you to help them build theirs.",
    source    : "Dhirubhai Ambani",
    tags      : ['personal development']
  },
  {
    quote     : "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    source    : "Mark Caine",
    citation  : "Awesome book ever write",
    year      : 1998,
    tags      : ['personal development', 'personal', 'future']
  },
  {
    quote     : "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    source    : "Audre Lorde",
    tags      : ['business', 'personal', 'future']
  },
  {
    quote     : "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    source    : "Mark Twain",
    citation  : "Mark Twain's like book"
  },
  {
    quote     : "I have not failed. I’ve just found 10,000 ways that won’t work.",
    source    : "Thomas A. Edison",
    citation  : "Edison's biography",
    year      : 1900,
    tags      : ['personal']
  },
  {
    quote     : "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    source    : "David Brinkley",
    tags      : ['business', 'personal development']
  },
  {
    quote     : "No one can make you feel inferior without your consent.",
    source    : "Eleanor Roosevelt",
    year      : 1936,
    tags      : ['famous', 'future']
  },
  {
    quote     : "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source    : "Mahatma Gandhi",
    citation  : "Gandhi's book maximum edition",
    year      : 1965,
    tags      : ['famous', 'political', 'future']
  },
  {
    quote     : "Success is about creating benefit for all and enjoying the process. If you focus on this & adopt this definition, success is yours.",
    source    : "Kelly Kim",
    citation  : "My book, my story",
    tags      : ['business', 'personal development']
  },
];


// Selecting the variables within the DOM
var $loadQuoteBtn  = document.getElementById('loadQuote');


// Creating the functions needed
  // This function returns a new hex color
function changeBackgroundColor() {
  var newColor = Math.random();
  // if newColor < 0,00
  if (newColor < 0.1) {
    newColor = newColor + 0.1;
  }
  // Turn the variable into a hex value
  newColor = newColor * 1000000;
  newColor = Math.round(newColor);
  newColor = "#" + newColor;
  return newColor;
}

  // This function returns a random quote
function getRandomQuote() {
  var min         = 0;
  var max         = (quotes.length - 1);
  // According to the quotes array length, pick up a random number, round it and store the object within a variable
  var quoteNumber = Math.random() * max;
  quoteNumber     = Math.round(quoteNumber);
  var quoteObject = quotes[quoteNumber];
  // Return the object
  return quoteObject;
}

  // This function
    // recovers the new background color and change it
    // recovers the random quote and print it.
function printQuote() {
  // Change the background-color
  var newbgColor                      = changeBackgroundColor();
  document.body.style.transition      = ".4s";
  document.body.style.backgroundColor = newbgColor;

  // Display the quote
  var quoteObject = getRandomQuote();
  var text = '';
  // The quote itself
  text += '<p class="quote">' + quoteObject.quote + '</p>';
  text += '<p class="source">';
  // The quote author
  text += quoteObject.source;
  // If the citation property exists, add it
  if (quoteObject.hasOwnProperty('citation')) {
    text += '<span class="citation">' + quoteObject.citation + '</span>';
  }
  // If the year property exists, add it
  if (quoteObject.hasOwnProperty('year')) {
    text += '<span class="year">' + quoteObject.year + '</span>';
  }
  // If the array of tags property exists, add it
  if (quoteObject.hasOwnProperty('tags')) {
    for (var i = 0; i < quoteObject.tags.length; i++) {
      text += '<span class="tags">' + quoteObject.tags[i] + '</span>';
    }
  }
  text += '</p>';
  // Once the quote has been constructed, add it to the DOM
  document.getElementById('quote-box').innerHTML = text;
} // End: printQuote() function


// Adding the event listeners
  // When the quote button is clicked, run printQuote
$loadQuoteBtn.addEventListener("click", printQuote, false);
  // Every 30 seconds, run printQuote
window.setInterval(printQuote, 30000);
