var nums = [12, 67, 100, 240, 32 0];
var index = 3;



function setup() {
    createCanvas(600, 400);

}

function draw() {
    
    background(0, 200, 255);
    ellipse(50, 200, nums[0], nums[index]);
    
    for (var x = 0; x < 5; x++) {
        rect(nums[x], nums[x], nums[x], nums[x])
    }
    
    

}

function mousePressed() {
    index++
    if (index>4) {
        x = 0
    }
}