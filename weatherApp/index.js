var displayPort = document.getElementById("display");
var weatherElement = document.getElementById("weather");
var fahren = false;

weatherModule();

//Weather Module
function weatherModule() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,errorCallback,{timeout:10000});
    } else {
        displayPort.textContent = "Please allow sharing";
    }
}

//Handle Error
function errorCallback(event){
    console.log("This is error handler working...Yay");
    console.log(event);
    displayPort.textContent = event.message;
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
    var iconSource = 'https:' + data.current.condition.icon;
    displayPort.textContent = "";
    var cityName = data.location.name;
    var arr = [temp,iconSource];
    arr.forEach(function(item) { //there's only 1 item to display here - temp
        displayPort.innerHTML += '<li>' + item + '</li>'
    });
    displayPort.innerHTML += '<img src="'+iconSource+'"></img>'
    console.log("hello");
}
 
 
 

  
  