class Obstacle {
    constructor(x, y, width, height, speed, type){ 
        // assigning attributes to properties on new blank object it creates
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
    }
    draw(){
       // obstacles drawn on canvas 1 
       ctx1.fillRect(this.x, this.y, this.width, this.height); 
    }
    update(){
        this.x += this.speed * gameSpeed; // have to multiply game speed to keep same plus/minus value and direction
    }
}

// initial obstacles lane by lane 
function initObstacles(){
    // lane 1
    for (let i = 0; i < 2; i++){
        
    }
}