
//Variable Assignments
let timer; 
let timer2;
let interval = 900; 
let spinTime = true;
let luckyNums = []; 
let stopBtnArr = [];

//Slot Reels
const reel1 = document.querySelector('#reel1');
const reel2 = document.querySelector('#reel2');
const reel3 = document.querySelector('#reel3');
const slotReels = document.querySelectorAll(".slotReel");


// Slot Reel 1 Individual Elements & Group Array
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

const reel1Arr = [cherry1, bar1, diamond1, emerald1, ruby1, apple1, orange1, banana1,
lemon1, avocado1, luckySeven1, crown1];

// SLot Reel 2 Individual Elements & Group Array
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

const reel2Arr = [cherry2, bar2, diamond2, emerald2, ruby2, apple2, orange2, banana2,
lemon2, avocado2, luckySeven2, crown2];

//Slot Reel 3 Individual Elements & Group Array
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

const reel3Arr = [cherry3, bar3, diamond3, emerald3, ruby3, apple3, orange3, banana3,
lemon3, avocado3, luckySeven3, crown3];

//Information displayed to the player
const stopBtn = document.querySelector('#stopper');
const playerMessage = document.querySelector('#playerMessage');
const balance = document.querySelector('#balance');
const gameOver = document.querySelector("#endGame");
let bankAcc = 10000;

//Psuedo Random Number Generators will immeidately start when the DOM has loaded completely
document.addEventListener('DOMContentLoaded', (Event) => {  
    balance.innerText = "Available Balance: $" + bankAcc;
    init();
});

//Listen for the player to click the stop button and trigger further events
//Subtract funds from player amount per-click
document.addEventListener('click', function(stopBtn){
    stopBtnArr.unshift('X'); 
    stopper(); 
    balance.innerText = "Available Balance: $" + bankAcc;
    bankAcc -= 1000;

    if(bankAcc <= 0){
        gameOver.classList.add("gameOver")
        gameOver.animate([{opacity:0}, {opacity:1}], 
        {duration: 2000, iterations: 1});

        gameOver.innerText = "You've spent all your money! Game Over! Reload the page to try again!";
        interval = 0;
    }

    if(bankAcc >= 310000){
        gameOver.classList.add("gameOver") 
        gameOver.animate([{opacity: [0, 1]}, {opacity: [0, 1]}], 
        {duration: 2000, iterations: 1});

        gameOver.innerText = "You beat the house! The casino is out of money! Come back another day. Reload the page to try again!";
        interval = 0;
    }
});

function init() {
    if(spinTime === true){
       timer = setInterval(generateNum, interval);
       timer2 = setInterval(generateClass, interval);
      
      reel1.animate([{transform: "rotate(0)"}, {transform: "rotate(360deg)"}], 
        {duration: 2000, iterations: Infinity});

     reel2.animate([{transform: "rotate(0)"}, {transform: "rotate(360deg)"}], 
        {duration: 4000, iterations: Infinity});

      reel3.animate([{transform: "rotate(0)"}, {transform: "rotate(360deg)"}], 
        {duration: 900, iterations: Infinity});
    }
    return;
}
//This function creates the PRNG system the computer draws from
//to determine if the player has won any money
function generateNum(){
   let randomInt = Math.floor(Math.random()*(200 - 0) + 0);

    luckyNums.unshift(randomInt);
    if(luckyNums.length >= 3){
        luckyNums.splice(3, Infinity);
    }else{
        return;
    }
   console.log(luckyNums);
}
//This function randomly assigns a highlight class to the reels
//while they spin, before the player has stopped the slot machine
function generateClass(){
    let randomClass = Math.floor(Math.random()*(12 - 0) + 0);
    reel1Arr.forEach((element) => {
        element.classList.remove('selected');
    });

    reel2Arr.forEach((element) => {
        element.classList.remove('selected');
    });

    reel3Arr.forEach((element) => {
        element.classList.remove('selected');
    });
                    
    reel1Arr[randomClass].classList.add('selected'); 
    reel2Arr[randomClass].classList.add('selected');
    reel3Arr[randomClass].classList.add('selected');
}

//This function acts as the control switch for the PRNG system
//It also assigns a class to visual distinguish wich slot icons were randomly
//chosen by the PRNG system. It also chagnes the visual display to the 
//palyer letting them know the amount of money won.
function stopper(){

        if(stopBtnArr.length % 2 !== 0){
            clearInterval(timer);
            clearInterval(timer2);
            spinTime === false;
            for(let i = 0; i<reel1Arr.length; i++){
                reel1Arr[i].classList.remove('selected'); 
                reel2Arr[i].classList.remove('selected'); 
                reel3Arr[i].classList.remove('selected');    
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

                //Cherry
                if( luckyNums[0] % 2 === 0 ){
                    playerMessage.innerText = "It's cherry picking time! You win $200!";
                    bankAcc += 200;
                    cherry1.classList.add("selected");
                    cherry2.classList.add("selected");
                    cherry3.classList.add("selected");

                    //Confetti Generator from https://confetti.js.org/more.html
                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                      }
                      
                      confetti({
                        angle: randomInRange(0, 360),
                        spread: randomInRange(300, 300),
                        particleCount: randomInRange(50, 100),
                        origin: { y: 0.6 },
                      }); 
                        
                }

                //Bar
                if(luckyNums[0]/2 === 0 ){
                    playerMessage.innerText = 'Bars accross the board! You win $300!!';
                    bankAcc += 300;
                    bar1.classList.add("selected");
                    bar2.classList.add("selected");
                    bar3.classList.add("selected");

                    //Confetti Generator from https://confetti.js.org/more.html
                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                      }
                      
                      confetti({
                        angle: randomInRange(0, 360),
                        spread: randomInRange(300, 300),
                        particleCount: randomInRange(50, 100),
                        origin: { y: 0.6 },
                      });     
                }
            
                //Diamonds 
                if( luckyNums[2] % 2 === 0){
                    playerMessage.innerText = 'Diamonds Everywhere! You win $4,000!!';
                    bankAcc += 4000;
                    diamond1.classList.add("selected");
                    diamond2.classList.add("selected");
                    diamond3.classList.add("selected");

                    //Confetti Generator from https://confetti.js.org/more.html
                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                      }
                      
                      confetti({
                        angle: randomInRange(0, 360),
                        spread: randomInRange(300, 300),
                        particleCount: randomInRange(50, 100),
                        origin: { y: 0.6 },
                      }); 
                
                }

                //Emerald
                if( luckyNums[0] % 5 === 0 || luckyNums[1] % 5 === 0 || luckyNums[2] % 5 === 0){
                    playerMessage.innerText = 'Wow so shiny! You win $5,000!!';
                    bankAcc += 5000;
                    emerald1.classList.add("selected");
                    emerald2.classList.add("selected");
                    emerald3.classList.add("selected");

                    //Confetti Generator from https://confetti.js.org/more.html
                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                      }
                      
                      confetti({
                        angle: randomInRange(0, 360),
                        spread: randomInRange(300, 300),
                        particleCount: randomInRange(50, 100),
                        origin: { y: 0.6 },
                      }); 
                    
                }

                //Ruby
                if( luckyNums[0] % 6 === 0 || luckyNums[1] % 6 === 0 || luckyNums[2] % 6 === 0){
                    playerMessage.innerText = "Wow! You win $6,000!!";
                    bankAcc += 6000;
                    ruby1.classList.add("selected");
                    ruby2.classList.add("selected");
                    ruby3.classList.add("selected");

                    //Confetti Generator from https://confetti.js.org/more.html
                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                      }
                      
                      confetti({
                        angle: randomInRange(0, 360),
                        spread: randomInRange(300, 300),
                        particleCount: randomInRange(50, 100),
                        origin: { y: 0.6 },
                      }); 

                }

                //Apple
                if( luckyNums[0]/7 === 0 || luckyNums[1]/7 === 0 || luckyNums[2]/7 === 0){
                    playerMessage.innerText = 'Big Win! You win $7,000!!';
                    bankAcc += 7000;
                    apple1.classList.add("selected");
                    apple2.classList.add("selected");
                    apple3.classList.add("selected");

                    //Confetti Generator from https://confetti.js.org/more.html
                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                      }
                      
                      confetti({
                        angle: randomInRange(0, 360),
                        spread: randomInRange(300, 300),
                        particleCount: randomInRange(50, 100),
                        origin: { y: 0.6 },
                      }); 
                }

                //Orange
                if( luckyNums[0]/8 === 0 || luckyNums[1]/8 === 0 || luckyNums[2]/8 === 0){
                    playerMessage.innerText = 'Amazing! You win $8,000!!';
                    bankAcc += 8000;
                    orange1.classList.add("selected");
                    orange2.classList.add("selected");
                    orange3.classList.add("selected");

                    //Confetti Generator from https://confetti.js.org/more.html
                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                      }
                      
                      confetti({
                        angle: randomInRange(0, 360),
                        spread: randomInRange(300, 300),
                        particleCount: randomInRange(50, 100),
                        origin: { y: 0.6 },
                      }); 
    
                }

                //Banana
                if( luckyNums[0]/9 === 0 ){
                    playerMessage.innerText = 'Amazing! You win $9,000!!';
                    bankAcc += 9000;
                    banana1.classList.add("selected");
                    banana2.classList.add("selected");
                    banana3.classList.add("selected");

                    //Confetti Generator from https://confetti.js.org/more.html
                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                      }
                      
                      confetti({
                        angle: randomInRange(0, 360),
                        spread: randomInRange(300, 300),
                        particleCount: randomInRange(50, 100),
                        origin: { y: 0.6 },
                      }); 
            
                }

                //Lemon
                if( luckyNums[0]/10 === 0 || luckyNums[1]/10 === 0 || luckyNums[2]/10 === 0){
                    playerMessage.innerText = "Wow you're on a Roll! You win $10,000!!";
                    bankAcc += 10000;
                    lemon1.classList.add("selected");
                    lemon2.classList.add("selected");
                    lemon3.classList.add("selected");

                    //Confetti Generator from https://confetti.js.org/more.html
                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                      }
                      
                      confetti({
                        angle: randomInRange(0, 360),
                        spread: randomInRange(300, 300),
                        particleCount: randomInRange(50, 100),
                        origin: { y: 0.6 },
                      }); 
                }

                //Avocado
                if( luckyNums[0]/11 === 2){
                    playerMessage.innerText = 'Holy Cow! You win $11,000!!';
                    bankAcc += 11000;
                    avocado1.classList.add("selected");
                    avocado2.classList.add("selected");
                    avocado3.classList.add("selected");

                    //Confetti Generator from https://confetti.js.org/more.html
                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                      }
                      
                      confetti({
                        angle: randomInRange(0, 360),
                        spread: randomInRange(300, 300),
                        particleCount: randomInRange(50, 100),
                        origin: { y: 0.6 },
                      }); 
            
                }

                //luckySeven
                if( luckyNums[1] % 12 === 0){
                    playerMessage.innerText = 'Holy Cow! You win $11,000!!';
                    bankAcc += 12000;
                    luckySeven1.classList.add("selected");
                    luckySeven2.classList.add("selected");
                    luckySeven3.classList.add("selected");

                    //Confetti Generator from https://confetti.js.org/more.html
                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                      }
                      
                      confetti({
                        angle: randomInRange(0, 360),
                        spread: randomInRange(300, 300),
                        particleCount: randomInRange(50, 100),
                        origin: { y: 0.6 },
                      }); 
        
                }

                //Crown
                if( luckyNums[0] % 2 === 0 && luckyNums[2] % 5 === 0){
                    playerMessage.innerText = 'Jack Pot!! You win $100,000!!';
                    bankAcc += 100000;
                    crown1.classList.add("selected");
                    crown2.classList.add("selected");
                    crown3.classList.add("selected");

                    //Confetti Generator from https://confetti.js.org/more.html
                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                      }
                      
                      confetti({
                        angle: randomInRange(0, 360),
                        spread: randomInRange(300, 300),
                        particleCount: randomInRange(50, 100),
                        origin: { y: 0.6 },
                      }); 
                    
                }
        }
        if(stopBtnArr.length % 2 === 0){
                spinTime === true;
                init();
                console.log('true');
        }
        if(stopBtnArr.length > 10){
        stopBtnArr.splice([0], 10);
        }
}



