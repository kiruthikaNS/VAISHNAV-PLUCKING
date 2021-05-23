class stone
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
		this.y=y;
		this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options);
       // this.body=Bodies.circle(x,y,radius,options);
       // this.radius=radius;
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }

    display()
    {
        var stonepos=this.body.position;		
        push()
        translate(stonepos.x, stonepos.y);
        // rectMode(CENTER)
        // rotate(this.body.angle)
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(RADIUS)
        image(this.image, 0,0,this.r*2, this.r*2)
        pop()
        //this.pos.x = this.body.position.x
        //this.pos.y = this.body.position.y
        //imageMode(CENTER)
        //image(this.image,this.pos.x,this.pos.y,50,50);
      
    }
}