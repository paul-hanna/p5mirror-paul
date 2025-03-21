function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(54, 84, 135);
  strokeWeight(4);
  
  fill(245, 210, 162);
  rect(150,200,100,300)
  ellipse(200,200,250,300);
  
  fill(0,0,0);
  ellipse(200,270,50,30);
  
  fill(245, 210, 162);
  triangle(200,300,175,200,225,200);
  
  fill(0,0,0);
  ellipse(130,170,40,40);
  ellipse(260,170,40,40);

  line(200,20,200,100);
  line(210,30,210,100);
  line(220,40,220,100);
  line(230,20,230,100);
  line(260,40,240,100);
  line(180,20,190,100);
  line(170,20,180,100);
  line(160,30,150,100);
  line(150,30,160,100);
  
  line(120,250,200,350);
  
  fill(74, 115, 45);
  push(); 
    rotate(-.3); 
    ellipse(80,360,30,50);
  pop();
 
  fill(227, 227, 227,100)
  
  triangle(120,275,280,275,200,370);
  fill(228, 237, 206,100)
 
  triangle(142,300,258,300,200,370);
  line(200,370,200,450);

  
}