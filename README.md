Virtual Slot Machine
----------------------------
I created a browser based web game that simulates how a slot machine might work.
A pseudo random number generator (PRNG) system is passivley working in the background to create random numbers between 0 and 9,000. Usually for slot machines the actual range of random numbers is much higher. Somewhere between 0 and Several billion. I scaled down the range of numbers as I wasn't sure how to handle all of that data! Some PRNG systems will take their random seed values from naturally occuring sources of entropy such as: radioactive degredation, atmospheric radiation etc. 

Game Play Instructions
----------------------------
The mechanics of the game are simple. Press the play button to stop the reels and see what you win. Each time you press the play button a $1,000 deduction is made from the Account Balance. As the reels spin, sections will be highlighted yellow randomly to indicate what you might win. When the reels are stopped, the sections that are highlighted yellow indicate what the PRNG system chose based on a compariosn of randomly generated numbers. You will lose the game if your Account Balance reaches 0 or less. The last three numbers generated will decide whether you have met a wining condition, or if you receive nothing. Don't worry though, I made sure that the odds of winning were in your favor! 

There is a second win condition: If the player exceeds an account balance of $310,000 the game ends. I chose $310,000 as it seemed like a large number but not too big that it was unobtainable by the player. This is to control the upper limit of what the player can accumulate. Originally there was no upper limit, but I quickly realised that the growth of the number could slow down the browser or possibly cause the game to crash if unaccounted for.

Images of the Game
----------------------------
<img width="1337" alt="Screen Shot 2023-11-02 at 6 16 00 PM" src="https://github.com/toastyThink/Project-1-Browser-based-Game/assets/55202537/2c5f3f43-a588-46bf-aaa9-3b6892ee7ebe">

<img width="1340" alt="Screen Shot 2023-11-02 at 6 26 59 PM" src="https://github.com/toastyThink/Project-1-Browser-based-Game/assets/55202537/f109032c-eb20-4bc6-9226-dce06f4a8a84">

<img width="1349" alt="Screen Shot 2023-11-02 at 6 27 57 PM" src="https://github.com/toastyThink/Project-1-Browser-based-Game/assets/55202537/7afb1457-fbd9-4013-bae4-070a454345cb">


<img width="1351" alt="Screen Shot 2023-11-02 at 6 29 42 PM" src="https://github.com/toastyThink/Project-1-Browser-based-Game/assets/55202537/267d2e91-ef64-4eb8-b4fa-ca93f624954e">

Installation
----------------------------
No installation of external resources is needed! You can 
just follow this url link: https://toastythink.github.io/Project-1-Browser-based-Game/


These are all the wonderful sources I used throughout the project! 
------------------------------------------------------------------
1. https://entertainment.howstuffworks.com/slot-machine.htm

2. https://www.youtube.com/watch?v=yegxMTVMoJc

3. https://stackoverflow.com/questions/29006214/how-to-divide-a-circle-into-12-equal-parts-with-color-using-css3-javascript

4. https://developer.mozilla.org/en-US/

5. https://confetti.js.org/more.html

6. Background Image: https://www.deviantart.com/giozaga/art/Casino-Card-Background-Wallpaper-HD-1920x1080-454608180
