pelog = [262,282,303,384,409,262*2,282*2,303*2,384*2,409*2, 0]
pelog2 = [262*2,282*2,303*2,384*2,409*2, 0]
// establish freq for 2 oct pelog selisir scale// establish freq for 2 oct pelog selisir scale

// timbres = ["sine","triangle","sawtooth","square"]

let osc;
let ensemble = [];
let rhythmCycle = 10;
let mouse0sc;
let mouseActive = false;
let mouseCount = 0;
rhythms = ["2n","4n","8n"]


function setup() {
  noCanvas();
  rr = random(rhythms);
  osc = new p5.Oscillator();
  osc.freq(random(pelog));
  osc.setType('sine');
  osc.amp(0.5);
  mouseOsc = new p5.Oscillator();
  mouseOsc.setType('sine');
  mouseOsc.amp(0.5);
}

function draw() {
  if (frameCount % 10 == 1) {
    osc.freq(random(pelog));
    osc.pan(1);
    osc.start();
    for (let i = 0; i < mouseCount; i++) {
    
      mouseOsc.freq(random(pelog2));
      mouseOsc.pan(-1);
      mouseOsc.start();
      ensemble.push(mouse0sc);
    
    }
  }
}

function mousePressed() {
  mouseActive = true;
  if (mouseActive == true){
    mouseCount += 1;
    mouseActive = false;
  }
  
}

