var walker;

function setup() {
    createCanvas(600, 600);
    walker = new Walker(300, 300);
    background(50);
}


function draw() {
    walker.walk();
    walker.show();
}

class Walker {
    
    constructor(x, y) {
        this.pos = createVector(x, y);
    }
    
    walk() {
        this.pos.x = this.pos.x + random(-1, 1);
        this.pos.y = this.pos.y + random(-1, 1);
    }
    
    
    show() {
        stroke(0, 0, 255);
        point(this.pos.x, this.pos.y);
    }
}