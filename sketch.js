
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2;
var BobDiameter =40;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   roof =new Ground(width/2,height/4,width/7,20);

   bob1 =new Bob(520,height/4+300,20);
   bob2 =new Bob(560,height/4+300,20);
   bob3 =new Bob(600,height/4+300,20);
   bob4 =new Bob(640,height/4+300,20);
   bob5 =new Bob(680,height/4+300,20);

  rope1 =new rope(bob1.body,roof.body,-BobDiameter*2,0);
  rope2 =new rope(bob2.body,roof.body,-BobDiameter*1,0);
  rope3 =new rope(bob3.body,roof.body,0,0);
  rope4 =new rope(bob4.body,roof.body,BobDiameter*1,0);
  rope5 =new rope(bob5.body,roof.body,BobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 

  drawSprites();
 
}


function keyPressed()
{

if(keyCode === UP_ARROW)
{
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-40});
}
}