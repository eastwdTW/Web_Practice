var ctx = document.getElementById("canvas").getContext("2d");

var img = new Image();

img.src = "./ball.png";

img.addEventListener(
  "load",
  function () {
    ctx.drawImage(img, 0, 0);
  }
);
