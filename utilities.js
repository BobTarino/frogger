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