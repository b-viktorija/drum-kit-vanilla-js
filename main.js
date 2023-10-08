/*
selecting the first button and then using the addEventListener + click + anonymous function; 
document.querySelector("button")
  .addEventListener("click", function  () {
    console.log('clicked'); 
  }); */

// Detecting button press

// selecting all with class drum and then going through the array with a for each method; drum is the name we are giving the object in the array we are targeting, using arrow syntax and then an anonymous function that creates a variable and calls another function passing that variable in as a parameter;
document.querySelectorAll(".drum").forEach((drumElement) => {
  drumElement.addEventListener("click", function () {
    // creating a variable that's the inner html of 'this' - this being the button  clicked.
    let buttonHTML = this.innerHTML;
    // calling the sound function and inserting the button html as the key parameter;
    playDrums(buttonHTML);
    animateButton(buttonHTML);
  });
});

// Detecting keyboard press

document.addEventListener("keypress", function (event) {
  playDrums(event.key);
  animateButton(event.key); 
});

// switch statement, pics out the sound;
//if buttonHTML === w : function; else if button html is = to a :
// end each case with 'break';

function playDrums(key) {
  //key is an expression - the thing we are going to switch on;
  // we are inserting the key when calling the function; 
  let audio;

  switch (key) {
    // if key === w , play this; 
    case "w":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      // else if key === a , play this.. 
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    //default, like an else statement that covers all others:
    default:
      console.log("Not a key");
      break;
  }
}


// make button animated

function animateButton (currentKey) {
  let clickedButton = document.querySelector(`.${currentKey}`); 
  clickedButton.classList.add("pressed");

  // removes the class after 0.1 seconds; 
  // setTimeout takes 2 parameters now: an anonymous function and the time to wait before calling it; 
  setTimeout(function (){
    clickedButton.classList.remove("pressed"); 
  }, 100); 
  
}