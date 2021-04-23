class Player extends BaseClass {
    constructor(){
      super(windowWidth/2,windowHeight+30,100,150,true);
      this.image = loadImage("Images/spaceship.png");
      Matter.Body.applyForce(this.body,this.body.position,{x:0,y:-25})
      this.av=0
    }
  
    display(){
      super.display();
      camera.on()
      if(keyDown('W')){Matter.Body.applyForce(this.body,this.body.position,{x:0,y:-5})}
      else if(keyDown('S')){Matter.Body.applyForce(this.body,this.body.position,{x:0,y:5})}
      else if(keyDown('A')){Matter.Body.applyForce(this.body,this.body.position,{x:-5,y:0})}
      else if(keyDown('D')){Matter.Body.applyForce(this.body,this.body.position,{x:5,y:0})}
      else if(keyDown('Q')){this.av-=0.1}
      else if(keyDown('E')){this.av+=0.1}
      camera.position.x = this.body.position.x
      camera.position.y = this.body.position.y
      Matter.Body.setAngularVelocity(this.body,this.av)
      console.log([camera.position.x,camera.position.x])
      this.av *= 0.986
    }
}