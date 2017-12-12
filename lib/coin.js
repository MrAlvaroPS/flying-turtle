function Coin(canvas, sprite) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = Math.random() * 900;
  this.y = Math.random() * 400;
  this.scale = 0.50;
  this.speed = 10;

  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.onload = (function() {
    this.sprite.isReady = true;
    this.sprite.hFrames = 10;
    this.sprite.vFrames = 1;
    this.sprite.fWidth = Math.floor(this.sprite.width / this.sprite.hFrames);
    this.sprite.fHeight = Math.floor(this.sprite.height / this.sprite.vFrames);
    this.sprite.hfIndex = 0;
    this.sprite.vfIndex = 0;

    this.width = this.sprite.fWidth * this.scale;
    this.height = this.sprite.fHeight * this.scale;
  }).bind(this);

  this.isFalling = false;
}

Coin.prototype.isReady = function() {
  return this.sprite.isReady;
};


Coin.prototype.stop = function() {
  this.sprite.hfIndex = 0;
};

// Coin.prototype.collide = function(element) {
//   return !(this.x + this.width < element.x ||
//     element.x + element.width < this.x ||
//     this.y + this.height < element.y ||
//     element.y + element.height < this.y);
//
// };

Coin.prototype.draw = function() {
  if (this.isReady()) {
    this.ctx.save();

    this.ctx.drawImage(
      this.sprite,
      this.sprite.hfIndex * this.sprite.fWidth,
      this.sprite.vfIndex * this.sprite.fHeight,
      this.sprite.fWidth,
      this.sprite.fHeight,
      Math.min(this.x, this.canvas.width),
      this.y,
      this.width,
      this.height
    );
    this.ctx.restore();
  }
};

Coin.prototype.giro = function() {
  if (this.sprite.hfIndex >= 9) {
    this.sprite.hfIndex = 0;
  } else {
    this.sprite.hfIndex++;
  }
};

Coin.prototype.tiempo = function() {
  setInterval(this.giro(), 500);
};
