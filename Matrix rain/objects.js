class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.caracters =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ♔♕♖♗♘♙♚♛♜♝♞♟☀☁❆❅❄♪♫";
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
    this.text = "";
  }

  draw(ctx) {
    this.text = this.caracters.charAt(
      Math.floor(Math.random() * this.caracters.length)
    );
    
    ctx.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    let random = Math.random() > 0.98;
    if(this.y * this.fontSize > this.canvasHeight & random){
        this.y = 0;
    }else {
        this.y++;
    }
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 25;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }

  #initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }

  resize(newWidth, newHeight){
    this.canvasWidth = newWidth;
    this.canvasHeight = newHeight;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
}
