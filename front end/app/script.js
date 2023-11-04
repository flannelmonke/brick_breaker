import { Player } from "./modules/playerClass.js";
import { brickGroups } from "./modules/brickClass.js";
// //declare canvas variable
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
//brick layout
//declare player instance
const dipshit = new Player("dipshit", context);
dipshit.draw();

//declare brick context
const brick = canvas.getContext("2d");

//start button script
const button = (document.getElementById("butt").onclick = () => {
  var groupEZ = new brickGroups("easy", brick);
  groupEZ.fuckBricks();
  dipshit.draw();
});

//player movement event listener. moves at n m/s
window.addEventListener("keydown", (event) => {
  var poop;
  var crap;

  switch (event.key) {
    case "a":
    case "A":
      var poop = setInterval(() => {
        dipshit.moveLeft();
      }, 1);
      //listener for when to stop moving
      window.addEventListener("keyup", (event) => {
        if (event.key === "a" || event.key === "A") {
          clearInterval(poop);
        }
      });
      break;
    case "d":
    case "D":
      var crap = setInterval(() => {
        dipshit.moveRight();
      }, 1);
      window.addEventListener("keyup", (event) => {
        if (event.key === "d" || event.key === "D") {
          clearInterval(crap);
        }
      });
      break;
  }
});
