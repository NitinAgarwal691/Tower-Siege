class Shooter{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 30
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    go() {
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("white");
            strokeWeight(7);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}