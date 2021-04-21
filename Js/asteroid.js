class Asteroid extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
        }
      this.width = random(30,40)
      this.height = random(30,40)
      this.body = Bodies.rectangle(x, y, this.width, options);
      this.image = loadImage("Images/Asteroid.png");
      this.rotation=random(-5,5)
      Matter.Body.applyForce( this.body, {x: this.body.position.x, y: this.body.position.y}, {x: 0.05, y: 0})
    }
  
    display(){
      super.display();
      Matter.Body.rotate(this.body,this.rotation)
    }
}