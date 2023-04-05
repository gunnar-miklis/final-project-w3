const levelList = [
    {
        id: 0,
        name: "Select Level",
        description: "landing page",
        construct: new Level0(),
        isStarted: true,
    }, 
    {
        id: 1,
        name: "Level 1",
        description: "find the exit",
        construct: new Level1(),
        isStarted: true,
    }, 
    {
        id: 2,
        name: "Level 2",
        description: "find a way to access the exit",
        construct: new Level2(),
        isStarted: false,
    }, 
    {
        id: 3,
        name: "Level 3",
        description: "the floor is lava",
        construct: new Level3(),
        isStarted: false,
    },
    {
        id: 4,
        name: "Level 4",
        description: "more difficult",
        construct: new Level4(),
        isStarted: false,
    },
    {
        id: 5,
        name: "Level 5",
        description: "don't trust your eyes",
        construct: new Level5(),
        isStarted: false,
    },
]