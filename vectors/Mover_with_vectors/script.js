function setup(){
    createCanvas(400,400)
    m=new Mover()
}

function draw(){
    background(0)
    m.display()
    m.update()
    m.checkEdges()
}