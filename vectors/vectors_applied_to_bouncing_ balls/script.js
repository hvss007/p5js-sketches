
function setup(){
    createCanvas(600,600);
    b=new Ball(23,32,3,5,3)
}

function draw(){
    background(0);
    b.display()
    b.move()
    b.bounce()
}