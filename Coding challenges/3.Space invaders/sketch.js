var ship;
var army;
var bunkers = [];

//ship movement
var direction = 0;
//different fps for ship + aliens
var gamecount = 0;
var roundno = 1;


//alien sprites / sound
var img1;
var img2;
var font;
var shootfx;
var alienkill;
var bunkhit;
var beats;

function preload() {
    
    img1 = loadImage("Sprites/enemy1.png");
    img2 = loadImage("Sprites/enemy-1.png");
    
    font = loadFont("Fonts/Gaming.ttf");
    
    //shootfx = loadSound("Sounds/shoot.wav");
    //alienkill = loadSound("Sounds/invaderkilled.wav");
    //bunkhit = loadSound("Sounds/bunkerhit.wav");
}


function setup() {
    createCanvas(1900, 910);
    noStroke();
    frameRate(40);
    textFont(font, 50);
    
    //adding bunkers
    for (var i=0; i<4; i++) {
        bunkers[i] =  new Bunker(i*500+100, height-250);
        bunkers[i].removeCorners();
    }
        
    ship = new Ship();
    score = 0;
    
//wave (difficulty) V
    army = new Army(roundno);
    
}


function draw() {
    
    if (win()) {
        roundno ++;
        reset();
        
        
    } else if (ship.hp > 0) {
        background(0);
        //player movement
        inputs();
    
        //updates army every 20 frames
        if (gamecount%10 == 0) {
            army.update();
        }
        if (plyrbullet != undefined) {
            plyrbullet.move();
            plyrbullet.show();
        
            //if bullet off screen, delete bullet
            if (plyrbullet.y < 0) {
                plyrbullet = undefined;
            //Prevents bullet being deleted then raising errors
            } else {
                army.killed();
        }
    
        }
        
        //bullets , army, ship, bunkers
        allbullets();
        
        army.display();  
        
        ship.show();
        ship.move(direction);
        
        for (var bunker of bunkers) {
            bunker.destroyed();
            bunker.display();
        
        }        
        
        stats();
        gamecount++;
        
    } else {
        textSize(80);
        text("GAME OVER", width/2-350, height/2);
        
        //bunkhit.play();
        noLoop();
    }
}


function stats() {
    textSize(40);
    text(score, 40, height-30);
    for (var i=1; i<ship.hp+1; i++) {
        text("*", width-i*100, height-30);
    }
    text(`Round ${roundno}!`, 750, height-30);
}

function inputs() {
    
    if (keyIsDown(LEFT_ARROW)) {
        direction = -10;
    
    }else if (keyIsDown(RIGHT_ARROW)) {
        direction = 10;
    
    //Player still
    }else {
        direction = 0;
        
    }

}

function win() {
    return army.enemylist.length < 1;
}

function reset() {
    
    gamecount = 0;
    bunkers = [];
    
    for (var i=0; i<4; i++) {
        bunkers[i] =  new Bunker(i*500+100, height-250);
        bunkers[i].removeCorners();
    }
        
    ship = new Ship();
    
//wave (difficulty) V
    army = new Army(roundno);
}