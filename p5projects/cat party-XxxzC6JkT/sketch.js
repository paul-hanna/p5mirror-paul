let catimg;
let bgimg;
let centerX = 0;
let centerY = 0;
let bg = [40,255,70];


function preload() {
  catimg = loadImage("https://freight.cargo.site/t/original/i/X2019496367546049453315078061822/IMG_4093.png");
  bgimg = loadImage('https://freight.cargo.site/t/original/i/V2019624554524019983200544194302/Untitled-2aa.png');
}



function mousePressed() {
  catTraits.push(new RotatingCat(mouseX, mouseY));
  bg = [random(255),random(255),random(255)];
//  let centerX = mouseX;
  // let centerY = mouseY;
//  translate(centerX, centerY);
}

class RotatingCat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rotation = 0;
  }

  update() {
    this.rotation = random(1,9);
    this.x += Math.random();
    this.x -= Math.random();
    this.y += Math.random();
    this.y -= Math.random();
    
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    image(catimg,0,0);
    pop();
  }
}


let catTraits = [];


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(bg);
  imageMode(CENTER);
  image(catimg,250,50);
  for (let i = 0; i < catTraits.length; i++) {
   catTraits[i].display();
   catTraits[i].update();
  
}
}