var RIGHT_KEY = 39;

function Turtle(canvas, sprite) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = 0;
  this.y = 0;
  this.scale = 0.18;
  this.speed = 10;

  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.onload = (function() {
    this.sprite.isReady = true;
    this.sprite.hFrames = 2;
    this.sprite.vFrames = 2;
    this.sprite.fWidth = Math.floor(this.sprite.width / this.sprite.hFrames);
    this.sprite.fHeight = Math.floor(this.sprite.height / this.sprite.vFrames);
    this.sprite.hfIndex = 0;
    this.sprite.vfIndex = 0;

    this.width = this.sprite.fWidth * this.scale;
    this.height = this.sprite.fHeight * this.scale;
  }).bind(this);

  this.isFalling = false;

}

Turtle.prototype.isReady = function() {
  return this.sprite.isReady;
};

Turtle.prototype.onKeyUp = function(event) {
  if (event.keyCode == RIGHT_KEY) {
    this.stop();
  }
};

Turtle.prototype.onKeyDown = function(event) {
  if (event.keyCode == RIGHT_KEY) {
    this.moveRight();
  }
};

Turtle.prototype.moveRight = function() {
  if (this.sprite.hfIndex >= 2) {
    this.sprite.hfIndex = 1;
  } else {
    this.sprite.hfIndex++;
  }

  this.x += this.speed;
};

Turtle.prototype.stop = function() {
  this.sprite.hfIndex = 0;
};

Turtle.prototype.collide = function(elements) {
  collitions = elements.filter((function(e) {
    return e.collide(this);
  }).bind(this));

  if (collitions.length > 0) {
    if (collitions[0] instanceof Gap) {
      this.isFalling = true;
      this.fallOut();
      setInterval(this.fallOut.bind(this), 60);
    }
    return true;
  }
  return false;
};

Turtle.prototype.fallOut = function() {
  if (this.isFalling) {
    this.y += this.speed;
  }
};

Turtle.prototype.draw = function() {
  if (this.isReady()) {
    this.ctx.save();

    this.ctx.drawImage(
      this.sprite,
      this.sprite.hfIndex * this.sprite.fWidth,
      this.sprite.vfIndex * this.sprite.fHeight,
      this.sprite.fWidth,
      this.sprite.fHeight,
      Math.min(this.x, this.canvas.width / 2),
      this.y,
      this.width,
      this.height
    );
    this.ctx.restore();
  }
};

Turtle.prototype.moveUp = function() {
  this.y -= 10;
};

Turtle.prototype.moveDown = function() {
  this.y += 10;
};

Turtle.prototype.moveLeft = function() {
  this.x -= 10;
};

Turtle.prototype.moveRight = function() {
  this.x += 10;
};

Turtle.prototype.onkeydown = function(e) {
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

Turtle.prototype.onkeyup = function(e) {
  this.stopMove();
};

Turtle.prototype.stopMove = function() {
  ninja.speedX = 0;
  ninja.speedY = 0;
};
