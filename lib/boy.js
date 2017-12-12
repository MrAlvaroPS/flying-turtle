function Boy(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;

  this.img = new Image();
  this.img.src = "./images/flying-boy.png";

  this.x = this.canvas.width;
  this.y = Math.random() * 400;
  this.speedX = 0;
  this.speedY = 0;

  this.width = 150;
  this.height = 50;
}


Boy.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  this.x -= 11;
};
