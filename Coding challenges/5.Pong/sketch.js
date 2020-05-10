let p;
let pal, par;
let pl1scr = 0;
let pl2scr = 0;

function setup() {
    createCanvas(600, 600);
    textSize(64);
    
    p = new Puck();
    pal = new Paddle(16);
    par = new Paddle(576);
    
}

function draw() {
    background(50);
    inputs();
    
    p.display();
    
    p.update();
    p.paddhit(pal);
    p.paddhit(par);
    
    pal.display();
    par.display();
    
    text(pl1scr, 30, 50);
    text(pl2scr, 510, 50);
}

function inputs() {
    
    if (keyIsDown(UP_ARROW)) {
        par.move(-8);
    }
    
    if (keyIsDown(DOWN_ARROW)) {
        par.move(8);
    }
    
    if (keyIsDown(87)) {
        pal.move(-8);
    }
    
    if (keyIsDown(83)) {
        pal.move(8);
    }
}

class Puck {
    
    constructor() {
        
        this.pos = createVector(width/2, height/2);
        
        this.speed = 6; 
        this.vel = p5.Vector.random2D();
        this.vel.mult(this.speed);
        
        if (this.vel.x > -2 && this.vel.x <= 0) {
            this.vel.x -= 2;
        }
        if (this.vel.x < 2 && this.vel.x > 0) {
            this.vel.x += 2;
        }
                
        this.r = 8;
    }
    
    update() {
        
        this.pos.add(this.vel);
        this.edges();
        
    }
    
    display() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 16);
        
    }
    
    edges() {
        
        if (this.pos.x<this.r ) {
            pl2scr ++;
        }
        if (this.pos.x>width-this.r ) {
            pl1scr ++;
        }
        
        if (this.pos.y<this.r || this.pos.y > height - this.r) {
            this.vel.y *= -1;
        }
        
        if (this.pos.x<this.r || this.pos.x> width - this.r) {
            this.pos = createVector(width/2, height/2);
            this.speed = 6;
            
            this.vel = p5.Vector.random2D();
            this.vel.mult(this.speed);
            
            if (this.vel.x > -2 && this.vel.x <= 0) {
                this.vel.x -= 2;
            }
            if (this.vel.x < 2 && this.vel.x > 0) {
                this.vel.x += 2;
            }
            
        }
        
        
    }
    
    paddhit(paddle) {
        
        if (paddle.left) {
            if (this.pos.x < paddle.x+22 && this.pos.y > paddle.y && this.pos.y < paddle.y + paddle.height) {
                
                let mag = this.vel.mag() * 1.05;
                let n = map(this.pos.y - paddle.y, 0, paddle.height, -PI/3, PI/3);
                this.vel = p5.Vector.fromAngle(n);
                this.vel.setMag(mag);
                
            }
        } else if (this.pos.x + 8 > paddle.x && this.pos.y > paddle.y && this.pos.y < paddle.y + paddle.height) {
            let mag = this.vel.mag() * 1.05;
            let n = map(this.pos.y - paddle.y, 0, paddle.height, 4*PI/3, 2*PI/3);
            this.vel = p5.Vector.fromAngle(n);
            this.vel.setMag(mag);

        }
        
    }
    
}

class Paddle {
    
    constructor(x) {
        
        this.x = x;
        this.y = height/2 - 64;
        this.height = 128;
        
        this.left = this.x < width/2;
        
    }
    
    move(dir) {
        
        this.y += dir;
        this.y = constrain(this.y, 0, height-129);
        
    }
    
    display() {
        
        rect(this.x, this.y, 8, this.height);
        
    }
}