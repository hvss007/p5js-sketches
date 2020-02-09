
function setup(){
    createCanvas(640,640);
    background(0);
    w=new Walker(0,3);
}

function draw()
{   
    w.display();
    w.walk();
}
