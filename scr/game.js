class Game {

    constructor() {
        this.char = new Char();
        this.charImg;

        this.key = new Key(50, 420, 'blue');
        this.exit = new Exit( 250, 420, 'green' );
        this.platform = new Platform( 400, 420, 'black' );
        this.trap = new Trap( 600, 490, 'red' );
    }

    preloadImages() {
        // [x] load default char image 
        this.charImg = loadImage('assets/dancing-potato.gif');
        // [ ] image orientation for move left
        // [ ] image orientation for move right
    }

    drawLevel() {
        // place platforms
        this.platform.placeOnCanvas();
        this.key.placeOnCanvas();
        this.exit.placeOnCanvas();
        this.trap.placeOnCanvas();
    }
    
    eventListener() {
        // event listener
        this.platform.onCollision();
        this.key.onCollision();
        this.exit.onCollision();
        this.trap.onCollision();
    }

    drawChar() {
        // place character
        this.char.placeChar();
    }

}