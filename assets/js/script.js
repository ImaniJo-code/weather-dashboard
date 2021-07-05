// set variables 
var locations = [];

var inputEl = document.getElementById("location")
var searchEl = document.getElementById("button");
var weatherContainerEl = document.getElementById("current-forecast-container");
var locationSearchInputEl = document.getElementById("searched-location");
var forecastEl = document.getElementById("forecastTitle");

// get and save location searches to local storage
var formSubmitHandler = function(event){
    event.preventDefault();
    var location = inputEl.value.trim();
    if(location){
        getCityWeather(location);
        get5Day(location);
        locations.unshift({location});
        inputEl.value = "";
    }
    saveSearch();
    pastSearch(location);
}

var saveSearch = function(){
    localStorage.setItem("locations", JSON.stringify(locations));
};

