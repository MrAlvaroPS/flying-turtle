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

  //////////////////Fatties////////////////////

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

  window.onkeydown = this.onkeydown.bind(this);
}

Canvas.prototype.onkeydown = function(e) {
  this.turtle.onkeydown(e);
};

Canvas.prototype.start = function() {
  this.monedasCount = 0;
  this.fattiesCount = 0;

  this.interval = setInterval(function() {
    this.draw();

    if (this.monedasCount++ > 200) {
      this.monedas.push(new Coin(this.canvas, "./images/coin.png"));
      this.monedasCount = 0;
    }

    // if (this.fattiesCount++ > 175) {
    //   this.fatties.push(new Boy(this.canvas, this.ctx));
    //   this.fattiesCount = 0;
    // }



    // check colisiones

    this.monedas.forEach(function(moneda) {
      if ((this.turtle.x > moneda.x &&
        this.turtle.x < (moneda.x + moneda.width)) &&
        (this.turtle.y > moneda.y &&
          this.turtle.y < (moneda.y + moneda.height))) {
        console.log ("has chocado");
      }

    }.bind(this));


  }.bind(this), 40);
};

////////////////DRAW////////////////////

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
    coin.tiempo();
  });
};
