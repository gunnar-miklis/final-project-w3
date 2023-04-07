class Obstacles { // DONE 
    
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.w = 100;
        this.h = 10;
        this.c = color;
    }

    // NOTE: positioning 
    update() { // DONE 
        noStroke();
        fill( this.c );
        rect( this.x, this.y, this.w, this.h, 1, 1, 1, 1 );                         // 1 = border radius;
    }

    // NOTE: platform collision logic 
    onCollision( character ) { // DONE 
        if (                                                                        // Logic to detect a collision between player and platfrom
            (character.velocity >= 0) &&                                            // 1. don't interrupt gravity, keep momentum, UNTIL on platform = 0
            (character.x > (this.x - character.w*0.8)) &&                           // 2. start-position of platform-boundary
            ((character.x + character.w) < (this.x + this.w + character.w*0.8)) &&  // 3. end-position of platform-boundary
            (character.y < (this.y + this.h - character.h)) &&                      // 4. character is above-platform
            (character.y >= (this.y - character.h))                                 // 5. character is below- OR (>=) stays on-platform
            ) {
                if ( character.y === this.y - character.h + 1 ) {                   // if character stays on platform allow to jump again
                    character.isAllowedToJump = true;
                };
                return true;                                                        // result: there is a collision!
            }                                                                       // further platform-interactions will now be available: stayOnPlatform(), giveKeyOnCollision(), winOnCollision(), deathOnCollision()
    }

    stayOnPlatform( character ) { // DONE 
        character.y = this.y - character.h;                                         // make character stay on platform: set character height to platform height
        character.velocity = 0;                                                     // reset velocity to stop falling
    }
}
// NOTE: specific platforms, each with different interactions 
class Platform extends Obstacles { // DONE 

    stayOnCollision( character ) {
        if ( super.onCollision( character ) ) { this.stayOnPlatform( character ) }; // "default" platform behavior: character will stay on platform on collision.
    }
}
class Key extends Obstacles { // DONE 

    stayOnCollision( character ) { 
        if ( super.onCollision( character ) ) { this.stayOnPlatform( character ) }; // "default" platform behavior: character will stay on platform on collision.
    }

    giveKeyOnCollision( character ) { 
        if ( super.onCollision( character ) ) {                                     // "special" platform behavior: character recieves key on platform collision.
            if ( !characterHasKey ) { characterHasKey = true };                     // if character has no key: collect key.
            if ( frameCount%600 === 0 ) { isAllowedToPass = true };                 // "extra-feature" for level 3: wait about 5 seconds before character collects key.
        };
    }
}
class Exit extends Obstacles { // DONE 

    stayOnCollision( character ) { 
        if ( super.onCollision( character ) ) { this.stayOnPlatform( character ) }; // "default" platform behavior: character will stay on platform on collision.
    }

    winOnCollision( character ) { 
        if ( super.onCollision( character ) ) {                                     // "special" platform behavior: character win on platfrom collision, but only...
            if ( characterHasKey ) { nextLevel() };                                 // ...if player has key. then: success. and go to next level.
        };
    }
}
class Trap extends Obstacles { // DONE 

    stayOnCollision( character ) {
        if ( super.onCollision( character ) ) { this.stayOnPlatform( character ) }; // "default" platform behavior: character will stay on platform on collision.
    }

    deathOnCollision( character ) {
        if ( super.onCollision( character ) ) {                                     // "special" platform behavior: character "dies" on platform collision.
            game.transitionScreen( 'potato takes a lava bath', 1500 );              // print a message on the transition screen
            doCharacterReset = true;                                                // reset characters position. make sure reset is done at the very end of draw()
        };
    }
}