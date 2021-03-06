class Bob {
    constructor (x,y,radius){
  
        var options ={
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
            
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add(world,this.body);
    }
    display(){
        var paperpos = this.body.position;

        push()
        translate(paperpos.x,paperpos.y);
        ellipseMode(CENTER)
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,50,50);
        pop()
    }
  }