// Khan Academy's Computer Programming
// Intro to JS: Drawing & Animation
// Drawing basics


var sketchProc = function(processingInstance) { with (processingInstance) {

// Size of the canvas
size(400, 400);

// The refresh rate of the canvas
frameRate(30);

// The background (Red, Green, Blue)
background(0, 0, 0);
noStroke();

// face
fill(0, 255, 0);
ellipse(202, 208, 300, 300);

// eyes
fill(0, 0, 0);
ellipse(157, 151, 40, 40);
ellipse(304, 142, 40, 40);

// mouth
fill(255, 255, 255);
ellipse(257, 240, 120, 136);

// headband
stroke(204, 0, 153);
strokeWeight(37);
line(80, 115, 270, 75);

}};
