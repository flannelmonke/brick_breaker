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
      this.context.clearRect(this.x, this.y,100.5, 25);
      this.x -= 0.5;
      this.draw();
    }
  }
  moveRight() {
    const alpha = Math.sin(performance.now()) * 0.5 + 0.5 // cycle between 0 and 1
    // const normalized = (alpha- Math.min(alpha))/(Math.max(alpha)-Math.min(alpha))
    const positionX = this.lerp( 0, 1 , alpha);
    // console.log("pos x"+positionX);
    // console.log("alpha"+alpha); 
    if (this.x === 800 - 100) {
      return;
    } else {
      this.context.clearRect(this.x-1 , this.y,101, 25);
      this.x += positionX;
      this.draw();
    }
  }
  lerp( a, b, alpha ) {
    return (a + alpha * ( b - a ));
   }
}
