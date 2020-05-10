var walkers = [];
var mouseclicked = false;

function setup() {
    createCanvas(600, 400);
    
    //LOOPING X AMOUNT OF TIMES****************************************************
    for (var i = 0; i < 10; i++) {
                
        walkers[i] = new Walker(random(600), random(height), random(50, 100));

        }
    }

function draw() {
    background(255, 0, 0);
    
    var x = 0;
     //LOOPING THROUGH A LIST*******************************************************
    for (var walkman of walkers) {
        
        walkman.move();
        walkman.show();
        walkman.colour = 0;
        
        for (var otherwalk of walkers) {
            
            if (otherwalk.intersect(walkman) && otherwalk != walkman) {
                //console.log("intersect");
                otherwalk.colour = 255;
                
                }
            }
            
        if (mouseclicked && walkman.clicked()) {
                walkers.splice(x, 1);
                x--;
                            
                mouseclicked = false;
            }
        
        
        x++; 
        }
        
        }
            

class Walker {
    
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.colour = 0
        }
    
    move() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
        }
    
    show() {
        fill(this.colour)
        ellipse(this.x, this.y, this.size)
        fill(0)
        }
    
    clicked() {
        
        return dist(mouseX, mouseY, this.x, this.y) < this.size / 2;
            
        }
    
    intersect(walker) {
        return dist(this.x, this.y, walker.x, walker.y) < (this.size + walker.size)  /2;
        
        }
    
    }




function mousePressed() {
    mouseclicked = true;
}






