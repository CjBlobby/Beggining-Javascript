let tiles = [];
let xw = 5;
let yw = 5;
let cols, rows;

function setup() {
    createCanvas(600, 600);
    fill(255);
    
    cols = width / xw;
    rows = height / yw;
    
    for (let i=0; i<cols+2; i++) {
        tiles[i] = [];
        for (let j=0; j<rows+2; j++) {
            tiles[i][j] = floor(random(1.5));
        }
    }

}

function draw() {
    background(0);
    
    showgrid(tiles);
    
    tiles = updateGrid(tiles);
}

function showgrid(grid) {
    
    for (let x=1; x<grid.length; x++) {
        for (let y=0; y<grid[x].length; y++) {
            if (grid[x][y] == 1) {
                rect(x*xw-xw, y*yw-yw, xw, yw);
            }
        }
    }
}

function updateGrid(grid) {
    let nextG = [];
    
    //SETS TOP AND BOTTOM TO BE LOOPED
    grid[0] = grid[cols];
    grid[cols+1] = grid[0];
    
    //LOOPS THROUGH ROWS + MAKES THEM LOOPED
    for (let i=0; i<tiles.length; i++) {
        tiles[i][0] = tiles[i][rows];
        tiles[i][rows+1] = tiles[i][1];
    }
    
    
    for (let x=1; x<grid.length-1; x++) {
        nextG[x] = [];
        for (let y=1; y<grid[x].length-1; y++) {
            
            let neighbours = Neighbours(grid, x, y);

            let count = 0;
            
            for (let n of neighbours) {
                if (n == 1) {
                    count ++;
                }
            }
            //DEAD
            if (count < 2 || count > 3) {
                nextG[x][y] = 0;

            } else if (count == 2 && grid[x][y] == 0) {
                nextG[x][y] = 0;

                //ALIVE           
            }if (grid[x][y] == 1 && count == 2) {

                nextG[x][y] = 1;

            } else if(count == 3) {

                nextG[x][y] = 1;

            }
            
        }
    }
    nextG[0] = nextG[cols];
    nextG[cols+1] = nextG[0];
    return nextG;
    
}

function Neighbours(grid, x, y) {
    let neighbours = [grid[x-1][y-1], grid[x][y-1], grid[x+1][y-1], 
                    grid[x-1][y], grid[x+1][y], //REMOVED SELF FROM NEIGHBOURS
                    grid[x-1][y+1], grid[x][y+1], grid[x+1][y+1]];
    
    return neighbours;
}