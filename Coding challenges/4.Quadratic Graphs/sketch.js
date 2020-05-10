var xsq, xcoeff, cslider;

function setup() {
    createCanvas(600, 600);
    
    xsq = createSlider(-5, 5, 1, 0.2);
    xsq.position(10, 610);
    
    xcoeff = createSlider(-20, 20, 0, 1);
    xcoeff.position(150, 610);
    
    cslider = createSlider(-100, 100, 0, 10);
    cslider.position(290, 610);
}

function draw() {
    background(0);
    stroke(255);
    noFill();
    
    translate(0, -300);
    
    var xsqcoeff = xsq.value();
    var xcoefficient = xcoeff.value();
    
    
    beginShape();
    for (var x=-60; x<60; x++) {
        var xcoord = map(x, -60, 60, 0, width);
        
        //noise part
        var y = (xsqcoeff * x**2) + (xcoefficient * x) + cslider.value();
        var ycoord = map(y, 0, 600, 600, 0);
        
        vertex(xcoord, ycoord);
        
    }
    endShape();
}