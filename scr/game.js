class Game { // DONE 

    constructor() {
        this.character = new Character();
        this.characterImg;
        this.characterImgLeft;
        this.characterImgRight;
    }
    printTextCentered( message, color, seconds ) {
        background(0);
        // fill( color ); // COMMENT: style y/n? 
        fill( 'white' )
        textSize( 40 );
        textFont( fontMedium );
        textAlign( CENTER );
        text( message, WIDTH/2, HEIGHT/2 );
        if ( seconds ) { noLoop(); sleep(seconds).then( () => { loop() } ) } // wait
    }

    // NOTE: preload 
    preloadImages() { // DONE 
        this.characterImg = loadImage('assets/images/dancing-potato.gif');
        this.characterImgLeft = loadImage('assets/images/dancing-potato-left.png');
        this.characterImgRight = loadImage('assets/images/dancing-potato-right.png');
    }
    preloadFonts() { // DONE 
        fontRegular = loadFont('assets/fonts/SofiaSansCondensed-Regular.ttf');
        fontMedium = loadFont('assets/fonts/SofiaSansCondensed-SemiBold.ttf');
        fontBold = loadFont('assets/fonts/SofiaSansCondensed-Bold.ttf');
        fontBlack = loadFont('assets/fonts/SofiaSansCondensed-Black.ttf');
    }

    // NOTE: draw 
    placeCharacter() { // DONE 
        this.character.update();
        if ( this.character.y === HEIGHT - this.character.h ) { this.character.jumps = true };
    }
    createLevel(level) { // DONE 
        if ( level ) { level.update() }
        if ( activeLevelId > levelList.length-1 ) {
            activeLevelId--;
            game.printTextCentered('The End.','white');
            noLoop();
        } 
    }
    eventListener(level) { // DONE
        if ( level ) { level.events() }
    }
}