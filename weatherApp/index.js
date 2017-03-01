var cityName = document.getElementById("city");

var displayPort = document.getElementById("display");

//Submit Button
document.getElementById('sButton').onclick = function(e) {
    if (cityName.value != "") {
        displayPort.textContent = "Loading.."
        var city = cityName.value;
        //callback function
        getWeather(city, function(data) {
            var tempC = Math.ceil(data.current.temp_c);
            var iconSource = 'https:' + data.current.condition.icon;
            console.log(iconSource);
            displayPort.textContent = "Temperature: " + tempC + "°C";
        });
    } else {
        displayPort.textContent = "Enter valid city name";
    }
};
//Button behaviour


//Get Weather function
function getWeather(city, callback) {
    //request Data
    var url = 'https://api.apixu.com/v1/current.json?key=b1385ce3224e427e954191546172802&q=' + city;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        var data = JSON.parse(xhr.responseText);
        callback(data); //called callback
    };
    xhr.send(null);
}
