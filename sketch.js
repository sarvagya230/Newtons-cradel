
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Pivot,bob1,bob2,bob3,chain1,chain2,chain3,bob4,bob5,chain4,chain5 ;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1600);
	


	engine = Engine.create();
	world = engine.world;
	Pivot = new pivot
	bob1=new bob(650,300)
	bob2=new bob(600,300)
	bob3=new bob(700,300)
	bob4=new bob(550,300)
	bob5=new bob(750,300)

	chain1 =new chain(bob1.body,Pivot.body,-25,0)
	chain2 = new chain(bob2.body,Pivot.body,-80,0)
	chain3=new chain(bob3.body,Pivot.body,+25,0)
	chain4=new chain (bob4.body,Pivot.body,-120,0)
	chain5=new chain(bob5.body,Pivot.body,+80,0)

	
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Pivot.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display();
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:120,y:-60})
	}
}



