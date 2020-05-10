class Bird {
    
    constructor(y) {
        this.y = y;
        this.vel = -1;
        this.acc = 0;
        
        this.x = 64;
        this.r = 0.02 * height;
        
        this.live = true;
    }
    
    update(pipes) {
        this.vel += this.acc;
        //this.vel = constrain(this.vel, -7, 7);
        
        this.y += this.vel;
        this.acc = 0;
        
        this.y = constrain(this.y, 1, height);
        
        this.collide(pipes);
    }
    
    applyForce(force) {
        this.acc += force;
    }
    
    show() {
        push();
        
        translate(this.x + this.r, this.y + this.r);
        rotate(map(this.vel, -7, 12, -PI / 4, PI / 2));
        
        image(bpic, -this.r, -this.r, this.r*2, this.r*2);
        
        pop();
        
    }
    
    
    collide(pipes) {
        //TOP + BOTTOM
        if (this.y > height) {
            
            this.live = false;
            
        }
        
        for (let p of pipes) {
            
            if (p.collide(this)) {
                this.live = false;
                game = false;
            }
            
        }        
        
    }
    
    jump() {
        if (this.live) {
            this.vel = -height/84;
            this.acc = 0;
        }
    }
    
    
}