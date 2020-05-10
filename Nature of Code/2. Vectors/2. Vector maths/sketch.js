var walker;

function setup() {
    createCanvas(600, 600);
    walker = new Walker(300, 300);
    rectMode(CENTER);
    
}


function draw() {
    background(50);
    
    walker.move();
    walker.show();
}


//non-random
class Walker {
    
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 1)
    }
    
    move() {
        //MATH HERE. HAVE FUN!
        this.pos.add(this.vel);
    }
    
    
    show() {
        fill(0, 0, 255);
        rect(this.pos.x, this.pos.y, 20, 20);
    }
}