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
        rect( this.x, this.y, this.w, this.h, 1,1,1,1 ); // 1 = border radius;
    }

    // NOTE: platform collision logic 
    onCollision(character) { // DONE 
        // Logic to make player stay on platforms 
        if (
            (character.velocity > 0 ) && // don't interrupt gravity, keep momentum
            (character.x > (this.x - character.w*0.8)) && // start-position of platform-boundary
            ((character.x + character.w) < (this.x + this.w + character.w*0.8)) && // end-position of platform-boundary
            (character.y < this.y + this.h - character.h) && // character is below-platform
            (character.y >= this.y - character.h) // character is above- OR (>=) stays on-platform
            ) 
            {
            // if character stays on platform...
                // reset jumps / allow to jump again
                if ( character.y === this.y - character.h + 1 ) { character.jumps = true };
                // return 'true' / make below's platform-interactions available
                return true 
            };
    }
}
// NOTE: specific platforms, each with different interactions 
class Platform extends Obstacles {

    onCollision(character) { // DONE 
        if ( super.onCollision(character) ) { character.stayOnPlatform( this.y ) };
    }
}
class Key extends Obstacles {

    onCollision(character) { // DONE 
        if ( super.onCollision(character) ) {
            character.stayOnPlatform(this.y);
            character.collectKeyOnPlatform();
        }
    }
}
class Exit extends Obstacles {

    onCollision(character) { // DONE 
        if ( super.onCollision(character) ) {
            character.stayOnPlatform(this.y);
            character.winsOnPlatform();
        }
    }
}
class Trap extends Obstacles {

    onCollision(character) { // DONE 
        if ( super.onCollision(character) ) { character.diesOnPlatform() };
    }
}