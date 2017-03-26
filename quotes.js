let quoteContainer = document.querySelector(".jokeArea")

let state = {
  currentQuote:'',
}
function stateReset(){
  state.currentQuote = ''
}

function getQuote(){    
  fetch("http://api.icndb.com/jokes/random")
    .then((response)=>{
      return response.json()
    }).then((callback)=>{
      stateReset()
      quoteContainer.innerHTML = '"'+callback.value.joke+'"'
      state.currentQuote = callback.value.joke
      }
    )}

     let tweet = document.querySelector(".twitter-share-button")
     tweet.addEventListener("click", function(){
      window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+state.currentQuote)
    })

getQuote()

// To do -- Add state for current quote but have that state cleared when new quote is run. Then push the current quote into the tweet
