  
class Paper {
  constructor(x,y,r){

      var paper_options={


          restitution:0.3,
          friction: 0.5,
          density:1.2,
      }

      this.x=x;
      this.y=y;
      this.r=r;

      this.body = Bodies.circle(this.x,this.y,this.r/2,paper_options);
      World.add(world,this.body);
      this.image = loadImage("paper2.png");
  }

  display() {  
    var paperpos =this.body.position;
    push();
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER);
    strokeWeight()
    fill("lightblue");
    imageMode(CENTER);
    image(this.image, -40, -20, this.width, this.height);
    ellipse(0, 0,this.r,this.r);
    pop();
  }
}