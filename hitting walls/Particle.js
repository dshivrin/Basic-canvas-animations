class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.floor(Math.random() * 6);
    // this.speedX = Math.floor(Math.random() * 3 - 1.5); // random between -1.5 and 1.5 so the particle will move to all directions
    // this.speedY = Math.floor(Math.random() * 3 - 1.5);
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
  };

  draw = () => {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };
}
