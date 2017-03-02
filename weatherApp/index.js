var cityName = document.getElementById("city");

var displayPort = document.getElementById("display");
var lat;
var long;

function setLatLong(lt,ln){
    lat = lt;
    long = ln;
    console.log("setLatLon scope: ",lat,long);
    getWeather(lat,long);
}

function getWeather(){
    console.log("getWeather scope: ",lat,long);
}


if (navigator.geolocation) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position) {
  setLatLong(position.coords.latitude, position.coords.longitude);
    //this will return correct values - 
  console.log("global scope: ",lat,long);
});
} else {
   console.log("Error");
}

 //This will return undefined - console.log("global",lat,long);
// cannot call getWeather(lat,long) coz lat long are undefined.



/*

//Submit Button
document.getElementById('sButton').onclick = function(e) {
    if (cityName.value != "") {
        displayPort.textContent = "Loading.."
        var city = cityName.value;
        //callback function
        getWeather(city, function(data) { //I called the callback here so that we don't pollute the getweather function with too much vars and stuff.
            var tempC = Math.ceil(data.current.temp_c);
            var iconSource = 'https:' + data.current.condition.icon;
            console.log(iconSource);
            displayPort.textContent = "Temperature: " + tempC + "°C";
        });
    } else {
        displayPort.textContent = "Enter valid city name";
    }
};

function getLocation(){
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
      lat = (position.coords.latitude);
      long = (position.coords.longitude);
     
  });
} else{
    console.log("Error");
}
}
getLocation();
 console.log(lat,long);


//Button behaviour

//Get Weather function
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

*/