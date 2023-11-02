import { Player } from "./modules/playerClass.js";

//declare canvas variable
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//declare player instance
const dipshit = new Player("dipshit", context);
dipshit.draw();

//make a context for bricks
const brick = canvas.getContext("2d");

window.addEventListener("keydown", (event) => {
  var poop;
  var crap;

  switch (event.key) {
    case "a":
    case "A":
      var poop = setInterval(() => {
        dipshit.moveLeft();
      }, 1);
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
