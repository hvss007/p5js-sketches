class Walker{
    angle=0;
    scalar=0;

    constructor(angle, scalar){
        this.angle=angle;
        this.scalar=scalar;
    }
    display(){
        noStroke()
        //fill(200*Math.random(),255*Math.random(),255*Math.random())
        var x = width/2 + cos(this.angle) * this.scalar;
        var y = height/2 + sin(this.angle) * this.scalar;
        ellipseMode(CENTER);
        ellipse(x,y,2,2);
    }
    walk(){
        var val=Math.floor(4*Math.random())
        if(val==0){
            this.angle++;
        }
        else if(val==1){
            this.angle--;
        }
        else if(val==2){
            this.scalar++;
        }
        else{
            this.scalar--;
        }
    }
}