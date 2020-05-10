var walkman;
var walkman2;

function setup() {
    createCanvas(600, 400);
    fill(0, 0, 255)
    background(255, 0, 0)
    noStroke()
    walkman = new Walker(300, 200, 50);
    walkman2 = new Walker(100, 100, 20);
}

function draw() {
    walkman.move()
    walkman.show()
    walkman2.move()
    walkman2.show()
    
}



class Walker {
    
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    
    move() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
    
    show() {
        ellipse(this.x, this.y, this.size)
    }
}

function mousePressed() {
    background(255, 0, 0)
}