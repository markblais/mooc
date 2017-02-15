// Khan Academy's Computer Programming
// Intro to JS: Drawing & Animation
// Drawing basics


var sketchProc = function(processingInstance) { with (processingInstance) {

// Size of the canvas
size(400, 400);

// The refresh rate of the canvas
frameRate(30);

// The background
background(0, 155, 255);

// Rectangle base:
rect(0, 349, 399, 50);

// Bottom circle:
ellipse(200, 300, 150, 150);

// Middle circle:
ellipse(200, 200, 100, 100);

// Top circle:
ellipse(200, 120, 75, 75);

// Left arm:
line(160, 200, 100, 100);

// Right arm:
line(240, 200, 300, 100);

}};
