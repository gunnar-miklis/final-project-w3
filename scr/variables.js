// NOTE: General 
const WIDTH = 800;                                                      // canvas size
const HEIGHT = 500;
let fontRegular, fontMedium;

// NOTE: Character related 
let doCharacterReset = false;                                           // make sure the last task in draw is always the character reset function
let characterHasKey = false;                                            // value comes from levelCollection{}
let isAllowedToPass = false;                                            // used in level 4 "wait for it"

// NOTE: Game start related 
let buttonStartGame;                                                    // start button
let gameIsStarted = false;                                              // draw() will be disabled by this. start button will enable draw(), later

function startLevel() { // DONE 
    gameIsStarted = true;                                               // allows if condition in draw() to pass
    loop();                                                             // make sure it's possible to start the game again, after finishing all levels. because after last level is finished, game is set to: noLoop()
    levelCollection.forEach( (level) => {                               // get the level (which is selected in dropdown menu) from levelCollection{}
        if ( selectedLevel.value() === level.name ) {
            activeLevel = level.construct();                            // construct this level [new Level1()] and store in variable (will be an argument later)
            activeLevelid = level.id;                                   // also set level id
        };
    });
    doCharacterReset = true;                                            // reset characters position. make sure reset is done at the very end of draw()
}

// NOTE: Level related 
let activeLevel;                                                        // level will be constructed inside: new Level1()
let activeLevelid = 0;                                                  // help to match next level in levelCollection{}
let selectedLevel;                                                      // dropdown menu

function addFinishedLevelToDropdown() {                                 // add levels to the dropdown menu (create <option> tags)...
    levelCollection.forEach( (level) => { 
        if ( level.isStarted ) {                                        // ...but ONLY when they have been started already.
            selectedLevel.option( level.name, level.name );             // .option( name, [value] ) 
        };
    });
    // TESTING only: show all levels by default 
    // levelCollection.forEach( (level) => { selectedLevel.option( level.instructions, level.name ) });
}
function nextLevel() { // DONE 
    game.transitionScreen( 'Success!',1000 );                           // transition screen
    activeLevelid++;                                                    // increment level number
    if( activeLevelid < levelCollection.length ) {                      // set level isStarted to: true
        levelCollection[activeLevelid].isStarted = true;
    }
    addFinishedLevelToDropdown();                                       // refresh/redraw dropwdown menu
    levelCollection.forEach( (level) => {                               // get next level from levelCollection{} according to incremented active-level-id
        if ( activeLevelid === level.id ){
            activeLevel = level.construct();                            // construct next level
            document.querySelector('#menu select')                      // select dropdown menu
                        .selectedIndex = activeLevelid;                 // set active-dropdown-selection to current game
        };
    });
    doCharacterReset = true;                                            // reset characters position. make sure reset is done at the very end of draw()
}