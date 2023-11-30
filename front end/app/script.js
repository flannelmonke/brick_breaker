import { Player } from "./modules/playerClass.js";
import { brickGroups } from "./modules/brickClass.js";
import { ball } from "./modules/ballClass.js";

//declare canvas variables
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//declare player reference (currently null)
var dipshit;
// var fuck_face = new ball(context); 
//start button script
const button = (document.getElementById("butt").onclick = () => {
  var groupEZ = new brickGroups("easy", context); 
  dipshit = new Player("dipshit", context); //initialize player reference
  // fuck_face.draw();
  // groupEZ.fuckBricks(); //create array of bricks depending on difficulty (currently only easy mode)
  dipshit.draw(); //draw/reset player
});

//player movement event listener. moves at n m/s
window.addEventListener("keydown", (event) => {
  var poop; //left interval ID for clearing
  var crap; //right interval ID also for clearing

  switch (event.key) {
    //denote both lower and upper case incase player has caps lock on
    case "a":
    case "A":
      //set interval for the movement event. Current speed at 
      var poop = setInterval(() => {
        dipshit.moveLeft();
      });
      //listener for when to stop moving
      break;
      case "d":
          var crap = setInterval(() => {
            dipshit.moveRight();
          },1);
          break;
        }
        window.addEventListener("keyup", (event) => {
          if (event.key === "d" || event.key === "D") {
            clearInterval(crap);
          }
        });
        window.addEventListener("keyup", (event) => {
          if (event.key === "a" || event.key === "A") {
            clearInterval(poop);
          }
        });
});
