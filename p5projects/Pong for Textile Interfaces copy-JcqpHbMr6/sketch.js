/* 

Pong for Textile Interfaces
Kate Hartman
Based on Pong by mragonias
https://editor.p5js.org/mragonias/full/yTDYn8pt

Modifications
- Left and right arrows rather than T & G
- Changes to color and instructional text

*/

let skill = 1;

let maximavelocidadbola = 3 / 2;
let velocidadpala = 6;
let movbolax = 7;
let movbolay = 0;

let anchobola = 4;
let altobola = 4;

let movimiento = 0;
let movimiento1 = 0;

let arranque = true;
let palaextra = false;
let playsolo = false;
let puntosizquierda = 0;
let puntosderecha = 0;
let puntosizquierdabackup = 0;
let puntosderechabackup = 0;
let start = false;

function preload() {
  song = loadSound("pa5a.wav");
  song2 = loadSound("pongblipa4.wav");
}

function setup() {
  createCanvas(1000, 600);
  //let palawidth = width*5/600;
  //let palaheight = height*30/400;
  let palawidth = ((width * 4) / 600) * skill;
  let palaheight = ((height * 20) / 400) * skill;
  pala1 = new Palas(width / 30, height / 2, palawidth, palaheight); //mitad del tamaño!
  pala2 = new Palas(width - width / 30, height / 2, palawidth, palaheight);

  pala3 = new Palas((width * 2) / 3, height / 2, palawidth, palaheight);
  pala4 = new Palas((width * 1) / 3, height / 2, palawidth, palaheight);

  bola1 = new Bolas(maximavelocidadbola);

  puntosizq = new Points(width / 2 - width / 6, 120);
  puntosdcha = new Points(width / 2 + width / 6, 120);

  muro1 = new Muro(5, height / 8, 5, height / 8);
  muro2 = new Muro(5, height - height / 8, 5, height / 8);
  muro3 = new Muro(width - 5, height / 8, 5, height / 8);
  muro4 = new Muro(width - 5, height - height / 8, 5, height / 8);
}

function draw() {
  if (arranque) {
    textSize(20);
    fill(255, 105, 180);
    textAlign(LEFT);
    text("LEFT PLAYER Up Key: LEFT ARROW", width / 15, height / 2 + 80);
    text("LEFT PLAYER Down Key: RIGHT ARROW", width / 15, height / 2 + 120);

    text(
      "RIGHT PLAYER Left Arrow Key: UP ARROW",
      width / 2 + 20,
      height / 2 + 80
    );
    text(
      "RIGHT PLAYER Right Arrow Key: DOWN ARROW",
      width / 2 + 20,
      height / 2 + 120
    );
    
    fill(255);
    rectMode(CORNER);
    rect(0, height - 160, width, height-160);
    
    fill(255, 105, 180);
    textAlign(CENTER);
    text("Click Mouse to Start/Reset ", width / 2, height - 120);
    text("Press SpaceBar to Pause ", width / 2, height - 80);
    text("Turn sound on for full experience!", width / 2, height - 40);

    /*
    fill(0, 102, 153);
    text("Single:  Button 1", width / 2 - width / 4, height / 2 + 200);
    text("Football:   Button 2 ", width / 2 + width / 12, height / 2 + 200);
    fill(255);
    */
  }
  for (let i = 0; i < height + 25; i += 20) {
    rect(width / 2, i, 2, 12);
  }

  noStroke();

  fill(0, 70);
  rect(0, 0, width * 2, height * 2);

  bola1.salidaizquierda();
  bola1.salidaderecha();
  puntosizq.dibujar(puntosizquierda);
  puntosdcha.dibujar(puntosderecha);

  pala2.mostrarpala();
  pala2.moverpala(movimiento);
  if (playsolo) {
    pala5 = new Palas(5, height / 2, 10, height);
    pala5.mostrarpala();
    bola1.contactoizquierda(pala5);
  } else if (!playsolo) {
    pala1.mostrarpala();
    pala1.moverpala(movimiento1);
  }

  if (palaextra) {
    pala3.mostrarpala();
    pala3.moverpala(movimiento1);
    bola1.contactoizquierda(pala3);
    pala4.mostrarpala();
    pala4.moverpala(movimiento);
    bola1.contactoderecha(pala4);
    muro1.mostrarmuro();
    muro2.mostrarmuro();
    muro3.mostrarmuro();
    muro4.mostrarmuro();

    bola1.golpeamuro(muro1);
    bola1.golpeamuro(muro2);
    bola1.golpeamurodcha(muro3);
    bola1.golpeamurodcha(muro4);
    rect(width / 2, 5, width, 10);
    rect(width / 2, height - 5, width, 10);
  }

  bola1.esquinas();
  bola1.contactoizquierda(pala1);
  bola1.contactoderecha(pala2);

  if (start) {
    bola1.moverbola();
  }

  bola1.mostrarbola();

  if (puntosderecha == 9) {
    final(false);
  }
  if (puntosizquierda == 9) {
    final(true);
  }
}

function reset() {
  start = false;
  bola1.x = width / 2;
  bola1.y = height / 2;
  pala1.xx = width / 30;
  pala1.yy = height / 2;
  pala2.yy = height / 2;
  pala2.xx = width - width / 30;
  pala2.yy = height / 2;
  pala3.xx = (width * 2) / 3;
  pala3.yy = height / 2;
  pala4.xx = (width * 1) / 3;
  pala4.yy = height / 2;
  puntosizquierda = 0;
  puntosderecha = 0;
  movbolax = 7;
  movbolay = 0;
  numimpactos = 0;
}

function mousePressed() {
  reset();
  arranque = false;
  start = !start;
  loop();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    movimiento = -velocidadpala;
  } else if (keyCode === DOWN_ARROW) {
    movimiento = velocidadpala;
  } else if (keyCode === LEFT_ARROW) {
    movimiento1 = -velocidadpala;
  } else if (keyCode === RIGHT_ARROW) {
    movimiento1 = velocidadpala;
  } else if (key === "2") {
    palaextra = !palaextra;
    if (playsolo) {
      playsolo = !playsolo;
    }
    pala3.yy = pala1.yy;
    pala4.yy = pala2.yy;
    reset();
  } else if (key === "1") {
    playsolo = !playsolo;
    if (palaextra) {
      palaextra = !palaextra;
    }
    reset();
  } else if (keyCode === 32) {
    start = !start;
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    movimiento = 0;
  } else if (keyCode === DOWN_ARROW) {
    movimiento = 0;
  } else if (keyCode === LEFT_ARROW) {
    movimiento1 = 0;
  } else if (keyCode === RIGHT_ARROW) {
    movimiento1 = 0;
  }
}
