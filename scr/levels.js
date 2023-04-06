class Levels { // DONE 

    constructor() {
        this.title;
        this.key = new Key( 650, 300, 'blue' );
        this.exit = new Exit( 50, 300, 'green' );
        this.trap1 = new Trap( 500, 491, 'red' );
        this.trap2 = new Trap( 350, 200, 'red' );
        this.platform1 = new Platform( 200, 400, 'black' );
        this.platform2 = new Platform( 250, 200, 'black' );
        this.platform3 = new Platform( 450, 200, 'black' );
        this.platform4;
    }

    printTextLevelTitle(insertTitle) {
        if ( gameIsStarted ) {
            fill('black');
            textFont(fontRegular);
            textSize(25);
            textAlign(CENTER);
            text(insertTitle,WIDTH/2,200+40);
        }
    }

    update() {
        this.printTextLevelTitle(this.title);
        this.key.update();
        this.exit.update();
        this.trap1.update();
        this.trap2.update();
        this.platform1.update();
        this.platform2.update();
        this.platform3.update();
        if ( this.platform4) this.platform4.update();
    }

    events() {
        this.key.onCollision(game.character);
        this.exit.onCollision(game.character);
        this.trap1.onCollision(game.character);
        this.trap2.onCollision(game.character);
        this.platform1.onCollision(game.character);
        this.platform2.onCollision(game.character);
        this.platform3.onCollision(game.character);
        if ( this.platform4) this.platform4.onCollision(game.character);
    }
}
// NOTE: L 0 
class Level0 extends Levels {
    constructor() {
        super();
        this.title = "dancin' potato\nohhh yeahhh !!!\n\n\ntiny\npotato\nwohohhh!";
        this.key = new Platform( 50, 450, 'black' );
        this.exit = new Platform( 150, 400, 'black' );
        this.trap1 = new Platform( 250, 350, 'black' );
        this.trap2 = new Platform( 350, 300, 'black' );
        this.platform1 = new Platform( 450, 350, 'black' );
        this.platform2 = new Platform( 550, 400, 'black' );
        this.platform3 = new Platform( 650, 450, 'black' );
    }

    events() {
        super.events();
        game.character.hasKey = true;
    }
}
// NOTE: L1, find the exit 
class Level1 extends Levels { // DONE 

    constructor() {
        super();
        this.title = 'find the exit';
        this.key = new Platform( 650, 300, 'black' );
        this.trap1 = new Platform( 500, 491, 'black' );
        this.trap2 = new Platform( 350, 200, 'black' );
    }

    events() {
        super.events();
        game.character.hasKey = true;
    }
}
// NOTE: L2, find a way to access the exit 
class Level2 extends Levels { // DONE 

    constructor() {
        super();
        this.title = 'find a way to access the exit';
        this.trap1 = new Platform( 500, 491, 'black' );
        this.trap2 = new Platform( 350, 200, 'black' );
    }
}
// NOTE: L3, wait for the it 
class Level3 extends Levels { // DONE 

    constructor() {
        super();
        this.title = "wait for the it";
    }

    events() {
        super.events();
        if ( counter <= 5 ) {
            game.character.hasKey = false
        } else {
            game.character.hasKey = true;
        }
    }
}
// NOTE: L4, the floor is lava 
class Level4 extends Levels { // DONE 

    constructor() {
        super();
        this.title = 'the floor is lava';
        this.trap2 = new Platform( 350, 200, 'black' );
    }
}
// NOTE: L5, more difficult 
class Level5 extends Levels { // DONE 

    constructor() {
        super();
        this.title = "more difficult";
    }
}
// NOTE: L6, don't trust your eyes
class Level6 extends Levels { // DONE 

    constructor() {
        super();
        this.title = "don't trust your eyes";
        this.trap1 = new Trap( 500, 491, 'black' );
        this.trap2 = new Trap( 350, 200, 'black' );
    }
}
// NOTE: L7, start is exit 
class Level7 extends Levels { // DONE 

    constructor() {
        super();
        this.title = "start is exit";
        this.exit = new Exit( -89, 491, 'white' );
        this.platform4 = new Platform( 50, 300, 'black' );
    }
}


// TODO: Add more levels 