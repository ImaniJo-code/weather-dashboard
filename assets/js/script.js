// set variables
var locations = [];

var locationFormEl=document.getElementById("location-form");
var locationInputEl=document.getElementById("location");
var forecastContainerEl=document.getElementById("current-forecast-container");
var locationSearchInputEl = document.getElementById("selected-location");
var forecastTitle = document.getElementById("forecast");
var fivedayContainerEl = document.getElementByIdr("fiveday-container");
var pastlocationButtonEl = document.getElementById("past-location-btns");

var formSumbitHandler = function(event){
  // prevent page from refreshing  
  event.preventDefault();

  // get value from input element 
  var location = locationInputEl.value.trim();
  
  if(location){
    getLocationForecast(location);
    get5DayForecast(location);
    
    // clear old content
    locations.unshift({location});
    locationInputEl.value = "";
  } else{
    alert("Please enter a City");
  }
};

var getLocationForecast = function(location){
  var apiKey = "33bdcf610639e5013b3b8d2a63fcb5b9"
  var apiURL = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}"

  // make a get request to url
  fetch(apiURL).then(function(response){
    // request was successful
    if (response.ok){
      response.json().then(function(data){
        displayWeather(data, location);
      });
    }
  });
};

