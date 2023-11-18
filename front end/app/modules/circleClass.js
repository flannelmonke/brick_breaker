import { Player } from "./playerClass";
export class Circle extends Player {
    constructor(context){
        super(100, context);
        this.x = 100;
        this.y = 50;
        this.style = "#FFA500"
    }
    draw(){
        //(x, y, radius, startOfCircle, endOfCircle);
        this.context.beginPath();
        this.context.arc(this.x,this.y,10,0,2*Math.PI);
        this.context.filltStyle = this.style;
        this.context.fill();
        this.context.stroke();
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
        if (this.x === 0) {
          return;
        } else {
          this.context.clearRect(this.x, this.y,100, 25);
          this.x += 1;
          this.draw();
        }
    }
    
}