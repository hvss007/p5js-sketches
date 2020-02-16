function setup(){
    createCanvas(800,800)
    m=new Mover()
}

function draw(){
    background(0)
    var gravity=createVector(0,0.02)
    var wind= createVector(0.2,0)
    m.applyForce(gravity)
    m.applyForce(wind)
    m.display()
    m.update()
    m.checkEdges()
}
