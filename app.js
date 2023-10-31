

//Create PRNG that passively runs in background 

// 1. will need an array to store values 

let timer; //setInterval Id
let interval = 900; //count of cycles
let spinTime = true;
let luckyNums = []; 
let stopBtnArr = [];

const reelSpin = [
    {transform: "rotate(0)"},
    {transform: "rotate(360deg)"}
];

const reel1 = document.querySelector('#reel1');
const reel2 = document.querySelector('#reel2');
const reel3 = document.querySelector('#reel3');
const stopBtn = document.querySelector('#stopper');
const playerMessage = document.querySelector('h1');
const balance = document.querySelector('h2 > span');

document.addEventListener('click', function(stopBtn){
    stopBtnArr.unshift('X'); 
    stopper();
    console.log(stopBtnArr);

//Diamonds: if( luckyNums[0] % 9 = 0 && luckyNums[1] % 9 = 0 && luckyNums[2] % 9 = 0){
    // playerMessage.innerText = 'Diamonds are everyone's best friend! You win $9,000!!'
// balance.innerText + 9,000;
//}

});

document.addEventListener('DOMContentLoaded', (Event) => {
    //when document content is loaded immediatly call function to begin 
    //cycling through randomly generated numbers
        init();
    //animation of reels immediatly begins playing 
});

function init() {
    if(spinTime === true){
       timer = setInterval(generateNum, interval);
      reel1.animate([{transform: "rotate(0)"}, {transform: "rotate(360deg)"}], 
        {duration: 1000, iterations: Infinity});

     reel2.animate([{transform: "rotate(0)"}, {transform: "rotate(360deg)"}], 
        {duration: 1000, iterations: Infinity});

      reel3.animate([{transform: "rotate(0)"}, {transform: "rotate(360deg)"}], 
        {duration: 1000, iterations: Infinity});
        
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

        reel1.getAnimations().forEach(animation => {
            animation.cancel();
        });
        reel2.getAnimations().forEach(animation => {
            animation.cancel();
        });
        reel3.getAnimations().forEach(animation => {
            animation.cancel();
        });
        
    
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











