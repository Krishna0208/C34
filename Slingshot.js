class Slingshot {
  constructor(bodyA, pointB) {
    var option = {
      bodyA: bodyA,
      pointB: pointB,
      length: 500,
      stiffness: 1.5,
    }
    this.pointB = pointB;
    this.sling = Constraint.create(option);
    World.add(world, this.sling);
  }

  attach(body) {
  this.sling.bodyA = body;
  }

  fly() {
  this.sling.bodyA = null;   
  }

  display() {
   if (this.sling.bodyA) {
      push();
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(10);
      stroke("red");
      line(pointA.x, pointA.y, pointB.x, pointB.y);
      pop();
   }
  }
}
