class Game { // DONE 

    constructor() {
        this.character = new Character();                                       // construct character // COMMENT: it might be better to call the character with each level in the Levels() class. 
        this.characterImg;
        this.characterImgLeft;
        this.characterImgRight;
    }

    // NOTE: transition screen to print a text or message for a certain amount of time 
    transitionScreen( message, seconds ) { // DONE 
        background(0);
        fill( 'white' );
        textSize( 40 );
        textFont( fontMedium );
        textAlign( CENTER );
        text( message, WIDTH/2, HEIGHT/2 );
        if ( seconds ) {                                                        // wait functionality:
            noLoop();                                                           // pause game for a certain amount of time
            sleep(seconds).then( () => { loop() } );                            // calls a new Promise(), then continue game
        };
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
    }

    // NOTE: draw 
    placeCharacter() { // DONE 
        this.character.update();
    }
    createLevel( level ) { // DONE 
        if ( level ) { level.update() }                                         // only update level, when it's available from the levelCollection{}
        if ( activeLevelid === levelCollection.length ) {                       // if last level is finished
            activeLevelid--;                                                    // decrement activeLevelid by 1, because nextLevel() incremented it earlier, beyond the levelCollection{}
            game.transitionScreen('Thanks for playing.\nto be continued...?');  // print a message on the transition screen
            noLoop();                                                           // stop game animation
        };
    }
    eventListener( level ) { // DONE
        if ( level ) {                                                          // only listen for events, when level is available from the levelCollection{}
            level.events( game.character )                                      // character needs to be an arument for events, since in events character and obstacles will be compared
        };                     
    }
}