
Hello GA Team! 

Thank you so much for reveiewing my project, I really appreciate it! I have some questions on how to improve the visual quality of the game.

1. Glow Snippet: 

While I'm proud of finding a solution to creating an evenly divided circle, the way I built it skews any image I try to display inside. The circle itself is a <ul></ul> tag with 12 <li></li> inside displaying images. The li's are rotated by 30 degrees with the first li at 0deg and the last li at 360deg. The CSS for each looks like this: transform: rotate(0deg) skewY(-60deg);

Is there a way to dynamically create an evenly divided circle (or an unevenly divided circle like a pie chart) where images placed inside arent skewed? 

2. Grow Snippet: 

I'm not very happy with the end game screen or win game screen. I wanted to have the screen that appears include a "retry" button that would reload the page if clicked. I tried inserting a <button></button> between the <section></section> tag that is the endgame screen and initialising its visibility property as: visibility: hidden. When the end gamescreen loads I wrote that:  retryButton.style.visibility = 'visibile; However this didn't make any changes to the button's style attribute, and the game itself broke when attempting to load the end game screen. I'm sure there's a way to solve this any help you can provide would be greatly appreciated!