img = "";

function setup() {
    canvas = createCanvas(640,480);
    canvas.center();
}

function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Cat", 250,100);
    noFill();
    stroke("#FF0000");
    rect(240, 90, 400, 300);

    fill("#FF0000");
    text("Bowl", 250,320);
    noFill();
    stroke("#FF0000");
    rect(240, 300, 200, 100);
}