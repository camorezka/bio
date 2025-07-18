const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width, height;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const bricks = [];
for (let y = 0; y < height; y += 40) {
  for (let x = 0; x < width; x += 80) {
    bricks.push({ x, y, w: 80, h: 40, alpha: Math.random() * 0.2 + 0.05 });
  }
}

function drawBricks() {
  ctx.clearRect(0, 0, width, height);
  bricks.forEach(b => {
    ctx.fillStyle = `rgba(30,30,30,${b.alpha})`;
    ctx.fillRect(b.x, b.y, b.w, b.h);
  });
}
drawBricks();
