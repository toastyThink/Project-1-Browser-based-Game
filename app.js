

//Create PRNG that passively runs in background 

// 1. will need an array to store values 

let timer; //setInterval Id
let interval; //count of cycles
let randomInt = Math.floor(Math.random()*(264,250 - 0) + 0);
let spinTime = true;
let luckyNums = []; 

let stopBtnArr = [];

const stopBtn = document.querySelector('#stopper');

document.addEventListener('click', function(stopBtn){
    stopBtnArr.unshift("x"); 
    stopper();
});
document.addEventListener('DOMContentLoaded', (Event) => {
    //when document content is loaded immediatly call function to begin 
    //cycling through randomly generated numbers
    // for(i=0; ihjkhk; i++){
        init();
    // }
    //animation of reels immediatly begins playing 
    
    //function reelsSpin(){

    //}
});

function init() {
    if(spinTime === true){
        setTimeout(function repeat(){
            generateNum();
            setTimeout(repeat, 900);
        }, 900);
    }
}

function generateNum(){
   randomInt; 
   luckyNums.unshift(randomInt);
    if(luckyNums.length >= 3){
        luckyNums.splice(3, Infinity);
    }else{
        return;
    }
   console.log(luckyNums);
}

function stopper(){
    if(Event.target === 'click' && stopBtnArr.length < 2){
        //stop generating numbers
        // clearInterval(timer);
        spinTime === false;
        console.log(stopBtnArr);
        //make spinning animation stop the reel on the matching face
        //according to the random number generated

    }else if(Event.target === 'click' && stopBtnArr.length >= 2){
         //Begin the game again. Resume generating numbers
            spinTime === true;
           console.log(stopBtnArr);
    }
}











