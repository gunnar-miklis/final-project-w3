const WIDTH = 800;
const HEIGHT = 500;
let fontRegular, fontMedium, fontBold;
let gameIsStarted = false;
let currentLevel = 0;

const game = new Game();

function preload() {
  game.preloadImages();
  game.preloadFonts();
}

function setup() {
  createCanvas( WIDTH, HEIGHT ).parent('#div-p5');

  // TODO 
  const selectedStage = createSelect().parent('#div-p5');
  selectedStage.option('Select Level')
  selectedStage.option('Level 1')
  selectedStage.option('Level 2')
  selectedStage.option('Level 3')

  createButton('Start Level').parent('#div-p5').mousePressed( () => {
    gameIsStarted = true 
    if ( selectedStage.value() === 'Select Level') { currentLevel = 0}
    if ( selectedStage.value() === 'Level 1') { currentLevel = 1 }
    if ( selectedStage.value() === 'Level 2') { currentLevel = 2 }
    if ( selectedStage.value() === 'Level 3') { currentLevel = 3 }
    game.character.resetCharacter();
  });
}

function draw() {
  if ( gameIsStarted ) {
    clear();
    game.placeCharacter();
    game.createLevel();
    game.eventListener();
  }

  console.log( 'level:', currentLevel, 'hasKey:', game.character.hasKey )
}

function keyPressed() {
  if ( keyCode === 39 ) game.character.moveRight();
  if ( keyCode === 37 ) game.character.moveLeft();
  if ( keyCode === 38 ) game.character.jump();
  if ( keyCode === 40 ) game.character.moveDown();
}

function sleep(duration) {
  return new Promise( resolve => setTimeout(resolve, duration) );
}