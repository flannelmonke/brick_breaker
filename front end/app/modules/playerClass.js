export class Player {
  constructor(id, context) {
    this.id = id;
    this.context = context;
    this.x = 325;
    this.y = 500;
    this.style = "#FFFFFF";
  }

  draw() {
    this.context.fillStyle = this.style;
    this.context.fillRect(this.x, this.y, 100, 25);
  }
  moveLeft() {
    if (this.x === 0) {
      return;
    } else {
      this.context.clearRect(this.x, this.y,100, 25);
      this.x -= 1;
      this.draw();
    }
  }
  moveRight() {
    if (this.x === 750 - 100) {
      return;
    } else {
      this.context.clearRect(this.x, this.y,100, 25);
      this.x += 1;
      this.draw();
    }
  }
}
