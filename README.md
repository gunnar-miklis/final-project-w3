# This Level Again Clone
Final Project for Module-1 of Ironhack's webDev Bootcamp 2023

## Structure
### sketch.js 
* p5.js
* initialize canvas and draw
* contains functions for input (keypress, etc.)

### game.js
* class Game()
* initialize game and essential functions

### char.js
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
#### Exit() extends Obstacles()
* initialize platforms
* Method: .standOnPlatform()
* Method: .winOnExit()
#### Trap() extends Obstacles()
* initialize traps 
* Method: .deathOnCollision()
