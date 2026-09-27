const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let banner;
let pixelSize = 10;

function setup() {
    noCanvas(windowWidth, windowHeight);
}

function renderAscii(img) {
    const cols = 120;
    const cellW = img.width / cols;
    const fontSize = cellW / 0.6;
    const rows = round(img.height / fontSize);
    const cellH = img.height / rows;

    const small = img.get();
    small.resize(cols, rows);
    small.loadPixels();

    let out = '';
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const i = (y * cols + x) * 4;
            const avg = (small.pixels[i] + small.pixels[i+1] + small.pixels[i+2]) / 3;
                
            out += density.charAt(floor(map(avg, 0, 255, density.length - 1, 0)));
        }
        out += '\n';
    }
}