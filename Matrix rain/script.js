const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const gradient = ctx.createLinearGradient(0,0,canvas.width, canvas.height);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.2, 'yellow');
gradient.addColorStop(0.4, 'green');
gradient.addColorStop(0.6, 'cyan');
gradient.addColorStop(0.8, 'blue');
gradient.addColorStop(1, 'magenta');


const effect = new Effect(canvas.width, canvas.height);

let lastTime = 0;
const fps = 30;
const nextFrame = 1000 / fps;
let timer = 0;

const animate = (timestamp) => {
  //timestamp arg is passed by requestAnimationFrame
  const delta = timestamp - lastTime;
  lastTime = timestamp;
  if (timer > nextFrame) {
    //drawing part transparent black rectangle over the entire canvas to fade out effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.textAlign = "center";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //drawing the letter
    //ctx.fillStyle = "#0aff0a";
    ctx.fillStyle = gradient;
    ctx.font = effect.fontSize + "px monospace"; //monospace occupies equal amount of horizontal space
    effect.symbols.forEach((s) => s.draw(ctx));
    timer = 0;
  } else {
    timer += delta;
  }

  requestAnimationFrame(animate);
};

animate(0);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  effect.resize(canvas.width, canvas.height);
});
