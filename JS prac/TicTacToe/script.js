const playerInfo = document.querySelector(".curr-player");
const btn = document.querySelector(".btn");
const boxes = document.querySelectorAll(".box");

let current;
let gameGrid;
const winCon = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function init(){
    current = "X";
    gameGrid = ["","","","","","","","",""];

    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        box.classList.remove("win");
    });

    btn.classList.remove("active");
    playerInfo.innerText = "Current Player - " + current;
}

init();

function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerHTML = current;
        boxes[index].style.pointerEvents = "none";
        gameGrid[index] = current;
        swapTurn();
        checkGameCon();
    }
}

function swapTurn(){
    if(current==="X")
        current="O";
    else
        current="X";
        playerInfo.innerText = "Current Player - "+current;
}

function checkGameCon(){
    let answer = "";
    winCon.forEach((position) => {
        if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "" )
        && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){

            if(gameGrid[position[0] ]=== "X")
                answer = "X";
            else
                answer = "O";
            
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
           }
    });
    if(answer!=""){
        playerInfo.innerText = "Winner - " + answer;
        btn.classList.add("active");
        boxes.forEach((box) => {
            box.style.pointerEvents = "none";
        })
        return;
    }

    let fillCount = 0;
    gameGrid.forEach((position) =>{
        if(position !== "")
            fillCount++;
    });

    if(fillCount===9){
        playerInfo.innerText = "Game Tied!";
        btn.classList.add("active");
        return;
    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

btn.addEventListener("click" , init);