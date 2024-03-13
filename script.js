let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgamebtn = document.querySelector(".New-btn");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg");






let container = document.querySelector(".container");
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetgame = () => {
    turn0 = true;
    enableboxes();



    count = 0;
    msgcontainer.classList.add("hide");
}


let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box clicked!");
        count ++;


        console.log(count);
    if(turn0){


        box.classList.add("color");
        box.innerText = "O";
        turn0 = false;
    } else{


        box.classList.add("color-x");
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;

    checkwinner();



    checkdraw();
    })
})

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    if(msg.innerText = `congratulations, Winner is ${winner}`){
        count --;


    }
    msgcontainer.classList.remove("hide");
    disableboxes();
}




const checkwinner = () =>{
     for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3)


            {
                console.log("winner",pos1);
                showWinner(pos1);
            }





        }
     }


     
}
const checkdraw = () => {
    if (count === 9){
    console.log("Draw!")
    msg.innerText = ("DRAW!");
    msgcontainer.classList.remove("hide")}
}




newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click", resetgame);
