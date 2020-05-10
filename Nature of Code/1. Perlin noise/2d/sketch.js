var col;
var xoff;
var yoff;
var start = 0;


function setup() {
    createCanvas(200, 200);
    pixelDensity(1);
}

function draw() {
    background(50);
    
    loadPixels();
    
    yoff = 0;
    for (var y=0; y<height; y++) {
        xoff = start;
        for (var x=0; x<width; x++) {
            
            col = noise(xoff, yoff)*255;
            
            pixels[(x + y * width)*4] = col;
            pixels[(x + y * width)*4+1] = col;
            pixels[(x + y * width)*4+2]  =col;
            
            xoff += 0.01
        }
        yoff += 0.01; 
    }
    updatePixels();
    start += 0.01
}
