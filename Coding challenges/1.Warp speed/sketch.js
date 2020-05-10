var stars = [];


function setup() {
    createCanvas(600, 600);
    fill(255);
    stroke(255);
    frameRate(15);
    
    for (var x = 0; x < 400; x++) {
        xdir = random(-1, 1);
        ydir = random(-1, 1);
        stars[x] = new Star(xdir, ydir);
        
    }
}

function draw() {
    background(0);
    
    for (star of stars) {
        
        star.move();
        star.show();
        star.edge();
        
        }
    }


class Star {
    
    constructor(xdir, ydir) {
        this.xdir = xdir;
        this.ydir = ydir;
        this.x = width / 2 + xdir * 2;
        this.y = height / 2 + ydir * 2;
        this.size = 1;
        this.i = 0;
    }
    
    move() {
        
        this.x = this.x + this.xdir;
        this.y = this.y + this.ydir;
        
        this.xdir = this.xdir * 1.2;
        this.ydir = this.ydir * 1.2;
        this.size = this.size + (this.xdir + this.ydir) / 60;
        this.i++;
        
    }
    
    show() {
        
        if (this.i > 5) {
            ellipse(this.x, this.y, this.size);
            line(this.x, this.y, this.x-this.xdir*2, this.y-this.ydir*2);
        }
        
        
                
    }
    
    edge() {
        
        if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
            this.x = width / 2 + xdir / 2;
            this.y = height / 2 + ydir / 2;
            this.xdir = random(-10, 10);
            this.ydir = random(-10, 10);
            this.size = 1;
            this.i = 0;
        }
        
    }
    
}





