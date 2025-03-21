pelog = [262,282,303,384,409,262*2,282*2,303*2,384*2,409*2, 0]
pelog2 = [262*2,282*2,303*2,384*2,409*2, 0]
// establish freq for 2 oct pelog selisir scale// establish freq for 2 oct pelog selisir scale

// timbres = ["sine","triangle","sawtooth","square"]

let osc;
let ensemble = [];
let rhythmCycle = [10,20,40];
let mouseOsc;
let mouseActive = false;
let mouseCount = 0;


function setup() {
  noCanvas();
  osc = new p5.Oscillator();
  osc.freq(random(pelog));
  osc.setType('sine');
  osc.amp(0.5);
}

function draw() {
  if (frameCount % 10 == 1) {
    osc.freq(random(pelog));
    osc.pan(1);
    osc.start();
    for (let i = 0; i < ensemble.length; i++) {
      ensemble[i].freq(random(pelog2));
      ensemble[i].pan(random(-1,1));
      
    }
  }
}

function length(){
  random(rhythms);
  
}

function mousePressed() {
  mouseOsc = new p5.Oscillator();
  mouseOsc.setType('sine');
  mouseOsc.amp(0.5);
  mouseOsc.start();

  mouseActive = true;
  if (mouseActive == true){
    ensemble.push(mouseOsc);
    mouseCount += 1;
  }
  
}

