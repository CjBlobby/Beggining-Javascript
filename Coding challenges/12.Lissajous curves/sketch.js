let s = 50;
let xcircs = [];
let ycircs = [];

function setup() {
    createCanvas(windowWidth-64, windowHeight-64);
    background(50);
    
    for (let x=1; x+1<width/(s+16); x++) {
        xcircs[x] = new Circle(x, 1, x/200);
    }
    
    for (let y=1; y+16<width/(s+16); y++) {
        ycircs[y] = new Circle(1, y, y/200);
    }
    
    noFill();
    stroke(255);

}

function draw() {

    for (let i=2; i<xcircs.length; i++) {
        
        xcircs[i].show();
        xcircs[i].rotate();
        xcircs[i].curve(ycircs);
        
    }
    for (let i=2; i<ycircs.length; i++) {
        
        ycircs[i].show();
        ycircs[i].rotate();
        
    }
}

class Circle {
    
    constructor(x, y, speed) {
        this.x = x * (s + 16);
        this.y = y * (s + 16);
        this.speed = speed;
        
        this.dx = this.x;
        this.dy = this.y + s/2;
        this.ang = 90;
        this.r = s/2;
        
    }
    
    show() {
        strokeWeight(1);
        ellipse(this.x, this.y, s, s);
        strokeWeight(4);
        point(this.dx, this.dy);
    }
    
    rotate() {
        this.ang += this.speed;
        
        this.dx = this.r * cos(this.ang) + this.x;
        this.dy = this.r * sin(this.ang) + this.y;
        
    }
    
    curve(cArray) {
        strokeWeight(1);
        for (let i=2; i<cArray.length; i++) {
            
            point(this.dx, cArray[i].dy);
            
        }
        
    }
    
}








