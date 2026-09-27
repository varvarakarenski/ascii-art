# ASCII Banner Maker 

A small web page that turns an image into ASCII text art :)


## Features

- Upload any image and convert it to ASCII characters
- Switch between a white or black background
- Pixel size slider to set how detailed the output is
- Copy the ASCII text to your clipboard
- Save the result as a PNG

## Usage

Site is live [here](https://varvarakarenski.github.io/ascii-art/) - you'll be able to process all your artwork there.

Not sure exactly why you might want to, but to run it locally, clone the repo and serve the folder locally (opening `index.html` directly can break the Copy button):

```sh
python3 -m http.server
```

Then go to http://localhost:8000.

Generally: 

1. Pick an image and click **Submit**.
2. Use the background toggle and the pixel size slider to adjust the output.
3. Click **Copy** or **Save image**.

## How it works

`sketch.js` uses [p5.js](https://p5js.org/) to shrink the image to one pixel per character. It then maps each pixel's brightness to a character from a density ramp (`Ñ@#W$9876543210?!abc;:+=-,._ `). Brighter pixels become denser characters on a black background, and darker pixels become denser characters on a white one.

The PNG export draws the rendered text onto a canvas at 2x resolution.

## Files

| File         | Purpose                                      |
|--------------|----------------------------------------------|
| `index.html` | Page markup, upload, copy, and save handlers |
| `sketch.js`  | Image-to-ASCII conversion                    |
| `style.css`  | Styling                                      |
