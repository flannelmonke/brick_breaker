import { Player } from "./modules/playerClass.js";

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const blocks = canvas.getContext('2d');
const dipshit = new Player("dipshit", context);

// blocks.fillStyle = "#FFFFFF";
// var x = 525;
// var y = 475;
// blocks.fillRect(x,y, 100, 25);

dipshit.draw();

// var keymap = {"left":false, "right":false};

window.addEventListener("keydown", event=>{
    if(event.key === "a" || event.key === "A"){
        dipshit.keymap.left = true;
    }
    if(event.key === "d" || event.key === "D"){
        dipshit.keymap.right = true;
    }  
    if(dipshit.keymap.right === true){
        var animID = requestAnimationFrame(dipshit.animate(dipshit.moveRight()));
    }
    if(dipshit.keymap.left === true){
        var animID = requestAnimationFrame(function mov(){
            dipshit.moveLeft();
            requestAnimationFrame(mov());
        });
    }
});
window.addEventListener("keyup", event=>{
    if(event.key === "a" || event.key === "A"){
        dipshit.keymap.left =false;
    }
    if(event.key === "d" || event.key === "D"){
        dipshit.keymap.right =false;
    }
    if(dipshit.keymap.right === false){cancelAnimationFrame(animID);}
    console.log("up");
});
