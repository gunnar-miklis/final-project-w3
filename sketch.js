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
  selectedLevel.class('dropdown')
  addFinishedLevelToDropdown();

  // create start button
  buttonStartGame = createButton('Start').parent('#menu').mousePressed( startLevel );
  buttonStartGame.class('start-btn')
}

// NOTE: draw items 
function draw() { // DONE 
  if ( gameIsStarted ) {
    clear();
    game.placeCharacter();
    game.createLevel(activeLevel);
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