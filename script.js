console.log("Welcome to Tic Tac Toc");
let music = new Audio("audio/music.mp3")
let audioTurn = new Audio("audio/ting.mp3")
let gameover = new Audio("audio/gameover.mp3")
let  turn = "X";

// funtion to change the turn
const changeTurn =()=>{
    return turn === "X"? "0": "X";
}

// function to check win
const checkWin = ()=>{
     let wins = [
        []
     ]
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
     let boxtext = element.querySelectorAll('.boxtext');
     element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
        }
     })
})
