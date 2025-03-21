let osc;

function setup() {
  createCanvas(400, 400);
  osc = new p5.Oscillator();
  osc.freq(880);
  osc.amp(0.5);
  osc.setType('square');
  osc.start();
  
}

function draw() {
 // background(map(sin(frameCount*0.1),-1,1,0,255));
}