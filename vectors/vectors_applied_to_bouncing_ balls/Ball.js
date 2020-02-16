class Ball{
    location;
    velocity;
    radius;
    constructor(x,y,v1,v2,radius){
        this.location=createVector(x,y)
        this.velocity=createVector(v1,v2)
        this.radius=radius
    }


    display(){
       noStroke();
       fill(255,43,250);
       ellipseMode(CENTER);
       ellipse(this.location.x,this.location.y,this.radius,this.radius);
    }

    move(){
        this.location.add(this.velocity)
    }
    bounce(){
        if(this.location.x>=width||this.location.x<=0){
            this.velocity.x=-this.velocity.x;
        }
        if(this.location.y>=height||this.location.y<=0){
            this.velocity.y=-this.velocity.y;
        }
    }



}