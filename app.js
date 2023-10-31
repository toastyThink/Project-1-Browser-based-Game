

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

//Reel 1 Sections
const cherry1 = document.querySelector('#reel1 > .Cherry');
const bar1 = document.querySelector('#reel1 > .Bar');
const diamond1 = document.querySelector('#reel1 > .Diamond');
const emerald1 =  document.querySelector('#reel1 > .Emerald');
const ruby1 = document.querySelector('#reel1 > .Ruby');
const apple1 = document.querySelector('#reel1 > .Apple');
const orange1 = document.querySelector('#reel1 > .Orange');
const banana1 = document.querySelector('#reel1 > .Banana');
const lemon1 = document.querySelector('#reel1 > .Lemon');
const avocado1 = document.querySelector('#reel1 > .Avocado');
const luckySeven1 = document.querySelector('#reel1 > .luckySeven');
const crown1 = document.querySelector('#reel1 > .Crown');

//Reel 2 Sections
const cherry2 = document.querySelector('#reel2 > .Cherry');
const bar2 = document.querySelector('#reel2 > .Bar');
const diamond2 = document.querySelector('#reel2 > .Diamond');
const emerald2 =  document.querySelector('#reel2 > .Emerald');
const ruby2 = document.querySelector('#reel2 > .Ruby');
const apple2 = document.querySelector('#reel2 > .Apple');
const orange2 = document.querySelector('#reel2 > .Orange');
const banana2 = document.querySelector('#reel2 > .Banana');
const lemon2 = document.querySelector('#reel2 > .Lemon');
const avocado2 = document.querySelector('#reel2 > .Avocado');
const luckySeven2 = document.querySelector('#reel2 > .luckySeven');
const crown2 = document.querySelector('#reel2 > .Crown');

//Reel 3 Sections
const cherry3 = document.querySelector('#reel3 > .Cherry');
const bar3 = document.querySelector('#reel3 > .Bar');
const diamond3 = document.querySelector('#reel3 > .Diamond');
const emerald3 =  document.querySelector('#reel3 > .Emerald');
const ruby3 = document.querySelector('#reel3 > .Ruby');
const apple3 = document.querySelector('#reel3 > .Apple');
const orange3 = document.querySelector('#reel3 > .Orange');
const banana3 = document.querySelector('#reel3 > .Banana');
const lemon3 = document.querySelector('#reel3 > .Lemon');
const avocado3 = document.querySelector('#reel3 > .Avocado');
const luckySeven3 = document.querySelector('#reel3 > .luckySeven');
const crown3 = document.querySelector('#reel3 > .Crown');


const stopBtn = document.querySelector('#stopper');
const playerMessage = document.querySelector('#playerMessage');
const balance = document.querySelector('#balance');
let bankAcc = 200000;


document.addEventListener('click', function(stopBtn){
    stopBtnArr.unshift('X'); 
    stopper();
    bankAcc -= 1000; 
    balance.innerText = "Balance: $" + bankAcc;
    console.log(stopBtnArr);
});

document.addEventListener('DOMContentLoaded', (Event) => {
    //when document content is loaded immediatly call function to begin 
    //cycling through randomly generated numbers
        init();
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
        

        //while spining random li's are highlited 
        //--randomly adding class name that assigns colored highlight
        //for each( div) add class while spinning. Then take off
        //too a spinning li until the stop button is pressed

        //can keep wheels turning/ but hihglight the section that's been 
        //selected with the RNG. All other sections are blacked out

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

        //let randomDeg = Math.floor(Math.random()**(360 - 0) + 0);
        //stop generating numbers
        clearInterval(timer);
        spinTime === false;
        
            //Cherry
            if( luckyNums[0] % 2 === 0 && luckyNums[1] % 2 === 0 && luckyNums[2] % 2 === 0){
            playerMessage.innerText = "It's cherry picking time! You win $200!"
            bankAcc += 200;
            }

            //Bar
            if( luckyNums[0] % 3 === 0 && luckyNums[1] % 3 === 0 && luckyNums[2] % 3 === 0){
            playerMessage.innerText = 'Bars accross the board! You win $300!!'
            bankAcc += 300;
            }
        
            //Diamonds: 
            if( luckyNums[0] % 4 === 0 && luckyNums[1] % 4 === 0 && luckyNums[2] % 4 === 0){
            playerMessage.innerText = 'Diamonds Everywhere! You win $4,000!!'
            bankAcc += 4000;
            }

            //Emerald
            if( luckyNums[0] % 5 === 0 && luckyNums[1] % 5 === 0 && luckyNums[2] % 5 === 0){
            playerMessage.innerText = 'Wow so shiny! You win $5,000!!';
            bankAcc += 5000;
            }

            //Ruby
            if( luckyNums[0] % 6 === 0 && luckyNums[1] % 6 === 0 && luckyNums[2] % 6 === 0){
            playerMessage.innerText = "You got all rubies! You win $6,000!!";
            bankAcc += 6000;
            }

            //Apple
            if( luckyNums[0] % 7 === 0 && luckyNums[1] % 7 === 0 && luckyNums[2] % 7 === 0){
            playerMessage.innerText = 'If only I could sell apples for this much! You win $7,000!!';
            bankAcc += 7000;
            }

            //Orange
            if( luckyNums[0] % 8 === 0 && luckyNums[1] % 8 === 0 && luckyNums[2] % 8 === 0){
            playerMessage.innerText = 'Orange you glad you just won! You win $8,000!!';
            bankAcc += 8000;
            }

            //Banana
            if( luckyNums[0] % 9 === 0 && luckyNums[1] % 9 === 0 && luckyNums[2] % 9 === 0){
            playerMessage.innerText = 'Amazing! You win $9,000!!';
            bankAcc += 9000;
            }

            //Lemon
            if( luckyNums[0] % 10 === 0 && luckyNums[1] % 10 === 0 && luckyNums[2] % 10 === 0){
            playerMessage.innerText = "Wow you're on a Roll! You win $10,000!!";
            bankAcc += 10000;
            }

            //Avocado
            if( luckyNums[0] % 11 === 0 && luckyNums[1] % 11 === 0 && luckyNums[2] % 11 === 0){
            playerMessage.innerText = 'Holy Cow! You win $11,000!!';
            bankAcc += 11000;
            }

            //luckySeven
            if( luckyNums[0] % 12 === 0 && luckyNums[1] % 12 === 0 && luckyNums[2] % 12 === 0){
            playerMessage.innerText = 'Holy Cow! You win $11,000!!';
            bankAcc += 12000;
            }

            //Crown
            if( luckyNums[0] % 2 === 0 && luckyNums[1] % 4 === 0 && luckyNums[2] % 6 === 0){
            playerMessage.innerText = 'Jack Pot!! You win $100,000!!';
            bankAcc += 100000;
            }

        reel1.getAnimations().forEach(animation => {
            animation.cancel();
        });
        reel2.getAnimations().forEach(animation => {
            animation.cancel();
        });
        reel3.getAnimations().forEach(animation => {
            animation.cancel();
        });
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








