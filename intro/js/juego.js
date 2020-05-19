/* --------------------- 013 Lectura del Teclado --------------------- */
/* document.addEventListener("keydown", function (tecla) {
  // console.log(tecla.keyCode); => Número que representa la tecla
  if (tecla.keyCode == 32) {
    console.log("Espacio");
  }

  if (tecla.keyCode == 38) {
    console.log("Arriba");
  }
}); */

/* --------------------- Usando libría keypress --------------------- */
/* var configTeclado = {
  // para dejar pulsada y se mueva el objeto
  prevent_repeat: true,
};
// Elemento que espera la puslsación del teclado
var eventoTeclado = new window.keypress.Listener(this, configTeclado);

function pulsaA() {
  console.log("Has pulsado A");
}

function pulsaAB() {
  console.log("Has pulsado A y B");
}

eventoTeclado.simple_combo("a", pulsaA);
eventoTeclado.simple_combo("a b", pulsaAB);

function ataqueEspecial() {
  console.log("Ataque especial");
}

eventoTeclado.sequence_combo("up down a b", ataqueEspecial);
 */

/* --------------------- Lectura del Raton --------------------- */
/* var miCanvas;

function inicializar() {
  miCanvas = document.getElementById("canvas");
  //Creando los listeners
  miCanvas.addEventListener("mousedown", clicRaton, false); // Pusla ratón
  miCanvas.addEventListener("mouseup", sueltaRaton, false); // Suelta ratón
  miCanvas.addEventListener("mousemove", posicionRaton, false); // Suelta ratón
}

function clicRaton(event) {
  console.log("Pulsa ratón");
}

function sueltaRaton(event) {
  console.log("Suelta ratón");
}

function posicionRaton(event) {
  var x = event.pageX;
  var y = event.pageY;
  console.log("X: " + x + " -Y: " + y);
} */

/* --------------------- Objetos --------------------- */
/* class Personaje {
  x = 0;
  y = 0;
  nombre = "personaje";

  constructor(x, y, nombre) {
    this.x = x;
    this.y = y;
    this.nombre = nombre;
  }

  abajo() {
    this.y += 10;
  }
}

personaje1 = new Personaje(5, 100, "Pepe");
personaje2 = new Personaje(522, 313, "Mario");

personaje1.abajo();

console.log(personaje1); */

/* --------------------- Canvas --------------------- */
var canvas;
var ctx; // Contexto del canvas
var FPS = 50;
// Para dibujar una imagen
var imgRex;

class Protagonista {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.valocidad = 3;
  }

  dibuja() {
    ctx.drawImage(imgRex, this.x, this.y);
  }

  texto() {
    ctx.font = "30px impact";
    ctx.fillStyle = "#55555";
    ctx.fillText("x: " + this.x, 100, 100);
  }

  arriba() {
    this.y -= this.valocidad;
  }

  abajo() {
    this.y += this.valocidad;
  }

  izquierda() {
    this.x -= this.valocidad;
  }

  derecha() {
    this.x += this.valocidad;
  }
}

class Personaje {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.derecha = true;
  }

  dibuja() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, 50, 50);
  }

  mueveDerecha() {
    this.x += 1;
  }

  mueve(velocidad) {
    if (this.derecha) {
      if (this.x < 400) {
        this.x += velocidad;
      } else {
        this.derecha = false;
      }
    } else {
      if (this.x > 50) {
        this.x -= velocidad;
      } else {
        this.derecha = true;
      }
    }
  }
}

function inicializar() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d"); // tipo de visualización de la pantalla
  imgRex = new Image(30, 30);
  imgRex.src = "img/erizo.gif"; // Cargando imagen
  console.log(imgRex);
  setInterval(function () {
    principal();
  }, 1000 / FPS);
}

function principal() {
  borrarCanvas();
  per1.dibuja();
  per2.dibuja();
  per3.dibuja();

  per1.mueve(1);
  per2.mueve(3);
  per3.mueve(7);

  protagonista.dibuja();
  protagonista.texto();
}

// Creando personajes
var per1 = new Personaje(10, 50);
var per2 = new Personaje(10, 120);
var per3 = new Personaje(10, 250);
// Creando protagonista (rex)
var protagonista = new Protagonista(200, 200);

function borrarCanvas() {
  canvas.width = 500;
  canvas.height = 400;
}

// Listeners
document.addEventListener("keydown", function (tecla) {
  /* console.log(tecla.keyCode); Para saber las teclas */
  // Arriba
  if (tecla.keyCode == 38) {
    protagonista.arriba();
  }

  // Abajo
  if (tecla.keyCode == 40) {
    protagonista.abajo();
  }

  // Izquierda
  if (tecla.keyCode == 37) {
    protagonista.izquierda();
  }

  // Derecha
  if (tecla.keyCode == 39) {
    protagonista.derecha();
  }
});
