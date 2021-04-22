class Asteroid extends BaseClass {
    constructor(){
      super(random(-windowWidth,windowWidth),random(-windowHeight,windowHeight),50,50);
      this.rad = random(50,130)
      this.width = this.rad
      this.height = this.rad
      this.image = loadImage("Images/Asteroid.png");
      this.rotation=random(-5,5)
    }
  
    display(){
      super.display();
      Matter.Body.rotate(this.body,this.rotation)
      Matter.Body.applyForce(this.body,this.body.position,{x:random(-1,1),y:random(-1,1)})
    }
}