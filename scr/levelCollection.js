const levelCollection = [
    {
        id: 0,
        name: "Select Level",
        instructions: "dancin' potato ohhh yeahhh !!!\ntiny potato wohohhh!",
        isStarted: true,
        hasKey: false,
        construct() {
            return new Level0( this.instructions );
        },
    }, 
    {
        id: 1,
        name: "Level 1",
        instructions: "find the exit",
        isStarted: true,
        hasKey: true,
        construct() {
            return new Level1( this.instructions );
        },
    }, 
    {
        id: 2,
        name: "Level 2",
        instructions: "find a way to access the exit",
        isStarted: false,
        hasKey: false,
        construct() {
            return new Level2( this.instructions );
        },
    }, 
    {
        id: 3,
        name: "Level 3",
        instructions: "the floor is lava",
        isStarted: false,
        hasKey: false,
        construct() {
            return new Level3( this.instructions );
        },
    },
    {
        id: 4,
        name: "Level 4",
        instructions: "wait for it",
        isStarted: false,
        hasKey: false,
        construct() {
            return new Level4( this.instructions );
        },
    },
    {
        id: 5,
        name: "Level 5",
        instructions: "more difficult",
        isStarted: false,
        hasKey: false,
        construct() {
            return new Level5( this.instructions );
        },
    },
    {
        id: 6,
        name: "Level 6",
        instructions: "Start is exit",
        isStarted: false,
        hasKey: false,
        construct() {
            return new Level6( this.instructions );
        },
    },
    {
        id: 7,
        name: "Level 7",
        instructions: "don't trust your eyes",
        isStarted: false,
        hasKey: false,
        construct() {
            return new Level7( this.instructions );
        },
    },
    {
        id: 8,
        name: "Level 8",
        instructions: "press on That level",
        isStarted: false,
        hasKey: false,
        construct() {
            return new Level8( this.instructions );
        },
    },
]