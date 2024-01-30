import { Player } from "./playerClass.js";
const states = [
  null,
  document.getElementById("stage1"),
  document.getElementById("stage2"),
  document.getElementById("stage3"),
  document.getElementById("stage4"),
];

export class Brick extends Player {
  constructor(id, context, x, y, style) {
    super();
    this.id = id;
    this.context = context; //should be using a different context so it doesn't mess with the player animations
    this.x = x;
    this.y = y;
    this.style = style; // randomly generated color
    this.state = 1;
  }
  draw() {
    // var num = Math.floor(Math.random()*4);
    this.context.strokeStyle = this.style;
    this.context.drawImage(states[this.state], this.x, this.y, 100, 25);
  }
  getCords() {
    return [this.x, this.y, this.x + 100, this.y + 25];
  }
}

export class brickGroups {
  constructor(difficulty, context) {
    this.brickPlace = [[], [], [], [], [], [], [], [], [], [], [], [], [], []];
    this.brickMap = [];
    this.context = context;
    switch (difficulty) {
      case "easy":
        this.brickCapper = 37;
        break;
      case "medium":
        this.brickCapper = 74;
        break;
        this.brickCapper = 74;
        break;
      case "hard":
        this.brickCapper = 112;
        break;
        break;
    }
    this.brick_index = [];
  }
  //this is strictly an initialization function. It should not be used mid game or else data will be lost.
  fuckBricks() {
    this.context.reset();
    let row = 14;
    let col = 8;
    let pop = 0; //this is our limit

    //loop for our rows
    for (var i = 0; i < row; i++) {
      //loop for each column in those rows
      for (var j = 0; j < col; j++) {
        //we can't go past our limit we set
        if (pop == this.brickCapper) {
          break;
        }
        //0 or 1. true or false. Not the worst odds...
        else if (Math.floor(Math.random() * 2) == 0) {
          continue;
        }
        // welp its not 0, not false, not past our limit... GO!
        else {
          this.brickPlace[i][j] = new Brick(
            0,
            this.context,
            j * 100,
            i * 25,
            "#000000"
          );

          this.brickPlace[i][j].draw();
          pop++;
          this.brick_index[pop] = this.brickPlace[i][j];
        }
      }
    }
  }
}
