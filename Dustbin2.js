class Dustbin2 {
    constructor(x,y) {

      var options = {
          isStatic :true
      }
      this.body = Bodies.rectangle(x, y, 20, 100, options);      
      World.add(world, this.body);
      this.width = 20;
      this.height = 180;
      this.image = loadImage("dustbingreen.png");

    }

    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image, -60, 5, 200, 200);
      pop();
    }
  
  }