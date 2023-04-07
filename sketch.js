// NOTE: create game and load assets 
const game = new Game();                                                // construct game

function preload() { // DONE 
    game.preloadImages();
    game.preloadFonts();
}

// NOTE: setup items 
function setup() { // DONE 
    createCanvas( WIDTH, HEIGHT ).parent('#p5-div');                    // create canvas

    selectedLevel = createSelect()                                      // create dropdown menu
                        .parent('#menu')                                // anchor into menu
                        .class('dropdown');                             // assign class  for styling
    addFinishedLevelToDropdown();                                       // refresh/reload dropdown menu

    buttonStartGame = createButton('Start')                             // create start button
                        .parent('#menu')                                // anchor into menu
                        .class('start-btn')                             // assign class for styling
                        .mousePressed( startLevel );                    // enable mouse click functionality
}

// NOTE: draw items 
function draw() { // DONE 
    if ( gameIsStarted ) {
        clear();                                                        // remove past frames

        game.placeCharacter();                                          // draw character // COMMENT: it might be better to call the character with each level in the Levels() class. 
        game.createLevel(activeLevel);                                  // draw level based on loaded active-level
        game.eventListener(activeLevel);                                // enable functionality and interactions inside levels

        if ( doCharacterReset ) {                                       // has to stay at the very last position of draw in order to do the reset AFTER all other events, can be triggered individually
            game.character.resetCharacter();                            // call character reset function to reset: position, velocity, allow jumping, disable isAllowedToPass
            characterHasKey = levelCollection[activeLevelid].hasKey;    // set intial value for hasKey (value comes from levelCollection{} according to active-level-id )
            doCharacterReset = false;                                   // disable condition
        }
    }
}

// NOTE: extra functionality 
function keyPressed() { // DONE 
    if ( keyCode === 39 ) game.character.moveRight();
    if ( keyCode === 37 ) game.character.moveLeft();
    if ( keyCode === 38 ) game.character.jump();
    if ( keyCode === 40 ) game.character.moveDown();
}

function sleep(duration) { // DONE 
    return new Promise( resolve => setTimeout(resolve, duration) );     // allows to wait for a certain amount of time, before continue with code flow
}