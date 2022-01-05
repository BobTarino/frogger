class Frogger {
    constructor() {
        // blueprint ()
        // width of one frame in sprite sheet
        this.spriteWidth = 250;
        // height of one frame in sprite sheet
        this.spriteHeight = 250;
        // scale it down
        this.width = this.spriteWidth/5;
        this.height = this.spriteHeight/5;
        // x and y coordiantes where frog first appears (centered and at bottom)
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height - 40;
        // prevent frog from moving across screen too fast
        this.moving = false;
        // holds coordinates for current frame within sprite sheet // will dynamically change to move frog
        this.frameX = 0;
        this.frameY = 0;
    }
    update() {
       if (keys[38]){ // up
            if (this.moving === false) {
                this.y -= grid; // frog will jump 80 pixels up
                this.moving = true; // statement is only enetered when movement is false
                this.frameX = 1; // image of frog jumping up in frog spritesheet
                this.frameY = 0; // represents first row in frog spritesheet
            }
        }
        if (keys[40]){ // down
            if (this.moving === false && this.y < canvas.height - this.height * 2){ // prevents frog from leaving screen
                this.y += grid; // frog will jump 80 pixels down
                this.moving = true;  // statement is only enetered when movement is false
                this.frameY = 3; // represents bottom row in frog spritesheet
            } 
        }
        if (keys[37]){ // left
            if (this.moving === false && this.x > this.width){
                this.x -= grid; 
                this.moving = true;  
                this.frameY = 2;
            } 
        }
        if (keys[39]){ // right
            if (this.moving === false && this.x < canvas.width - this.width * 2){
                this.x += grid; 
                this.moving = true;  
            } 
        }
        if (this.y < 0) scored(); // if player moves past top edge of game area

    }
    // frog will be on canvas 3 
    draw(){
        ctx3.fillStyle = 'green';
        // ctx3.fillRect(this.x, this.y, this.width, this.height);
        ctx3.drawImage(froggerSprite, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x - 25, this.y - 25, this.width * 2, this.height * 2); // crop out 1 frame of frog // be careful when scaling sprites to not move sprite out of collision detection area
    }
    jump() {
        if (this.moving === false) this.frameX = 1;
        else if (this.frameX === 1) this.frameY = 0;
    }
}

// variable will be equal to new object created from frogger constructor
// code in place will lead into animation loop
const frogger = new Frogger();