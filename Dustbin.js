class Dustbin {
    constructor(x,y) {

      var options = {
          isStatic :true
      }
      this.body = Bodies.rectangle(x, y, 20, 100, options);      
      World.add(world, this.body);
      this.width = 20;
      this.height = 190;
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