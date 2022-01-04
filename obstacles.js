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
       // obstacles drawn on canvas 3
       ctx3.fillStyle = 'black';
       ctx3.fillRect(this.x, this.y, this.width, this.height); 
    }
    // direct relationship bewteen gameSpeed and movement speed of obstacles
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

// initial car obstacles lane by lane 
function initObstacles(){
    // lane 1 for loop runs twice
    for (let i = 0; i < 2; i++){
        let x = i * 350; // space between cars
        carsArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid * 2, grid, 1, 'car' )); // pushes two car objects to array
    }
    // lane 2 
    for (let i = 0; i < 2; i++){
        let x = i * 300; // space between cars
        carsArray.push(new Obstacle(x, canvas.height - grid * 3 - 20, grid * 2, grid, -2, 'car' )); // pushes two car objects to array
    }
    // lane 3
    for (let i = 0; i < 2; i++){
        let x = i * 400; 
        carsArray.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid * 3, grid, 2, 'car' )); // pushes two truck object to array
    }
    // lane 4 
    for (let i = 0; i < 2; i++){
        let x = i * 400; 
        logsArray.push(new Obstacle(x, canvas.height - grid * 5 - 20, grid * 2, grid, -2, 'log')); // pushes two log objects to array
    }
    // lane 5 
    for (let i = 0; i < 3; i++){
        let x = i * 200; 
        logsArray.push(new Obstacle(x, canvas.height - grid * 6 - 20, grid, grid, 1, 'turtle')); // pushes three turtles to object to array
    }
}


initObstacles();

// function to cycle through cars array

function handleObstacles(){
    for (let i = 0; i < carsArray.length; i++){
        carsArray[i].update();
        carsArray[i].draw();
    }
    for (let i = 0; i < logsArray.length; i++){
        logsArray[i].update();
        logsArray[i].draw();
    }
    // collision with car



}



