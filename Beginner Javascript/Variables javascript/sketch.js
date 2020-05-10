
var myrect = {
    
    y: 10,
    rectwidth: 40,
    rectheight: 30,    
    
};

var ydir = 1;
var boolVar = true;

var r;
var g;
var b;


function setup() {
    createCanvas(400, 400);
    console.log("Hello world.");
    g = random(0, 255);
    
}

function draw() {
    noStroke();
    background(0, g, 0);
    
    
    if (myrect.y > height || myrect.y < 0) {
        ydir = ydir * -1
        }else if (myrect.y == 200){
            console.log("200!")            
        }else{
            console.log("normal")
        };
    
    if (boolVar){
        console.log("normal")
    }
    
    
    myrect.y = myrect.y + ydir ;
        
    r = map(mouseX, 0, 400, 0, 255);
    b = map(mouseX, 0, 400, 255, 0);
    
    fill(r, 0, b);
    rect(mouseX - 20, myrect.y, myrect.rectwidth, myrect.rectheight);
       
}


function mousePressed() {
    myrect.rectheight = myrect.rectheight + 10
}