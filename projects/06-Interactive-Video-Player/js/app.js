//
  //  The Video Player Project
    //  This file works only if JS is activated
    //  Otherwise the video can still be read with pure HTML
  // Have fun!
//



// Creating the variables
var videoContainer = document.getElementById('video-container');
var videoElement = videoContainer.querySelector('video');
var videoControlsContainer = videoContainer.querySelector('div');
var progressBar = document.getElementById("progress-bar");
var playButton = document.createElement("img");
var pauseButton = document.createElement("img");
var timerElement = document.createElement("span");
var volumeOffIcon = document.createElement("img");
var volumeOnIcon = document.createElement("img");
var fullscreenIcon = document.createElement("img");


//Creating the constructor function for the captions time
function captionsTimeObj(startTime, endTime) {
  this.startTime = startTime;
  this.endTime = endTime;
}

//Creating the captions time object
var allCaptionsTime = [
  new captionsTimeObj(0.240, 4.130),
  new captionsTimeObj(4.130, 7.535),
  new captionsTimeObj(7.535, 11.270),
  new captionsTimeObj(11.270, 13.960),
  new captionsTimeObj(13.960, 17.940),
  new captionsTimeObj(17.940, 22.370),
  new captionsTimeObj(22.370, 26.880),
  new captionsTimeObj(26.880, 30.920),
  new captionsTimeObj(32.100, 34.730),
  new captionsTimeObj(34.730, 39.430),
  new captionsTimeObj(39.430, 41.190),
  new captionsTimeObj(42.350, 46.300),
  new captionsTimeObj(46.300, 49.270),
  new captionsTimeObj(49.270, 53.760),
  new captionsTimeObj(53.760, 57.780),
  new captionsTimeObj(57.780, 60.000)
];


// Removing the elements to the page
  //Remove the default controls of the html video element
videoElement.removeAttribute('controls');


// Adding classes and styles to the elements
  //Set the class for each icon
playButton.setAttribute('class', 'button playButton');
pauseButton.setAttribute('class', 'button pauseButton');
timerElement.setAttribute('class', 'button timerElement');
volumeOffIcon.setAttribute('class', 'button volumeOffIcon');
volumeOnIcon.setAttribute('class', 'button volumeOnIcon');
fullscreenIcon.setAttribute('class', 'button fullscreenIcon');

  //Set the image for each icon
playButton.setAttribute('src', 'icons/play-icon.png');
pauseButton.setAttribute('src', 'icons/pause-icon.png');
timerElement.innerText = '00:00 - 01:00';
volumeOffIcon.setAttribute('src', 'icons/volume-off-icon.png');
volumeOnIcon.setAttribute('src', 'icons/volume-on-icon.png');
fullscreenIcon.setAttribute('src', 'icons/fullscreen-icon.png');



// Adding the elements to the page
progressBar.style.display = "initial";


videoControlsContainer.appendChild(playButton);
videoControlsContainer.appendChild(timerElement);
videoControlsContainer.appendChild(volumeOnIcon);
videoControlsContainer.appendChild(fullscreenIcon);




// Creating the functions
var playTheVideo = function() {
  console.log("And the video is now playing!");
  //Start the video
  videoElement.play();
  //Remove the play button
  videoControlsContainer.removeChild(playButton);
  //Add the pause button
  videoControlsContainer.appendChild(pauseButton);
};

var stopTheVideo = function() {
  console.log("And the video is now stop!");
  //Pause the video
  videoElement.pause();
  //Remove the pause button
  videoControlsContainer.removeChild(pauseButton);
  //Add the play button
  videoControlsContainer.appendChild(playButton);
};

var muteTheVideo = function() {
  console.log("And the sound of the video is now gone!");
  //Mute the video
  videoElement.muted = true;
  //Remove the volume ON button
  videoControlsContainer.removeChild(volumeOnIcon);
  //Add the volume OFF button
  videoControlsContainer.appendChild(volumeOffIcon);
};

var unmuteTheVideo = function() {
  console.log("And the sound of the video is now back!");
  //Unmute the video
  videoElement.muted = false;
  //Remove the volume OFF button
  videoControlsContainer.removeChild(volumeOffIcon);
  //Add the volume ON button
  videoControlsContainer.appendChild(volumeOnIcon);
};

var toggleFullscreenMode = function() {
  console.log("The fullscreen button has been clicked!");
  //According to the browser used, allow the user to go on fullscreen mode
  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.mozRequestFullScreen) {
    //For Mozilla
    videoElement.mozRequestFullScreen();
    //For Chrome
  } else if (videoElement.webkitRequestFullscreen) {
    videoElement.webkitRequestFullscreen();
  }
};

//Here clickValue is defined with a event listener
var goToThisPosition = function(clickValue) {
  videoElement.currentTime = clickValue / 100 * videoElement.duration;
};

var highlightingTheTextCaptions = function () {
  for (var i = 0; i < allCaptionsTime.length; i++) {
    if (videoElement.currentTime > allCaptionsTime[i].startTime && videoElement.currentTime <= allCaptionsTime[i].endTime) {
      document.getElementsByClassName("captionsText")[i].style.color = "orange";
    } else {
      document.getElementsByClassName("captionsText")[i].style.color = "black";
    }
  }
};



//Creating the event listeners

  //Controls the highlighting of the subtitles
videoElement.addEventListener("timeupdate", highlightingTheTextCaptions);

  //Controls the current duration of the video
videoElement.addEventListener('timeupdate', function() {
  //Set the duration variable
  var videoDuration = "01:00";
  //Round the result
  var currentTimer = Math.ceil(videoElement.currentTime);
  if (currentTimer < 10) {
    timerElement.innerText = "00:0" + currentTimer + " - " + videoDuration;
  } else {
    timerElement.innerText = "00:" + currentTimer + " - " + videoDuration;
  }
});

  //Controls the progression of the range input
videoElement.addEventListener('timeupdate', function() {
  var percentage = Math.floor((100 / videoElement.duration) * videoElement.currentTime);
  progressBar.value = percentage;
  progressBar.innerHTML = percentage + '% played';
});

  //Controls the position of the video according to the progress bar
progressBar.addEventListener('click', function(event) {
  //Targets the position of the click on the x-axis
  var clickValue = Math.round(event.offsetX / this.offsetWidth * 100);
  goToThisPosition(clickValue);
});



//When the play button is clicked
playButton.onclick = playTheVideo;

//When the pause button is clicked
pauseButton.onclick = stopTheVideo;

//When the volume ON button is clicked
volumeOnIcon.onclick = muteTheVideo;

//When the volume OFF button is clicked
volumeOffIcon.onclick = unmuteTheVideo;

//When the fullscreen button is clicked
fullscreenIcon.onclick = toggleFullscreenMode;
