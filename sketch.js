const WIDTH = 800;
const HEIGHT = 500;
const game = new Game();

function preload() {
  game.preloadImages();
}

function setup() {
  createCanvas( WIDTH, HEIGHT );
}

function draw() {
  clear();
  game.drawCharacter();
  game.drawLevel();
  game.eventListener();
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