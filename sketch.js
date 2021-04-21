const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var asteroids = []

function preload(){

}

function setup(){
    canvas = createCanvas(windowWidth-0,windowHeight-0)
    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 0
    asteroid = new Asteroid(300,300)
    Engine.run(engine)
}

function draw(){
    resizeCanvas(windowWidth-0,windowHeight-0)
    background('black')
    asteroid.display()
}  