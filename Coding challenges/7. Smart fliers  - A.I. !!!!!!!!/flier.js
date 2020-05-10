class Flier {
    
    constructor(brain) {
        
        this.pos = createVector(300, 500);
        this.vel = createVector();
        this.acc = createVector();
        
        if (brain) {
            this.dna = brain;
        } else {
            this.dna = new DNA();
        }
        
        this.live = true;
        this.stepcount = 0;
        
        this.checkpoints = [];
        
    }
    
    update() {
        
        if (this.live) {
            this.acc = this.dna.vecs[this.stepcount].copy();
        
            this.vel.add(this.acc);
            this.vel.limit(5);
            this.pos.add(this.vel);
            
            this.edges();
            this.stepcount++;
        }
        this.acc.mult(0);
    }
    
    show() {
        
        ellipse(this.pos.x, this.pos.y, 4);
        
    }
    
    edges() {
        if (this.pos.x < 4 || this.pos.x > width-4 || this.pos.y < 4 || this.pos.y > height-4) {
            this.live = false;
        }
        if (dist(this.pos.x, this.pos.y, target.x, target.y) < 10) {
            this.live = false;
        }
        
        for (var obs of obstacles) {
            if (obs.hit(this)) {
                this.live = false;
            }
        }
        
        for (let check of checkpoints) {
            let doublecheck = false;
            for (let prevcheck of this.checkpoints) {
                if (prevcheck === check) {
                    doublecheck = true;
                }
            }
            if (check.hit(this) && !doublecheck) {
                this.checkpoints.push(check);
            }
        }
        
    }
    
    thisfit() {
        let d = dist(this.pos.x, this.pos.y, target.x, target.y);        
        let ret = floor(1000/d*2) * this.checkpoints.length ** 2 - 1;
        
        if (d<10) {
            completer = new Flier(this.dna);
            
        }
        
        totalfit += ret;
        return ret;
    }
    
}





