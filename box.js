class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
           
        }
        this.visiblity=225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speec<3){
          var angle=this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);  
        rotate(angle)
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
        pop();
      }
      else{
        World.remove(world,this.body)
        push()
        this.visiblity=this.visiblity-5
        pop()
      }
      }
}