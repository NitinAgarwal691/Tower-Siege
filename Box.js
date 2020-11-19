class Box{
    constructor(x,y,width,height) {
var options={
    isStatic:false,
    restitution:0.1,
    friction:0.3,
    density:0.0001
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);
    }
    display() {
     var posA=this.body.position;
     push();
        translate(posA.x,posA.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}