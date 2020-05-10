var arrow;

function setup() {
    createCanvas(600, 600);
    background(50);
    
    //strokeWeight(4);
    stroke(255);
}


function draw() {
    translate(width/2, height/2);
    
    arrow = p5.Vector.random2D();
    arrow.mult(random(300));
    
    stroke(random(255), random(255), random(255), 150);
;
    
    line(0, 0, arrow.x, arrow.y);

}