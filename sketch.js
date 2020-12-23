const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const constraint = Matter.Constraint;
const body=Matter.Body;
var engine, world;
 function setup() {
	var canvas = createCanvas(800,700);
	engine=Engine.create();
	world=engine.world;
	//create bodies here
	ground1=new Ground(400,500,400,20)
 }
 function draw() {
	Engine.Update(engine)
	ground1.display()

 }