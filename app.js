

//Create PRNG that passively runs in background 

// 1. will need an array to store values 

let timer; //setInterval Id
let interval; //count of cycles
let randomInt = Math.floor(Math.random()*(264,250 - 0) + 0);
let luckyNums = ['0', '0', '0']; 

let stopBtnArr = [];

const stopBtn = document.querySelector('#stopper');


document.addEventListener('click', (stopBtn) => {stopBtnArr.unshift("x")});
document.addEventListener('DOMContentLoaded', (e) => {
    //when document content is loaded immediatly call function to begin 
    //cycling through randomly generated numbers
    
    init();

    //animation of reels immediatly begins playing 
    
    //function reelsSpin(){

    //}
});

function init() {
    interval = 500;
    timer = setInterval(generateNum(), interval);
}


function generateNum(){
   randomInt; 
   luckyNums.unshift(randomInt);
    if(luckyNums.length > 3){
        luckyNums.splice(4, Infinity);
    }

    return console.log(luckyNums);
}

function stopper(){
    if(Event.stopBtn === 'click' && stopBtnArr.length < 2){
        clearInterval(timer);

        //record lucky numbers

        //make spinning animation stop the reel on the matching face
        //according to the random number generated


        

    }else if(Event.stopBtn === 'click' && stopBtnArr.length >= 2){
         //Begin the game again. Resume generating numbers
            init();
    }




}









