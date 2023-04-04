class Char {
    
    constructor() {
        this.w = 50;
        this.h = 50;
        this.velocity = 0;
        this.gravity = 0.5;
        this.hasKey = false;

        this.x = WIDTH - this.w;
        this.y = HEIGHT - this.h;
    }

    // NOTE: positioning 
    placeChar() { // [x] 
        // [x] jump behavior 
        this.velocity += this.gravity; 
        this.y += this.velocity;
        
        // [x] stay inside canvas 
        if ( this.y >= HEIGHT - this.h ) this.y = HEIGHT - this.h; 

        // [x] place player 
        image( game.charImg, this.x, this.y, this.w, this.h );
        
        // [x] hold keys to move 
        if ( keyIsDown(LEFT_ARROW) ) this.moveLeft()
        if ( keyIsDown(RIGHT_ARROW) ) this.moveRight()
    }
    resetPosition() { // [x] 
        this.x = WIDTH - this.w;
        this.y = 0 - this.h;
    }
    
    // NOTE: movments 
    moveLeft() {
        // [ ] image orientation left
        // [x] stay inside canvas width 
        if ( this.x > 0 ) this.x -= 5;
    }
    moveRight() { 
        // [ ] image orientation right
        // [x] stay inside canvas width 
        if ( this.x < WIDTH - this.w ) this.x += 5; 
    }
    jump() {
        this.velocity = -10; 
        
        // [x] jump delay 
        // COMMENT: maybe reset when player hit ground instead of timer? 
        // set timer
        // reset jumpDelay to 0, after timer run out
            // jumpDelay = 600;
            // setTimeout( () => jumpDelay = 0, jumpDelay);
    }
    moveDown() { // [x] 
        this.y = HEIGHT - this.h;
    }

    // NOTE: platfrom interactions 
    stayOnPlatform( platformY, isBelowPlatform ) { // BUG 
        // isBelowPlatform is only called when near under/below platfrom, otherwise ignore.
        if ( isBelowPlatform === undefined ) return 0;

        if ( isBelowPlatform ) {
            // BUG 
            console.log( 'isBelowPlatform', isBelowPlatform );
            this.y = platformY - this.h; // stay on platform
            this.velocity = 0; // reset velocity
        } else {
            // BUG 
            console.log( 'isBelowPlatform', isBelowPlatform );
        }
    }
    collectKeyOnPlatform() { // [x] 
        if ( this.hasKey ) {
            fill('blue');
            textSize(30);
            text('key already\n collected!',this.x, this.y-100);
        } else {
            this.hasKey = true;
            fill('orange');
            textSize(50);
            text('key collected!',this.x, this.y-100);
            noLoop(); sleep(1000).then( () => { loop() } )
        }
    }
    winsOnPlatform() { // [x] 
        if ( this.hasKey ) {
            fill('green')
            textSize(100)
            text('WIN!',this.x,this.y-100)
            this.hasKey = false;
            noLoop(); sleep(2000).then( () => { loop() } )
            this.resetPosition();
        } else {
            fill('blue')
            textSize(30)
            text('need the key first.',this.x,this.y-100)
        }
    }
    diesOnPlatform() { // [x] 
        fill('red')
        textSize(100)
        text('dead',WIDTH*0.5,HEIGHT*0.5)
        noLoop(); sleep(2000).then( () => { loop() } )
        this.hasKey = false;
        this.resetPosition();
    }

}