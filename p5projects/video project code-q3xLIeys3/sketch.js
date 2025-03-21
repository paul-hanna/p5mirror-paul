let vid;
let pl = 10;

function setup() {
  createCanvas(640, 480);
  vid = createVideo("hmn.mp4");
  pixelDensity(1);
  vid.size(640, 480);
  vid.loop();
  vid.hide();
  vid.volume(0);
  noStroke();
  rectMode(CENTER);
}
function draw() {
  background(220);
  vid.loadPixels();
  push();
  fill(255,0,0);
  //filter(POSTERIZE, 8);
  for (let y = 0; y < height/2; y += pl) {
    for (let x = 0; x < width/2; x += pl) {
    let i = (x + y * width) * 4;

    let r = vid.pixels[i];
    let g = vid.pixels[i + 1];
    let b = vid.pixels[i + 2];
    let a = vid.pixels[i + 3];

    fill(r, g, b, a);
    square(x, y, pl,pl);

  pop();
  push();
  fill(0,255,0);
  for (let y = 0; y < height/2; y += pl) {
    for (let x = width/2; x < width; x += pl) {
      
      let i = (x + y * width) * 4;

      let r = vid.pixels[i];
      let g = vid.pixels[i + 1];
      let b = vid.pixels[i + 2];
      let a = vid.pixels[i + 3];

      fill(r, g, b, a);
      square(x, y, pl,pl);

    }
  }
  pop();
  push();
  fill(0,0,255);
  for (let y = height/2; y < height; y += 10) {
    for (let x = 0; x < width/2; x += 5) {
              
        let i = (x + y * width) * 4;

        let r = vid.pixels[i];
        let g = vid.pixels[i + 1];
        let b = vid.pixels[i + 2];
        let a = vid.pixels[i + 3];

        fill(r, g, b, a);
        square(x, y, pl,pl);
    }
  }
  pop();
  push();
  fill(0,0,0);
  for (let y = height/2; y < height; y += 10) {
    for (let x = width/2; x < width; x += 5) {
      
          let i = (x + y * width) * 4;

          let r = vid.pixels[i];
          let g = vid.pixels[i + 1];
          let b = vid.pixels[i + 2];
          let a = vid.pixels[i + 3];

          fill(r, g, b, a);
          square(x, y, pl,pl);
    }
  }
  pop();
}
  }
}