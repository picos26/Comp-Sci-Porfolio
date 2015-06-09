/**`
* Created with Week 5 project.
* User: picos05
* Date: 2015-03-10
* Time: 06:55 PM
* To change this template use Tools | Templates.
*/
var walls = document.querySelectorAll(".wall");
var character = document.getElementById("messi");
var goingUp = false;
var goingDown = false;
var goingLeft = false;
var goingRight = false;

window.addEventListener("keydown", pressdownkey);
function pressdownkey(evt){
    if(evt.keyCode === 87) { 
        goingUp = true;
    }
    
    if(evt.keyCode === 83) {
        goingDown = true;
    }
    if(evt.keyCode === 68) {
        goingRight = true;
    }
    if(evt.keyCode === 65) {
        goingLeft = true;
    }  
}

window.addEventListener("keyup", releasekey);
function releasekey(evt){
    if(evt.keyCode === 87) { 
        goingUp = false;
    }
    
    if(evt.keyCode === 83) {
        goingDown = false;
    }
    if(evt.keyCode === 68) {
        goingRight = false;
    }
    if(evt.keyCode === 65) {
        goingLeft = false;
    }  
}
function isColliding(thing1,thing2){
    var top1 = parseInt(thing1.style.top);
    var height1 = parseInt(thing1.style.height);
    var left1 = parseInt(thing1.style.left);
    var width1 = parseInt(thing1.style.width);
    var top2 = parseInt(thing2.style.top);
    var height2 = parseInt(thing2.style.height);
    var left2 = parseInt(thing2.style.left);
    var width2 = parseInt(thing2.style.width);
    if(top1 + height1>top2 && top1<top2 + height2 && left1+width1>left2 && left1<left2 + width2) return true;
    else return false;
    
}

function gameLoop(){
    if (goingDown === true) {
        messi.style.top = parseInt(messi.style.top) + 5 + "px";
    }
    if (goingLeft === true) {
        messi.style.left = parseInt(messi.style.left) - 5 + "px";
    }
    if (goingRight === true) {
        messi.style.left = parseInt(messi.style.left) + 5 + "px";
    }
    if (goingUp === true) {
        messi.style.top = parseInt(messi.style.top) - 5 + "px";
    }
    
    for(i = 0; i < walls.length; i++){
    if (isColliding(character, walls[i]) === true){
        messi.style.top = "40px";
        messi.style.left = "40px";
        }
    }
    
    window.requestAnimationFrame(gameLoop);
}
gameLoop();