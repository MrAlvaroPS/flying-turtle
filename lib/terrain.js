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

//////////////////Tortuga////////////////////


  this.turtle = new Turtle(this.canvas, "./images/turtle.png");
  setInterval(function() {
    this.turtle.vuelo();
  }.bind(this), 150);

//////////////////Gordos////////////////////

  this.fatties = [];
  this.fatties.push(new Boy(this.canvas, this.ctx));

  setInterval(function() {
    setInterval(function() {
      this.fatties.push(new Boy(this.canvas, this.ctx));
    }.bind(this), 7000);
  }.bind(this), 5000);


//////////////////Monedas////////////////////

  this.monedas = [];
  this.monedas.push(new Coin(this.canvas, "./images/coin.png"));

  setInterval(function() {
    this.monedas.push(new Coin(this.canvas, "./images/coin.png"));
  }.bind(this), 7000);

  window.onkeydown = this.onkeydown.bind(this);

}

Canvas.prototype.onkeydown = function(e) {
  this.turtle.onkeydown(e);
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

  this.turtle.draw();

  this.fatties.forEach(function(boy) {
    boy.draw();
  });

  this.monedas.forEach(function(coin) {
    coin.draw();
  });

};

var canvas = new Canvas();
canvas.start();
