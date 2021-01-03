class Line{
    constructor(a,b){
      var options={
          bodyA:a,
          pointB:b,
          stiffness:0.5,
          length:23
      }                                                                
      this.body=Constraint.create(options);
      this.pointB=b;
      World.add(world,this.body);
    }
    fly(){
      this.body.bodyA=null;
    }
    disp(){
    if(this.body.bodyA){
      var posa = this.body.bodyA.position;
      var posb =this.pointB;
      push();
      strokeWeight(5);
      line(posa.x,posa.y,posb.x,posb.y);
      pop();
    }
     
    }
}