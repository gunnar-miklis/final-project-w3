class Character { // DONE 
    
    constructor() {
        this.w = 50;
        this.h = 50;
        this.velocity = 0;
        this.gravity = 1;
        this.hasKey = false;
        this.jumps = true;

        this.x = WIDTH - this.w;
        this.y = HEIGHT - this.h;
    }
    printTextCharacter(message, color, seconds) {
        // fill( color ); // COMMENT: style y/n? 
        fill ( 'black' );
        textFont( fontMedium );
        textSize( 20 );
        textAlign( CENTER );
        text( message, game.character.x + 25, game.character.y - 50 ); // text above character's head
        if ( seconds ) { noLoop(); sleep(seconds).then( () => { loop() } ) } // wait
    }

    // NOTE: positioning 
    update() { // DONE 
        // jump behavior 
        this.velocity += this.gravity; 
        this.y += this.velocity;
        
        // stay inside canvas 
        if ( this.y >= HEIGHT - this.h ) this.y = HEIGHT - this.h;
        
        // hold keys to move 
        if ( keyIsDown(LEFT_ARROW) ) {
            // place player, orientation left
            image( game.characterImgLeft, this.x, this.y, this.w, this.h );
            this.moveLeft();
        }
        else if ( keyIsDown(RIGHT_ARROW) ) {
            // place player, orientation rigth
            image( game.characterImgRight, this.x, this.y, this.w, this.h );
            this.moveRight();
        }
        else {
            // place player, idle = dancing animation
            image( game.characterImg, this.x, this.y, this.w, this.h );
        }
    }
    resetCharacter() { // DONE 
        this.x = WIDTH - this.w;
        this.y = HEIGHT - this.h;
        this.jumps = true;
        this.hasKey = false;
    }
    
    // NOTE: movments 
    moveLeft() { // DONE 
        // stay inside canvas width 
        if ( this.x > 0 ) this.x -= 5;
    }
    moveRight() { // DONE 
        // stay inside canvas width 
        if ( this.x < WIDTH - this.w ) this.x += 5; 
    }
    jump() { // DONE 
        // allow only single jump 
        if ( this.jumps) {
            this.jumps = false; // wait until character is back to ground
            if ( this.y > 0 + this.h ) this.velocity = -18; // jump
        };
    }
    moveDown() { // DONE 
        // falling behavior
        do {
            this.velocity = 10;
        } while ( this.y > HEIGHT - this.h );
    }

    // NOTE: platfrom interactions 
    stayOnPlatform( platformY ) { // DONE 
            this.y = platformY - this.h; // stay on platform
            this.velocity = 0; // reset velocity
    }
    collectKeyOnPlatform() { // DONE 
        // if character has no key: collect key
        // else: message "already have key"
        if ( !this.hasKey ) {
            this.hasKey = true;
            this.printTextCharacter('key\ncollected','orange',900);
        } else {
            this.printTextCharacter('key already\ncollected','blue');
        }
    }
    winsOnPlatform() { // DONE 
        // if player has key: win and go to next level
        // else: message "need to collect key first"
        if ( this.hasKey ) {
            game.printTextCentered('Success!','green',1500);
            nextLevel();
        } else {
            this.printTextCharacter('need a\nkey first','blue');
        }
    }
    diesOnPlatform() { // DONE 
        // reset player stats, position and jumps
        game.printTextCentered('potato takes a lava bath','red',1500);
        this.resetCharacter();
    }
}