

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
const playerMessage = document.querySelector('h1');
const balance = document.querySelector('#balance > span');

document.addEventListener('click', function(stopBtn){
    stopBtnArr.unshift('X'); 
    stopper();
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

        //Bar
         //if( luckyNums[0] % 3 === 0 && luckyNums[1] % 9 = 0 && luckyNums[2] % 9 = 0){
        // playerMessage.innerText = 'Diamonds Everywhere! You win $9,000!!'
        // balance.innerText + 9,000;
        //}
    
        //Diamonds: 
        
        //if( luckyNums[0] % 9 === 0 && luckyNums[1] % 9 = 0 && luckyNums[2] % 9 = 0){
        // playerMessage.innerText = 'Diamonds Everywhere! You win $9,000!!'
        // balance.innerText + 9,000;
        //}

        //Emerald

        //Ruby

        //Apple

        //Orange

        //Banana

        //Lemon

        //Avocado

        //luckySeven

        //Crown


        //make spinning animation stop the reel on the matching face
        //according to the random number generated
        

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








