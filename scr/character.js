class Character { // DONE 
    
    constructor() {
        this.w = 50;
        this.h = 50;
        this.velocity = 0;
        this.gravity = 1;
        this.jumps = true;

        this.x = WIDTH - this.w;
        this.y = HEIGHT - this.h;
    }
    printTextCharacter(message, color, seconds) {
        fill( color );
        textFont("Segoe UI Symbol");
        textSize( 30 );
        textAlign( CENTER );
        text( message, game.character.x + 25, game.character.y - 30 ); // text above character's head
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

        if ( characterHasKey ) this.printTextCharacter('🔑','orange');
    }
    resetCharacter() { // DONE 
        this.velocity = 0;
        this.x = WIDTH - this.w;
        this.y = HEIGHT - this.h;
        this.jumps = true;
        counter = 0;
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
}