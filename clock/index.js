var getUserName = document.getElementById("getName");
getUserName.classList.remove("hidden");
var userName = '';

clock();
setInterval(clock, 1000);

//get username
document.getElementById("getName").addEventListener("change", function() {
    userName = getUserName.value;
    getUserName.classList.add("hidden");
    clock()
})

console.log(userName)

//The clock function
function clock() {
    var dateTime = new Date();
    var Hour = dateTime.getHours()

    //console.log(currentHour,dateTime.getMinutes(), dateTime.getSeconds());
    document.getElementById("view").innerHTML = dateTime;
    var Phase = dayPhase(Hour);
    greetUser(Phase)

}

//Calculate the phase of the day
function dayPhase(hour) {
    if (hour > 04 & hour <= 12) {
        return "morning"
    } else if (hour > 12 & hour <= 16) {
        return "afternoon"
    } else if (hour > 16 & hour <= 24) {
        return "evening"
    } else if (hour > 24 & hour <= 16) {
        return "night"
    }
}

//greetUser
function greetUser(phase) {
    if (userName) {
        document.getElementById('showname').classList.remove("hidden");
        document.getElementById("showname").textContent = "Good " + phase + ' ' + userName;
    }
    return 1;
}
