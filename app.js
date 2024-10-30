let gameSeq = [] ;
let userSeq = [] ;

let started = false;
let level = 0;
let btns = ["yellow" , "red", "purple" ,"green"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("Game Is Started");
        started = true;
    }
    levelup();
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    } ,250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash");
    } ,250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}` ;

    let randIdx = Math.floor(Math.random() *3);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameflash(randBtn);
}

function checkans(idx) {
    // console.log("curr level :",level);
    // let idx = level -1;
    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelup(),1000);
        }
    }
    else {
        h2.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br> Press Any Key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }
            
        ,150);
        reset();
    }
}

function btnpress() {
   console.log(this);
   let btn = this;
   userflash(btn);

   usercolor = btn.getAttribute("id");
   userSeq.push(usercolor);

   checkans(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;
}