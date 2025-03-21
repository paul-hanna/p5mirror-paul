
let pet = false
let petCount = 0
let petThresh = 0
let trigger = false
let x = 0

let img;
let armimg;

function preload() {
  img = loadImage('https://freight.cargo.site/t/original/i/H2008453301627308107599147794174/cat2.png');
  armimg = loadImage('https://freight.cargo.site/t/original/i/G2008512159874985021550003584766/hand.png');
}


function catPet(){
  pet = true;
  petCount += 1;
  biteTest(petCount);
  draw();
}


function setup() {
  createCanvas(400, 400);
  petThresh = random(0,10);
}

function draw() {
  background(255);
  image(img,175,75);
  text('pet this cat?', 75,100);
  let petCat = createButton('pet');
  petCat.position(60, 200);
  petCat.mousePressed(catPet, armMove);
  text('pet '+petCount+' times', 100,300);
  if (petCount > petThresh) {
    text('too many pets >:(', 100,350);
    push();
    strokeWeight(8);
    line(222,110,200,100);
    line(232,112,260,100);
    pop();
  }
  if (pet==true){
    armMove();
   // loop();
  }

}

function armMove(){
  image(armimg,180,0+x);
  x+=1;
  if (x>60){
    pet=false;
  x=0
 // noLoop();
  }
 
  
}

function biteTest(petCount) {

}
  
