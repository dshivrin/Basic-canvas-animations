class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.floor(Math.random() * 6);
    this.speedX = Math.floor(Math.random() * 3 - 1.5); // random between -1.5 and 1.5 so the particle will move to all directions
    this.speedY = Math.floor(Math.random() * 3 - 1.5);
  }

  update = () => {
    this.x += this.speedX;
    this.y += this.speedY;
  };

 
  draw = () => {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };
}
