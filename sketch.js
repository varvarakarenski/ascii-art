const density = '@%#*+=-:.';

let banner;

function preload() {
    banner = loadImage("banner.jpg");
}
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    Image(banner, 0, 0, innerWidth, height);
}