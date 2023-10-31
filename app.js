

//Create PRNG that passively runs in background 

// 1. will need an array to store values 

let timer; //setInterval Id
let interval = 900; //count of cycles
let spinTime = true;
let luckyNums = []; 
let stopBtnArr = [];

const stopBtn = document.querySelector('#stopper');

document.addEventListener('click', function(stopBtn){
    stopBtnArr.unshift('X'); 
    stopper();
    console.log(stopBtnArr);
});

document.addEventListener('DOMContentLoaded', (Event) => {
    //when document content is loaded immediatly call function to begin 
    //cycling through randomly generated numbers
        init();
    //animation of reels immediatly begins playing 
    
    //function reelsSpin(){

    //}
});

function init() {
    if(spinTime === true){
       timer = setInterval(generateNum, interval);
    }
    if(spinTime === false){
        console.log(spinTime);
        console.log(stopBtnArr);
    }
    return;
}

function generateNum(){
   let randomInt = Math.floor(Math.random()*(9000000 - 0) + 0);
   luckyNums.unshift(randomInt);
    if(luckyNums.length >= 3){
        luckyNums.splice(3, Infinity);
    }else{
        return;
    }
   console.log(luckyNums);
}

function stopper(){
    if(stopBtnArr.length % 2 !== 0){
        //stop generating numbers
        clearInterval(timer);
        spinTime === false;
        //make spinning animation stop the reel on the matching face
        //according to the random number generated
        console.log('false');
    }
    if(stopBtnArr.length % 2 === 0){
         //Begin the game again. Resume generating numbers
            spinTime === true;
            init();
            console.log('true');
    }
    if(stopBtnArr.length > 10){
     stopBtnArr.splice([0], 10);
    }
}











