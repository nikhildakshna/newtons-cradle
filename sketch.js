
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;

var ball1, ball2, ball3, ball4, ball5;
var roof;
var chain1, chain2, chain3, chain4, chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

ball1 = new ball(200,600,50);
ball2 = new ball(300,600,50);
ball3 = new ball(400,600,50);
ball4 = new ball(500,600,50);
ball5 = new ball(600,600,50);
roof = new pendulamHolder(400,100,width,50);
chain1 = new chain(ball1, roof, -200, 0);
chain2 = new chain(ball2, roof, -100, 0);
chain3 = new chain(ball3, roof, 0, 0);
chain4 = new chain(ball4, roof, 100, 0);
chain5 = new chain(ball5, roof, 200, 0);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
roof.display();
chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
}



