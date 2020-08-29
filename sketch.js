
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  paperimg = loadImage("sprites/paper.png");
  dustbinimg = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);

    engine = Engine.create();
    world = engine.world;

    paperobj=createSprite(100, 640, 15, 15);
    paperobj.addImage(paperimg);
    paperobj.scale = 0.3;

    papersprite = Bodies.circle(390, 255 , 70, {restitution:0.3, friction:0.5, density:1.2, isStatic:false});
	  World.add(world, papersprite);

    ground=createSprite(600, 667, 1200, 15);
    ground.shapeColor=color(255);

    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	  World.add(world, ground);

    boxPosition=width/2+300
    boxY=545;

    //boxleftSprite=createSprite(900, boxY, 20,200);
    //boxleftSprite.shapeColor=color(0,200,0);

    //boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,070 , {isStatic:true} );
    //World.add(world, boxLeftBody);

    boxBase=createSprite(boxPosition+100, 545, 200,20);
    boxBase.addImage(dustbinimg);
    boxBase.scale = 0.7;

    boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
    World.add(world, boxBottomBody);

    //boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
    //World.add(world, boxBottomBody);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(170);
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(papersprite.body,papersprite.body.position,{X:85,Y:-85});
  }
}

