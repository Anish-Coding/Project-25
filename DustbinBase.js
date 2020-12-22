class DustbinBase {
    constructor(x,y) {

      var options = {
          isStatic :true
      }
      this.body = Bodies.rectangle(x, y, 205, 10, options);      
      World.add(world, this.body);
      this.width = 155;
      this.height = 20;
    }

    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  
  }