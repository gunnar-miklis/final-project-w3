// NOTE: create game and load assets 
const game = new Game();

function preload() { // DONE 
  game.preloadImages();
  game.preloadFonts();
}

// NOTE: setup items 
function setup() { // DONE 
  // create canvas
  createCanvas( WIDTH, HEIGHT ).parent('#p5-div');
  
  // create dropdown menu
  selectedLevel = createSelect().parent('#menu');
  selectedLevel.class('dropdown'); // assign class
  addFinishedLevelToDropdown();

  // create start button
  buttonStartGame = createButton('Start').parent('#menu').mousePressed( startLevel );
  buttonStartGame.class('start-btn'); // assign class
}

// NOTE: draw items 
function draw() { // DONE 
  if ( gameIsStarted ) {
    clear();
    game.placeCharacter(); // COMMENT: maybe draw the character inside the level() (at each level re-start), instead of global draw 
    game.createLevel(activeLevel); // based on loaded level (from levelList), draw level
    game.eventListener(activeLevel);
    if ( doCharacterReset ) {
      game.character.resetCharacter();
      characterHasKey = levelList[activeLevelId].hasKey
      doCharacterReset = false;
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
  return new Promise( resolve => setTimeout(resolve, duration) );
}