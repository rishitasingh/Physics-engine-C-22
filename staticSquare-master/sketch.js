const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var ball_options ={
    restitution: 1,
    friction: 0.5
}

var box_options ={
    restitution: 0.5,
    friction: 0.3
}
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
ball = Bodies.circle(100,200,30,ball_options);
World.add(world,ball);
    console.log(ball);

    box = Bodies.rectangle(300,100,30,30,box_options);
    World.add(world,box);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y,30,30);
    rectMode(CENTER);
    rect(box.position.x,box.position.y,30,30);
}