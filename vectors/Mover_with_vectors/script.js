function setup(){
    createCanvas(800,800)
    m=new Mover()
}

function draw(){
    background(0)
    m.display()
    m.update()
    m.checkEdges()
}