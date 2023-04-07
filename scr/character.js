class Character { // DONE 
    
    constructor() {
        this.w = 50;
        this.h = 50;
        this.velocity = 0;
        this.gravity = 1;
        this.isAllowedToJump = true;

        this.x = WIDTH - this.w;
        this.y = HEIGHT - this.h;
    }
    printTextAboveCharacter(message, color, seconds) {
        fill( color );
        textFont("Segoe UI Symbol");                                                // enables to use symbols
        textSize( 30 );
        textAlign( CENTER );
        text( message, game.character.x + 25, game.character.y - 30 );              // text placment above chararcter's head
        if ( seconds ) {                                                            // wait functionality:
            noLoop();                                                               // pause game for a certain amount of time
            sleep(seconds).then( () => { loop() } );                                // calls a new Promise(), then continue game
        };
    }

    // NOTE: positioning 
    update() { // DONE 
        this.velocity += this.gravity;                                              // jump behavior: gravity pulls character back to ground by +1 per frame
        this.y += this.velocity;                                                    // jump behavior: updates characters height position

        if ( this.y >= HEIGHT - this.h ) { this.y = HEIGHT - this.h };              // make character stay on ground. set character height to ground height

        if ( keyIsDown(LEFT_ARROW) ) {                                              // hold key to move
            image( game.characterImgLeft, this.x, this.y, this.w, this.h );         // place player, orientation left
            this.moveLeft();
        } else if ( keyIsDown(RIGHT_ARROW) ) {                                      // hold key to move
            image( game.characterImgRight, this.x, this.y, this.w, this.h );        // place player, orientation right
            this.moveRight();
        } else { image( game.characterImg, this.x, this.y, this.w, this.h ) };      // place player, idle = dancing gif animation

        if ( this.y === HEIGHT - this.h ) { this.isAllowedToJump = true };          // jump behavior: if character hits the ground, allow to jump again
        
        if ( characterHasKey ) { this.printTextAboveCharacter('🔑','orange') };    // visually indicates, the player now has a key
    }
    resetCharacter() { // DONE 
        this.velocity = 0;
        this.x = WIDTH - this.w;
        this.y = HEIGHT - this.h;
        this.isAllowedToJump = true;
        isAllowedToPass = false;
    }
    
    // NOTE: movments 
    moveLeft() { // DONE  
        if ( this.x > 0 ) { this.x -= 5 };                                          // make sure stay inside canvas width, left
    }
    moveRight() { // DONE 
        if ( this.x < WIDTH - this.w ) { this.x += 5 };                             // make sure stay inside canvas width, right
    }
    jump() { // DONE 
        if ( this.isAllowedToJump) {                                                // jump behavior: allow only single jump 
            this.isAllowedToJump = false;                                           // jump behavior: when player jumps, disable jumping until character is back at ground
            if ( this.y > 0 + this.h ) {                                            // make sure to stay inside canvas height
                this.velocity = -18;                                                // jump behavior: make character go up to 18 height per key press, gravity pull will applied, after.
            };
        };
    }
    moveDown() { // DONE 
        this.velocity = 10;                                                         // falling behavior: instead of teleporting character back to ground level, let'em fall.
    }
}