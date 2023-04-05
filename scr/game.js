class Game {

    constructor() {
        this.character = new Character();
        this.characterImg;
        this.characterImgLeft;
        this.characterImgRight;

        // TODO 
        this.level1 = new Level1();
        this.level2 = new Level2();
        this.level3 = new Level3();
    }
    printText( message, color, seconds ) {
        background(240);
        fill( color );
        textSize( 30 );
        textFont( fontMedium );
        textAlign( CENTER );
        text( message, WIDTH/2, HEIGHT/2 );
        if ( seconds ) { noLoop(); sleep(seconds).then( () => { loop() } ) } // wait
    }

    // preload
    preloadImages() { // DONE 
        this.characterImg = loadImage('assets/images/dancing-potato.gif');
        this.characterImgLeft = loadImage('assets/images/dancing-potato-left.png');
        this.characterImgRight = loadImage('assets/images/dancing-potato-right.png');
    }
    preloadFonts() { // DONE 
        fontRegular = loadFont('assets/fonts/SofiaSansCondensed-Regular.ttf');
        fontMedium = loadFont('assets/fonts/SofiaSansCondensed-SemiBold.ttf');
        fontBold = loadFont('assets/fonts/SofiaSansCondensed-Black.ttf');
    }

    // draw
    createLevel() { // TODO 
        if ( currentLevel === 0 ) {}
        else if ( currentLevel === 1 ) { this.level1.update() }
        else if ( currentLevel === 2 ) { this.level2.update() }
        else if ( currentLevel === 3 ) { this.level3.update() }
        else { this.printText('The End.','black') }
    }
    eventListener() { // TODO 
        if ( currentLevel === 0 ) {}
        else if ( currentLevel === 1 ) { this.level1.events() }
        else if ( currentLevel === 2 ) { this.level2.events() }
        else if ( currentLevel === 3 ) { this.level3.events() }
    }
    placeCharacter() { // DONE 
        this.character.update();
        if ( this.character.y === HEIGHT - this.character.h ) { this.character.jumps = true };
    }
}