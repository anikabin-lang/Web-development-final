let gameSeq=[];
let userSeq=[];

let highScore=0;
let h3=document.querySelector("h3");

let started=false;
let level=0;

let btns=["red","yellow","purple","green"]

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;

        setTimeout(levelUp,250);
    }
})

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random btn choose
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function reset(){
        gameSeq=[]
        started=false;
        level=0;
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        console.log("Same value");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key to restart.`;
        
        if(level>highScore){
            highScore=level;
            h3.innerText=`High score: ${highScore}`;
        }
        
        let body=document.querySelector("body");
        body.classList.add("restart");
        setTimeout(function(){
            body.classList.remove("restart");
        },250);
        
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll('.btn');

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
