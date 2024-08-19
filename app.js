let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGame = document.querySelector("#newG");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//track player1 and player2
let turnO = true;

const winPtrn = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach ((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    });
});

//checking for winners
const checkWin = () =>{
    for(let pattern of winPtrn){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}

//show winner
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

//Reset game
const reset = () =>{
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
}

//disable button after winning game
const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

//enable function for reset button
const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

newGame.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);
