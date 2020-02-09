
function setup(){
    createCanvas(640,640);
    background(0);
    w=new Walker(width/2,height/2);
}

function draw()
{   
    w.display();
    w.walk();
}
