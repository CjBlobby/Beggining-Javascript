class Ship {
    
    constructor() {
        this.x = width / 2 -30;
        this.y = height - 100;
        this.hp = 3;
    }
    
    show() {
        //Rect with triangle 'gun'
        fill(0, 255, 0);
        rect(this.x, this.y, 60, 30, 10, 10, 0, 0);
        triangle(this.x+15, this.y, this.x+30, this.y-15, this.x+45, this.y);
    }
    
    move(dir) {
        this.x += dir;
        this.x = constrain(this.x, 0, width-60);
    }
}