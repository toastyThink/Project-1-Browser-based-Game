
Project 1: Virtual Slot Machine 

Resources I used for the project: 

1. https://entertainment.howstuffworks.com/slot-machine.htm

2. https://www.youtube.com/watch?v=yegxMTVMoJc

3. https://stackoverflow.com/questions/29006214/how-to-divide-a-circle-into-12-equal-parts-with-color-using-css3-javascript

4. https://developer.mozilla.org/en-US/

5. https://confetti.js.org/more.html

6. Background Image: https://www.deviantart.com/giozaga/art/Casino-Card-Background-Wallpaper-HD-1920x1080-454608180



---------------------------------------------------------------

Wireframe of Mobile Layout
[Mobile View of Slot Machine.pdf](https://github.com/toastyThink/Project-1-Browser-based-Game/files/13200952/Mobile.View.of.Slot.Machine.pdf)

Wireframe of Desktop Layout
[Desktop_Horizontal Layout Slot Machine.pdf](https://github.com/toastyThink/Project-1-Browser-based-Game/files/13200947/Desktop_Horizontal.Layout.Slot.Machine.pdf)

Computerized slot machines use a pseudo random number generator (PRNG) to determine outcomes. When pressed, the play button tells the computer to stop the PRNG system. Depending on the number of reels for a machine, the computer will use the last several numbers generated (one for each reel) to determine the position of the reels. The number generated is what the computer uses to determine outcomes for the player. The random number generator must ensure that each pull has an equal chance of winning a jack-pot. 

Each number generated corresponds to a spot on a "virtual reel". The computer tracks this by dividing each number by a set value. According to an article on howstuffworks.com, the set values divided by are usually 32, 64, 128, 256, or 512. The remainder of these numbers correspond to a slot on a virtual reel. It should be noted that these sets of numbers are also called seed numbers, seed values, or simply the seed. 

The seed value is a crucial component to slot machines as they help decide which image the reel will stop on. Seed numbers must be kept secret from the player, as their potential leak could cause gamblers to predict patterns in the PRNG algorithm.

How is a win visually communicated to the player? Slot machines have stop lines used to determine which image is chosen. Depending on the number of stop lines, the player is also likely to win extra rewards and a portion of their money back. Depending on the state, machines may be required to have payback percentages ranging from 75% to 90% or higher. 

The internal computers of video slot machines are generating hundreds of thousands of numbers in a fraction of a second. This brings up several points. Why not simply have the "play" button trigger the PRNG system when pressed? Why is the PRNG system running passively in the background? According to almighty Wikipedia, this is because having the system run in the background prevents players from guessing when a certain sequence may occur. 

Because the systems used are pseudo random, the range of numbers used will eventually be repeated, but the order they repeat in will be relatively random and hard to track.

It is also important to note: the jack pot slot usually has only one spot in an entire machine. That means for a machine with 3 reels or more, only one image or sequence of images will correspond to the highest payback possible. According to howstuffworks.com if a machine has 64 slots per reel, this can be broken down to a chance of 1 in 63^3 or 1 in 262,144. The chances of winning will be even lower for machines with more slots or reels. 


Setup: 
	- We will use a standard 3 reel machine. Each reel will have 12 slots 
	- The jack-pot will occupy a single space out of all three reels and virtual reels. One reel will have the jack pot and no others will contain it
	- Slots that are not the jack-pot may occupy more than one space on virtual reels
	- Each "symbol" including the jack pot, will have remainder values assigned to it. If the remainder of the PRNG calculations equals a matching value, the corresponding reel will stop on that symbol
	

	- The PRNG system immediately begins generating numbers as soon as the web page is loaded 
		○ This triggers the reels to automatically start spinning 
		○ The generated numbers are stored in an array  with a length of 3,  [0,1,2]. This is because each 
		index of the array will correspond to one of the reels shown to the player
		○ Generated numbers will use .unshift() to be put at the beginning of the array
		○ When the array exceeds a length of 3, the last index will be deleted 
		
	- There will be a button labeled as "Play" the player can click on. When clicked this will trigger the following: 
		○ The PRNG will stop recording numbers. 
		○ The numbers in the array will be divided by 64 and use the remainder to determine which spot on each reel will be chosen 
		○ The animation spinning each reel will then stop at the designated sign  
		○ Depending on the order of signs stopped on, or if the jack-pot is chosen the player will be given a visual cue that they have won a prize or won the jack-pot
		○ If a losing sequence is chosen the player will be given a visual cue to let them know they have lost and that they should try again

Win Condition
	- The player account exceeds a limit of $310000
	
Lose Condition
	- The Player runs out of money!


Stretch Goals 
	- 3D animations are given for the win conditions and lose conditions 
 
	- The Jack-pot is given a more fancy 3D animation (think of the animations played when someone makes a strike at a bowling alley)
	- Loss conditions are also given 3D animations 

 
	
		
