class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        //to load image
        this.image1 = loadImage("sprites/sling1.png")
        this.image2 = loadImage("sprites/sling2.png")
        this.image3 = loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        // to add image
        image(this.image1,200,20);
        image(this.image2,170,20);
        //image(this.image3,200,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            // pointA.x-20 is birds x pos,pointA.y is birds y pos
            // pointB.x is points x pos,pointB.y is points y pos
         if(pointA.x<220){
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y,pointB.x+30,pointB.y);
            image(this.image3,pointA.x-30,pointA.y-10,15,30);

         }
         else{
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y,pointB.x+30,pointB.y);
            image(this.image3,pointA.x-30,pointA.y-10,15,30);
         }  
            // pointA.x<220 is because bird is being dragged towards left side 
        }
    }
    
}