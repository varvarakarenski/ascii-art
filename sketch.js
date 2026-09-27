const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let banner;

function setup() {
    noCanvas();
    noLoop();
}

let lastImg;
const bgToggle = document.getElementById('bgToggle');
const pixelSlider = document.getElementById('pixelSlider');
bgToggle.addEventListener('change', () => lastImg && renderAscii(lastImg));
pixelSlider.addEventListener('input', () => lastImg && renderAscii(lastImg));

function renderAscii(img) {
    lastImg = img;
    const dark = bgToggle.checked;
    const pixelSize = +pixelSlider.value; 
    const scale = min(1, (document.documentElement.clientWidth - 80) / img.width);
    const w = img.width * scale;
    const h = img.height * scale;
    const cols = max(1, round(w / pixelSize));
    const cellW = w / cols;
    const fontSize = cellW / 0.6;
    const rows = max(1, round(h / fontSize));
    const cellH = h / rows;

    const small = img.get();
    small.resize(cols, rows);
    small.loadPixels();

    let out = '';
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const i = (y * cols + x) * 4;
            const avg = (small.pixels[i] + small.pixels[i+1] + small.pixels[i+2]) / 3;
            const v = dark ? avg : 255 - avg;
            out += density.charAt(floor(map(v, 0, 255, density.length - 1, 0)));
        }
        out += '\n';
    }

    const pre = document.getElementById('asciiOutput');
    pre.textContent = out;
    pre.style.width = w + 'px';
    pre.style.height = h + 'px';
    pre.style.fontSize = fontSize + 'px';
    pre.style.lineHeight = cellH + 'px';
}