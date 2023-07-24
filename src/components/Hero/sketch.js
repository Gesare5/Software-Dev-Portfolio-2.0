function sketch(p) {
    var bubbles = [];

    p.setup = function () {
        // p.createCanvas(600, 600);
        p.createCanvas(window.innerWidth, window.innerHeight);
        for (var i = 0; i < 20; i++) {
            bubbles[i] = new Bubble(p);
        }
    }

    p.draw = function () {
        p.background(50);
        for (var i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
            bubbles[i].show();
        }
    };
};

export default sketch;



function Bubble(p) {
    this.x = getRandomArbitrary(0, p.width);
    this.y = getRandomArbitrary(-20, -50);
    this.yspeed = getRandomArbitrary(0, 3);
    this.col = getRandomArbitrary(100, 255);
    this.size = getRandomArbitrary(5, 10);


    this.move = function () {
        this.y = this.y + this.yspeed;
        if (this.y > p.height) {
            this.y = getRandomArbitrary(-20, -10);
        }
    }

    this.show = function (r) {
        p.fill(this.col, 100, 200);
        p.noStroke();
        p.square(this.x, this.y, this.size);
    }

}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


// function setup() {
//     createCanvas(600, 600);
//     for (var i = 0; i < 20; i++) {
//         bubbles[i] = new Bubble();
//     }
// }

// function draw() {
//     background(50);
//     for (var i = 0; i < bubbles.length; i++) {
//         bubbles[i].move();
//         bubbles[i].show();
//     }
// }
