let sheet, sheetdata;
let frames = [];
let x = 0;
let xdir;

function preload() {
    
    sheet = loadImage('Smile.png');
    sheetdata = loadJSON('spritesheet.json');
}

function setup() {
    createCanvas(600, 600);
    frames = spritesheetToSprites(sheet, sheetdata);
}

function draw() {
    background(25);
    image(frames[floor(x) % frames.length], 100, 100);
    
    x += 0.1;
}

function spritesheetToSprites(sheet, sheetdata) {
    let temparr = [];
    for (let img of sheetdata.frames) {
        temparr.push(sheet.get(img.x, img.y, img.w, img.h));
    }
    
    return temparr;
} 