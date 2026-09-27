const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let banner;
let pixelSize = 10;

function preload() {
    banner = loadImage("banner2.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    banner.loadPixels();

    let charWidth = width / (banner.width / pixelSize);
    let charHeight = height / (banner.height / pixelSize);

    for (let i = 0; i < banner.height; i += pixelSize) {
        for (let j = 0; j < banner.width; j += pixelSize) {
            const pixelIndex = (i * banner.width + j) * 4;
            const r = banner.pixels[pixelIndex + 0];
            const g = banner.pixels[pixelIndex + 1];
            const b = banner.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;

            noStroke();
            fill(255);

            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, len, 0));

            textSize(min(charWidth, charHeight) * 0.9);
            textAlign(CENTER, CENTER);
            text(density.charAt(charIndex), (j / pixelSize) * charWidth + charWidth * 0.5, (i / pixelSize) * charHeight + charHeight * 0.5);        
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}