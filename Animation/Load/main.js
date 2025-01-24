const ctx = document.getElementById("canvas").getContext("2d");
ctx.translate(100, 100);

function draw() {
  ctx.clearRect(-100, -100, 200, 200);

  const sin = Math.sin(Math.PI / 6);
  const cos = Math.cos(Math.PI / 6);

  ctx.transform(cos, sin, -sin, cos, 0, 0);

  let c = 0;
  for (let i = 0; i < 12; i++) {
    c = Math.floor((255 / 12) * i);
    ctx.fillStyle = `rgb(${c} ${c} ${c})`;
    ctx.fillRect(40, 0, 60, 10);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }
}

// draw();
setInterval(draw, 100);