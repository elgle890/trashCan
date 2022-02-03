
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1100, 600, 20, 120);

	groundObj.shapeColor = "lightgreen";
	leftSide.shapeColor = "lightGreen";
	

	var ballOptions = {
		isStatic : false,
		restituition : 0.3,
		friction : 0.1, 
		density : 1.2,
	}

	ball = Matter.Bodies.circle(200, 650, 20, ballOptions);
	World.add(world, ball);


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  groundObj.display();
  
  fill("lightgreen");
  elipse(ball.position.x, ball.position.y, 20);

  if(keyDown(UP_ARROW)) {
	  Matter.Body.applyForce(ball, ball.position.x, 10);
  }
 
}



