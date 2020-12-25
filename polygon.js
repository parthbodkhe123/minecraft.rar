class Polygon {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.image = loadImage("polygon.png")

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("blue");
      image(pos.x, pos.y, this.width, this.height);
    }
  };
