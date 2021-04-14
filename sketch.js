const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground;
var ground1;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
var option=
{
  isStatic:true
}
ground=Bodies.rectangle(200,350,200,400,option);
World.add(world,ground);


console.log(ground);


}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1300,10)
}

