let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#new_game") ;
let masCon=document.querySelector(".msg_cont");
let msg=document.querySelector("#msg");


let turnO=true;//turn O ,turn x

const winPatterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    enabledBOx();
    masCon.classList.add("heid");
    
};





const enabledBOx=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    
if(turnO){
    box.innerText="O";
    turnO=false;
}
else {
    box.innerText="X";
    turnO=true;
}
box.disabled=true;
checkwinner();
    })
}
);

const showWiner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    masCon.classList.remove("heid");
    disabledBOx();
};


const disabledBOx=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const checkwinner=()=>{
    for(let pattern of winPatterns){
 let position1=boxes[pattern[0]].innerText;
 let position2=boxes[pattern[1]].innerText;
 let position3=boxes[pattern[2]].innerText;

 if(position1!=""&&position2!=""&&position3!=""){
    if(position1==position2&&position2==position3){

showWiner(position1);

    }

 }
    }

};
newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
