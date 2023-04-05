class Levels {

    constructor() { // DONE 
        this.title;
        this.key = new Key( 650, 300, 'blue' );
        this.exit = new Exit( 50, 300, 'green' );
        this.trap1 = new Trap( 500, 491, 'red' );
        this.trap2 = new Trap( 350, 200, 'red' );
        this.platform1 = new Platform( 200, 400, 'black' );
        this.platform2 = new Platform( 250, 200, 'black' );
        this.platform3 = new Platform( 450, 200, 'black' );
    }

    setLevelTitle(insertTitle) {
        if ( gameIsStarted ) {
            fill('black');
            textFont(fontRegular);
            textSize(30);
            textAlign(LEFT);
            text(insertTitle,10,40);
        }
    }

    update() {
        this.setLevelTitle(this.title);
        this.key.update();
        this.exit.update();
        this.trap1.update();
        this.trap2.update();
        this.platform1.update();
        this.platform2.update();
        this.platform3.update();
    }

    events() {
        this.key.onCollision(game.character);
        this.exit.onCollision(game.character);
        this.trap1.onCollision(game.character);
        this.trap2.onCollision(game.character);
        this.platform1.onCollision(game.character);
        this.platform2.onCollision(game.character);
        this.platform3.onCollision(game.character);
    }
}
class Level1 extends Levels {

    constructor() {
        super();
        this.title = 'find the exit';
        this.key = new Platform( 650, 300, 'black' );
        this.trap1 = new Platform( 500, 491, 'black' );
        this.trap2 = new Platform( 350, 200, 'black' );
    }

    update() {
        super.update();
    }

    events() {
        super.events();
        game.character.hasKey = true;
    }
}
class Level2 extends Levels {

    constructor() {
        super();
        this.title = 'find a way to the exit';
        this.trap1 = new Platform( 500, 491, 'black' );
        this.trap2 = new Platform( 350, 200, 'black' );
    }

    update() {
        super.update();
    }

    events() {
        super.events();
    }
}
class Level3 extends Levels {

    constructor() {
        super();
        this.title = 'the floor is lava';
    }

    events() {
        super.events();
    }
}