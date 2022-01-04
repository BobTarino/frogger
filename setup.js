// target first canvas
const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

// target second canvas
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = 600;
canvas2.height = 600;

// target third canvas
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.width = 600;
canvas3.height = 600;

// target fourth canvas
const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;

// target fifth canvas
const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
canvas5.width = 600;
canvas5.height = 600;

// global variables

// 80x80 pixels
const grid = 80;
let keys = [];
let score = 0;
let collisionsCount = 0;
let frame = 0;
// game speed will increase slightly when point is scored
let gameSpeed = 1;

// particles array will hold all particle objects for dust fx
const particlesArray = [];
// limits how many to make to prevent performance issues
const maxParticles = 300;
// ripples array will hold all water ripple particle objects for river fx
const ripplesArray =  [];
// cars array holds all car objects 
const carsArray = [];
// logs array holds log and turtle objects 
const logsArray = [];

//images
const background_lvl2 = new Image();
background_lvl2.src = 'src/assets/images/background_lvl2.png';

const grass = new Image();
grass.src = 'src/assets/images/grass.png'; 

const collisions = new Image();
collisions.src = 'src/assets/images/collisions.png';

const turtle = new Image();
turtle.src = 'src/assets/images/turtles.png';

const log = new Image();
log.src = 'src/assets/images/log.png';

const car = new Image();
car.src = 'src/assets/images/cars.png';
let numberOfCars = 3; // equal to number of rows in spreadsheet
