// NOTE: create game and load assets 
const game = new Game();

function preload() { // DONE 
  game.preloadImages();
  game.preloadFonts();
}

// NOTE: setup items 
function setup() { // DONE 
  // create canvas
  createCanvas( WIDTH, HEIGHT ).parent('#div-p5');
  
  // create dropdown menu
  selectedLevel = createSelect().parent('#menu');
  addFinishedLevelToDropdown();

  // create start button
  buttonStartGame = createButton('Start Level').parent('#menu').mousePressed( startLevel );
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