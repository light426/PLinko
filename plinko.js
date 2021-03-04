class Plinko {
    constructor(x,y){
       var options={
           isStatic:true,
           restitution:0.3,
           friction:0,
           density:1.2
       } 
       this.body = Bodies.circle(x, y, 10, options)
       this.Radius = 10
       World.add(world, this.body)
  
    }
    display(){
  push();
  translate(this.body.position.x, this.body.position.y)
  rotate(this.body.angle)
  fill("white")
        ellipseMode(RADIUS)
    ellipse(0,0,this.Radius, this.Radius)
  pop();
    }
  }
  
  
  
  
  