class Bob {
    constructor(x,y,radius) {
    var options = {
    density: 1.2,
    frictionAir: 0.01
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.x = x;
    this.y = y;
    this.radius = radius;
    World.add(world,this.body);
    }

    display() {
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    fill("cyan");
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
}