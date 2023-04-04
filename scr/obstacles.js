class Obstacles {
    
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.w = 100;
        this.h = 10;
        this.c = color;

    }

    placeOnCanvas() { // [x] 
        fill( this.c )
        rect( this.x, this.y, this.w, this.h );
    }

    onCollision() { // BUG  
        let isBelowPlatform = true; // isAbovePlatform = false
        // is character below plattform?
        if ( game.character.y > this.y ) {
            if ( (game.character.x > (this.x - game.character.w*0.8)) && ((game.character.x + game.character.w) < (this.x + this.w + game.character.w*0.8)) ) {
                console.log( 'below', 'in platform range' );
                isBelowPlatform = true; // yes, character is below
                return isBelowPlatform;
            }
        }
        // is character above plattform?
        else if ( game.character.y < this.y) {
            // if character is in range (from .x to .w) of platform, then ask...
            if ( (game.character.x > (this.x - game.character.w*0.8)) && ((game.character.x + game.character.w) < (this.x + this.w + game.character.w*0.8)) ) {
                console.log( 'above', 'in platform range' );
                isBelowPlatform = false; // no, character is above
                return isBelowPlatform;
            }
        }
    }
}
class Platform extends Obstacles {

    onCollision() { // BUG 
        game.character.stayOnPlatform( this.y, super.onCollision() )
    }
}
class Key extends Obstacles {

    onCollision() { // [x] 
        if ( super.onCollision() ) {
            game.character.stayOnPlatform(this.y); // FIXME 
            game.character.collectKeyOnPlatform();
        }
    }
}
class Exit extends Obstacles {

    onCollision() { // [x] 
        if ( super.onCollision() ) {
            game.character.stayOnPlatform(this.y);// FIXME 
            game.character.winsOnPlatform();
        }
    }
}
class Trap extends Obstacles {

    onCollision() { // [x] 
        if ( (game.character.x > (this.x - game.character.w*0.8)) && ((game.character.x + game.character.w) < (this.x + this.w + game.character.w*0.8)) ) {
            // if character goes below platform, then character dies.
            if ( (game.character.y + game.character.h) > this.y ) {
                game.character.diesOnPlatform();
            }
        }
    }
}