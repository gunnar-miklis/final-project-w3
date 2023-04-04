class Character {
    
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

    // NOTE: positioning 
    placeCharacter() { // DONE 
        // jump behavior 
        this.velocity += this.gravity; 
        this.y += this.velocity;
        
        // stay inside canvas 
        if ( this.y >= HEIGHT - this.h ) this.y = HEIGHT - this.h;

        // place player 
        image( game.characterImg, this.x, this.y, this.w, this.h );
        
        // hold keys to move 
        if ( keyIsDown(LEFT_ARROW) ) this.moveLeft();
        if ( keyIsDown(RIGHT_ARROW) ) this.moveRight();
    }
    resetCharacter() { // DONE 
        this.x = WIDTH - this.w;
        this.y = 0 - this.h;
        this.hasKey = false;
        this.jumps = true;
    }
    
    // NOTE: movments 
    moveLeft() { // TODO: image orientation left
        // stay inside canvas width 
        if ( this.x > 0 ) this.x -= 5;
    }
    moveRight() { // TODO: image orientation right
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
        // character already has the key
        // else: character will collect key
        if ( this.hasKey ) {
            fill('blue');
            textSize(30);
            text('key already\n collected!',this.x, this.y-100);
        } else {
            this.hasKey = true;
            fill('orange');
            textSize(50);
            text('key collected!',this.x, this.y-100);
            noLoop(); sleep(600).then( () => { loop() } ); // wait 0.6s
        }
    }
    winsOnPlatform() { // DONE 
        // if player has key = win
        // else: message something
        if ( this.hasKey ) {
            fill('green');
            textSize(100);
            text('WIN!',this.x,this.y-100);
            noLoop(); sleep(2000).then( () => { loop() } ); // wait 2s
            this.resetCharacter();
        } else {
            fill('blue');
            textSize(30);
            text('need the key first.',this.x,this.y-100);
        }
    }
    diesOnPlatform() { // DONE 
        // death
        fill('red');
        textSize(100);
        text('dead',WIDTH*0.5,HEIGHT*0.5);
        noLoop(); sleep(2000).then( () => { loop() } ); // wait 2s

        // reset position, jumps and hasKey to initial values
        this.resetCharacter();
    }

}