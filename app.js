

//Create PRNG that passively runs in background 

// 1. will need an array to store values 

let luckyNums = ['0', '0', '0']; 



document.addEventListener('DOMContentLoaded', (e) => {
    //when document content is loaded immedialtyl begin cycling through
    //randomgly generated numbers

});

//Math.floor(Math.random()*(264,250 - 0) + 0)


function generateNum(){
    self.crypto.getRandomValues(luckyNums);
    if(luckyNums.length > 3){
        luckyNums.splice(4, Infinity);
    }

    return console.log(luckyNums);
}



