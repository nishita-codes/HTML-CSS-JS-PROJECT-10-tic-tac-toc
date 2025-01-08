console.log("Welcome to Tic Tac Toe");
let music = new Audio("audio/music.mp3")
let audioTurn = new Audio("audio/ting.mp3")
let audiogameover = new Audio("audio/gameover.mp3")
let  turn = "X";
let gameover = false;

// funtion to change the turn
const changeTurn =()=>{
    return turn === "X"? "0": "X";
}

// function to check win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
     let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
       if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){ 
       gameover = true;
       document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " Won ";
       document.querySelector('.images').getElementsByTagName('img')[0].style.width = "200px";
       boxtext[e[0]].style.color = 'rgb(221, 175, 243)';
       boxtext[e[1]].style.color = 'rgb(221, 175, 243)';
       boxtext[e[2]].style.color = 'rgb(221, 175, 243)';

       boxtext[e[0]].style.textShadow = '5px 5px 6px  rgb(221, 175, 243)';
       boxtext[e[1]].style.textShadow = '5px 5px 6px  rgb(221, 175, 243)';
       boxtext[e[2]].style.textShadow = '5px 5px 6px  rgb(221, 175, 243)';
       audiogameover.play(); 
       }
    })
}

// Game Logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
     let boxtext = element.querySelector('.boxtext');
     element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName('Info')[0].innerText = "Turn for " + turn;
            }
            
        }
     })
})

// add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""; //Reset text to none
        element.style.color = ""; // Reset color to default
        element.style.textShadow = ""; // Remove any shadow
    });
    turn ="X";
    gameover = false;
    document.getElementsByClassName('Info')[0].innerText = "Turn for " + turn;
    document.querySelector('.images').getElementsByTagName('img')[0].style.width = "0px";
})