const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var box1,box2;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ball = Bodies.circle(100,10,15,{restitution:1.3});
    World.add(world,ball);

    box1 = Bodies.rectangle(200,10,40,20,{restitution:2.0});
    World.add(world,box1);

    box2 = Bodies.rectangle(300,10,20,40,{restitution:1.5});
    World.add(world,box2);

    ground= Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

   


    console.log(ground);
}

function draw(){
    background(230);
    Engine.update(engine);
    rectMode(CENTER);

    fill(180)
    ellipse(ball.position.x,ball.position.y,30);
    fill(180)
    rect(box1.position.x,box1.position.y,40,20);
    fill(180)
    rect(box2.position.x,box2.position.y,20,40);
    fill(180)
    rect(ground.position.x,ground.position.y,400,20);
}
