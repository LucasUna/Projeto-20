
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola
var quadrado
var retangulo

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	bola = Bodies.circle(10,20,30,{restitution: 0.9})
	quadrado = Bodies.rectangle(100,40,40,40,{frictionAir: 0.9})
	retangulo = Bodies.rectangle(70,200,30,70,{restitution: 0.1})

	Engine.run(engine);
	
	World.add(world,bola)
	World.add(world,quadrado)
	World.add(world,retangulo)
}


function draw() {
  rectMode(CENTER);
  background(14);
  
  drawSprites();
 
  rect(quadrado.position.x,quadrado.position.y,40,40)
  rect(retangulo.position.x,retangulo.position.y,30,70)
  ellipse(bola.position.x,bola.position.y,30)
}



