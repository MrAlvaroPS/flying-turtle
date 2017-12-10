function Ninja(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;

  this.sprite = new Image();
  this.sprite.src = "./images/turtle.png";
  this.sprite.isReady = false;

  this.x = 0;
  this.y = 350;
  this.speed = 13;

  this.sprite.onload = (function() {
    this.sprite.isReady = true;
    this.sprite.hFrames = 2;
    this.sprite.vFrames = 1;
    this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.hFrames);
    this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.vFrames);
    this.sprite.hfIndex = 0;
    this.sprite.vfIndex = 0;
    this.width = this.sprite.frameWidth;
    this.height = this.sprite.frameHeight;
  }).bind(this);
}


// this.speedX = 0;
// this.speedY = 0;

Ninja.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, 125, 100);
  //
  // if (this.sprite.isReady) {
  //   this.ctx.drawImage(
  //     this.sprite,
  //     this.sprite.hfIndex * this.sprite.frameWidth,
  //     this.sprite.vfIndex * this.sprite.frameHeight,
  //     this.sprite.frameWidth,
  //     this.sprite.frameHeight,
  //     Math.min(this.x, this.canvas.width / 2),
  //     this.y,
  //     this.width,
  //     this.height
  //   );
  // }
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
