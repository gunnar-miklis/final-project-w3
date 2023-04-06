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
        rect( this.x, this.y, this.w, this.h, 1, 1, 1, 1 ); // 1 = border radius;
    }

    // NOTE: platform collision logic 
    onCollision( character ) { // DONE 
        // Logic to make player stay on platforms
        if (
            (character.velocity >= 0) && // don't interrupt gravity, keep momentum, UNTIL on platform = 0
            (character.x > (this.x - character.w*0.8)) && // start-position of platform-boundary
            ((character.x + character.w) < (this.x + this.w + character.w*0.8)) && // end-position of platform-boundary
            (character.y < this.y + this.h - character.h) && // character is above-platform
            (character.y >= this.y - character.h) // character is below- OR (>=) stays on-platform
            ) {
                // if character stays on platform...
                // reset jumps / allow to jump again
                if ( character.y === this.y - character.h + 1 ) { character.jumps = true };
                // return 'true' / make below's platform-interactions available
                return true;
            }
    }

    stayOnPlatform( character ) { // DONE 
        character.y = this.y - character.h; // stay on platform
        character.velocity = 0; // reset velocity
    }
}
// NOTE: specific platforms, each with different interactions 
class Platform extends Obstacles { // DONE 

    stayOnCollision( character ) { 
        if ( super.onCollision( character ) ) { this.stayOnPlatform( character ) };
    }
}
class Key extends Obstacles { // DONE 

    stayOnCollision( character ) { 
        if ( super.onCollision( character ) ) { this.stayOnPlatform( character ) };
    }

    giveKeyOnCollision( character ) { 
        if ( super.onCollision( character ) ) {
            // if character has no key: collect key
            if ( !characterHasKey ) { characterHasKey = true }

            // feature for level 3, wait about 3 seconds before character collects key
            if ( frameCount%40 === 0 ) counter++;
        };
    }
}
class Exit extends Obstacles { // DONE 

    stayOnCollision( character ) { 
        if ( super.onCollision( character ) ) { this.stayOnPlatform( character ) };
    }

    winOnCollision( character ) { 
        if ( super.onCollision( character ) ) {
            // if player has key: success. go to next level
            if ( characterHasKey ) { nextLevel() } 
        };
    }
}
class Trap extends Obstacles { // DONE 

    stayOnCollision( character ) {
        if ( super.onCollision( character ) ) { this.stayOnPlatform( character ) };
    }

    deathOnCollision( character ) {
        if ( super.onCollision( character ) ) { 
            // reset player stats, position and jumps
            game.printTextCentered( 'potato takes a lava bath',1500 );
            characterHasKey = false;
            character.resetCharacter();
        };
    }
}