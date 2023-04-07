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
    }

    events(character) {
        this.key.stayOnCollision(character);
        this.exit.stayOnCollision(character);
        this.trap1.stayOnCollision(character);
        this.trap2.stayOnCollision(character);
        this.platform1.stayOnCollision(character);
        this.platform2.stayOnCollision(character);
        this.platform3.stayOnCollision(character);
    }
}
// NOTE: L 0 
class Level0 extends Levels {

    constructor() {
        super();
        this.title = "dancin' potato ohhh yeahhh !!!\ntiny potato wohohhh!";
    }
}
// NOTE: L1, find the exit 
class Level1 extends Levels { // DONE 

    constructor() {
        super();
        this.title = 'find the exit';
        this.trap1 = new Platform( 500, 491, 'black' );
        this.trap2 = new Platform( 350, 200, 'black' );
    }

    events(character) {
        super.events(character);
        this.exit.winOnCollision(character);
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

    events(character) {
        super.events(character);
        this.exit.winOnCollision(character);
        this.key.giveKeyOnCollision(character);
    }
}
// NOTE: L3, the floor is lava 
class Level3 extends Levels { // DONE 

    constructor() {
        super();
        this.title = 'the floor is lava';
        this.trap2 = new Platform( 350, 200, 'black' );
    }

    events(character) {
        super.events(character);
        this.exit.winOnCollision(character);
        this.key.giveKeyOnCollision(character);
        this.trap1.deathOnCollision(character);
    }
}
// NOTE: L4, wait for the it 
class Level4 extends Levels { // DONE 

    constructor() {
        super();
        this.title = "wait for the it";
        this.trap1 = new Platform( 500, 491, 'black' );
        this.trap2 = new Platform( 350, 200, 'black' );
    }

    events(character) {
        super.events(character);
        this.exit.winOnCollision(character);
        this.key.giveKeyOnCollision(character);
        if ( counter <= 5 ) {
            characterHasKey = false
        } else {
            characterHasKey = true;
        }
    }
}

// NOTE: L5, more difficult 
class Level5 extends Levels { // DONE 

    constructor() {
        super();
        this.title = "more difficult";
    }

    events(character) {
        super.events(character);
        this.exit.winOnCollision(character);
        this.key.giveKeyOnCollision(character);
        
        this.trap1.deathOnCollision(character);
        this.trap2.deathOnCollision(character);
    }
}
// NOTE: L6, start is exit 
class Level6 extends Levels { // DONE 

    constructor() {
        super();
        this.title = "Start is exit";
        this.exit = new Exit( -70, 491, 'white' );
        this.platform4 = new Platform( 50, 300, 'black' );
    }

    update() {
        super.update();
        this.platform4.update();
    }

    events(character) {
        super.events(character);
        this.exit.winOnCollision(character);
        this.key.giveKeyOnCollision(character);
        this.trap1.deathOnCollision(character);
        this.trap2.deathOnCollision(character);
        this.platform4.stayOnCollision(character);
    }
}
// NOTE: L7, don't trust your eyes
class Level7 extends Levels { // DONE 

    constructor() {
        super();
        this.title = "don't trust your eyes";
        this.trap1 = new Trap( 500, 491, 'black' );
        this.trap2 = new Trap( 350, 200, 'black' );
    }

    events(character) {
        super.events(character);
        this.exit.winOnCollision(character);
        this.key.giveKeyOnCollision(character);
        this.trap1.deathOnCollision(character);
        this.trap2.deathOnCollision(character);
    }
}
// NOTE: L8, click on That level 
class Level8 extends Levels { // DONE 

    constructor() {
        super();
        this.title = "press on That level";
    }

    events(character) {
        super.events(character);
        this.exit.winOnCollision(character);
        this.trap1.deathOnCollision(character);
        this.trap2.deathOnCollision(character);
        document.querySelector('h2').addEventListener('click',()=>{ characterHasKey = true })
    }
}


// TODO: Add more levels 