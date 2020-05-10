let fliers = [];
let lifespan = 350;
let target;
let gamecount = 0;
let pool;
let mutrate = 2;
let obstacles;
let checkpoints;

let completer = null;

let avfit = 0;
let totalfit = 0;

function setup() {
    createCanvas(600, 600);
    noStroke();
    
    
    for (let i=0; i < 500; i++) {
        fliers[i] = new Flier();
    }
    
    target = createVector(300, 50);
    
    
    //_______________________________
    obstacles = [
        new obstacle(0, 150, 400, 16),
        new obstacle(200, 290, 400, 16),
        new obstacle(0, 420, 400, 16),
        
    ]
    //_______________________________
    checkpoints = [
        new obstacle(400, 424, 200, 8),
        new obstacle(204, 306, 8, 114),
        new obstacle(0, 294, 200, 8),
        new obstacle(204, 166, 8, 124),
        new obstacle(400, 154, 200, 8),
        new obstacle(388, 0, 8, 150),
        new obstacle(388, 166, 8, 124),
        
        
    ]
    //______________________________
}

function draw() {
    background(50);
    
    if (!completer) {
    
    fill(255, 0, 0);
    for (let obs of obstacles) {
        obs.show();
    }
    
    fill(0, 255, 0);
    ellipse(target.x, target.y, 20); 
    
    //Remove for speed    
    for (let check of checkpoints) {
        check.show();
    }
    
    fill(255);
    
    if (gamecount<lifespan) {
        for (let i=0; i < fliers.length; i++) {
            fliers[i].update();
            
            //Remove for speed 
            fliers[i].show();
        }
    
        gamecount++;
    } else {
        
        selection();//MAKES POOL BASED ON FITNESS
        crossover();//RESETS FLIES WITH BETTER DNA
        mutation();//ALLOWS FOR NEW INNOVATION BEHOND #1 OF GEN 1
        gamecount = 0;
        
        avfit = totalfit / 500;
        //console.log(avfit);
        avfit = 0;
        totalfit = 0;
    }
    } else {
        fill(255, 0, 0);
        for (let obs of obstacles) {
            obs.show();
        }
        
        fill(0, 255, 0);
        ellipse(target.x, target.y, 20);
        
        fill(255);
        completer.update();
        completer.show();
        
        gamecount++;
        
        if (gamecount == lifespan + 10){
            completer = new Flier(completer.dna);
            gamecount = 0;
        }
    }
}

function selection() {
    pool = [];
    
    for (let i=0; i<fliers.length; i+=2) {
        
        let chance = fliers[i].thisfit();
        
        for (let j=0; j<chance; j++) {
            pool[pool.length] = fliers[i].dna;

        }
    }
    
}


function crossover() {
    
    for (let i=0; i<fliers.length; i++) {
        let gene1 = random(pool);
        let gene2 = random(pool);
        let newgene = []; // VECTOR ARRAY, NOT DNA
        
        for (let j=0; j<lifespan/2; j++) {
            newgene[j] = gene1.vecs[j];
        }
        
        for (let k=lifespan/2; k<lifespan; k++) {
            newgene[k] = gene2.vecs[k];
        }
        
        
        fliers[i] = new Flier(new DNA(newgene));
        
    }
  
}

function mutation() {
    for (let flierator of fliers) {
        for (let vecno=0; vecno<flierator.dna.vecs.length; vecno++) {
        
            if (random(100) < mutrate) {
                flierator.dna.vecs[vecno] = p5.Vector.random2D();
            }
            
        }
    }
}