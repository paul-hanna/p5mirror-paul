//over under 6 sips

// the goal is to create a for loop that takes a couple sips of 
// varying degree from a glass. to prompt it, 
// the user will click either over or under 6 sips and 
// attempt to wager against the invisible drinker

let xpos = 250
let ypos = 150
let xstep = 100
let ystep = 150
let over = true
let under = true


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  text("over or under six sips", 75, 125);
//grid 
// for (var i = 0; i < width; i += 10) {   
// 	line(i, 0, i, height);
//  	line(width, i, 0, i);
//  }

  let overButton = createButton('over');
  overButton.position(50, 200);
  let underButton = createButton('under');
  underButton.position(150, 200);
  overButton.mousePressed(overPress);
  underButton.mousePressed(underPress);
  
}

function sipsip() {
      let totalDrank = 0
  let empty = 0
//matcha content
  for (let i = 0; i < 6; i++) {
    //make straws
        if (i < 3) {
      push()
    fill(0, 0, 0, 100);
      strokeWeight(5)
     line((xpos+xstep*(i))+5,ypos-5,(xpos+xstep*(i))+60,ypos-120);
    pop()
        }
    if (i > 2) {
      push()
        fill(0, 0, 0, 100);
        strokeWeight(5);
        line((xpos+xstep*(i-3))+5,(ypos+(ystep))-5,(xpos+xstep*(i)-240),ypos+30);
      pop()
        }
    
    fill(134, 209, 96)
    // cumulative sip action at random
    let sip = random(5,20)
    totalDrank += sip

    if (totalDrank > 75) {
      empty += 1
    }
    else {
      let empty = 0
    }
    // text validation
    if (i == 5 && empty == 0 && over == true) {
    text("congrantulantions", 50, 250)
    }
    else if (i == 5 && empty >= 1 && over == true){
      text("no... incorrect", 50, 300)
    }
    else if ( i == 5 && empty >= 1 && under == true){
      text("connfngrants", 100, 300)
    }
    else if (i == 5 && empty == 0 && under == true){
      text("no... incorrect", 50, 300)
    }

    // draw the corresponding decrease
      if (i < 3) {
        rect(xpos+xstep*(i),ypos,50,-(75-(totalDrank)))
      }
    // test to see if matcha is empty
      if (i > 2 && totalDrank < 75) {
        rect(xpos+xstep*(i-3),ypos+(ystep),50,-(75-totalDrank))
      }
      if (i > 2 && totalDrank > 75) {
        rect(xpos+xstep*(i-3),ypos+(ystep),50,-(75-75))
      }
  }
  noLoop()
  //make cups
  for (let i = 0; i < 6; i++) {
    fill(170, 205, 230, 100)
      if (i < 3) {
        rect((xpos+xstep*(i)-5),ypos+5,60,-100)
      }
      if (i > 2) {
        rect((xpos+xstep*(i-3))-5,(ypos+(ystep))+5,60,-(100))
      }
  }
}

function overPress (){
  over = true
  under = false
  draw();
  sipsip();
  textTitle();
}

function underPress(){
  over = false
  under = true
  draw();
  textTitle();
  sipsip();
}

function textTitle(){
  text("over or under six sips", 75, 125);
}