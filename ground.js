class Ground
{
    constructor(x,y,width,height)
    {
        var options = 
        {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display()
    {
        //var pos = this.body.position;
        rectMode(CENTER);
        fill("tan");
        rect(this.x, this.y, this.width, this.height);
    }
}