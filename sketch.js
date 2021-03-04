
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const Constraint = Matter.Constraint

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function preload()
{

}

function setup() {
  createCanvas(800, 800);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  ground = new Ground(400,height,880,30);

  
  Engine.run(engine);

//divisions
for(var k = 0; k<=width; k = k+80){
  divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
}



  //Adding plinko to the plinko array
for(var j = 75; j<=width; j=j+50){

  plinkos.push(new Plinko(j, 75));

}
for(var j = 50; j<=width-10; j=j+50){

  plinkos.push(new Plinko(j, 175));
  
}
for(var j = 75; j<=width-10; j=j+50){

  plinkos.push(new Plinko(j, 275));
  
}
for(var j = 50; j<=width-10; j=j+50){

  plinkos.push(new Plinko(j, 375));
  
}

}


function draw() {
  
  rectMode(CENTER);
  background("black");

ground.display();

for(var j=0; j< plinkos.length; j++){
  plinkos[j].display();
}

if(frameCount%60 === 0){
  particles.push(new Particle(random(width/2-30, width/2+30), 10, 10))
}

for(var k=0; k< divisions.length; k++){
  divisions[k].display();
}

for(var j=0; j<particles.length; j++){
  particles[j].display();
  }

  drawSprites();
 
}

