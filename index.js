var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/sounds_tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/sounds_tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/sounds_tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/sounds_tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/sounds_snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/sounds_crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/sounds_kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(key);
      break;
  }
}