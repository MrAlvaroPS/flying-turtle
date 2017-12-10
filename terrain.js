function Canvas(id) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.canvas.width = 1000;
  this.canvas.height = 500;

  this.img = new Image();
  this.img.src = "./images/bg2.png";
  this.x = 0;
  this.y = 0;

  this.img.onload = (function() {
    this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width, this.canvas.height);
  }).bind(this);


  this.ninja = new Ninja(this.canvas, this.ctx);

  this.fatties = [];
  this.fatties.push(new Boy(this.canvas, this.ctx));

  setInterval(function (){
    this.fatties.push(new Boy(this.canvas, this.ctx));
  }.bind(this), 2300);

  window.onkeydown = this.onkeydown.bind(this);
}

Canvas.prototype.onkeydown = function(e) {
  this.ninja.onkeydown(e);
};

Canvas.prototype.start = function() {
  this.interval = setInterval(this.draw.bind(this), 40);
};

Canvas.prototype.draw = function() {

  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  if (this.x <= 0) {
    this.x = this.canvas.width;
  }

  this.ctx.drawImage(this.img, this.x - this.canvas.width, this.y, this.canvas.width, this.canvas.height);
  this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width, this.canvas.height);
  this.x -= 3;

  this.ninja.draw();
  this.fatties.forEach(function(boy) {
    boy.draw();
  });
};

var canvas = new Canvas();
canvas.start();