let b;
let pipes = [];
let g;
let interval = 150;
let count = 0;
let bpic;
let bottompipepic;
let toppipepic;
let score = 0;
let game = true;
let deadcount = 0;
let speed;


function preload() {
    bpic = loadImage("images/BirdPic.png");
    bottompipepic  = loadImage("images/PipePic.png");
    toppipepic = loadImage("images/cloudPic.png");
}

function setup() {
    createCanvas(windowWidth-16, windowHeight-16);
    textSize(40);
    
    b =  new Bird(height / 2);
    g = height / 2000;
    speed = width/256;
    interval = width;
}

function draw() {
    if (game) {
    background(28, 141, 255);
    
    for (let i=pipes.length-1; i > 0; i--) {
        pipes[i].update();
        pipes[i].show();
        
        if (pipes[i].x  + pipes[i].w < 0) {
            pipes.splice(i, 1);
        }
    }
    
    if (count % interval == 0) {
        
        //noise(count/5) ==> very slightly smooth gaussian randomness
        pipes.push(new Pillar(height/4 + noise(count)*(height - height/4)));
        speed += width/5000;        
    }
    if (count % interval == 60) {
        score ++;
    }
    fill(255);
    text(score, width/2 - 100, 50);
    
    b.update(pipes);
    b.applyForce(g);
    b.show();
    
    count ++;
    } else {
        text("GAME OVER!", width/2 - 100, height / 2 -50);
        text("Tap To Restart", width/2-100, height/2 + 50);
        deadcount ++;
    }
    
}

function mousePressed() {
    if (game) {
        b.jump();
    } else if (deadcount > 20) {
        reset();
    }
}

function reset() {
    b =  new Bird(height / 2);
    score = 0;
    game = true;
    deadcount = 0;
    count = 0;
    pipes = [];
    speed = width/256;
}