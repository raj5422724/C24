class Bird {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(200,200, 50, 50, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, 50, 50);
      pop();
    }
  }