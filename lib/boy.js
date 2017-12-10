// function Boy() {
//   this.canvas = canvas;
//   this.ctx = this.canvas.getContext('2d');
//
//
//   var img = new Image();
//   img.src = "./images/flying-boy.png";
//
//   img.onload = (function() {
//     this.ctx.drawImage(img, 1000, 200, 150, 50);
//   }).bind(this);
// }
//
// setInterval(draw, 20);
//
//
// function draw() {
//
//   //si X tiene un valor menor que 0 se le asigna el ancho del canvas
//   if (x < 0) {
//     x = canvas.width;
//   }
//   //si X es menor que el ancho del canvas
//   if (x < canvas.width) {
//     //pinta la imagen por detras al valor de la X
//     ctx.drawImage(img, x - img.width, y, img.width, img.height);
//   }
//
//
//
//   //pinta la imagen despues del valor de la X
//   ctx.drawImage(img, x, y, img.width, img.height);
//   x -= 0.5; //incremento de la x para dar movimiento a la imagen
// }
