class Bob{
    constructor(x,y,radius)
    {
    var options ={
        density:0.5,
        restitution:1,
        friction:0.5,
        isStatic:false,
    }
    this.body =Matter.Bodies.circle(x,y,radius,options);
    this.radius =radius;
    World.add(world, this.body);
    }
    
    display()
    {
        var pos =this.body.position;
    
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(pos.x,pos.y,this.radius);
          
    }
    }