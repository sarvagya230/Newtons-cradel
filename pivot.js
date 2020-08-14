class pivot
{
    constructor()
    {
        this.body=Matter.Bodies.rectangle(700,100,400,50,{isStatic:true})
        this.x=700;
        this.y=100;
        this.width=400;
        this.height=50;
        Matter.World.add(world,this.body)
    }
    display()
    {
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    rectMode(CENTER)
    fill(255)
    rect(0,0,this.width,this.height)
    pop()
    }
}