
//https://editor.p5js.org/leslairy/sketches/EOXlATNRo
//https://editor.p5js.org/leslairy/sketches/OYF-BW9Ea



//fear


let grotesk;
let hiArray;
let r=0;

//lonely
let str = '  l o n e l y';
let startAngle =   -180;     
let distanceAngle = 360;   
let radius;               
let font;

//tense
let gridSize =7;  
let points = [];    
let font2;
let img;

let doubt

//happySad
let gridSizeHS = 20; 
let pointsHS = [];  
let fontHS;

//crazy
let light, black, z;

//happiness
let letters; 
let fontHAPPY;

//calm
let xc, yc;
let calm;

let speed=16;
let whichScene=0;
let introDuration = 7000;  // milliseconds (1000 = 1 second)
let introStartTime;

let scene1Duration = 7000;
let scene1StartTime;

let scene2Duration = 7000;
let scene2StartTime;

let scene3Duration = 7000;
let scene3StartTime;

let scene4Duration = 7000;
let scene4StartTime;

let scene5Duration = 7000;
let scene5StartTime;

let scene6Duration = 7000;
let scene6StartTime;

let end

function preload(){  
  grotesk= loadFont("assets/skinnyfont.ttf")
  font= loadFont("assets/Oswald-VariableFont_wght.ttf")
  font2= loadFont("assets/skinnyfont.ttf")
  fontHS= loadFont("assets/skinnyfont.ttf")
  black = loadFont('assets/crazy.ttf');
  fontHAPPY=loadFont('assets/fri.ttf');
  calm=loadFont('assets/FredokaOne-Regular.ttf');
  doubt= loadFont('assets/Comfortaa-VariableFont_wght.ttf')
  end = loadFont('assets/Newsreader-VariableFont_opsz,wght.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background('rgb(33, 82, 136)');
  introStartTime = millis();
  
  radius = min(width,height) / 3;
  xc = width / 2;
  yc = 0;
 
  let options = {          
    x: 50,                
    y: 250, 
    fontSize: min(width/7,height/7),     
    sampleFactor: 0.1,    
    simplifyThreshold: 0   
  };
  letters = textToShapes(fontHAPPY, 'happiness', options);
  
  
  
}

function draw() {
 

 if (whichScene === 0) {
   //doubtful
    sceneOne();
  }
  else if (whichScene === 1) {
    //lonely
    sceneTwo();
   
  }
  else if (whichScene === 2) {
    //tense
   
    sceneThree();
     //updatePixels()
  }
  else if(whichScene === 3){
    
    sceneFour();
  }
   else if(whichScene === 4){
    sceneFive();
  }
   else if(whichScene === 5){
   sceneSix()
}
   else if(whichScene === 6){
    
   sceneSeven()
}
}

//doubtful purple
function sceneOne() {
  frameRate(15);
  textAlign(CENTER,BASELINE);
  textSize(min(width/6,height/6));
  textFont(doubt)
   background('rgb(194, 190, 236)')
    let val = randomGaussian();  
    let sd = 150;                  
    let mean = width/2;          
    let x = ( val * sd ) + mean;   
    noStroke();
    fill(255, 60);
  
    text('doubtful', x,width/2);
    if (millis() > introStartTime + introDuration) {
      whichScene = 1;
      scene1StartTime = millis();
  }
  
}

//lonely blue 
function sceneTwo(){
textSize(radius/3);
  textFont(fontHS);
  textAlign(CENTER, BASELINE);
   background('rgb(188, 223, 253)');
  noFill();
  noStroke()
  circle(width/2,height/2, radius*2);
  let angleBetweenLetters = radians(distanceAngle) / str.length;
  push();
  translate(width/2, height/2);        
  rotate(radians(startAngle));        
  startAngle+=1;
  for (let i=0; i<str.length; i++) {  
    push();
    rotate(i * angleBetweenLetters); 
    translate(0,-radius);              
    fill(255);
    noStroke();
    text(str[i], 0,0);               
    pop();
  }
  pop();  
  
  if (millis() > scene1StartTime + scene1Duration) {
    whichScene = 2;
    scene2StartTime = millis();
  }
}

//tense
function sceneThree() {
  
  frameRate(10)
  background('rgb(201, 97, 95)');
  textSize(min(width/3,height/3));
  textFont(font);
  textAlign(CENTER, CENTER);
  fill(0);
  noStroke();
  text('TENSE', width/2,height/2);
  loadPixels();
  for (let y=0; y<height; y+=gridSize) {
    for (let x=0; x<width; x+=gridSize) {
      let r = get(x, y)[0];  
      if (r < 127) {          
        points.push(createVector(x,y));
      } } }
    background('rgb(201, 97, 95)');
  let mutationAmt = map(mouseX, mouseY,width, 3 ,mouseX);
  for (let i=0; i<points.length; i++) {
    let x = points[i].x;
    let y = points[i].y;
    x += random(-mutationAmt,mutationAmt);
    y += random(-mutationAmt,-mutationAmt);
    fill('rgb(171, 67, 65)');     
    noStroke();
    square(x,y+5, gridSize);
    fill('rgb(201, 97, 95)');     
    square(x,y, gridSize);
  }
 
  
  if (millis() > scene2StartTime + scene2Duration) {
   
    whichScene = 3;
    scene3StartTime = millis();
  }
  
}
  
//crazy yellow
function sceneFour(){
  updatePixels()
  frameRate(35);
  textAlign(CENTER, BASELINE);
  background('rgb(237, 232, 170)'); 
  fill(255);
  noStroke() 
  let alternate = true;
  for (let y=0; y<=height; y+=250) {
    for (let x=0; x<=width; x+=250) {
      push();
      translate(x, y);
      let angle = map(mouseX, mouseY ,width-100, -PI/2,PI);      
      if (alternate) {
        rotate(angle*10);
        angle+=10        
        textFont(black);
        textSize(64);
        text('CRAZY', 0,0);
      }
     
      pop();
   
    }
  } 

   if (millis() > scene3StartTime + scene3Duration) {
    whichScene = 4;
    scene4StartTime = millis();
  }

}

//calm dark blue 
function sceneFive(){
 
  frameRate(40);
  background('rgb(104,129,154)');
  noStroke();
  fill(255);
  textFont(calm)
  for (let k=0; k<10; k++) {
    if (yc > height) {
    yc = 0;
  }  
   for (let x=0; x<windowWidth; x+=windowWidth/3) {
     for (let i=0; i<500; i+=100) {
      push();
      translate(xc, yc);
      textSize(windowWidth/5);
      text('C', 0,0);
      translate(0, windowWidth/5);
      text('A', 0,0);
      translate(0,windowWidth/5);
      text('L', 0,0);
       translate(0, windowWidth/5);
      text('M', 0,0);      
       pop()
      yc = yc + Math.random() * 0.05;

   }}}
  
  if (millis() > scene4StartTime + scene4Duration) {
    whichScene = 5;
    scene5StartTime = millis();
  }

}

//happiness green
function sceneSix(){
textAlign(CENTER, CENTER);
    background('rgb(202, 219, 164)');
    noFill()
    for (let i=0; i<letters.length; i++) {
    let shapes = letters[i];
    for (let j=0; j<shapes.length; j++) {
      let shape = shapes[j];
      stroke(255);
      beginShape();
      for (let k=0; k<shape.length; k++) {
        let x = shape[k].x;
        let y = shape[k].y;
        let d = dist(x,y, mouseX,mouseY);
        for (let m=0; m<40; m+=2) {
        if (d < m) {
          x += m;
          y +=m ;
          }
        }
        curveVertex(x, y);
      }
      endShape(CLOSE);
    }
  }
  noFill();
  noStroke()
  circle(mouseX,mouseY, 100);
  if (millis() > scene5StartTime + scene5Duration) {
    whichScene = 6;
    scene6StartTime = millis();
  }
    
}

//happy sad
function sceneSeven(){
   hiArray= grotesk.textToPoints('FEAR',width/2,height/2, 170,{
     sampleFactor: 0.15,
     simplifyThreshold: 0     
     });
  background('rgb(33, 82, 136)');
  fill(0)
  textFont(end)
  textAlign(CENTER, BASELINE);
  textSize( height/7)
  text('END', height/2, width/2);

}