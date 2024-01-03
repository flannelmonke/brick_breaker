export class ball{
    constructor(context){
        this.context = context
        this.x = 400;
        this.y = 225;
        this.style = '#8A2BE2'
    }
    draw(){
        //declare fill style for ball
        this.context.fillStyle = this.style;
        //(x, y, radius, startOfCircle, endOfCircle);
        //start path
        this.context.beginPath();
        //define circle
        this.context.arc(this.x,this.y,10,0,2*Math.PI);
        //fill circle
        this.context.fill();
        //draw!
        this.context.stroke();
    }
    erase(){
      this.context.fillStyle = "#000000";
      this.context.beginPath();
      this.context.arc(this.x,this.y,10.3,0,2 *Math.PI);
      this.context.fill();
      this.context.stroke();
    }
    //movement function for going in any four given directions, while moving by one pixe;
    moveLeft() {
        if (this.x <= 10) {
          return; 
        } else {
          // this.context.clearRect(this.x, this.y,100, 25);
          this.erase()
          this.x -= 1;
          this.draw();
        }
    }
    moveRight() {
        if (this.x >= 800-10) {
          return;
        } else {
          // this.context.clearRect(this.x, this.y,100, 25);
          this.erase()
          this.x += 1;
          this.draw();
        }
    }
    //height of canvas = 525px
    moveUp(){
      if (this.y <= 10) {
        return;
      } else {
        // this.context.clearRect(this.x, this.y,100, 25);
        this.erase()
        this.y -= 1;
        this.draw();
      }
    }
    moveDown(){
      if (this.y >= 515) {
        return;
      } else {
        // this.context.clearRect(this.x, this.y,100, 25);
        this.erase()
        this.y += 1;
        this.draw();
      }
    }
}