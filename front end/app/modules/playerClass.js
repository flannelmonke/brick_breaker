export class Player {
  constructor(id, context) {
    this.id = id;
    this.context = context;
    this.x = 325;
    this.y = 475;
    this.moveLeftInterval = 0;
    this.moveRightInterval = 0;
    this.keymap = { left: false, right: false };
  }

  draw() {
    this.context.fillStyle = "#FFFFFF";
    this.context.fillRect(this.x, this.y, 100, 25);
  }
  //todo:
  //-use moveto function to move rect left and right
  //-use math to find out speed of rectangle
  moveLeft() {
      this.context.reset();
      this.x -= 1;
      this.draw();
  }
//recursion? idk. delta time. yes, why not!
  moveRight() {
      this.context.reset();
      this.x += 1;
      this.draw();
  }
  animate(func){
    requestAnimationFrame(function mov(){
      func;
      requestAnimationFrame(this.animate(func));
    })
  }
}
