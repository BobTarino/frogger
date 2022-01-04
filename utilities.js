function animate(){
    // clear canvas
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
    // ripples appear when frog over water
    handleRipples();
    // draws background image 
    ctx2.drawImage(background_lvl2, 0, 0, canvas.width, canvas.height);
    // call draw method
    frogger.draw();
    // call update method
    frogger.update();
    // particles appear below frog on ground
    handleParticles();
    // call handleObstacles
    handleObstacles();
    // draws grass
    ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height);
    // callback function sets the animation loop with recursion
    requestAnimationFrame(animate);
}
// kick off loop
animate();

// event listeners to control movement 
window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]) {
        frogger.jump()
    }
});

window.addEventListener('keyup', function(e){
    delete keys[e.keyCode]; // delete keys from keys array
    frogger.moving = false; // initially movement is false // will reset when key is released
});

// score point! // when player moves past top edge of game area
function scored(){
    score++; // when score function runs variable will increase by one
    gameSpeed += 0.05; // game speed increases by 0.05
    frogger.x = canvas.width/2 - frogger.width/2; // resets frog position x coordinate  
    frogger.y = canvas.height - frogger.height - 40; // resets frog position y coordinate 
}