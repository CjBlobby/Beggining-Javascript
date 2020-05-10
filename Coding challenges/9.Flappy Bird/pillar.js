class Pillar {
    
    constructor(y) {

        
        this.x = width;
        this.y  = y;
    
        this.gap  = height/4;
        this.w = 64;
        this.h = height - y;
    
        //IMPORTANT
        this.topH = this.y - this.gap;
    }
    
    
    update() {
        this.x -= speed;        
    }
    
    show() {
        fill(0, 255, 0);
        //BOTTOM
        image(bottompipepic, this.x, this.y, this.w, this.h);
        
        //TOP
        image(toppipepic, this.x, 0, this.w, this.topH);
    }
    
    collide(b) {
        //BOTTOM
        if (b.y + b.r*2 > this.y+4 && b.x + b.r*2 > this.x +4 && b.x < this.x + this.w-4) {
            return true;
        }
        
        //TOP
        if (b.y < this.topH-8 && b.x + b.r*2 > this.x+8 && b.x < this.x + this.w-4) {
            return true;
        }
        
        return false;
        
    } 
    
    
}