//let pal;
let maximavelocidad;
let movbolaxinicio = movbolax;
let movbolayinicio = movbolay;
let distx;
let distx2;
let distancefromtop;
let medidapala;
let angulo;
let incognita;
let puntuacionizq = 0;
let numimpactos = 0;
class Bolas {
  constructor(max) {
    this.x = (width / 2);
    this.y = (height / 2);
    maximavelocidad = max;

  }


  mostrarbola() {
    rectMode(CENTER);
    rect(this.x, this.y, width * anchobola / 600 * 2, width * altobola / 600 * 2);
  }

  moverbola() {
    this.x += movbolax;
    this.y += movbolay;
  }

  contactoizquierda(pal) {
    distx = ((this.x - anchobola) - (pal.xx + pal.ancho));

    if ((this.y > pal.yy - pal.alto) && (this.y < (pal.yy + pal.alto)) &&
      (distx < abs(movbolax) && distx >= 0)
    ) {

      song.play();
      distancefromtop = (this.y - (pal.yy - pal.alto));

      medidapala = pal.alto * 2;
      incognita = (PI / 4 + PI / 4);
      angulo = (-PI / 4 + (distancefromtop / medidapala) * incognita);
      //Si la bola esta en la punta de arriba, //distancefromtop/medidapala valdrá 0, así que el angulo = -PI/4 (-45º)
      //Si la bola esta en la punta de abajo, //distancefromtop/medidapala valdrá 1, así que el angulo = PI/4 (45º)



      movbolax = (numimpactos + abs(movbolax)) * cos(angulo);
      movbolay = (numimpactos + abs(movbolax)) * sin(angulo); //pongo movbolax porque tiene que coincidir el mismo numero que en la linea anterior
      numimpactos += 1 / 2;
      numimpactos = constrain(numimpactos, 0, maximavelocidad);

      if (puntosizquierda != 10) {

        puntosizquierdabackup = puntosizquierda;
        puntosderechabackup = puntosderecha;
      }
      puntosizquierda = 10; //el 10 es la figura del numero todo en negro

      puntosderecha = 10;

    }
  }


  contactoderecha(pal2) {
    distx2 = ((pal2.xx - pal2.ancho) - (this.x + anchobola));
    if (this.y > (pal2.yy - pal2.alto) && this.y < (pal2.yy + pal2.alto) &&
      distx2 < abs(movbolax) && distx2 >= 0) {
      song.play();

      distancefromtop = (this.y - (pal2.yy - pal2.alto));
      medidapala = pal2.alto * 2;
      incognita = ((6 * PI / 8) - (5 * PI / 4));
      angulo = (5 * PI / 4 + (distancefromtop / medidapala) * incognita);
      //incognita = (12*PI/8);
      //angulo = (-6*PI/8 + (1/2) * incognita);
      //Esta version (la de 135 y -135) no funciona, funciona //la de 135, 225


      movbolax = (numimpactos + abs(movbolax)) * cos(angulo);
      movbolay = (numimpactos + abs(movbolax)) * sin(angulo);
      if (puntosderecha != 10) {
        puntosizquierdabackup = puntosizquierda;
        puntosderechabackup = puntosderecha;
      }
      puntosizquierda = 10;

      puntosderecha = 10;


    }
  }


  esquinas() {
    if (palaextra) {
      if (this.y - altobola < 10 || this.y + altobola >= height - 10) {
        song.play();
        movbolay *= -1;
      }


    }
    if (this.y - altobola < 0 || this.y + altobola >= height) {
      song.play();
      movbolay *= -1;
    }

  }

  reset() {
    if (this.x < 0) {
      //|| this.x > width) {


      this.x = (width / 2);
      this.y = (height / 2);
      movbolax = movbolaxinicio;
      movbolay = movbolayinicio;
      numimpactos = 0;

    }
  }
  salidaizquierda() {
    if (this.x < 0) {
      song2.play();
      puntosizquierda = puntosizquierdabackup;

      puntosderecha = puntosderechabackup;

      puntosderecha++;
      puntosizquierdabackup = puntosizquierda;
      puntosderechabackup = puntosderecha;
      this.x = (width / 2);
      this.y = (height / 2);
      movbolax = movbolaxinicio;
      movbolay = movbolayinicio;
      numimpactos = 0;

    }
  }
  salidaderecha() {
    if (this.x > width) {
      song2.play();

      puntosderecha = puntosderechabackup;
      puntosizquierda = puntosizquierdabackup;

      puntosizquierda++;


      puntosderechabackup = puntosderecha;
      puntosizquierdabackup = puntosizquierda;
      this.x = (width / 2);
      this.y = (height / 2);

      movbolax = -movbolaxinicio;
      movbolay = -movbolayinicio;
      numimpactos = 0;

    }
  }
  golpeamuro(pal) {
    distx = ((this.x - anchobola) - (pal.xx + pal.ancho));

    if ((this.y > pal.yy - pal.alto) && (this.y < (pal.yy + pal.alto)) &&
      (distx < abs(movbolax) && distx >= 0)
    ) {
      song.play();
      movbolax *= -1;

    }
  }
  golpeamurodcha(pal2) {
    distx2 = ((pal2.xx - pal2.ancho) - (this.x + anchobola));
    if (this.y > (pal2.yy - pal2.alto) && this.y < (pal2.yy + pal2.alto) &&
      distx2 < movbolax && distx2 >= 0) {
      song.play();
      movbolax *= -1;

    }
  }

 

}