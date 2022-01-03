// dust particles for when frog jumps over dry road
class Particle{ // holds blueprint for patricle
    constructor(x, y){ // x and y coordinates want to be passed underneath frog
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 20 + 1; // determines random size of particles between 1 and 20
        this.opacity = 1; // for fading particles
        this.directionX = Math.random() * 1 - 0.5; // particles spread in random horizontal direction
        this.directionY = Math.random() * 1 - 0.5; // particles spread in random vertical direction
    } 
    // take values for each particle and draws circles there
    draw(){
        // drawn on canvas 3 
        ctx3.fillStyle = 'rgba(150,150,150,1)'; // rgb color declaration for alpha opacity
        ctx3.beginPath(); // begin drawing circle
        ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // draws circular path based on angles we pass as arguments 
        ctx3.fill(); // fill path w/ color 
        ctx3.closePath(); // closes circular path
    }
    // runs every frame to move particles along x and y axis based on values in direction variables 
    update(){
        this.x += this.directionX;
        this.y += this.directionY;
    }
}

// custom function to handle particles 
function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++){ // for loop will iterate through particles array 
        particlesArray[i].update(); // calculate current position for each frame of animation
        particlesArray[i].draw(); // draw circle at position
    }
    if (((keys[37] || keys[38] || keys[39] || keys [40])) && frogger.y > 100 && particlesArray.length < 200){ // if frog is moving when keys are pressed && frogger is on road && and no more than 200 particles in array for performance reasons
        // overwrites original array with specified data
        for (let i = 0; i < 10; i++){
            particlesArray.unshift(new Particle(frogger.x, frogger.y)) //es6 class example
        }
    }

}