/**
 * Basic moving particles animation
 */

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

var particleArray = [];

const mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

canvas.addEventListener("click", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

const init = () => {
  particleArray = [];
  for (let i = 0; i < 100; i++) {
    particleArray.push(new Particle());
  }
};

function handleParticles() {
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();
    //remove if too small
    if(particleArray[i].size <= 0.2){
      particleArray.splice(i, 1);
      i--;//update index
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

init();
animate();
