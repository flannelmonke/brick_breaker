const stage1 = document.getElementById("stage1");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.fillStyle = "#FFFFFF";
let x = 275;
let y = 375;
const ctx = canvas.getContext("2d");
const image = document.getElementById("stage2");
class Player {
  constructor(id, context, x, y, style) {
    this.id = id;
    this.context = context;
    this.x = x;
    this.y = y;
    this.style = style;
  }

  draw() {
    this.context.fillStyle = this.style;
    this.context.fillRect(this.x, this.y, 100, 25);
  }
}
const dipshit = new Player(20, context, 325, 500, "#FFFFFF");
dipshit.draw();
var brickPlace = [[], [], [], [], [], [], [], [], [], [], [], [], [], []];
var col = 8;
var row = 14;
var pop = 0;
const states = [
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#FF3399",
  "#99FF33",
  "#3399FF",
  "#FF9933",
  "#33FF99",
  "#9933FF",
  "#FF33CC",
  "#CCFF33",
  "#33CCFF",
  "#FF33FF",
  "#FFFF33",
];
var brickCapper = 37;
for (var i = 0; i < row; i++) {
  for (var j = 0; j < col; j++) {
    if (pop == brickCapper) {
      break;
    } else if (Math.floor(Math.random() * 2) == 0) {
      continue;
    } else {
      brickPlace[i][j] = new Player(
        pop,
        context,
        j * 100,
        i * 25,
        states[Math.floor(Math.random() * 14)]
      );
      brickPlace[i][j].draw();
      pop++;
    }
  }
}
