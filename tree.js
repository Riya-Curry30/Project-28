class Tree
{
    constructor()
    {
        var options = 
        {
            "density": 1.5,
            "friction":1.0,
            "restitution":0.5
        }

        this.body = Bodies.rectangle(480,400,600,600,options);
        this.width = 600;
        this.height = 600;
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }

    display()
    {
        push();
        imageMode(CENTER);
        image(this.image, 480,400, this.width, this.height)
        pop();
        
    }

}