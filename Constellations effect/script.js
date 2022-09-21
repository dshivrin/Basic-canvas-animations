/**
 * Basic moving particles animation
 */

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

var particleArray = [];
let hue = 0;

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
  for (let i = 0; i < 6; i++) {
    particleArray.push(new Particle());
  }
});

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 3; i++) {
    particleArray.push(new Particle());
  }
});

function handleParticles() {
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();
    //draw line berween close particles
    for (let j = i; j < particleArray.length; j++) {
      //calculating the distance between the particles using pythagoras theorem of right triangle
      const dx = particleArray[i].x - particleArray[j].x;
      const dy = particleArray[i].y - particleArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if(distance < 100){
        ctx.beginPath();
        ctx.strokeStyle = particleArray[i].color;
        ctx.lineWidth = particleArray[i].size / 10;
        ctx.moveTo(particleArray[i].x, particleArray[i].y);
        ctx.lineTo(particleArray[j].x, particleArray[j].y);
        ctx.stroke();
        ctx.closePath();
      }
    }
    //remove if too small
    if (particleArray[i].size <= 0.2) {
      particleArray.splice(i, 1);
      i--; //update index
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
  hue+=2;
}

//init();
animate();
