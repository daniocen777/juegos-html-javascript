var canvas;
var ctx; // Contexto del canvas
var FPS = 50;
var anchoF = 50;
var altoF = 50;
var cesped = "#91cf5b"; // 0
var agua = "#7096ff"; // 1
var tierra = "#874123"; // 2
var escenario = [
  [0, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 1, 1],
  [0, 2, 2, 2, 2],
  [2, 2, 2, 0, 0],
];

function dibujaEscenario() {
  var color;
  for (let y = 0; y < escenario.length; y++) {
    for (let x = 0; x < escenario[y].length; x++) {
      if (escenario[y][x] == 0) {
        color = cesped;
      }

      if (escenario[y][x] == 1) {
        color = agua;
      }

      if (escenario[y][x] == 2) {
        color = tierra;
      }

      ctx.fillStyle = color;
      // fillRect(posiciónInicialX, posiciónInicialY,tamañoX, tamañoY)
      ctx.fillRect(x * anchoF, y * altoF, anchoF, altoF);
    }
  }
}

function inicializar() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d"); // tipo de visualización de la pantalla

  /*  */

  setInterval(function () {
    principal();
  }, 1000 / FPS);
}

function borrarCanvas() {
  canvas.width = 500;
  canvas.height = 400;
}

function principal() {
  borrarCanvas();
  dibujaEscenario();
}
