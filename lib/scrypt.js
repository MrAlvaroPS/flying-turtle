window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

    var canvas = new Canvas();
    canvas.start();
    
    var sound = new Audio ("./images/audio.mp3");
       sound.play();
  }

};
