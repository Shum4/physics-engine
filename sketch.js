//nameSpacing
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter.World;

//to declare the game objects
var ground;
var ball;

//for game we created our own engine and world
var engine, world;
var object;
function setup() {
   createCanvas(400,400);

   engine = Engine.create();
   //my world is my engine's world
   world= engine.world;

   object = Bodies.rectangle(350,100,20,30);
   World.add(world,object);

   //to change properties of ground
 groundOptions ={
   isStatic:true
 }  

ground=Bodies.rectangle(200,350,400,12,groundOptions);
World.add(world,ground);

 //to change properties of ball
ballOptions={
  restitution:5.0
}

ball=Bodies.circle(132,1,150,ballOptions);
World.add(world,ball);
   
   console.log(object);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,20,30);
  rect(ground.position.x,ground.position.y,400,12);
 //to display ball
  ellipseMode(RADIUS);
  ellipse (ball.position.x,ball.position.y,150,150);
} 









