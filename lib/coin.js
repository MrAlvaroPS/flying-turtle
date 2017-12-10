function Coin(canvas, sprite) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = 500;
  this.y = 150;
  this.scale = 0.18;
  this.speed = 10;

  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.onload = (function() {
    this.sprite.isReady = true;
    this.sprite.hFrames = 1;
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

// Coin.prototype.collide = function(elements) {
//   collitions = elements.filter((function(e) {
//     return e.collide(this);
//   }).bind(this));
//
//   if (collitions.length > 0) {
//     if (collitions[0] instanceof Gap) {
//       this.isFalling = true;
//       this.fallOut();
//       setInterval(this.fallOut.bind(this), 60);
//     }
//     return true;
//   }
//   return false;
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
