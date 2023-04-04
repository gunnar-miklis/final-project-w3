class Game {

    constructor() {
        this.character = new Character();
        this.characterImg;
        this.characterImgLeft;
        this.characterImgRight;

        // TODO => stage.js 
        this.trap1 = new Trap( 500, 491, 'red' );
        this.platform1 = new Platform( 200, 400, 'black' );
        this.exit = new Exit( 50, 300, 'green' );
        this.platform2 = new Platform( 250, 200, 'black' );
        this.trap2 = new Trap( 350, 200, 'red' );
        this.platform3 = new Platform( 450, 200, 'black' );
        this.key = new Key(650, 300, 'blue');
    }

    preloadImages() { // DONE 
        this.characterImg = loadImage('assets/dancing-potato.gif');
        this.characterImgLeft = loadImage('assets/dancing-potato-left.png');
        this.characterImgRight = loadImage('assets/dancing-potato-right.png');
    }

    placeLevel() { // TODO => stage.js 
        // place platforms
        this.platform1.update();
        this.platform2.update();
        this.platform3.update();
        this.key.update();
        this.exit.update();
        this.trap1.update();
        this.trap2.update();
    }
    
    eventListener() { // TODO => stage.js 
        // event listener
        this.platform1.onCollision(this.character);
        this.platform2.onCollision(this.character);
        this.platform3.onCollision(this.character);
        this.key.onCollision(this.character);
        this.exit.onCollision(this.character);
        this.trap1.onCollision(this.character);
        this.trap2.onCollision(this.character);
    }

    placeCharacter() { // DONE 
        // place character
        this.character.update();
        if ( this.character.y === HEIGHT - this.character.h ) { this.character.jumps = true };
    }

}