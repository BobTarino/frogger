// animation loop
function animate(){
    // clear canvas
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
    // handles water ripple fx
    handleRipples();
    // draws background image 
    ctx2.drawImage(background_lvl2, 0, 0, canvas.width, canvas.height);
    // particles appear below frog on ground
    handleParticles();
    // call draw method
    frogger.draw();
    // call update method
    frogger.update();
    // call handleObstacles
    handleObstacles();
    // call handleScoreboard
    handleScoreBoard();
    // draws grass
    ctx4.drawImage(grass, 0, 0);
    // increase frame variable by 1 everytime loop runs
    frame++;
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
    frogger.frameX = 0; // when keyup event fires set frogger frameX to 0
});

// score point! // when player moves past top edge of game area
function scored(){
    score++; // when score function runs variable will increase by one
    gameSpeed += 0.05; // game speed increases by 0.05
    frogger.x = canvas.width/2 - frogger.width/2; // resets frog position x coordinate  
    frogger.y = canvas.height - frogger.height - 40; // resets frog position y coordinate 
}

// handle scoreboard on canvas 4
function handleScoreBoard(){
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Score', 265, 15); // coordinate values roughly center the text
    ctx4.font = '60px Verdana';
    ctx4.fillText(score, 270, 65);
    ctx4.font ='15px Verdana';
    ctx4.strokeText('Collisions: ' + collisionsCount, 10, 175);
    ctx4.strokeText('Game Speed: ' + gameSpeed.toFixed(1), 10, 195); // game speed will only show one number after decimal point
}

// collision detection between two rectangles
// functional programming - reusable function takes two arguments (frog and cars)
// if any of these statements are true there is no collision
function collision(first, second){
    return !( first.x > second.x + second.width || // rectangles(cars and trucks) are far enough on horizontal x axis to not overlap 
                first.x + first.width < second.x || // cannot collide
                first.y > second.y + second.height || // cannot collide
                first.y + first.height < second.y); // cannot collide
}
 
// when frog gets hit by car or sinks in water
function resetGame(){
    frogger.x = canvas.width/2 - frogger.width/2; // resets frog position x coordinate  
    frogger.y = canvas.height - frogger.height - 40; // resets frog position y coordinate 
    score = 0;
    collisionsCount++;
    gameSpeed = 1;
}