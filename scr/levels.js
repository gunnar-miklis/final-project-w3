class Levels { // DONE 

    constructor( instructions ) {
        this.instructions = instructions;                                   // load level instructions from levelCollection{}, to automatically display them for their corresponding level
        this.key = new Key( 650, 300, 'blue' );                             // "default" platform structure, will basically stay the same all the time.
        this.exit = new Exit( 50, 300, 'green' );                           // containing: exit, key, 2x trap, 3x platform
        this.trap1 = new Trap( 500, 491, 'red' );
        this.trap2 = new Trap( 350, 200, 'red' );
        this.platform1 = new Platform( 200, 400, 'black' );
        this.platform2 = new Platform( 250, 200, 'black' );
        this.platform3 = new Platform( 450, 200, 'black' );                 
        //this.character = new Character();                                 // COMMENT: it might be better to call the character here, instead of in Game() class. with each game construction. not sure though. 
    }

    printLevelInstructions( insertTitle ) {                                 // function to print level instructions (hints) in the center
            fill( 'black' );
            textFont( fontRegular );
            textSize( 25 );
            textAlign( CENTER );
            text( insertTitle, WIDTH/2, 200 + 40 );
    }

    update() {                                                              // functions to draw platforms on canvas
        this.printLevelInstructions( this.instructions );
        this.key.update();
        this.exit.update();
        this.trap1.update();
        this.trap2.update();
        this.platform1.update();
        this.platform2.update();
        this.platform3.update();
        // this.character.update();                                         // COMMENT: character draw() 
    }

    events( character ) {                                                   // stayOnCollision() functions needs to be available anytime, add them to draw()
        this.key.stayOnCollision( character );
        this.exit.stayOnCollision( character );
        this.trap1.stayOnCollision( character );
        this.trap2.stayOnCollision( character );
        this.platform1.stayOnCollision( character );
        this.platform2.stayOnCollision( character );
        this.platform3.stayOnCollision( character );
    }
}
// NOTE: L 0 
class Level0 extends Levels {}
// NOTE: L1, find the exit 
class Level1 extends Levels { // DONE 

    constructor( instructions ) {
        super( instructions );
        this.trap1 = new Platform( 500, 491, 'black' );                     // trap1 will be replaced by just a regular platform
        this.trap2 = new Platform( 350, 200, 'black' );                     // trap2 will be replaced by just a regular platform as well
    }

    events( character ) {
        super.events( character );
        this.exit.winOnCollision( character );                              // add winOnCollision() event to draw()
    }
}
// NOTE: L2, find a way to access the exit 
class Level2 extends Levels { // DONE 

    constructor( instructions ) {
        super( instructions );
        this.trap1 = new Platform( 500, 491, 'black' );
        this.trap2 = new Platform( 350, 200, 'black' );
    }

    events( character ) {
        super.events( character );
        this.exit.winOnCollision( character );
        this.key.giveKeyOnCollision( character );                           // add giveKeyOnCollision() event to draw(), so character can collect key
    }
}
// NOTE: L3, the floor is lava 
class Level3 extends Levels { // DONE 

    constructor( instructions ) {
        super( instructions );
        this.trap2 = new Platform( 350, 200, 'black' );                     // replace only 1 trap this time. the other one will be drawed
    }

    events( character ) {
        super.events( character );
        this.exit.winOnCollision( character );
        this.key.giveKeyOnCollision( character );
        this.trap1.deathOnCollision( character );                           // add deathOnCollision() event to draw(), so character may die on trap
    }
}
// NOTE: L4, wait for the it 
class Level4 extends Levels { // DONE 

    constructor( instructions ) {
        super( instructions );
        this.trap1 = new Platform( 500, 491, 'black' );
        this.trap2 = new Platform( 350, 200, 'black' );
    }

    events( character ) {
        super.events( character );
        this.exit.winOnCollision( character );
        this.key.giveKeyOnCollision( character );                           // add giveKeyOnCollision() event to draw(), so character can collect key, BUT...
        if ( isAllowedToPass ) {                                            // ...this time, the character will only collect a key when they're "allowed to pass".
            characterHasKey = true;                                         // isAllowedToPass, will be triggered by a frameCount of ~5 seconds.
        } else {                                                            // so, the character has to stay for ~5s on the platform. after it'll be "allowed to pass" = collect the key.
            characterHasKey = false;                                        // COMMENT: 'else' here, is probably not necessary but makes the code easier to understand 
        }
    }
}

// NOTE: L5, more difficult 
class Level5 extends Levels { // DONE 

    events( character ) {
        super.events( character );                                          // all "special" platforms are active here
        this.exit.winOnCollision( character );                              // win
        this.key.giveKeyOnCollision( character );                           // key
        
        this.trap1.deathOnCollision( character );                           // death/reset
        this.trap2.deathOnCollision( character );
    }
}
// NOTE: L6, start is exit 
class Level6 extends Levels { // DONE 

    constructor( instructions ) {
        super( instructions );
        this.exit = new Exit( 0, 491, 'white' );                            // exit platform will be moved to a different position and becomes invisible 'white' (on white canvas)
        this.platform4 = new Platform( 50, 300, 'black' );                  // initial exit platform position will be replaced by just a regular platform-4
    }

    update() {
        super.update();
        this.platform4.update();                                            // need to draw() new platform-4 (since it's not in the default level setup)
    }

    events( character ) {
        super.events( character );
        this.exit.winOnCollision( character );
        this.key.giveKeyOnCollision( character );
        this.trap1.deathOnCollision( character );
        this.trap2.deathOnCollision( character );
        this.platform4.stayOnCollision(character);                          // stayOnColliision() needs to be added for platform-4 as well
    }
}
// NOTE: L7, don't trust your eyes
class Level7 extends Levels { // DONE 

    constructor( instructions ) {
        super( instructions );
        this.trap1 = new Trap( 500, 491, 'black' );                         // trap platforms become color 'black' instead default 'red'...
        this.trap2 = new Trap( 350, 200, 'black' );
    }

    events( character ) {
        super.events( character );
        this.exit.winOnCollision( character );
        this.key.giveKeyOnCollision( character );
        this.trap1.deathOnCollision( character );                           // ...to make them "appear" disabled but in fact, deathOnCollision() will still be triggerd.
        this.trap2.deathOnCollision( character );
    }
}
// NOTE: L8, click on That level 
class Level8 extends Levels { // DONE 

    events( character ) {
        super.events( character );                                          // giveKeyOnCollision() is disabled. so, there's no way to collect a key on any platform...
        this.exit.winOnCollision( character );
        this.trap1.deathOnCollision( character );
        this.trap2.deathOnCollision( character );
        document.querySelector( '.title h2' )                               // ...but clicking on h2 "That level, again?"...
                    .addEventListener( 'click', ()=>{
                        characterHasKey = true;                             // ...will give the character the key.
                    });
    }
}
// TODO: Add more levels 