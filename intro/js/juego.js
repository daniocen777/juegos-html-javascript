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
var miCanvas;

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
}

/* --------------------- Objetos --------------------- */
class Personaje {
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

console.log(personaje1);
