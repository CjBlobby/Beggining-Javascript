var plyrbullet;

class Bullet {
    
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.dir = dir;
        
    }
    
    move() {
        
        this.y += this.dir;
        
    }
    
    show() {
        //white = good
        fill(255);
        //red = bad
        if (this.dir > 0) {
            fill(255, 0, 0);
        }
        
        rect(this.x-2, this.y, 3, 15);
        
    }
    
    hit(x, y, w, h) {
        
        
        return this.x >= x && this.x <= x + w && this.y >= y && this.y <= y + h
        
    }
}


function keyPressed() {
    //spacebar
    if (keyCode == 32 && plyrbullet == undefined && undbunk(ship.x+30) == false) {
        plyrbullet = new Bullet(ship.x+30, height-100, -30);
        //shootfx.play();
        
    }
}


function undbunk(x) {
    
    if (x > 100 && x < 260) {
        return true;
    } else if (x > 600 && x < 760) {
        return true;
    } else if (x > 1100 && x < 1260) {
        return true;
    } else if (x > 1600 && x < 1760) {
        return true;
    } else {
        return false;
    }

}








