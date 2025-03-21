let myShader;
let tvShader;
let disShader;
let pg; 
let vert = `
precision highp float;

attribute vec3 aPosition;

// The transform of the object being drawn
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform float time;

void main() {
  vec4 viewModelPosition = uModelViewMatrix * vec4(aPosition, 1.0);
  viewModelPosition.x += 10.0 * sin(time * 0.01 + viewModelPosition.y * 0.1);
  gl_Position = uProjectionMatrix * viewModelPosition;
}
`;

let frag = `
precision highp float;

uniform vec4 u_color; // Accept color as a uniform

void main() {
  gl_FragColor = u_color; // Use the passed color
}

`;

let vert1 = `
precision highp float;

attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 v_uv;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

void main() {
  v_uv = aTexCoord;
  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
}
`;

let frag1 = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;

varying vec2 v_uv;

void main() {
  vec2 uv = v_uv;

  // Slight distortion over time
  uv.y += 0.02 * sin(uv.x * 10.0 + u_time * 2.0);
  uv.x += 0.01 * sin(uv.y * 20.0 + u_time * 3.0);

  vec3 color = texture2D(u_texture, uv).rgb;

  // Add noise
  float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
  color += 0.1 * noise;

  gl_FragColor = vec4(color, .25);
}
`;


let song;
let lastChangeTime = 0; 
let bgColor = [0, 0, 250];

let songPlayed = false; 


let shapes = [
  (size) => pg.box(size),      
  (size) => pg.cone(size),      
  (size) => pg.cylinder(size), 
  (size) => pg.ellipsoid(size), 
  (size) => pg.plane(size),     
  (size) => pg.sphere(size),    
  (size) => pg.torus(size)      
];

let drawShapes = [];

function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound('coconutmall.mp3');
}

function setup() {
  
  createCanvas(1920, 1080, WEBGL);

  myShader = createShader(vert, frag);
  
  tvShader = createShader(vert1, frag1); 
  pg = createGraphics(1920, 1080, WEBGL);
  pg2 = createGraphics(1920, 1080, WEBGL);
  setupPlayer(); 

  for (let i = 0; i < 8; i++) {
    drawShapes.push({
      type: floor(random(shapes.length)), 
      rotateX: random(0.01, 0.04),      
      rotateY: random(0.01, 0.05),        
      translateX: random(-1000, 1000),      
      translateY: random(-500, 500),      
      translateZ: random(-50, 50),       
      velocityX: random(-5, 5), 
      velocityY: random(-5, 5), 
      velocityZ: random(-3, 3),
      color: [
        random(255), 
        random(255), 
        random(255), 
        random(250) 
      ],
      size: random(150,200),
    });
  }

}

function mouseMoved() {
  if (!songPlayed && !song.isPlaying()) {
    song.loop(); 
    songPlayed = true;
  }
}

function draw() {
  clear(); 
  // let currentTime = millis();
  // if (currentTime - lastChangeTime > 10000) {  
  //   bgColor = [random(100,255), random(100,255), random(100,255)];
  //   lastChangeTime = currentTime;  
  // }

  background(bgColor[0], bgColor[1], bgColor[2], 100);
  pg.clear(); 
  pg.shader(myShader);

  for (let shape of drawShapes) {
    shape.translateX += shape.velocityX;
    shape.translateY += shape.velocityY;
    shape.translateZ += shape.velocityZ;

    if (shape.translateX > 1000 || shape.translateX < -1000) shape.velocityX *= -1;
    if (shape.translateY > 500 || shape.translateY < -500) shape.velocityY *= -1;
    if (shape.translateZ > 20 || shape.translateZ < -90) shape.velocityZ *= -1;
    
    pg.push();
    pg.translate(shape.translateX, shape.translateY, shape.translateZ);
    pg.rotateX(frameCount * shape.rotateX);  
    pg.rotateY(frameCount * shape.rotateY);
    myShader.setUniform("u_color", [(sin(shape.color[0] / 255.0)), (sin(shape.color[1] / 255.0)), (sin(shape.color[2] / 255.0)), 1.0]);
    pg.stroke(255);  
    shapes[shape.type](shape.size); 
    pg.pop();
  }

  shader(tvShader); 
  tvShader.setUniform("u_resolution", [width, height]);
  tvShader.setUniform("u_time", millis() / 1000.0);
  tvShader.setUniform("u_texture", pg); 

  noStroke();
  rect(-width / 2, -height / 2, width, height);
}
