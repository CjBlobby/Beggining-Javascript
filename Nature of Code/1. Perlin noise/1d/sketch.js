var increment = 0;
var spike;
var falloff;

function setup() {
    createCanvas(600, 600);
    
    falloff = createSlider(0.05, 1, 0.5, 0);
    falloff.position(140, 610);
    
    spike = createSlider(1, 16, 4, 1);
    spike.position(10, 610);
}

function draw() {
    background(0);
    stroke(255);
    noFill();
    
    noiseDetail(spike.value(), falloff.value());
    
    var xoff = increment;
    
    beginShape();
    for (var x=0; x<width; x++) {
        
        //noise part
        var y = noise(xoff)*height/2;
        xoff += 0.02
        
        vertex(x, y);
        
    }
    endShape();
    
    increment += 0.02;
}