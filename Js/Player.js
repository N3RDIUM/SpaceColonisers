class Player extends BaseClass {
    constructor(){
      super(windowWidth/2,windowHeight+30,100,150,true);
      this.image = loadImage("Images/spaceship.png");
      Matter.Body.applyForce(this.body,this.body.position,{x:0,y:-25})
    }
  
    display(){
      super.display();
      if(keyDown('W')){Matter.Body.applyForce(this.body,this.body.position,{x:0,y:-5})}
      else if(keyDown('S')){Matter.Body.applyForce(this.body,this.body.position,{x:0,y:5})}
      else if(keyDown('A')){Matter.Body.applyForce(this.body,this.body.position,{x:-5,y:0})}
      else if(keyDown('D')){Matter.Body.applyForce(this.body,this.body.position,{x:5,y:0})}
    }
}