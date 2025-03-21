let upr = true;
let upg = true;
let upb = true;
let r = 105;
let g = 55;
let b = 125;

function setup() {
  createCanvas(600, 400);  
}

function draw() {
  background (228, 244, 280, 100);  
  
  let i = 0;

  //tried using loop to draw grid, made it crash
  while (i < 10){
    stroke(10);
    line(i*width/10, 0,
        i*width/10, height);
          i++;
  }


stroke(10);
line(2.5*width/10, 0,
        2.5*width/10, height);
    
  
  //draw desk
  strokeWeight(0);
  fill(179,148,229);
  quad(width/5, 2*height/3,
       4*width/5, 2*height/3, 
       4*width/5+width/8, 4*height/5,
       width/5-width/8, 4*height/5
      );
  fill(135, 89, 212);
  rect(width/5-width/8, 4*height/5,
       (4*width/5+width/8)-(width/5-width/8), height/15
       );
  
  
  //draw monitor stands
  fill(43,48,63);
  rect(width/3-width/50,2*height/4,
      width/30, height/5);
    rect(2*width/3-width/20,2*height/4,
      width/30, height/5);
  
  
  //set r g b of monitors
  if (upr==true) {
    r++;
    if (r>=255) upr = false;
  }
  else if (upr==false) {
    r--;
    if (r<=55) upr = true;
  }
  
  if (upg==true) {
    g++;
    if (g>=155) upg = false;
  }
  else if (upg==false) {
    g--;
    if (g<=155) upg = true;
  }
  
  if (upb==true) {
    b=b*9;
    if (b>=255) upb = false;
  }
  else if (upb==false) {
    b--;
    if (b<=0) upb = true;
  }
  
  strokeWeight(7);
  stroke(43,48,63);
  fill(r,g,b);
  
  //draw 1st monitor
  quad(width/5, height/3+width/30, //top left
      3*width/7, height/3+width/50, //top right
      3*width/7+width/50, 3*height/5-height/15, //bottom right
       width/5+width/50, 3*height/5 //bottom left
      );
  
  //draw 2nd monitor
  quad(width/2+width/50, height/3, //top left
      4*width/5, height/3+width/50, //top right
      4*width/5, 3*height/5, //bottom right
       width/2, 6*height/11 //bottom left
      );
  
  //eyes
  strokeWeight(0);
  fill(238,213,71);
  circle(width/3.05, height/2.15, 53); 
  circle(2*width/3-width/40, height/2.15, 53); 
  
  
  
}
