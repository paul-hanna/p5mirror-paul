  let puntos = 9;
class Points {
  constructor(x, y) {
    this.x = x;
    this.y = y;

  }

  dibujar(punt) {

    let numcero = [0, 255, 255, 255, 255, 255, 255];
    let numuno = [0, 0, 0, 255, 255, 0, 0];
    let numdos = [255, 0, 255, 255, 0, 255, 255];
    let numtres = [255, 0, 255, 255, 255, 255, 0];
    let numcuatro = [255, 255, 0, 255, 255, 0, 0];
    let numcinco = [255, 255, 255, 0, 255, 255, 0];
    let numseis = [255, 255, 255, 0, 255, 255, 255];
    let numsiete = [0, 0, 255, 255, 255, 0, 0];
    let numocho = [255, 255, 255, 255, 255, 255, 255];
    let numnueve = [255, 255, 255, 255, 255, 255, 0];
    let sinnumero = [0, 0, 0, 0, 0, 0, 0, ]

    let puntuaje = [numcero, numuno, numdos, numtres, numcuatro, numcinco, numseis, numsiete, numocho, numnueve, sinnumero];

    let pedo = puntuaje[punt];


    let centrox = this.x;
    let centroy = this.y;
    let Hancho = 30;
    let Halto = 5;
    let Vancho = Halto;
    let Valto = 40;
    rectMode(CENTER);
    //noStroke();
    fill(pedo[0], 90);
    rect(centrox, centroy, Hancho * 2, Halto * 2); //1
    fill(pedo[1], 90);
    rect(centrox - Hancho, centroy - Valto, Vancho * 2, Valto * 2); //2
    fill(pedo[2], 90);
    rect(centrox, centroy - Valto * 2, Hancho * 2, Halto * 2); //3

    fill(pedo[3], 90);
    rect(centrox + Hancho, centroy - Valto, Vancho * 2, Valto * 2); //4
    fill(pedo[4], 90);
    rect(centrox + Hancho, centroy + Valto, Vancho * 2, Valto * 2); //5
    fill(pedo[5], 90);
    rect(centrox, centroy + Valto * 2, Hancho * 2, Halto * 2); //6
    fill(pedo[6], 90);
    rect(centrox - Hancho, centroy + Valto, Vancho * 2, Valto * 2); //7
  }
}