import { Player } from "./playerClass";
const states = [
  document.getElementById("stage1"),
  document.getElementById("stage2"),
  document.getElementById("stage3"),
  document.getElementById("stage4"),
  null,
];

export class Brick extends Player {
  constructor(id, context, x, y, style) {
    this.id = id;
    this.context = context; //should be using a different context so it doesn't mess with the player animations
    this.x = x; //coordinates algorithm to be added
    this.y = y;
    this.style = style; // randomly generated color
    this.state = 1;
  }
  draw() {
    this.context.fillStyle = this.style;
    this.context.drawImage(states[this.state], 100, 50, 100, 25);
  }
  
}
