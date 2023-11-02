//rect parameters = (x, y, width, height) 
function butt(){
    context.drawImage(image, 100, 50, 100, 25);    
}
const butt2 = document.getElementById('butt').onclick = function(){butt()};
const stage1 = document.getElementById('stage1');
const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");
context.fillStyle = "#FFFFFF";
let x = 275;
let y = 375;
// context.fillRect(x, y, 200, 50);
context.moveTo(x,y);

//drawImage parameters
//context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
// context.drawImage(stage1, 33, 71, 104, 124, 21, 20, 87, 104);
const ctx = canvas.getContext("2d");
const image = document.getElementById("stage2");


