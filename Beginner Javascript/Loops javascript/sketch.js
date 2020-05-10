//Loops draw bands because draw() is only excecuted once both loops are finished.

function setup() {
    createCanvas(600, 400);
    noStroke();
}

function draw() {
    background(0, 0, 255);
    fill(0, 255, 0);
    
    var x = 0;    
    while (x <= width) {
        rect(x, 50, 25, 25);
        x = x + 1;
    }
    
    fill(255, 0, 0);
    
    //for (variable initialised, Boolean check, variable increment)
    for (var x = 0; x < width; x++){
        
        rect(x, 250, 25, 25);
        
        //NESTED LOOP: (commented as it runs slowly when 600 * 400 squares are being made)
        
        //for (var y = 0; y < height; y++){
        //    rect(x, y, 25, 25);
        //}
        
    }
    
}
