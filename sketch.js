//Step 1 - Declaring the variables/constants
//namespacing OR alias OR nickname
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Step 2 - declare variables for your own engine and world
var myEngine, myWorld;
var box;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //Step 3
  myEngine = Engine.create();
  myWorld = myEngine.world;

  //Step 4 - Create Bodies
  //rectangle and circle
  box = Bodies.rectangle(200,200,50,50);

  var ball_options = {
    restitution: 1.0, 
    density: 0.5
  }
  ball = Bodies.circle(100, 100, 20, ball_options);

  //how to change the values of the properties of the body
  //Step A
  var ground_options = {
    isStatic: true
  }

  //Step B - include the variable
  ground = Bodies.rectangle(200,380, 400, 30,ground_options);

  //Step 5 - Add your body/box to your world
  World.add(myWorld,box);
  console.log(box.position.y);
  World.add(myWorld,ground);
  World.add(myWorld, ball);
}

function draw() {
  background("black");  
  //Step 6 - Run the engine
  Engine.update(myEngine);
  
  //Step 7 - Display your bodies/box
  rectMode(CENTER)
  rect(box.position.x, box.position.y, 50, 50);
  rect(ground.position.x, ground.position.y, 400, 30);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 20, 20);

  drawSprites();
}