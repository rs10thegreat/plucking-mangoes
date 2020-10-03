class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            lenght:100,
            stiffness:0.04
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }

    attach(body){
        this.body.bodyA = body;
    }

    fly(){
        this.body.bodyA = null;
    }

    display(){
        if(this.body.bodyA!==null){
            var pointA = this.body.bodyA.position;
            var pointB=this.pointB;
            
            strokeWeight(4);
            
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}