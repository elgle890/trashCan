class Ground {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;

        var options = {
            isStatic : true,
        }

       
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        

    }

    display() {
        push();
        rectMode(CENTER);
        fill("green");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();

        
    }

    
}