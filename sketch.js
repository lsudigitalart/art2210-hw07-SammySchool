let soundFile;
let skeletons;
let jackolantern;

function preload() {
    soundFile = loadSound('https://sammyschool.github.io/SoundFiles/Spooky-Scary-Skeletons-Sound-Effect.mp3');
    skeletons = loadImage('skeletons.png');
    jackolantern = loadImage('jackolantern.png');
    zombie = loadImage('zombie.png');
}

function setup() {
    createCanvas(800, 800);
}

function mousePressed() {
  if (!soundFile.isPlaying()) {
    soundFile.play();
  }

}

function draw() {
    background(255);

    for (var i = 50; i > 0; i--) {
        push();
        strokeWeight(0);
        translate(width / 2, height / 2);
        rotate(frameCount * 0.05 - (i * 20));
        scale(i * 1);
        switch (i % 5) {
            case 0:
                fill(0);
                break;
            case 1:
                fill(0);
                break;
            case 2:
                fill(218, 255, 74);
                break;
            case 3:
                fill(255, 174, 74);
                break;
            case 4:
                fill(151, 74, 255);
                break;
            default:
                break;
        }
        square(-10, -10, 20);
        pop();
    }

    let time = millis();

    if (time % 1000 < 500) {
        image(skeletons, 300, 500, 200, 200);
        image(jackolantern, 100, 100, 200, 200);
        image(zombie, 400, 200)
    }
}
