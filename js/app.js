//
  // Header event
//
$hamburgerIcon = $('.hamburger');
$mainNav = $('.main-nav ul');


$hamburgerIcon.click(function() {
  $mainNav.toggle('slow');
});



//
  // Canvas Animation
//
(function() {

    var width, height, brandingContainer, canvas, ctx, triangles, target, animateHeader = true;
    var colors = ['72,35,68', '43,81,102', '66,152,103', '250,178,67', '224,33,48'];

    // Main
    initHeader();
    addListeners();
    initAnimation();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        brandingContainer = document.getElementById('branding-container');
        brandingContainer.style.height = height+'px';

        canvas = document.getElementById('canvas-animation');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        triangles = [];
        for(var x = 0; x < 480; x++) {
            addTriangle(x*10);
        }
    }

    function addTriangle(delay) {
        setTimeout(function() {
            var t = new Triangle();
            triangles.push(t);
            tweenTriangle(t);
        }, delay);
    }

    function initAnimation() {
        animate();
    }

    function tweenTriangle(tri) {
        var t = Math.random()*(2*Math.PI);
        var x = (200+Math.random()*100)*Math.cos(t) + width*0.5;
        var y = (200+Math.random()*100)*Math.sin(t) + height*0.5-20;
        var time = 4+3*Math.random();

        TweenLite.to(tri.pos, time, {x: x,
            y: y, ease:Circ.easeOut,
            onComplete: function() {
                tri.init();
                tweenTriangle(tri);
        }});
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        brandingContainer.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in triangles) {
                triangles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Triangle() {
        var _this = this;

        // constructor
        (function() {
            _this.coords = [{},{},{}];
            _this.pos = {};
            init();
        })();

        function init() {
            _this.pos.x = width*0.5;
            _this.pos.y = height*0.5-20;
            _this.coords[0].x = -10+Math.random()*40;
            _this.coords[0].y = -10+Math.random()*40;
            _this.coords[1].x = -10+Math.random()*40;
            _this.coords[1].y = -10+Math.random()*40;
            _this.coords[2].x = -10+Math.random()*40;
            _this.coords[2].y = -10+Math.random()*40;
            _this.scale = 0.1+Math.random()*0.3;
            _this.color = colors[Math.floor(Math.random()*colors.length)];
            setTimeout(function() { _this.alpha = 0.8; }, 10);
        }

        this.draw = function() {
            if(_this.alpha >= 0.005) _this.alpha -= 0.005;
            else _this.alpha = 0;
            ctx.beginPath();
            ctx.moveTo(_this.coords[0].x+_this.pos.x, _this.coords[0].y+_this.pos.y);
            ctx.lineTo(_this.coords[1].x+_this.pos.x, _this.coords[1].y+_this.pos.y);
            ctx.lineTo(_this.coords[2].x+_this.pos.x, _this.coords[2].y+_this.pos.y);
            ctx.closePath();
            ctx.fillStyle = 'rgba('+_this.color+','+ _this.alpha+')';
            ctx.fill();
        };

        this.init = init;
    }

})();



//
  // Story timelines
//
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var items = document.querySelectorAll(".timeline li");

// code for the isElementInViewport function
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);



//
  // Portfolio
//

// Targets the images displayed according to the button clicked
$('.skills li').click(function() {
  var category = $(this).attr('class');
  // Add condition
  switch (category) {
    case 'all':
      $('.skills li').removeClass('selected');
      $('.thumbnails').show();
      break;
    case 'html':
      $('.skills li').removeClass('selected');
      $('.thumbnails').hide();
      $(this).addClass('selected');
      $('.html').show();
      break;
    case 'css':
      $('.skills li').removeClass('selected');
      $('.thumbnails').hide();
      $(this).addClass('selected');
      $('.css').show();
      break;
    case 'javascript':
      $('.skills li').removeClass('selected');
      $('.thumbnails').hide();
      $(this).addClass('selected');
      $('.javascript').show();
      break;
    case 'wordpress':
      $('.skills li').removeClass('selected');
      $('.thumbnails').hide();
      $(this).addClass('selected');
      $('.wordpress').show();
      break;
    case 'symfony':
      $('.skills li').removeClass('selected');
      $('.thumbnails').hide();
      $(this).addClass('selected');
      $('.symfony').show();
      break;
  }
});

//
  // Portfolio overlay
//
// The project gallery

// The creating object function
function Item(id, imgSrc, imgAlt, title, introduction, link, gitLink) {
    this.id = id;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.title = title;
    this.introduction = introduction;
    this.link = link;
    this.gitLink = gitLink;
}

var galleryItems = [
  {
    id: 'profilePage',
    imgSrc: 'img/project1.png',
    imgAlt: 'Image of the profile page project',
    title: 'Profile Page',
    introduction: 'In order to exhibit my new skills in HTML & CSS, I have created a simple but nice profile page with Treehouse.',
    link: 'https://tdimnet.github.io/Personal-Profile-Page',
    gitLink: 'https://github.com/tdimnet/personalProfilePage'
  },
  {
    id: 'registrationForm',
    imgSrc: 'img/project2.png',
    imgAlt: 'Image of the online registration form project',
    title: 'Registration Form',
    introduction: "Web forms appear everywhere online. This project has challenged me to build a responsive, mobile-first registration form using a variety of HTML form elements.",
    link: 'https://tdimnet.github.io/Online-Registration-Form',
    gitLink: 'https://github.com/tdimnet/onlineRegistrationForm'
  },
  {
    id: 'photoGallery',
    imgSrc: 'img/project3.png',
    imgAlt: 'Image of the photo gallery project',
    title: 'Photo Gallery',
    introduction: "Nowadays Interactive image galleries are a common feature of many websites, from photo sites to e-commerce applications. Using HTML, CSS and JavaScript, I have created an interactive and searchable gallery of photos.",
    link: 'https://tdimnet.github.io/Interactive-Photo-Gallery',
    gitLink: 'https://github.com/tdimnet/Interactive-Photo-Gallery'
  },
  {
    id: 'responsiveLayoutWithSass',
    imgSrc: 'img/project4.png',
    imgAlt: 'Image of the responsive layout with Sass project',
    title: 'Responsive Layout With Sass',
    introduction: "It's a fact: Sass is an important tool in a modern Front End Web Developer’s toolbox. With this, I have used programming principles to refactor a standard CSS stylesheet to Sass by identifying repeating patterns, using variables, and adding mixins.",
    link: 'https://tdimnet.github.io/CSS-to-Sass',
    gitLink: 'https://github.com/tdimnet/CSS-to-Sass'
  },
  {
    id: 'tributePageWithSVG',
    imgSrc: 'img/project5.png',
    imgAlt: 'Image of the tribute page with SVG project',
    title: 'Tribute Page With SVG',
    introduction: "SVG graphics are quickly becoming one of the most widely used graphic formats on the Web. With SVGs, I have modernized the user interface of this tribute page.",
    link: 'https://tdimnet.github.io/SVG-Site-Update',
    gitLink: 'https://github.com/tdimnet/SVG-Site-Update'
  },
  {
    id: 'customVideoPlayer',
    imgSrc: 'img/project6.png',
    imgAlt: 'Image of the custom video player project',
    title: 'Custom Video Player',
    introduction: "Video, and the interface used to control the video, is increasingly important for many different kinds of web applications, including web site landing pages, blogs, podcasts, product marketing and training. With this project, I have built an HTML5 video player using JavaScript and the HTML5 Video API.",
    link: 'projects/06-Interactive-Video-Player/index.html',
    gitLink: 'https://github.com/tdimnet/Interactive-Video-Player'
  },
  {
    id: 'accessibleWebsiteForALocalBand',
    imgSrc: 'img/project7.png',
    imgAlt: 'Image of the accesible web site project',
    title: 'Accessible Website For A Local Band',
    introduction: "Accessible web sites allow anyone and everyone to use the web, regardless of physical or hardware differences. They also, generally, make sites faster to download and improve a site's search engine friendliness. In this project, I have changed a website to make it more accessible for users and search engines.",
    link: 'projects/07-Accessibility-Refactor/index.html',
    gitLink: 'https://github.com/tdimnet/Accessibility-Refactor'
  },
  {
    id: 'webAppDashboard',
    imgSrc: 'img/project8.png',
    imgAlt: 'Image of the web app dashboard project',
    title: 'Web App Dashboard',
    introduction: "This project involves creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability. To build it, I have used advanced CSS, SVG graphics and JavaScript programming.",
    link: 'https://tdimnet.github.io/Web-App-Dashboard',
    gitLink: 'https://github.com/tdimnet/Web-App-Dashboard'
  },
  {
    id: 'galleryWithAPI',
    imgSrc: 'img/project9.png',
    imgAlt: 'Image of the Gallery with API project',
    title: 'Gallery With API',
    introduction: "Many sites — Twitter, Facebook, IMDB, and Wikipedia to name a few — offer a vast sea of data that you can access and display on your own web pages. Using JavaScript programming I have created a gallery of information and images by communicating with a third-party API (Application Programming Interface).",
    link: 'projects/09-Use-a-Public-API-to-Create-a-Gallery/index.html',
    gitLink: 'https://github.com/tdimnet/Use-a-Public-API-to-Create-a-Gallery'
  },
  {
    id: 'frontEndAutomation',
    imgSrc: 'img/project10.png',
    imgAlt: 'Image of the front end automation project',
    title: 'Front End Automation',
    introduction: "Web site performance is often a live-or-die metric for web sites and apps. Sites and apps that load, or appear to load, quickly are usually seen as being better built and more useful. Thanks to Gulp, I have significantly increased the number of requests and the web site is now loading faster.",
    link: 'projects/10-Optimizing-a-Site-for-Performance/index.html',
    gitLink: 'https://github.com/tdimnet/Optimizing-a-Site-for-Performance'
  },
  {
    id: 'birdwatching',
    imgSrc: 'img/project12.png',
    imgAlt: 'Image of the birdwatching project',
    title: 'birdwatching',
    introduction: "Here is the lastest project I had to do with OpenClassrooms and the IESA School. This is a complexe web site using the Symfony framework, complexe AJAX request and a full original layout.",
    link: 'http://nao.boudetnature.com/',
    gitLink: 'https://github.com/jgmbr/projet_nao'
  },
  {
    id: 'randomQuoteGenerator',
    imgSrc: 'img/project13.png',
    imgAlt: 'Image of the Random Quote Generator project',
    title: 'Random Quote Generator',
    introduction: "By building a program that displays a randomly selected quote each time the user clicks a button, I have put my knowledge of basic JavaScript syntax and data structures into practice.",
    link: 'projects/11-Random-Quote-Generator/index.html',
    gitLink: 'https://github.com/tdimnet/Random-Quote-Generator'
  },
  {
    id: 'paginationAndContentFilter',
    imgSrc: 'img/project14.png',
    imgAlt: 'Image of the pagination and content filter project',
    title: 'Pagination & Content Filter',
    introduction: "In this project, I've enhanced the usability of a web page containing an overly long listing of students. By using JavaScript, I've dynamically divided the contents into pages and added a search function to list only the students that match that search.",
    link: 'projects/12-pagination-filter/index.html',
    gitLink: 'https://github.com/tdimnet/Pagination-And-Content-Filter'
  },
  {
    id: 'buildAnInteractiveForm',
    imgSrc: 'img/project15.png',
    imgAlt: 'Image of the building interactive form project',
    title: 'Build An Interactive Form',
    introduction: "For this project, I used my skills to enhance a form so that it’s engaging, interactive, and easy to use. I also made the form more user-friendly by providing helpful error messages when the user enters invalid information into the form fields. ",
    link: 'projects/13-Build-an-Interactive-Form/index.html',
    gitLink: 'https://github.com/tdimnet/Build-an-Interactive-Form'
  },
  {
    id: 'ticTacToe',
    imgSrc: 'img/project16.png',
    imgAlt: 'Image of the Tic Tac Toe project',
    title: 'Tic Tac Toe',
    introduction: "Here I used professional programming techniques to solve data-modeling problems, applied higher level concepts like object-oriented programming. I used the module pattern to create your Tic-Tac-Toe game.",
    link: 'projects/14-Tic-Tac-Toe/index.html',
    gitLink: 'https://github.com/tdimnet/Tic-Tac-Toe'
  },
  {
    id: 'employeeDirectory',
    imgSrc: 'img/project17.png',
    imgAlt: 'Image of the Use a Public API to Create an Employee Directory project',
    title: 'Use a Public API to Create an Employee Directory',
    introduction: "Many sites — Twitter, Facebook, IMDB, and Wikipedia to name a few — offer a vast sea of data that you can access and display on your own web pages. Using JavaScript, I created an employee directory by communicating with a third-party API.",
    link: 'projects/15-Use-a-Public-API-to-Create-an-Employee-Directory/index.html',
    gitLink: 'https://github.com/tdimnet/Use-a-Public-API-to-Create-an-Employee-Directory'
  },
];

// Create the overlay and its relative elements.
var $overlay = $('<div id="overlay"></div>');
var $websitePresentation = $('<div id="websitePresentation"></div>');
var $websiteImageContainer = $('<div id="websiteImageContainer"></div>');
var $websiteImage = $('<img src="" alt="">');
var $websiteDescription = $('<div id="websiteDescription"></div>');
var $websiteTitle = $('<h4 id="websiteTitle"></h4>');
var $introduction = $('<p id="introduction"></p>');
var $closeButton = $('<img id="closeBtn" src="img/cancel.svg">')
var $runSiteLink = $('<a class="btn" href="" target="_blank">Run project</a>');
var $gitHubLink = $('<a class="btn" href="" target="_blank">View code on GitHub</a>');;

// Append it to the projects container
$websiteDescription.append($websiteTitle);
$websiteDescription.append($introduction);
$websiteDescription.append($gitHubLink);
$websiteDescription.append($runSiteLink);
$websiteImageContainer.append($websiteImage);
$websiteImageContainer.append($closeButton);
$websitePresentation.append($websiteImageContainer);
$websitePresentation.append($websiteDescription);
$overlay.append($websitePresentation);
$('#projects').append($overlay);

// When a list item is clicked, display the proper project
$('.thumbnails').click(function(event) {
  event.preventDefault();

  var websiteID = $(this).attr('id');
  $.each(galleryItems, function(key, value) {
    if (websiteID === value.id) {
      $websiteImage.attr('src', value.imgSrc);
      $websiteImage.attr('alt', value.imgAlt);
      $introduction.text(value.introduction);
      $websiteTitle.text(value.title);
      $runSiteLink.attr('href', value.link);
      if (value.gitLink !== null) {
        $websiteDescription.append($gitHubLink);
        $gitHubLink.attr('href', value.gitLink);
      } else {
        $gitHubLink.remove();
      }
    }
  });
  $overlay.fadeIn('fast');
});

$closeButton.click(function() {
  $($overlay).fadeOut('fast');
});


$(document).keydown(function(event) {
  if (event.which === 27) {
    $overlay.fadeOut('fast');
  }
});
