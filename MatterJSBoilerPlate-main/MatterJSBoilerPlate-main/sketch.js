
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	var ball_options={
		isStatic:false,
		resitution:0.3,
		friction:0,
		density:1.2,
	}

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
groundObj.display();

groundObj=new ground(width/2,670,width,20);
leftSide = new ground(1100,600,20,120);

  Matter.Bodies.circle(23,23,20,[ball_options]);

  drawSprites();
 
}



