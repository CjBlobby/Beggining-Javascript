//Alien Bullets
bullets = [];

function shoot(x, y) {
    bullets[bullets.length] = new Bullet(x, y, 15);    
}

function allbullets() {
    for (var i=0; i<bullets.length; i++) {
        
        bullets[i].show();
        bullets[i].move();
        
        if (bullets[i].hit(ship.x, height-100, 60, 30)) {
            ship.hp -= 1
            bullets.splice(i, 1);
            
        } else if (bullets[i].y > height) {
            bullets.splice(i, 1);
        }
        
    }
    
}



class Army{
    
    
    constructor(waveno) {
        this.waveno = waveno;
        this.gamecount = 0;
        this.aliendir = 10*(waveno/2+1);
        this.alienY = 0;
        this.enemylist = [];
        
        //creates 5 rows of 11 enemies 
        for (var row=0; row<5; row++) {
            this.enemylist[row] = [];
            
            for (var column=0; column<11; column++) {
                
                //                                       alternating sprites  V
                this.enemylist[row][column] = new Enemy(column*120, row*70, column%2);
                
            }
        }
        
    }
    
    
    update() {
        
        //for every alien
        for (var x=0; x<this.enemylist.length; x++) {
            for (var i=0; i<this.enemylist[x].length; i++) {
                
                //if alien at left or right of screen
                if (this.enemylist[x][i].x < 0 || this.enemylist[x][i].x > width-60) {
                //Every alien's direction flipped + moved downwards
                        this.aliendir *= -1.05;
                        this.alienY = 50+roundno*5;
                    
                    //break out of rows loop
                    x = this.enemylist.length;
                    //break out of column's loop
                    break;

                }
                
            }

        }
        
        
        //for every alien
        for (var row of this.enemylist) {
            for (var alien of row) {
                //move down
                alien.moveY(this.alienY);
                //move left or right
                alien.moveX(this.aliendir);
                
                //change sprite while moving
                if (alien.imgcount==1) {
                    alien.imgcount = 0;
                } else {
                    alien.imgcount = 1;
                }
                
                //shoot
                if (random(100) > 100-roundno) {
                    shoot(alien.x+30, alien.y+30);
                }
                if (alien.y > height-300) {
                    ship.hp = 0;
                }
            }
        }
    //re-set y movement
    this.alienY = 0;
        
    }
    
    killed() {
        
        //for every alien
        for (var x=0; x<this.enemylist.length; x++) {
            for (var i=0; i<this.enemylist[x].length; i++) {
                    
                    //if bullets hit enemy
                    if (plyrbullet.hit(this.enemylist[x][i].x, this.enemylist[x][i].y, 60, 46)) {
                        
                        //alienkill.play();
                        score += 10;
                        //remove enemy + bullet
                        this.enemylist[x].splice(i, 1);
                        plyrbullet = undefined;
                        
                        //remove row
                        if (this.enemylist[x].length == 0) {
                            this.enemylist.splice(x, 1);
                        }
                        
                        //break out of loops
                        x = this.enemylist.length;
                        break;
                    }
                    
                }
            }
        }
    
    
    display() {
        //for every alien
        for (var row of this.enemylist) {
            for (var alien of row) {
                //show alien
                alien.show();
            }
        }
    }
    
}


class Enemy {
    
    constructor(x, y, imgcount) {
        this.x = x;
        this.y = y;
        
        // Alternating sprites for movement
        this.imgcount = imgcount;
        }
    
    show() {
        
        //Changing sprites
        if (this.imgcount==1) {
            image(img1, this.x, this.y, 60, 46);
            }else{
                image(img2, this.x, this.y, 60, 46);
        }
    
    }
    
    moveX(dir) {
        this.x += dir;
    }
    
    moveY(ymove) {
        this.y += ymove;
    }
}