function setup() {
    createCanvas(600, 600);
    ball = new Ball();
}


function draw() {
    background(50);
    ball.update();
    ball.display();
}

class Ball {
    
    constructor() {
        this.pos = createVector(width/2, height/2);
        this.vel = createVector();
        this.acc = createVector();
    }
    
    update() {
        var mousepos = createVector(mouseX, mouseY);
        this.acc = p5.Vector.sub(mousepos, this.pos).setMag(1);
                
        this.vel.add(this.acc).limit(10);
        this.pos.add(this.vel);
    }
    
    display() {
        fill(0, 0, 255);
        ellipse(this.pos.x, this.pos.y, 10);
    }
    
}