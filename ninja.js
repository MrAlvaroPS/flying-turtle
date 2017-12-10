function Ninja(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;

  this.img = new Image();
  this.img.src = "./images/ninja-rep.png";

  this.x = 0;
  this.y = 350;
  this.speedX = 0;
  this.speedY = 0;
}

Ninja.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, 125, 100);
};

Ninja.prototype.moveUp = function() {
  this.y -= 10;
};

Ninja.prototype.moveDown = function() {
  this.y += 10;
};

Ninja.prototype.moveLeft = function() {
  this.x -= 10;
};

Ninja.prototype.moveRight = function() {
  this.x += 10;
};

Ninja.prototype.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      this.moveUp();
      break;
    case 40:
      this.moveDown();
      break;
    case 37:
      this.moveLeft();
      break;
    case 39:
      this.moveRight();
      break;
  }
};

Ninja.prototype.onkeyup = function(e) {
  this.stopMove();
};

Ninja.prototype.stopMove = function() {
  ninja.speedX = 0;
  ninja.speedY = 0;
};
