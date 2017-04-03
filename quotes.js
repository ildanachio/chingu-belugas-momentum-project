var quoteContainer = document.querySelector(".jokeArea");
var bgColor = document.getElementsByClassName("backgroundColorChange");
var textColor = document.getElementsByClassName("textColorChange");
var clickArea = document.getElementById("newJoke");

clickArea.onclick = function(){getQuote()};

var state = {
  currentQuote:'',
  color:''
}
function stateReset(){
  state.currentQuote = ''
  //state.color = 'lawngreen'
}
function newColor(){
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
}

function applyColor(elements){
  for (i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = state.color;
    }
}

function getQuote(){    fetch("http://api.icndb.com/jokes/random")
    .then((response)=>{
      return response.json()
    }).then((callback)=>{
      stateReset()
      state.color = newColor()
      //applyColor(bgColor)
      //applyColor(textColor)
      quoteContainer.innerHTML = '"'+callback.value.joke+'"';
      $(".jokeArea").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated pulse');
      state.currentQuote = callback.value.joke;
    
    }); 
      }
    )}

    // let tweet = document.querySelector(".twitter-share-button")
    // tweet.addEventListener("click", function(){
    //   window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+state.currentQuote)
    // })

getQuote()

// To do -- Add state for current quote but have that state cleared when new quote is run. Then push the current quote into the tweet
