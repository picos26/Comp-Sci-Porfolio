/**
z* Created with W5 project.
* User: KevinDog123
* Date: 2015-03-10
* Time: 06:55 PM
* To change this template use Tools | Templates.
*/
var testDiv = document.getElementById("test");
var walls = document.querySelectorAll(".wall");
var character = document.getElementById("character");
var goingUp = false;
var goingDown = false;
var goingLeft = false;
var goingRight = false;
var isMoveRight = true;
var block1 = document.getElementById("block1");
var block1GoingRight = true;
var block2 = document.getElementById("block2");
var block2GoingLeft = true;
window.addEventListener("keydown", pressdownkey);
function pressdownkey(evt){
    if(evt.keyCode === 87) { 
        goingUp = true;
        //testDiv.innerHTML = "up";
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


function moveBlocks(){
    if(block1GoingRight){
        block1.style.left = parseInt(block1.style.left) + 5 + "px";
     if(block1.style.left === "790px"){
        block1GoingRight = false; 
     }
        
    }
    if(!block1GoingRight){
      block1.style.left = parseInt(block1.style.left) - 5 + "px";      
    if(block1.style.left === "420px")
        block1GoingRight = true;
    }
       
}


function gameLoop(){
    
    
    //An if statement to see if we are going down.
    if (goingDown === true) {
        character.style.top = parseInt(character.style.top) + 5 + "px";
        /*
        //create a temp variable and store the current top value in it
        var temp = parseInt(character.style.top);
        
        //Increase the value of the temp variable by 5 or something
        temp = temp + 5 + "px"
        //add "px" back onto the end of it
    
        //set the actual top value of the element to our temp value
        character.style.top = temp
        */
    }
    if (goingRight === true) {
        character.style.left = parseInt(character.style.left) + 5 + "px";      
    }
    if (goingLeft === true) {
        character.style.left = parseInt(character.style.left) - 5 + "px";      
    }
    if (goingUp === true) {
        character.style.top = parseInt(character.style.top) - 5 + "px";      
    }
    
    for(i = 0; i < walls.length; i++){
        if (isColliding(character, walls[i]) === true){
            character.style.top = "40px";
            character.style.left = "0px";
        }    
    }
    
    moveBlocks();
    window.requestAnimationFrame(gameLoop);
}
gameLoop();