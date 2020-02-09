class Walker{
    x=0;
    y=0;

    constructor(x, y){
        this.x=x;
        this.y=y;
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.x,this.y,2,2);
    }
    walk(){
        var val=Math.floor(4*Math.random())
        if(val==0){
            this.x++;
        }
        else if(val==1){
            this.y++;
        }
        else if(val==2){
            this.x--;
        }
        else{
            this.y--;
        }
    }
}