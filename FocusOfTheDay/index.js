var inputDiv = document.getElementById("inputDiv");//form div
var taskDiv = document.getElementById('taskDiv'); //task div to display entered task
var dayTask = document.getElementById("dayTask"); //text input 
var task = document.getElementById("task"); //task span
var dayTasks = []; //array to store tasks 
var cross = document.getElementById("cross"); //cross icon to cancel/delete the task
var plus = document.getElementById("plus"); //cross icon to cancel/delete the task
plus.style.display = 'none';
inputDiv.style.display = 'none'; //initially hide input div
taskDiv.style.display ='none'; //initially hide task display div
var checkBox = document.getElementById("check");

  if(!localStorage['task']){
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
        task.innerHTML = localStorage.getItem('task');
        if(localStorage['textStyle']){
          task.style.textDecoration = localStorage.getItem('textStyle');
        }
        if(localStorage['checkbox']){
            checkBox.checked = (localStorage.getItem('checkbox')) == 'true';
            testCheck();
        } 
        taskDiv.style.display = 'inline';
        
        checkBox.addEventListener('click', function(){
          if(task.style.textDecoration === 'line-through'){
               task.style.textDecoration = 'none';
               checkBox.checked == false;
               localStorage.setItem('checkbox','false');
               localStorage.setItem('textStyle','none');
               testCheck();
          }
          else{
              task.style.textDecoration = 'line-through';
              checkBox.checked == true;
              localStorage.setItem('checkbox','true');
              localStorage.setItem('textStyle','line-through');
              testCheck();
          }
        });
        
        cross.addEventListener('click', deleteTask);

}

function deleteTask(){
    localStorage.removeItem('task');
      localStorage.removeItem('checkbox');
      localStorage.removeItem('textStyle');
     taskDiv.style.display = 'none';
     task.style.textDecoration = 'none';
    checkBox.checked = false; 
    testCheck();
    dayTask.value = '';
    inputDiv.style.display='block';
    dayTask.addEventListener('keydown', dayFocus);
}

function testCheck(){
  if(checkBox.checked){
    cross.style.display = 'none';
    plus.style.display = 'inline';
    plus.addEventListener('click', deleteTask);
  }
  else{
    cross.style.display = 'inline';
    plus.style.display = 'none';
    cross.addEventListener('click', deleteTask);
  }
}