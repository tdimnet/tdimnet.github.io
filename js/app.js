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
  }
});

//
  // Portfolio overlay
//
// The project gallery
var galleryItems = [
  {
    id: 'profilePage',
    title: 'Profile Page',
    imgSrc: '',
    imgAlt: '',
    introduction: 'Duplexque isdem diebus acciderat malum, quod et Theophilum insontem atrox interceperat casus, et Serenianus dignus exsecratione cunctorum, innoxius, modo non reclamante publico vigore, discessit.',
    link: 'projects/01-Personal-Profile-Page/index.html'
  },
  {
    id: 'registrationForm',
    title: 'Registration Form',
    link: 'projects/02-Online-Registration-Form/index.html'
  },
  {
    id: 'photoGallery',
    title: 'Photo Gallery',
    link: 'projects/03-Interactive-Photo-Gallery/index.html',
  },
  {
    id: 'responsiveLayoutWithSass',
    title: 'Responsive Layout With Sass',
    link: 'projects/04-CSS-to-Sass/index.html',
  },
  {
    id: 'tributePageWithSVG',
    title: 'Tribute Page With SVG',
    link: 'projects/05-SVG-Site-Update/index.html'
  },
  {
    id: 'customVideoPlayer',
    title: 'Custom Video Player',
    link: 'projects/06-Interactive-Video-Player/index.html'
  },
  {
    id: 'accessibleWebsiteForALocalBand',
    title: 'Accessible Website For A Local Band',
    link: 'projects/07-Accessibility-Refactor/index.html'
  },
  {
    id: 'webAppDashboard',
    title: 'Web App Dashboard',
    link: 'projects/08-Web-App-Dashboard/index.html'
  },
  {
    id: 'galleryWithAPI',
    title: 'Gallery With API',
    link: 'projects/09-Use-a-Public-API-to-Create-a-Gallery/index.html'
  },
  {
    id: 'frontEndAutomation',
    title: 'Front End Automation',
    link: 'projects/10-Optimizing-a-Site-for-Performance/index.html'
  },
  {
    id: 'cityWebsite',
    title: 'City Website',
    link: 'http://pontarion.themecloud.me/'
  },
];

// Create the overlay and its relative elements.
var $overlay = $('<div id="overlay"></div>');
var $websitePresentation = $('<div id="websitePresentation"></div>');
var $websiteImageContainer = $('<div id="websiteImageContainer"></div>');
var $websiteImage = $('<img src="" alt="">');
var $websiteDescription = $('<div id="websiteDescription"></div>');
var $websiteTitle = $('<h4></h4>');
var $introduction = $('<p></p>');
var $runSiteLink = $('<a class="btn" href="" target="_blank">Run project</a>');
var $gitHubLink = $('<a class="btn" href="" target="_blank">View code on GitHub</a>');;

// Append it to the projects container
$websiteDescription.append($websiteTitle);
$websiteDescription.append($introduction);
$websiteDescription.append($gitHubLink);
$websiteDescription.append($runSiteLink);
$websitePresentation.append($websiteDescription);
$overlay.append($websitePresentation);
$('#projects').append($overlay);

// When a list item is clicked, display the proper project
$('.thumbnails').click(function(event) {
  event.preventDefault();

  var websiteID = $(this).attr('id');
  $.each(galleryItems, function(key, value) {
    if (websiteID === value.id) {
      $introduction.text(value.introduction);
      $websiteTitle.text(value.title);
      $runSiteLink.attr('href', value.link)
    }
  });
  $overlay.fadeIn('fast');
});

$overlay.click(function() {
  $(this).fadeOut('fast');
});
