// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// //se declara el alto y ancho para el lienzo de canvas
// canvas.width = 1000;
// canvas.height = 600;
// //se añande la imagen
// var img = new Image();
// ctx.scale(0.75,0.75);
// img.src = "./images/bg2.png";
//
// img.onload = (function() {
//   this.ctx.drawImage(img, 0, 0, 1000, 400);
// }).bind(this);
//
// //se declaran las variables de los ejes
//
// var x = 0;
// var y = 0;
//
//
// //se llama a la funcion draw en un intervalo de 20, recordar que 1000 equivale a 1 segundo
// setInterval(draw, 20);
//
//
// //funcion para el pintado de la imagen
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
//     Boy();
// }
