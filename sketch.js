
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone;
var boy, boyImage;
var mango1, mango2, mango3, mango4, mango5, mango6;
//var slingshot;


function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree();
	ground = new Ground(400,690,800,30);
	stone = new Stone(0,550,30);
	mango1 = new Mango(685,275,30);
	mango2 = new Mango(440,350,30);
	//console.log(mango2)
	mango3 = new Mango(220,300,30);
	mango4 = new Mango(480,150,30);
	mango5 = new Mango(600,325,30);
	mango6 = new Mango(400,250,30);

	slingshot = new Slingshot(stone.body, {x:90, y:625});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  slingshot.display();
 
  detectCollision(stone, mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
 // keyPressed();


  boy = createSprite(120,625,10,10);
  boy.addImage(boyImage);
  boy.scale = 0.1;
  
  drawSprites();

  textSize(20);
  text("Press Space to Play Again!", 20,50);
 
}


function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
	slingshot.fly();
}

function detectCollision(lstone,lmango)
{
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body, false);
		//console.log('fall')
	}
}



function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body, {x:0, y:550});
		slingshot.attach(stone.body);
	}
}
