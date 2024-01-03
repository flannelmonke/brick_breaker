import { ball } from "../entities/ballClass.js ";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

var fuck_face = new ball(context);
fuck_face.draw();

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
