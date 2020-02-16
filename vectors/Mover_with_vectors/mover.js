class Mover{
    t=0;
    location;
    velocity;
    acceleration;
    constructor(){
        this.location=createVector(width/2,height/2)
        this.velocity=createVector(1,3)
        // this.acceleration=createVector(0.02,-0.03)
    }
  display(){
      fill(42,54,62)
      ellipseMode(CENTER)
      ellipse(this.location.x,this.location.y,90,90)
  }  
   update(){
       var mouse=createVector(mouseX,mouseY)
       //var direction=mouse.sub(location)
       //p5.Vector.mag()
       this.acceleration=p5.Vector.sub(mouse,this.location).mult(0.001)
       //this.acceleration=p5.Vector.random2D().mult(noise(this.t))
       this.location.add(this.velocity)
       this.velocity.add(this.acceleration)
       this.velocity.limit(5)
       this.t++
   } 
   checkEdges(){
       if(this.location.x>width){
           this.location.x=0
       }
       if(this.location.x<0){
           this.location.x=width
       }
       if(this.location.y>height){
        this.location.y=0
        }
        if(this.location.y<0){
            this.location.y=height
        }
   }
}