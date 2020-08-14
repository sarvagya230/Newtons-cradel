
    class chain
{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options=
    {
        bodyA:bodyA,
        bodyB:bodyB, 
        stiffness:0.04,
        lenght:9,
        pointB:{x:this.offsetX,y:this.offsetY}
    }
    
   this. chain =  Matter.Constraint.create(options) 
   World.add(world,this.chain)
    }
    display()
    {
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        stroke(255)

        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y)


    }
}
