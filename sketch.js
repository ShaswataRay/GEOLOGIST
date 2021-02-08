
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(100,100,100,20);
	plane = new Plane(10,500,800,20);
	stone = new Stone(500,450,50,50);
    rubber = new Rubber(300,500,40,40);

	Engine.run(engine);
  
}


function draw() {
  background();
  Engine.update(engine);

  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  
 drawSprites();
}



