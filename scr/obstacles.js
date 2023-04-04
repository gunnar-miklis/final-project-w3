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
        // is char above plattform?
        if ( game.char.y < this.y) {
            // if char is in range (from .x to .w) of platform, then ask...
            if ( (game.char.x > (this.x - game.char.w*0.8)) && ((game.char.x + game.char.w) < (this.x + this.w + game.char.w*0.8)) ) {
                isBelowPlatform = false; // no, char is above
                return isBelowPlatform;
            }
        }
        // is char below plattform?
        if ( game.char.y > this.y ) {
            if ( (game.char.x > (this.x - game.char.w*0.8)) && ((game.char.x + game.char.w) < (this.x + this.w + game.char.w*0.8)) ) {
                isBelowPlatform = true; // yes, char is below
                return isBelowPlatform;
            }
        }
    }
}
class Platform extends Obstacles {

    onCollision() { // BUG 
        game.char.stayOnPlatform( this.y, super.onCollision() )
    }
}
class Key extends Obstacles {

    onCollision() { // [x] 
        if ( super.onCollision() ) {
            game.char.stayOnPlatform(this.y); // FIXME 
            game.char.collectKeyOnPlatform();
        }
    }
}
class Exit extends Obstacles {

    onCollision() { // [x] 
        if ( super.onCollision() ) {
            game.char.stayOnPlatform(this.y);// FIXME 
            game.char.winsOnPlatform();
        }
    }
}
class Trap extends Obstacles {

    onCollision() { // [x] 
        if ( (game.char.x > (this.x - game.char.w*0.8)) && ((game.char.x + game.char.w) < (this.x + this.w + game.char.w*0.8)) ) {
            // if char goes below platform, then char dies.
            if ( (game.char.y + game.char.h) > this.y ) {
                game.char.diesOnPlatform();
            }
        }
    }
}