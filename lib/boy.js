function Boy(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;

  this.img = new Image();
  this.img.src = "./images/flying-boy.png";

  this.x = this.canvas.width;
  this.y = Math.random() * 400;
  this.speedX = 0;
  this.speedY = 0;
}


Boy.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, 150, 50);
  this.x -= 13;
};
