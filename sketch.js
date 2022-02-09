
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, righttSide, leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundObj = new Ground(400, 670, 800, 20);
	righttSide = new Ground(750, 635, 10, 50);
	leftSide = new Ground(600, 635, 10, 50);

	var ballOptions = {
		isStatic : false,
		restituition : 0.3,
		friction : 0.1, 
		density : 1.2,
	}

	ball = Matter.Bodies.circle(200, 400, 20, ballOptions);
	World.add(world, ball);

	

	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  fill("green");
  groundObj.display();
  leftSide.display();
  righttSide.display();
  
  fill("white");
  ellipse(ball.position.x, ball.position.y, 20, 20);

  

  if(keyDown(UP_ARROW)) {
	  Matter.Body.applyForce(ball, ball.position, {x: 10, y:-10});
  }
 
}



