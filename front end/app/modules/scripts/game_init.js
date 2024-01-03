import { Player } from "../entities/playerClass.js";
import { brickGroups } from "../entities/brickClass.js";
import { ball } from "../entities/ballClass.js ";

//declare canvas variables
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//declare player reference (currently null)
var dipshit;
var groupEZ;
var fuck_face = new ball(context);

//start button script
document.getElementById("butt").onclick = () => {
  context.clearRect(0, 0, 800, 525);
  groupEZ = new brickGroups("easy", context);
  dipshit = new Player("dipshit", context); //initialize player reference
  groupEZ.fuckBricks(); //create array of bricks depending on difficulty (currently only easy mode)
  console.log(groupEZ.brickMap)
  dipshit.draw(); //draw/reset player
  fuck_face.draw();
};








window.addEventListener("keydown", e=>{
    var right, left, up, down;
    if(e.key=="l" || e.key=="L"){
        right = setInterval(()=>{
            fuck_face.moveRight()
        });
    }else if(e.key=="j"||e.key=="J"){
        left = setInterval(()=>{
            fuck_face.moveLeft()
    });
    }else if(e.key=="i"|| e.key=="I"){
        up = setInterval(()=>{
            fuck_face.moveUp();
        });
    }else if(e.key=="k"||e.key=="K"){
        down = setInterval(()=>{
            fuck_face.moveDown();
        })
    }

    window.addEventListener("keyup", event=>{
        if(e.key=="l" || e.key=="L"){
            clearInterval(right);
        }else if(e.key=="j"||e.key=="J"){
            clearInterval(left);
        }else if(event.key=="i"||event.key=="I"){
            clearInterval(up);
        }else if(event.key=="k"||event.key=="K"){
            clearInterval(down);
        }
    });
    
});

console.log(groupEZ.brickMap)

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
      }, 1);
      break;
    case "D":
    case "d":
      var crap = setInterval(() => {
        dipshit.moveRight();
      }, 1);
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
