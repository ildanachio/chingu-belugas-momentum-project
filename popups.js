// settings popup
$('.cog').on('click', function(e) {
    if ($('.Spopup').hasClass("hidden")) {
        $('.Spopup').removeClass("hidden");
        $('.TDpopup').addClass("hidden");
    } else {
        $('.Spopup').addClass("hidden");
    }
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

$('#resetSettings').on('click', function(e) {
    localStorage.clear();
    window.location.reload();
    console.log('reset');
})

//todo popup
$('.todo').on('click', function(e) {
    if ($('.TDpopup').hasClass("hidden")) {
        $('.TDpopup').removeClass("hidden");
        $('.Spopup').addClass("hidden");
    } else {
        $('.TDpopup').addClass("hidden");
    }
})

$('.code').on('click', function(e) {
    window.open('algo/index.html');
});

//hide popups from click anywhere on the body
// $('.overlay').on('click',function(e){
//     $('.Spopup').addClass("hidden");
//     $('.TDpopup').addClass("hidden");
// })
