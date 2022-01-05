class Obstacle {
    constructor(x, y, width, height, speed, type){ 
        // assigning attributes to properties on new blank object it creates
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        this.frameX = 0; // x coordinate for cropped out frame 
        this.frameY = 0; // y coordinate for cropped out frame 
        this.randomise = Math.floor(Math.random() * 30 + 30); // desynchronize turtles with random number between 30 and 60 (without decimal points)
        this.carType = (Math.floor(Math.random() * numberOfCars));   // pick random car from spritesheet
    }
    draw(){
       if (this.type === 'turtle'){
           if (frame % this.randomise === 0) { // animates turtle flippers at differnt pace
                if (this.frameX >= 1) this.frameX = 0; // cycle between frame 1 and 0 horizontally
                else this.frameX++; // animates frames
           }
            // ctx1.fillRect(this.x, this.y, this.width, this.height); // see if hitbox area matches image to make sure if we jump on turtle we dont fall
            // one frame from spread sheet is 70x70 pix
           ctx1.drawImage(turtle, this.frameX * 70, this.frameY * 70, 70, 70, this.x, this.y, this.width, this.height); // attributes: image, four attributes for area to crop out of spritesheet, four other attributes for where you want to draw image 
       } else if (this.type === 'log'){
           ctx1.drawImage(log, this.x, this.y, this.width, this.height);  
       } else {
        //    ctx2.fillRect(this.x, this.y, this.width, this.height); // check collision area
           ctx2.drawImage(car, this.frameX * this.width, this.carType * this.height, grid * 2, grid, this.x, this.y, this.width, this.height); // copies out random cars
       }
       // obstacles drawn on canvas 3
    //    ctx3.fillStyle = 'black';
    //    ctx3.fillRect(this.x, this.y, this.width, this.height); 
    }


    // direct relationship bewteen gameSpeed and movement speed of obstacles
    update(){
        this.x += this.speed * gameSpeed; // have to multiply game speed to keep same plus/minus value and direction
        if (this.speed > 0){
            if (this.x > canvas.width + this.width){
                this.x = 0 - this.width; // resets car at left edge of canvas if car drives past right edge
                this.carType = (Math.floor(Math.random() * numberOfCars)); // randomises car
            } 
        } else { 
            this.frameX = 1;
            if (this.x < 0 - this.width ){ 
                this.x = canvas.width + this.width; // resets car at right of canvas if car drives past left edge
                this.carType = (Math.floor(Math.random() * numberOfCars)); // randomises car
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
    // collision with car // functional programming
    for (let i = 0; i < carsArray.length; i++){
        if (collision(frogger, carsArray[i])){
            ctx4.drawImage(collisions, 0, 100, 100, 100, frogger.x, frogger.y, 50, 50); // attributes set coordinates for where collision will take place
            resetGame();
        }
    }
    // collision w/ logs and turtles
    if (frogger.y < 250 && frogger.y > 100) { 
        safe = false;
        // frog can hop onto floating objects
        for(let i = 0; i < logsArray.length; i++){ // iterates through logs array which contains logs and turtles
            if (collision(frogger, logsArray[i])){
                frogger.x += logsArray[i].speed; // speed of frog and object match
                safe = true;
            }
        }
        // game resets if frog sinks
        if (!safe){
            for (let i = 0; i < 30; i++){
                ripplesArray.unshift(new Particle(frogger.x, frogger.y));
            } 
            resetGame();
        }

    }




}



