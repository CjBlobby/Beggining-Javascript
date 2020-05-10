class DNA {
    
    constructor(vecs) {
        if (vecs) {
            this.vecs = vecs;
        }else {
        
            this.vecs = [];
            for (let i=0; i<lifespan; i++) {
                this.vecs[i] = p5.Vector.random2D();
                this.vecs[i].setMag(0.5);
            }
         }
    }
    
}