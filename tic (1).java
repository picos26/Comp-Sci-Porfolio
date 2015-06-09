var box0 = document.getElementById("box0");
box0.addEventListener("click", runGame);

var box1 = document.getElementById("box1");
box1.addEventListener("click", runGame);

var box2 = document.getElementById("box2");
box2.addEventListener("click", runGame);

var box3 = document.getElementById("box3");
box3.addEventListener("click", runGame);

var box4 = document.getElementById("box4");
box4.addEventListener("click", runGame);

var box5 = document.getElementById("box5");
box5.addEventListener("click", runGame);

var box6 = document.getElementById("box6");
box6.addEventListener("click", runGame);

var box7 = document.getElementById("box7");
box7.addEventListener("click", runGame);

var box8 = document.getElementById("box8");
box8.addEventListener("click", runGame);

var numberOfClicks = 0

function runGame()
    //Add an X or O
    
    numberOfClicks++
    
    
    if( number & 2 === 0 ){
          this.innerHTML = "X";
    }
    else{
        this.innerHTML = "O";
    }
    