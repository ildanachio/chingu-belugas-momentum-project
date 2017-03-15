var weatherElement = document.getElementById("weather");
//var weatherIcon  = document.getElementById("image");
var city = document.getElementById("city");
var dateDiv = document.getElementById("date");
var description = document.getElementById("description");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var settingsBtn = document.getElementById("settingsBtn");
var settingsDisplay = document.getElementById("settings");
var fahren;

if(localStorage.fah){
	fahren = localStorage["fah"];
}
 else{
	 fahren = false;
	 localStorage.setItem('fah',fahren);
 }
 
weatherModule();
setInterval(weatherModule, 1800000);

//Weather Module
function weatherModule() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, errorCallback, { timeout: 10000 });
    } else {
        weatherElement.textContent = "Please allow sharing";
    }
}

//Handle Error
function errorCallback(event) {
    console.log("This is error handler");
    console.log(event);
    weatherElement.textContent = "error acquiring position";
}

//Get Location
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    //displayPort.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
    getWeather(latitude, longitude);

}

//Get Weather
function getWeather(lat, long) {
    //request Data
    var url = 'https://api.apixu.com/v1/current.json?key=b1385ce3224e427e954191546172802&q=' + lat + ',' + long;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        var data = JSON.parse(xhr.responseText);
        displayWeather(data, lat, long);
    };
    xhr.send(null);
}

//Display Weather
function displayWeather(data, lat, long) {
    var temp;
    
    
    if (localStorage.fah == "true" ) {
		
        temp = Math.ceil(data.current.temp_f) + "°F";
    } 
    else{
        temp = Math.ceil(data.current.temp_c) + "°C";
    }
    
    
    
    /* if (fahren) {
        temp = Math.ceil(data.current.temp_f) + "°F";
    } else {
        temp = Math.ceil(data.current.temp_c) + "°C";
    } */
  
    
    city.innerHTML = data.location.name;
    dateDiv.innerHTML = data.location.localtime;
    description.innerHTML = data.current.condition.text;
    wind.innerHTML = 'Wind: ' + data.current.wind_dir + ' ' + data.current.wind_mph + ' mph';
    humidity.innerHTML = 'Humidity: ' + data.current.humidity + '%';
    var iconSource = 'https:' + data.current.condition.icon;
    weatherElement.textContent = temp;
    document.getElementById("image").src = iconSource;

}

//click SettingsBtn
settingsDisplay.style.display = 'none';
settingsBtn.onclick = function() {
    showSettings();
};

//Show Settings
function showSettings() {
    if (settingsDisplay.style.display === 'none') {
        settingsDisplay.style.display = 'block';
    } else {
        settingsDisplay.style.display = 'none';
    }
}

//choosing units
document.getElementById("c").onclick = function() {
    fahren = false;
	saveChanges(fahren);
    
};

document.getElementById("f").onclick = function() {
    fahren = true;
	saveChanges(fahren);
   
};



function saveChanges(fah){
    localStorage.setItem('fah',fah);
    console.log(localStorage.fah);
	weatherModule();
}



