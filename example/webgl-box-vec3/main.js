let box = new WebGLBox();

//Draw a red box in the middle
box.draw({

  top: 0.5,             // x
  bottom: -0.5,            // x
  left: -0.5,            // y
  right: 0.5,             // y

  depth: 0,               // z
  color: [1, 0.4, 0.4, 1] // red
});

//Draw a green box up top
box.draw({

  top: 0.9,             // x
  bottom: 0,               // x
  left: -0.9,            // y
  right: 0.9,             // y

  depth: 0.5,             // z
  color: [0.4, 1, 0.4, 1] // green
});

// This box doesn't get drawn because it's outside of clip space. The depth is
// outside of the -1.0 to 1.0 range.
box.draw({

  top: 1,               // x
  bottom: -1,              // x
  left: -1,              // y
  right: 1,               // y

  depth: -1.5,            // z
  color: [0.4, 0.4, 1, 1] // blue
});

