#First Project: WHO WHERE WHAT

#Game Description
It's a game played by two players, who selects a category from a list of available categories to guess. taking turns to guess an image they randomly choose from a deck. The images are not shown to them until they click it and they have to guess what, who or where that image is from. They are given four options with a hint and are timed. Once they run out of cards the winner is announced.

#Potential Problems
- I think one problem will be having my randomizer randomize effectively. i.e not repeating images after every round. I intend to display 10 images at a time, but have about 50 images available in my array for each category, and I would like and intend not to have the first 10 images displayed in the first round displayed again.

#Solution for this
 - For the purposes of the project, I could just make the game go just one round upon the first time the start button is clicked.

#Functional Specification
- A landing page where players enters their names click on the start button
- The game page with a deck of 10 images,A section displaying available categories and a section displaying current score
- A prompt asking player one to randomly choose a card.Once clicked, THE TIMER STARTS they are asked a question about the image and given options to guess with a hint.
-  An alaredy clicked card/position is marked unavailable in red and a re-click on it gives an alert saying the card is unavailable.
- The game goes on until all the images are clicked.
- When a card is clicked without the players being ready. they have to press reset.

#MVP
- A working/ functional deck of cards that is clickable.
- A scores tab displaying how many questions a player gets wrong or right with points.
- A working reset button.
