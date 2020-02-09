var t=0;
function setup(){
    createCanvas(600,600);
}

function draw(){
    background(0);
    fill(255);
    t=t+0.01;
    var x=noise(t);
    x=map(x,0,1,0,width);
    ellipse(x,height/2,40,40);
}