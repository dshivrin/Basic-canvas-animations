class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.floor(Math.random() * 15 +1);
    this.speedX = this.getRandomButNotZero();
    this.speedY = this.getRandomButNotZero();
  }

  getRandomButNotZero = () => {
    let result = Math.random() * 3 - 1.5;
    if(result == 0) return this.getRandomButNotZero();
    else return result;
  }

  avoidWalls = () => {
    //top wall:
    if (this.y + this.speedY < 0) {
      this.speedY = -this.speedY;
    }
    //bottom wall
    if (this.y + this.speedY > canvas.height) {
      this.speedY = -this.speedY;
    }
    //right wall
    if (this.x + this.speedX > canvas.width) {
      this.speedX = -this.speedX;
    }
    //left wall
    if (this.x + this.speedX < 0) {
      this.speedX = -this.speedX;
    }
  };

  update = () => {
    this.avoidWalls();
    this.x += this.speedX;
    this.y += this.speedY;
    //size changing
    //if(this.size > 0.2) this.size -= 0.1;
  };

  draw = () => {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };
}
