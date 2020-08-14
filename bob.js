class bob{
    constructor(x,y)
    {
       
        this.radius=30;
        this.x=x;
        this.y=y;
        this.body=Matter.Bodies.circle(this.x,this.y,this.radius,{restitution:1,density:1})
        Matter.World.add(world,this.body)


    }
    display()
    {
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        fill(128,128,128)
        ellipse(0,0,this.radius,0)
        pop() 



    }
}