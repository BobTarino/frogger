function animate(){
    // clear canvas
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    // call draw method
    frogger.draw();
    // call update method
    frogger.update();
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
})