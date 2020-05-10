let angle = 120;
let s = "F-G-G";
let len = 600;
let n = 0;

function setup() {
    createCanvas(600, 600);
    background(50);
    stroke(255);
}

function mousePressed() {
    resetMatrix();
    background(50);
    translate(530, 600);
    //rotate(angle);
    
    if (n != 0) {
    //if (s.length < 10000) {
        s = generate(s);
        len *= 0.5;
    //}
    }
    display(s);
    n++;
}

function display(s) {
    
    for (let i=0; i<s.length; i++) {
        
        switch(s.charAt(i)) {
            
            case "F":
                line(0, 0, 0, -len);
                translate(0, -len);
                break;
            
            case "G":
                line(0, 0, 0, -len);
                translate(0, -len);
                break;
            
            case "+":
                rotate(radians(angle));
                break;
                
            case "-":
                rotate(radians(-angle));
                break;
                
            case "[":
                push();
                break;
            
            case "]":
                pop();
                break;
                
            }
        
    }
}

function generate(s) {
    let news = "";
    for (let i=0; i<s.length; i++) {
        if (s[i] == "F") {
            news += "F-G+F+G-F";
        } else if (s[i] == "G") {
            news += "GG";
        } else {
            news += s[i];
        }
    }
    return news;
}