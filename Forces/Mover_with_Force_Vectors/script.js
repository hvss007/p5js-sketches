var moversArray=[]
function setup(){
    createCanvas(800,800)
    for(var i=0;i<5;i++){
        var x=random(width)
        var y=random(height)
        var m=new Mover(x,y)
        moversArray.push(m)
    }
   
}

function draw(){
    background(0)
    
    moversArray.forEach(mover=>{
        var gravity=createVector(0,0.2).mult(mover.mass)
        var wind= createVector(0.00002,0)
        mover.applyForce(gravity)
        mover.applyForce(wind)
        mover.display()
        mover.update()
        mover.checkEdges()
    })
}
