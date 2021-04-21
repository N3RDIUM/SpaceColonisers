const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    canvas = createCanvas(windowWidth-0,windowHeight-0)
    engine = Engine.create();
    world = engine.world;
}

function preload(){

}

function draw(){
    resizeCanvas(windowWidth-0,windowHeight-0)
    background('black')
}  