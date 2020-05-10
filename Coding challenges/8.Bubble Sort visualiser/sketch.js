let lines = [];
let num = 1200;
let s = 0;

function setup() {
    createCanvas(600, 600);
    stroke(255);
    
    for (let x=0; x<num; x++) {
        lines.push(x);
    }
    
    shuffle(lines, true);
    
    s = floor(width / lines.length);
    strokeWeight(s);
    
}

function draw() {
    background(50);
    
    for (let i=0; i<lines.length; i++) {
        let val = lines[i];
        
        line(i * s, height, i * s, height - val * s);
        
    }
    
    Bubble(lines);
    
}

function Bubble(vallist) {
    
    for (let i=0; i<vallist.length; i++) {
        
        if (vallist[i] < vallist[i+1]) {
            let n = vallist[i];
            vallist[i] = vallist[i+1];
            vallist[i+1] = n;
            
            //Only sort 1 per frame \/
            i = vallist.length;
            
        }
        
    }
    
}