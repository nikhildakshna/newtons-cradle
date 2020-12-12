class ball{
constructor(x,y,radius){
var options = {
setStatic: false,
'restitution': 2,
'friction': 1,
'density': 1
}
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;

World.add(world,this.body);
}

display(){
var pos = this.body.position;

push();
translate(pos.x, pos.y);
circleMode(CENTER);
fill("purple");
circle(0,0,this.radius);
pop();
}
};