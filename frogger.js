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
        this.x = canvas.width/2 -this.width/2;
        this.y = canvas.height -this.height - 40;
        // prevent frog from moving across screen too fast
        this.moving = false;
        // holds coordinates for current frame within sprite sheet // will dynamically change to move frog
        this.frameX = 0;
        this.frameY = 0;
    }
    update() {
       console.log('update');
    }
    // frog will be on canvas 3 
    draw(){
        ctx3.fillStyle = 'green';
        ctx3.fillRect(this.x, this.y, this.width, this.height);
    }
}

// variable will be equal to new object created from frogger constructor
// code in place will lead into animation loop
const frogger = new Frogger();