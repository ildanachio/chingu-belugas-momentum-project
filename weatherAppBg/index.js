var weatherElement = document.getElementById("weather");
//var weatherIcon  = document.getElementById("image");
var city  = document.getElementById("city");
var description  = document.getElementById("description");
var wind  = document.getElementById("wind");
var humidity  = document.getElementById("humidity");

var fahren = false;
weatherModule();
setInterval(weatherModule,1800000); 

//Weather Module
function weatherModule() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,errorCallback,{timeout:10000});
    } else {
        weatherElement.textContent = "Please allow sharing";
    }
}

//Handle Error
function errorCallback(event){
    console.log("This is error handler");
    console.log(event);
    weatherElement.textContent = "error acquiring position";
}

//Get Location
function showPosition(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    //displayPort.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
    getWeather(latitude,longitude);
   
}

//Get Weather
function getWeather(lat,long) {
    //request Data
    var url = 'https://api.apixu.com/v1/current.json?key=b1385ce3224e427e954191546172802&q=' + lat + ',' +long;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        var data = JSON.parse(xhr.responseText);
        displayWeather(data,lat,long);
    };
    xhr.send(null);
}

//Display Weather
function displayWeather(data,lat,long){
    var temp;
    if(fahren){
        temp = Math.ceil(data.current.temp_f) + "°F";
    }
    else{
        temp = Math.ceil(data.current.temp_c) + "°C";
    }
    city.innerHTML = data.location.name;
    description.innerHTML = data.current.condition.text;
    wind.innerHTML = 'Wind: ' + data.current.wind_dir + ' ' + data.current.wind_mph + ' mph';
    humidity.innerHTML = 'Humidity: ' + data.current.humidity + '%';
    var iconSource = 'https:' + data.current.condition.icon;
    weatherElement.textContent =  temp;
    document.getElementById("image").src=iconSource;
    
}
 
  
  