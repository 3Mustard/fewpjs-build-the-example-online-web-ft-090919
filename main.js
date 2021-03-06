// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let hearts;

let heartStates = {
  '♡': '♥',
  '♥': '♡'
}

let colorStates = {
  "red": "",
  "": "red"
}

// Your JavaScript code goes here!
window.addEventListener('load', (e) => {
  setupPage();
});

function setupPage(){
  setupLikes();
}

function setupLikes(){
  hearts = document.querySelectorAll(".like");
  for (heart of hearts){
    heart.addEventListener('click',clickLikes);
  }
}

function clickLikes(e){
  let heart = e.target;
  mimicServerCall(fakeUrl)
  .then((serverMessage) => {
    heart.innerText = heartStates[heart.innerText];
    heart.style.color = colorStates[heart.style.color];
  })
  .catch((error) => {
    alert(`${error}`);
  });
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
