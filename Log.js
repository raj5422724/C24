class Log {
    constructor(x,y,height,angle) {
        var options = {
            'restitution':0.8,
            'friction':1.5,
            'density':0.5
        }
        this.body = Bodies.rectangle(x,y,20,height,options);
        World.add(world,this.body);
        this.height = height;
        Matter.Body.setAngle(this.body, angle);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, 20, this.height);
        pop();
      }
    }