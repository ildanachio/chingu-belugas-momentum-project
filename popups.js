
// settings popup
$('.cog').on('click',function(e){
    $('.Spopup').toggle();
})

$('#toggleWeather').on('click', function(e) {
    if (localStorage.getItem("unit") === "fahren") {
        localStorage.setItem("unit", "celsius");
        weatherModule();
        console.log("toggled to celsius");
    } else {
        localStorage.setItem("unit", "fahren");
        weatherModule();
        console.log("toggled to fahren");
    }
})

$('resetSettings').on('click',function(e){
    localStorage.clear();
    window.location.reload()
})