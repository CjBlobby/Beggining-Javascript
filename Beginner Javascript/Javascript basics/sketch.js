function setup() {
    createCanvas(400, 400);
    console.log("Hello world.");

}

function draw() {
    
    background(0, 255, 100);
    stroke(0, 0, 0, 200);
    
    fill(255, 255, 200);
    rect(50, 50, 300, 300);
    
    fill(0, 0, 255, 200);
    noStroke();
    ellipse(100, 100, 50, 50);
    ellipse(300, 100, 50, 50);
    
    strokeWeight(10);
    stroke(0, 0, 0, 200);
    line(200, 150, 200, 200);
    
    fill(255, 0, 0, 200);
    triangle(200, 300, 100, 250, 300, 250);
    
}