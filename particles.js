// dust particles for when frog jumps over dry road
class Particle{ // holds blueprint for patricle
    constructor(x, y){ // x and y coordinates want to be passed underneath frog
        this.x = x + 25;
        this.y = y + 25;
        this.radius = Math.random() * 20 + 1; // determines random size of particles between 1 and 20
        this.opacity = 1; // for fading particles
        this.directionX = Math.random() * 1 - 0.5; // particles spread in random horizontal direction
        this.directionY = Math.random() * 1 - 0.5; // particles spread in random vertical direction
    } 
    // take values for each particle and draws circles there
    draw(){
        // drawn on canvas 3 
        ctx3.fillStyle = 'rgba(150,150,150,' + this.opacity + ')'; // rgb color declaration for opacity // opacity is now dynamic with concat
        ctx3.beginPath(); // begin drawing circle
        ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // draws circular path based on angles we pass as arguments 
        ctx3.fill(); // fill path w/ color 
        ctx3.closePath(); // closes circular path
    }
    // runs every frame to move particles along x and y axis based on values in direction variables 
    update(){
        this.x += this.directionX;
        this.y += this.directionY;
        if (this.opacity > 0.1){
            this.opacity -= 0.9; // reduce opacity by 0.9
        }
        if (this.radius > 0.15){
            this.radius -= 0.14; // reduce radius by 0.14 for every frame // make sure radius doesn't go negative or else error
        }
    }
    drawRipple(){
        // drawn on canvas 1 
        ctx1.strokeStyle = 'rgba(255,255,255,' + this.opacity + ')'; // rgb color declaration for opacity // opacity is now dynamic with concat
        ctx1.beginPath(); // begin drawing circle
        ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // draws circular path based on angles we pass as arguments 
        ctx1.stroke(); // stroke path w/ color 
        ctx1.closePath(); // closes circular path
    }
    ripple(){ // start small and grow until reach certain size
        if (this.radius < 50){
            this.radius += 0.7; // circle will grow 
            this.x -= 0.03;  // grow from center left
            this.y -= 0.03; // grow from center up
        }
        if (this.opacity > 0){
            this.opacity -= 0.02; // decrease opacity by small amount so ripples slowly disappears 
        }
    }
}

// custom function to handle dust particles 
function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++){ // for loop will iterate through particles array 
        particlesArray[i].update(); // calculate current position for each frame of animation
        particlesArray[i].draw(); // draw circle at position
    }
    if (particlesArray.length > maxParticles){
        for (let i = 0; i < 30; i++){
            particlesArray.pop(); // if we have more than 300 particles, remove 30 particles with pop method
        }
    }
    if (((keys[37] || keys[38] || keys[39] || keys [40])) && frogger.y > 250 && particlesArray.length < maxParticles + 10){ // if frog is moving when keys are pressed && frogger on ground 250 px from top && and no more than maxParticles + 10 in array for performance reasons
        // overwrites original array with specified data
        for (let i = 0; i < 10; i++){
            particlesArray.unshift(new Particle(frogger.x, frogger.y)) //es6 class example
        }
    }
}
// custom function to ripples
function handleRipples(){
    // water ripples
    for (let i = 0; i < ripplesArray.length; i++){ // for loop will iterate through particles array 
        ripplesArray[i].ripple(); // calculate current position for each frame of animation
        ripplesArray[i].drawRipple(); // draw circle at position
    }
    if (ripplesArray.length > 20){
        for (let i = 0; i < 5; i++){
        ripplesArray.pop(); // if we have more than 20 ripples, remove 20 old ripples with pop method
        }
    }
    if (((keys[37] || keys[38] || keys[39] || keys [40])) && frogger.y < 250 && frogger.y > 100){
        for (let i = 0; i < 20; i++){
            ripplesArray.unshift(new Particle(frogger.x, frogger.y));
        }
    }

}
