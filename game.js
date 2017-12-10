function Game(canvasId) {
  this.canvas = document.getElementById("canvas");
  this.canvas.width = 1000;
  this.canvas.height = 400;
  this.ctx = this.canvas.getContext('2d');

  this.elements = [];
  this.elements.push(new Gap(canvas, 1120, 220, 2, 17, 17));

  this.turtle = new Turtle(this.canvas, "./images/turtle.png");

  this.bg = new Image();
  this.bg.src = "bg2.png";
  this.bg.xPos = 0;
  this.bg.xLand = 0;
  this.bg.speed = 10;
  this.bg.onload = (function() {
    this.bg.isReady = true;
    this.canvas.height = this.bg.height;
    this.bg.xLand = this.bg.height - 80;

    this.turtle.x = 50;
    this.turtle.y = this.bg.xLand;
  }).bind(this);

  document.onkeydown = this.onKeyDown.bind(this);
  document.onkeyup = this.onKeyUp.bind(this);
}

Game.prototype.isReady = function() {
  return this.bg.isReady && this.turtle.isReady();
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.onKeyDown = function(event) {
  if (!this.turtle.collide(this.elements)) {
    if (event.keyCode == RIGHT_KEY && this.turtle.x >= this.canvas.width / 2) {
      this.moveBgRight();
    }
    this.turtle.onKeyDown(event);
  }
};

Game.prototype.onKeyUp = function(event) {
  this.turtle.onKeyUp(event);
};

Game.prototype.moveBgRight = function() {
  this.bg.xPos -= this.bg.speed;
};

Game.prototype.drawBg = function() {
  if (this.bg.isReady) {
    this.ctx.save();
    this.ctx.drawImage(
      this.bg,
      this.bg.xPos,
      0
    );
    this.ctx.restore();
  }
};

Game.prototype.draw = function() {
  if (this.isReady()) {
    this.clear();
    this.drawBg();
    this.turtle.draw();
  }
  window.requestAnimationFrame(this.draw.bind(this));
};

var game = new Game("canvas");
game.draw();
