class Mover{
    t=0;
    location;
    velocity;
    acceleration;
    radius=20;
    constructor(){
        this.location=createVector(width/2,height/2)
        this.velocity=createVector(0,0)
        this.acceleration=createVector(0,0)
    }
  display(){
      fill(42,54,62)
      ellipseMode(CENTER)
      ellipse(this.location.x,this.location.y,this.radius,this.radius)
  }  
   update(){
       var mouse=createVector(mouseX,mouseY)
       //var direction=mouse.sub(location)
       //p5.Vector.mag()
       //this.acceleration=p5.Vector.sub(mouse,this.location).mult(0.001)
       //this.acceleration=p5.Vector.random2D().mult(noise(this.t))
       this.location.add(this.velocity)
       this.velocity.add(this.acceleration)
    //    this.velocity.limit(5)
       this.acceleration.mult(0)
       this.t++
   } 
   applyForce(force){
    this.acceleration=   p5.Vector.add(force,this.acceleration)
    
    }
   checkEdges(){
       if(this.location.x>=width-this.radius/2||this.location.x<=0+this.radius/2){
           this.velocity.x=-this.velocity.x
       }
       if(this.location.y>=height-this.radius/2||this.location.y<=0+this.radius/2){
        this.velocity.y=-this.velocity.y
      }
   }
}