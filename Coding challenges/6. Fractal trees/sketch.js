function setup() {
    createCanvas(600, 600);
    stroke(255);
}

function draw() {
    background(0);    
    translate(300, 600);
    
    branches(200);
}

function branches(len) {
    line(0, 0, 0, -len);
    let ang = PI / 3;
    
    if (len > 4) {
        translate(0, -len);
        
        push();
        rotate(ang);
    
        branches(len*0.6);
        pop();
        
        push();
        rotate(-ang);
    
        branches(len*0.6);
        pop();
    }
}