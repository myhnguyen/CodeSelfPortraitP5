var x;
var y;

var r;
var g;
var b;
var a;


var state;
var stateHappy=1;
var stateSad=2;
var stateConfused=3;


function setup()
{
//  f=createFont("Monaco", 10);
  createCanvas(1000, 700);
  background(219,215,255);

  state = stateHappy;
  
}
 
function draw() {

   for (var x=0; x<=width; x+=50)
{
  for (var y = 0; y<=width; y+=50) {
    if (state==stateHappy)
    {
      fill(0,random(255),random(255));
    }
    if (state==stateSad)
    {
      fill(random(255),0,random(255));
    }
    if (state==stateConfused)
    {
      fill(random(255),random(255),0); }
    ellipse(x,y,25,25);
  }



}
  drawBase();
  changeShirt();
  changeEyes();
  changeCheeks();
  changeNoseMouth();
  keyPressed();



}
function drawBase()
{

  //hair
  fill(0);
  ellipse(500, 270, 300, 350);
  fill(0);
  rect(351, 285, 298, 280);
  noStroke();
 
  //skin
  fill(236,212,163);
  ellipse(500, 270, 240, 280);
  noStroke();
  fill(236,212,163);
  rect(460, 320, 80, 200);
 
  //eye
  fill(247,247,235);
  ellipse(445, 240, 60, 23);
  ellipse(555, 240, 60, 23);
  fill(47,37,28);
  ellipse(445, 215, 70, 10);
  ellipse(555, 215, 70, 10);
 
  

}


function changeShirt(){
 //shoulders    
 
 if (state==stateConfused)
 {
  r = random(255); // r is a random number between 0 - 255
  g = random(255); // g is a random number between 0 - 255
  b = random(255); // b is a random number between 0 - 255
  
  noStroke();
  fill(r, g, b);
  ellipse(500, 700, 350, 500);
  noStroke();
 }
 else
 {
  fill(255);
  ellipse(500, 700, 350, 500);
 }
}

function changeEyes()
 {
   if (state==stateConfused)
   {
   //pupils
   // try to make them move side to side slow
   var leftX= random(440,450);
   var rightX= random(550,560);
   
  fill(255,0,0);
  ellipse( leftX, 240 ,23, 23); 
 // ellipse(445, 240, 23, 23);
  ellipse( rightX, 240 ,23, 23); 
  //ellipse(555, 240, 23, 23);
   }
   else
   {
      fill(0);
      ellipse(445, 240, 23, 23);
      ellipse(555, 240, 23, 23);
   }
   
 }
 
function changeCheeks()
 {
  //blush
  if (state==stateSad)
  {
  fill(121, 164, 214);
  ellipse(445, 290, 55, 55);
  ellipse(555, 290, 55, 55);   
  }
  
    if (state==stateConfused)
  {
  fill((0,0,255),63);
  rect(412, 227, 65, 42);
  rect(522, 227, 65, 42);   
  rect(477, 245, 45, 10);   
  }
  
   else if (state==stateHappy)
  {
    //left heart
  fill(243, 155, 2100);
  ellipse(425, 280, 40, 40);
  ellipse(455, 280, 40, 40);   
  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(407, 290, 473, 290, 440, 320);
      //right heart
  ellipse(545, 280, 40, 40);
  ellipse(575, 280, 40, 40);   
  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(527, 290, 593, 290,559, 320);
  
   
  }

 }
  function changeNoseMouth(){
  //nose
  if (state==stateConfused)
  {
  fill(182, 156, 222);
  ellipse(500, 290, 35, 50);
  //mouth
  fill(182, 156, 222);
  ellipse(500, 340, 30, 20);
  }
    if (state==stateHappy)
  {
  fill(105, 156, 222);
  rect(482, 270, 35, 50);
  //mouth
  fill(105, 156, 222);
  arc(500, 340, 30, 40,0, PI);
  //arc(500, 340, 50, 20);

  }
  else if (state==stateSad)
  {
  fill(105, 243, 22);
  triangle(485, 306, 516, 306,500,270);
  //mouth
  fill(105, 243, 22);
 // ellipse(500, 340, 10, 10);
  arc(500, 340, 20,20, PI * 1.0,PI * 2, CHORD);
    
  }
  
  
}
   
function keyPressed()
{
  
  if (key == 'a')
  {
    
    arc(500, 180, 270,200, PI * 1.0,PI * 2, CHORD);
    ellipse(500, 70, 50, 50);
    textSize(30);
    fill(248, 139, 16);
    text("My :-)", 450, 140);  
  }

  else
    fill(248, 139, 165);
  arc(500, 180, 270,200, PI * 1.0,PI * 2, CHORD);
    ellipse(500, 70, 50, 50);
    
    if (key=='3')
 {
  state=stateConfused;
 }

  if (key=='2')
 {
  state=stateSad;
 
 }
   if (key=='1')
 {
  state=stateHappy;
 
 }

}

/*
  if (mousePressed){
    
    x= mouseX;
    y=mouseY;
    textFont(f);
    fill(0, 191, 0);
    text(x +"," + y, 10, 10);
   
  }
  else{
    x= mouseX;
    y=mouseY;
    textFont(f);
    fill(219,215,255);
    text(x +"," + y, 10, 10);
  }
 */
