class Game {

    constructor() {
        this.character = new Character();
        this.characterImg;
        this.characterImgLeft;
        this.characterImgRight;

        this.platform = new Platform( 200, 420, 'black' );
        this.key = new Key(50, 320, 'blue');
        this.exit = new Exit( 250, 220, 'green' );
        this.trap = new Trap( 500, 490, 'red' );
    }

    preloadImages() { // DONE 
        this.characterImg = loadImage('assets/dancing-potato.gif');
        this.characterImgLeft = loadImage('assets/dancing-potato-left.png');
        this.characterImgRight = loadImage('assets/dancing-potato-right.png');
    }

    drawLevel() { // FIXME 
        // place platforms
        this.platform.placeOnCanvas();
        this.key.placeOnCanvas();
        this.exit.placeOnCanvas();
        this.trap.placeOnCanvas();
    }
    
    eventListener() { // COMMENT: maybe some sneaky conditions here, later?! :D 
        // event listener
        this.platform.onCollision(this.character);
        this.key.onCollision(this.character);
        this.exit.onCollision(this.character);
        this.trap.onCollision(this.character);
    }

    drawCharacter() { // DONE 
        // place character
        this.character.placeCharacter();
        if ( this.character.y === HEIGHT - this.character.h ) { this.character.jumps = true };
    }

}