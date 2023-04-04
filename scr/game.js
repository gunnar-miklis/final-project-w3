class Game {

    constructor() {
        this.character = new Character();
        this.characterImg;

        this.platform = new Platform( 200, 420, 'black' );
        this.key = new Key(50, 320, 'blue');
        this.exit = new Exit( 250, 220, 'green' );
        this.trap = new Trap( 600, 490, 'red' );
    }

    preloadImages() {
        this.characterImg = loadImage('assets/dancing-potato.gif'); // DONE: load default character image 
        // TODO: image orientation for move left
        // TODO: image orientation for move right
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
        this.platform.onCollision(this.character);
        this.key.onCollision(this.character);
        this.exit.onCollision(this.character);
        this.trap.onCollision(this.character);
    }

    drawCharacter() {
        // place character
        this.character.placeCharacter();
    }

}