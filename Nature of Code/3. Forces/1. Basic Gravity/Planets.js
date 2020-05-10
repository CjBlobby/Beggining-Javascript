class Planet {
    
    constructor(x, y, mass, velV, size) {
        
        //display
        this.size = size;
        this.r = random(255)
        this.g = random(255)
        this.b = random(255)
        
        //physics
        this.pos = createVector(x, y);
        this.mass = mass;
        this.vel = velV;
        this.acc = createVector();
    }
    
    display() {
        fill(this.r, this.g, this.b);
        ellipse(this.pos.x, this.pos.y, this.size);
    }
    
    weight(body) {
        
        var dir = p5.Vector.sub(body.pos, this.pos);
        var dist = dir.mag();
        dir.normalize();
        
        //gravity equation
        var wmag = 18 * (1 * this.mass * body.mass) / (dist ** 2);
        dir.mult(wmag);
        dir.limit(15);
        
        this.applyforce(dir);
        
    }
    
    applyforce(force) {
        
        if (this.mass != 0) {
            //newton's 2nd law
            force.div(this.mass);

            this.acc.add(force);
        }
        
    }
    
    update() {
        //checking out of bounds
        if (this.pos.x < 0 || this.pos.x > width) {
            this.mass = 0;
        } else if (this.pos.y < 0 || this.pos.y > height) {
            this.mass = 0;
        } else {
            
            this.vel.add(this.acc);
            this.vel.limit(10);
            
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
        
    }
    
}