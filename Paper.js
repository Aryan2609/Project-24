class Paper {
    constructor(x,y,radiua) {
      var options = {
          isStatic: true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2


      }
      this.body = Bodies.rectangle(x,radius);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      ellipseMode(CENTER);
      fill("yellow");
      circle(pos.x, pos.y, this.radius);
    }
  };