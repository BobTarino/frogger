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
       ctx1.fillStyle = 'black';
       ctx1.fillRect(this.x, this.y, this.width, this.height); 
    }
    update(){
        this.x += this.speed * gameSpeed; // have to multiply game speed to keep same plus/minus value and direction
        if (this.speed > 0){
            if (this.x > canvas.width + this.width){
                this.x = 0 - this.width;
            } // resets car at left edge of canvas if car drives past right edge
        } else { 
            if (this.x < 0 - this.width ){ 
                this.x = canvas.width + this.width; // resets car at right of canvas if car drives past left edge
            }
        }
    }
}

// initial obstacles lane by lane 
function initObstacles(){
    // lane 1 for loop runs twice
    for (let i = 0; i < 2; i++){
        let x = i * 350; // space between cars
        carsArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid * 2, grid, 1, 'car' )); // pushes new car object to array
    }
    // lane 2 
    for (let i = 0; i < 2; i++){
        let x = i * 300; // space between cars
        carsArray.push(new Obstacle(x, canvas.height - grid * 3 - 20, grid * 2, grid, -2, 'car' ))// pushes new car object to array
    }
    // lane 3
    




}


initObstacles();

// function to cycle through cars array

function handleObstacles(){
    for (let i = 0; i < carsArray.length; i++){
        carsArray[i].update();
        carsArray[i].draw();
    }
}
