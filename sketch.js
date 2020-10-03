
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var boyImg,treeImg;
var ground;
var stone,slingshot;
var mango1,mango2,mango3,mango4,mango5,mango6,mongo7,mango8,mango9,mang10

function preload()
{
	boyImg = loadImage("boy.png");

	treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(displayWidth,700);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(displayWidth/2,690,displayWidth,20);

  mango1 = new Mango(870,400,25);
  mango2 = new Mango(950,460,25);
  mango3 = new Mango(950,330,25);
  mango4 = new Mango(1000,400,25);
  mango5 = new Mango(1020,300,25);
  mango6 = new Mango(1100,300,25);

  mango7= new Mango(1160,350,25);
  mango8 = new Mango(1100,400,25);
  mango9 = new Mango(1205,390,25);
  mango10 = new Mango(1135,450,25);
  
  stone = new Stone(225,570,22);

  slingshot = new Slingshot (stone.body,{x:225,y:570});

	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  
  imageMode(CENTER);
  image(boyImg,270,620,150,250);

  imageMode(CENTER);
  image(treeImg,1030,465,470,470);

  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stone.display();
  
  slingshot.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);

  drawSprites();
 
}

function detectcollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
 if(keyCode===32){
  slingshot.attach(stone.body);
  }
}




