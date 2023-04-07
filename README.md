# Wait...? That level, again?
This game was made by me for education purpose.
It's the final Project for Module-1 Week3 of Ironhack's Web Development Bootcamp 2023

This game is inspired by the lovely game [That Level Again](https://play.google.com/store/apps/details?id=ru.iamtagir.game.android). Please check it out!


## Structure
### index.html
* web page for the p5 canvas
* handling all the js files

### style.css
* general styling, design and layout

### variables.js
* contains all global variables
* contains all global functions
* contains startGame() and nextLevel() function

### sketch.js 
* using p5.js
* initialize canvas and draw
* contains functions for input (keypress, etc.)

### game.js
* class Game()
* initialize game and essential functions

### character.js
* class Char()
* initialize character
* functionality of characters movments

### obstacles.js
* class Obstacles()
* creates basic level with obstacles
* will contain different win-conditions for each level
#### Platform() extends Obstacles()
* initialize platforms
* Method: .standOnPlatform()
#### Key() extends Obstacles()
* initialize platforms
* Method: .collectKey()
#### Exit() extends Obstacles()
* initialize platforms
* Method: .standOnPlatform()
* Method: .win()
#### Trap() extends Obstacles()
* initialize traps 
* Method: .deathOnCollision()

### levels.js
* class Levels()
* contains default level and level events
#### Level() extends Levels()
* many levels with different conditions to win
#### list of level ideas may be here...
* __please add more :)__

### levelList.js
* object containing all levels
* also containing relevant properties for each level

## Improvements and Suggestions
* spawn character with each level start ( level.update() ) instead of in general game.draw()