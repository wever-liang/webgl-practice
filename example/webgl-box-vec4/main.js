let box = new WebGLBox();

//首先，我们在中间绘制一个红色框，但将 W 设置为 0.7。但坐标除以 0.7 时，它们全部会被放大。
box.draw({
  top: 0.5, // x
  bottom: -0.5, // x
  left: -0.5, // y
  right: 0.5, // y
  w: 0.7, // w - 放大这个盒子

  depth: 0, // z
  color: [1, 0.4, 0.4, 1], // red
});


//现在，我们在上面绘制一个绿色框，但是通过将 w 分量设置为 1.1 来缩小它。
box.draw({
  top: 0.9, // x
  bottom: 0, // x
  left: -0.9, // y
  right: 0.9, // y
  w: 1.1, // w - 缩小这个盒子

  depth: 0.5, // z
  color: [0.4, 1, 0.4, 1], // green
});


//最后一个框未被绘制，因为它在裁剪空间之外。深度超出 - 1.0 到 1.0 范围。
box.draw({
  top: 1, // x
  bottom: -1, // x
  left: -1, // y
  right: 1, // y
  w: 1.5, // w - 把这个盒子带回范围内

  depth: -1.5, // z
  color: [0.4, 0.4, 1, 1], // blue
});


