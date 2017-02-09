
  //
    // ALERT DIALOG BOX PART
  //
//Close the alert dialog box
$('.close-button').click(function () {
  $('.alert-box').fadeOut("slow");
});



  //
    // SEND THE MESSAGE PART
  //
// Confirmation if message sent
$('.send-btn').click(function() {
  var messageToTheUser = "";
  var userName =  $('.send-user-name').val();
  var userMessage = $('.send-message').val();
  if ((userName.length === 0) || (userMessage.length === 0)) {
    $('.alert-box-error-message-user').fadeIn('slow');
  } else {
    $('.alert-box-message-user').fadeIn('slow');
  }
});

// Close this button
$('.close-this-btn').click(function() {
  $(this).parent().fadeOut('slow');
});

  //
    // THE CHART PARTS
  //
//General settings for the charts
Chart.defaults.global.legend.display = false;
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontStyle = 100;


  // Start: The web traffic widget
// Creating the variables: the container class
var $webTrafficWidget = $('.web-traffic-widget');
// Creating the labels and data
var labelsWebTrafficWidget = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"];
var dataWebTrafficWidget = [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250];

// Creating the chart itself
var myTrafficWidget = new Chart($webTrafficWidget, {
  type: 'line',
  data: {
    labels: labelsWebTrafficWidget,
    datasets: [{
      data: dataWebTrafficWidget,
      lineTension: 0,
      backgroundColor: "#E2E3F6",
      borderColor: "#7478BF",
      borderWidth: 1,
      borderJoinStyle: 'miter',
      pointBorderColor: "#7478BF",
      pointRadius: 5,
      pointBorderWidth: 1,
      pointBackgroundColor: "#fff",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#7478BF",
      pointHoverBorderColor: "#7478BF",
      pointHoverBorderWidth: 2,
    }],
  },
  options: {
    scales: {
      yAxes: [{
        type: 'linear',
        ticks: {
          max: 2500,
          min: 0,
          stepSize: 500,
        },
        gridLines: {
          drawTicks: false,
          color: '#ddd',
        }
      }],
      xAxes: [{
        gridLines: {
          drawTicks: false,
          color: '#ddd',
          offsetGridLines : true
        }
      }],
    },
  }
});
  //End: The web traffic widget



  //Start: The daily traffic widget

// Creating the variables: the container class
var $dailyTrafficWidget = $('.daily-traffic-widget');

// Creating the labels and data
    // The first bar chart
var firstLabelsDailyTrafficWidget = ["S", "M", "T", "W", "T", "F", "S"];
var firstDataDailyTrafficWidget = [75, 100, 175, 125, 225, 200, 100];
var firstbackgroundColor = ['#7377BF', '#7377BF', '#7377BF', '#7377BF', '#7377BF', '#7377BF', '#7377BF'];
var firstBorderColor = ['#7377BF', '#7377BF', '#7377BF', '#7377BF', '#7377BF', '#7377BF', '#7377BF'];
    // The second bar chart
var secondDataDailyTrafficWidget = [175, 75, 50, 175, 125, 50, 250];
var secondbackgroundColor = ['#6195ED', '#6195ED', '#6195ED', '#6195ED', '#6195ED', '#6195ED', '#6195ED'];
var secondBorderColor = ['#6195ED', '#6195ED', '#6195ED', '#6195ED', '#6195ED', '#6195ED', '#6195ED'];

// Creating the chart itself
var myDailyWidget = new Chart($dailyTrafficWidget, {
  type: 'bar',
  data: {
    labels: firstLabelsDailyTrafficWidget,
      datasets: [
          {
            data: firstDataDailyTrafficWidget,
            backgroundColor: firstbackgroundColor,
            borderColor: firstBorderColor,
            borderWidth: 1,
          },
          {
            data: secondDataDailyTrafficWidget,
            backgroundColor: secondbackgroundColor,
            borderColor: secondBorderColor,
            borderWidth: 1,
          }
      ]
  },
  options: {
    scales: {
      yAxes: [{
        type: 'linear',
        ticks: {
          max: 250,
          min: 0,
          stepSize: 50,
        },
        gridLines: {
          color: '#ccc',
        }
      }]
    }
  }
});
  //End: The daily traffic widget


  //Start: The daily traffic widget
var $mobileUsersWidget = $('.mobile-users-widget');

var dataMobileUsersWidget = {
    labels: [
        "Phones",
        "Tablets",
        "Desktop",
        "Smart TV"
    ],
    datasets: [
        {
            data: [15, 15, 70, 5],
            backgroundColor: [
                "#81C98F",
                "#74B1BF",
                "#7377BF",
                "#6195ED"
            ],
            hoverBackgroundColor: [
                "#81C98F",
                "#74B1BF",
                "#7377BF",
                "#6195ED"
            ]
        }]
};

var myMobileUsersWidget = new Chart($mobileUsersWidget, {
  type: 'doughnut',
  data: dataMobileUsersWidget,
  options: {
    responsive: true
  }
});
  //End: The daily traffic widget
