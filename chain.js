class chain{
      constructor(bodyA, bodyB, offsetX, offsetY){
      this.offsetX = offsetX;
      this.offsetY = offsetY;

        var options = {
        body1: bodyA,
        body2: bodyB,
        pointB: {x:this.offsetX, y:this.offsetY}
        }

        this.chain = constraint.create(options);
        World.add(world, this.body);
      }

display(){
push();
fill("black");
line(bodyA.body.position.x, bodyA.body.position.y, bodyB.body.position.x, bodyB.body.position.y);
pop();
}
};