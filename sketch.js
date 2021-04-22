const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;
var asteroids = []

function preload(){

}

function setup(){
    canvas = createCanvas(windowWidth-0,windowHeight-0)
    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 0
    Engine.run(engine)
    var rand = random(45,80)
    for(var i=0;i<rand;i++){
        asteroids.push(new Asteroid())
    }
}

function draw(){
    resizeCanvas(windowWidth-0,windowHeight-0)
    background('black')
    for(var i=0;i<asteroids.length;i++){
        asteroids[i].display()
    }
}  