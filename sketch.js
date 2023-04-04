const WIDTH = 800;
const HEIGHT = 500;
const game = new Game();
let jumpDelay = 0;

function preload() {
  game.preloadImages();
}

function setup() {
  createCanvas( WIDTH, HEIGHT );
}

function draw() {
  clear()
  game.drawChar();
  game.drawLevel();
  game.eventListener();
}

function keyPressed() {
  if ( keyCode === 39 ) game.char.moveRight();
  if ( keyCode === 37 ) game.char.moveLeft();
  if ( jumpDelay === 0 ) if ( keyCode === 38 ) game.char.jump(jumpDelay);
  if ( keyCode === 40 ) game.char.moveDown();
}

function sleep(duration) {
  return new Promise( resolve => setTimeout(resolve, duration) );
}