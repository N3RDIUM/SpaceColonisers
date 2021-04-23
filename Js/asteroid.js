class Asteroid extends BaseClass {
    constructor(){
      super(0,0,50,50,false);
      this.options.friction = 0
      this.options.restitution = 0.0
      this.x = random(-windowWidth,windowWidth)
      this.y = random(-windowHeight,windowHeight)
      this.rad = random(130,100)
      this.body = Matter.Bodies.circle(this.x, this.y, this.rad/2-10, this.options)
      World.add(world, this.body);
      super.width = this.rad
      super.height = this.rad
      this.image = loadImage("Images/Asteroid.png");
      this.explosion = loadImage('Images/explode.png')
      this.rotation=random(-5,5)
    }
  
    display(){
      super.display();
      Matter.Body.setAngularVelocity(this.body, this.rotation);
      Matter.Body.applyForce(this.body,this.body.position,{x:random(-1,1),y:random(-1,1)})
    }
}