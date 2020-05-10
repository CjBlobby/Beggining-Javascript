let vehicles = [];
let t;

function setup() {
    createCanvas(1200, 900);
    fill(255);
    
    for (let i=0; i<150; i++) {
        vehicles.push(new Boid())
    
    }
    //g = createVector(0, 0.1);
}

function draw() {
    background(50);
    t = createVector(mouseX, mouseY);
    
    for (v of vehicles) {
        v.show();
        v.update();
        //v.applyForce(g);
        //v.seek(t);
        v.alignment(vehicles);
        v.cohesion(vehicles);
        v.separation(vehicles);
    }

}







class Boid {
    
    constructor() {
        
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D().setMag(5);//createVector();
        this.acc = createVector();
        
        
        this.maxspeed = 8;
        this.maxseek = 0.2;
        this.maxalign = 0.2;
        this.maxcohesion = 0.3;
        this.maxseparation = 0.28;
    }
    
    update() {
        //this.vel.setMag(this.maxspeed);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        
        this.edges(0);        
    }
    
    
    edges() {
        if (this.pos.x > width || this.pos.x < 0) {
            this.pos.x = width - this.pos.x;
        }
        if (this.pos.y > height || this.pos.y < 0) {
            this.pos.y = height - this.pos.y;
        }
        
    }
    
    applyForce(force) {
        
        this.acc.add(force);
        
    }
    
    show() {
        
        ellipse(this.pos.x, this.pos.y, 4, 4);
    }
    
    
    seek(target) {
        
        let des = p5.Vector.sub(target, this.pos).setMag(this.maxspeed);
        
        let steer = p5.Vector.sub(des, this.vel).limit(this.maxseek);
        
        this.applyForce(steer);
    }
    
    
    
    alignment(boids) {
        
        let des = createVector();
        let i = 0;
        for (let b of boids) {
            
            if (dist(this.pos.x, this.pos.y, b.pos.x, b.pos.y) < 100) {
                des.add(b.vel);
                i++;
            }
        }
        if (i) {
            des.div(i);
            des.setMag(this.maxspeed);
            des.sub(this.vel);
            des.limit(this.maxalign);
            
            this.applyForce(des);
        }
    }
    
    cohesion (boids) {
        
        let avpos  = createVector();
        let i = 0;
        
        for (let b of boids) {
            
            if (dist(this.pos.x, this.pos.y, b.pos.x, b.pos.y) < 200) {
                avpos.add(b.pos);
                i++;
            }
        }
        avpos.div(i);
        
        let des = p5.Vector.sub(avpos, this.pos).setMag(this.maxspeed);
        
        let steer = p5.Vector.sub(des, this.vel).limit(this.maxcohesion);
        
        this.applyForce(steer); 
        
    }
    
    
    separation (boids) {
        
        let desired = createVector();
        
        for (let b of boids) {
            let dir = p5.Vector.sub(this.pos, b.pos).normalize();
            let dsq = (this.pos.x - b.pos.x)**2 + (this.pos.y - b.pos.y)**2;
            dir.div(dsq);
            desired.add(dir);
            
        }
        desired.setMag(this.maxspeed);
        
        let steer = p5.Vector.sub(desired, this.vel).limit(this.maxseparation);
        
        this.applyForce(steer);
    }
    
    
}




