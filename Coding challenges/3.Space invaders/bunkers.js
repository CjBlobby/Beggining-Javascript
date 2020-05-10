class Bunker {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.cubes = [];
        
        //2d array of cubes
        for (var i=0; i<6; i++ ) {
            this.cubes[i] = [];
            for (var j=0; j<8; j++ ) {
                this.cubes[i][j] = new Cube(this.x+j*20, this.y+i*20, 20);
            }
        }
        
    }
    
    display() {
        for (var x=0; x<this.cubes.length; x++) {
            for (var y=0; y<this.cubes[x].length; y++) {
                this.cubes[x][y].show();
            }
        }
    }
    
    removeCorners() {
        this.cubes[0].splice(0, 2);
        this.cubes[0].splice(-2, 2);
        this.cubes[1].splice(0, 1);
        this.cubes[1].splice(-1, 1);
        this.cubes[5].splice(2, 4);
    }
    
    destroyed() {
            //row
            for (var x=0; x<this.cubes.length; x++) {

                //column
                for (var i=0; i<this.cubes[x].length; i++) {
                    
                    //if bullets hit
                    for (var bulletno=0; bulletno<bullets.length; bulletno++) {
                        if (bullets[bulletno].y > height - 300) {
                            
                            if (bullets[bulletno].hit(this.cubes[x][i].x, this.cubes[x][i].y, 20, 20)) {
                                
                                //bunkhit.play();
                                //remove cube + bullet
                                this.cubes[x].splice(i, 1);
                                bullets.splice(bulletno, 1);
                            
                                //break out of loops
                                bulletno = this.cubes.length;
                                break;
                            }
                        }
                    }
                
                }
                
            }
        
    }
    
}

class Cube {
    
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    
    show() {
        rect(this.x, this.y, this.size-1, this.size-1);
    }
    
}