class obstacle {
    
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    
    hit(flier) {
        return flier.pos.x > this.x && flier.pos.x < this.x + this.w &&
               flier.pos.y > this.y && flier.pos.y < this.y + this.h
    }
    
    show() {
        rect(this.x, this.y, this.w, this.h);
    }
    
}