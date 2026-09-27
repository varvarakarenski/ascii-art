const density = '@%#*+=-:.';

function preload() {
    banner = loadImage("banner.jpeg");
}
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    //image(banner, 0, 0, width, height);
    banner.loadPixels();
    let w = width / banner.width;
    let h = height / banner.height;

    for (let i = 0; i < banner.width; i++) {
        for (let j = 0; j < banner.height; j++) {
            const pixelIndex = (i + j * banner.width) * 4;
            const r = banner.pixels[pixelIndex + 0];
            const g = banner.pixels[pixelIndex + 1];
            const b = banner.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;

            noStroke();
            fill(r, g, b);
            //square(i * w, j * h, w);

            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, len, 0));

            textSize(w);
            textAlign(CENTER, CENTER);
            text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
        }
    }
}