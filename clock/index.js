clock();

function clock() {
    var dateTime = new Date();
    //console.log(dateTime.getHours(),dateTime.getMinutes(), dateTime.getSeconds());
    document.getElementById("view").innerHTML = dateTime
}

setInterval(clock, 1000);