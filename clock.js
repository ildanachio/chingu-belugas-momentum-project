//localStorage.clear();
var getUserName = document.getElementById("getName");
getUserName.classList.remove("hidden");
var userName = localStorage.getItem("name");

clock();
setInterval(clock, 1000);

//get username and store it iff username is not already present
if (userName === null) {
    document.getElementById("getName").addEventListener("change", function() {
        userName = getUserName.value;
        getUserName.classList.add("hidden");
        storeUserData(userName)
        clock()
    })
} else{
    getUserName.classList.add("hidden");
    clock()
}

//The clock function
function clock() {
    var dateTime = new Date();
    if(dateTime.getHours() > 12){
        var Hour = dateTime.getHours() - 12;
    } else {
        var Hour = dateTime.getHours();
    }

    console.log(Hour)

    var Minutes = dateTime.getMinutes();
    //console.log(currentHour,dateTime.getMinutes(), dateTime.getSeconds());
    if( Minutes < 10){
        document.getElementById("view").textContent = Hour + ":" + '0'+ dateTime.getMinutes();
    }else{
        document.getElementById("view").textContent = Hour + ":" + dateTime.getMinutes();
    }

    var Phase = dayPhase(dateTime.getHours());
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
        document.getElementById("showname").textContent = "Good " + phase + ', ' + userName;
    }
    return 1;
}

//store user data
function storeUserData(username) {
    localStorage.setItem("name", username);
}

//can be used later :localStorage.clear();
