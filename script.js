// 装饰球
const decorations = document.getElementById("decorations");
for (let i = 0; i < 30; i++) {
  const ball = document.createElement("div");
  ball.className = "decoration";
  ball.style.background = ["red","gold","blue","pink","cyan"][Math.floor(Math.random()*5)];
  ball.style.left = Math.random()*300 + "px";
  ball.style.top = Math.random()*300 + "px";
  decorations.appendChild(ball);
}

// 雪花飘落
function createSnowflake() {
  const snow = document.createElement("div");
  snow.className = "snowflake";
  snow.textContent = "❄";
  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.fontSize = (Math.random() * 10 + 10) + "px";
  snow.style.animationDuration = (Math.random() * 5 + 5) + "s";
  document.body.appendChild(snow);
  setTimeout(() => snow.remove(), 10000);
}
setInterval(createSnowflake, 200);