let alto;
let ancho;
class Palas {
  constructor(posx, posy, anch, alt) {
    this.xx = posx;
    this.yy = posy;
    this.alto = alt;
    this.ancho = anch;
  }

  mostrarpala() {
    fill(255);
    rectMode(CENTER);
    rect(this.xx, this.yy, this.ancho * 2, this.alto * 2);
  }



  moverpala(valormov) {

    this.yy += valormov;
    this.yy = constrain(this.yy, this.alto, height - this.alto);
  }
}

class Muro {
  constructor(posx, posy, anch, alt) {
    this.xx = posx;
    this.yy = posy;
    this.alto = alt;
    this.ancho = anch;
  }

  mostrarmuro() {
    fill(255);
    rectMode(CENTER);
    rect(this.xx, this.yy, this.ancho * 2, this.alto * 2);
  }
  
  
}