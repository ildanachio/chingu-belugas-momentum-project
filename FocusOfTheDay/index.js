var inputDiv = document.getElementById("inputDiv");//form div
var taskDiv = document.getElementById('taskDiv'); //task div to display entered task
var dayTask = document.getElementById("dayTask"); //text input 
var task = document.getElementById("task"); //task span
var dayTasks = []; //array to store tasks 
var cross = document.getElementById("cross"); //cross icon to cancel/delete the task
inputDiv.style.display = 'none'; //initially hide input div
taskDiv.style.display ='none'; //initially hide task display div
//if(localStorage['task'] !== null) dayTasks.push(localStorage['task']);

if(localStorage['task'] == null){
    taskDiv.style.display ='none'; 
    inputDiv.style.display = 'block';
    dayTask.addEventListener('keydown', dayFocus);
  }
  else{
      displayTask();
  }


function dayFocus(e){
 if(dayTask.value.length !== 0){ //dont process if no character is entered
  if(e.keyCode == 13){
    inputDiv.style.display='none';
    dayTasks.push(dayTask.value);
    localStorage.setItem('task',dayTasks[dayTasks.length - 1]); //the latest task entered is stored in localStorage
    displayTask();
  }
  }
}

function displayTask(){
        task.innerHTML = 'TODAY <br><input type="checkbox" name="dayTask" class="css-checkbox" />'+localStorage.getItem('task');
        taskDiv.style.display = 'inline';
        cross.addEventListener('click', deleteTask);
}

function deleteTask(){
   // dayTasks = dayTasks.pop();
    //if(dayTasks.length !== 0) localStorage.setItem('task',dayTasks[dayTasks.length -1]);
   // else {
     taskDiv.style.display = 'none';
      localStorage.setItem('task',null); 
      
   // }
    dayTask.value = '';
    inputDiv.style.display='block';
    dayTask.addEventListener('keydown', dayFocus);
}


