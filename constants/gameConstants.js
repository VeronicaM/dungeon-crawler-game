export const weapons = [{
    name: "Stick",
    attack: 3
}, {
    name: "Dagger",
    attack: 10
}, {
    name: "Short Sword",
    attack: 20
}, {
    name: "North Cross Blaster",
    attack: 20
}, {
    name: "Archangel's Sword",
    attack: 30
}, {
    name: "Sinigami's Sword",
    attack: 30
}];
export const LAST_LEVEL = 4;
export const levels = [{
        rooms: [{
                x: [5, 25],
                y: [5, 10],
                entry: [],
                exit: [20, 11]
            }, {
                x: [30, 50],
                y: [5, 10],
                entry: [39, 11],
                exit: []
            },
            {
                x: [3, 38],
                y: [12, 20],
                entry: [39, 12],
                exit: []
            },
            {
                x: [40, 60],
                y: [12, 30],
                entry: [],
                exit: []
            },
            {
                x: [5, 23],
                y: [22, 38],
                entry: [20, 21],
                exit: []
            }
        ]
    },
    {
        rooms: [{
                x: [25, 55],
                y: [5, 15],
                entry: [],
                exit: [40, 16]
            }, {
                x: [21, 59],
                y: [17, 38],
                entry: [20, 35],
                exit: [60, 35]
            },
            {
                x: [3, 19],
                y: [21, 38],
                entry: [],
                exit: []
            },
            {
                x: [61, 78],
                y: [21, 38],
                entry: [],
                exit: []
            }
        ]
    }, {
        rooms: [{
                x: [60, 75],
                y: [5, 10],
                entry: [],
                exit: [59, 8]
            }, {
                x: [40, 58],
                y: [5, 10],
                entry: [],
                exit: [45, 11]
            },
            {
                x: [41, 55],
                y: [12, 19],
                entry: [],
                exit: [35, 20]
            },
            {
                x: [23, 39],
                y: [12, 20],
                entry: [40, 15],
                exit: [45, 20]
            },
            {
                x: [40, 58],
                y: [22, 35],
                entry: [45, 21],
                exit: [39, 30]
            },
            {
                x: [21, 38],
                y: [22, 38],
                entry: [25, 21],
                exit: [20, 35]
            },
            {
                x: [5, 18],
                y: [22, 37],
                entry: [19, 35],
                exit: []
            }
        ]
    }, {
        rooms: [{
                x: [5, 15],
                y: [3, 9],
                entry: [],
                exit: [10, 10]
            }, {
                x: [2, 19],
                y: [12, 18],
                entry: [10, 11],
                exit: [20, 15]
            },
            {
                x: [21, 35],
                y: [14, 20],
                entry: [21, 15],
                exit: [35, 13]
            },
            {
                x: [30, 40],
                y: [2, 11],
                entry: [35, 12],
                exit: []
            },
            {
                x: [20, 35],
                y: [22, 37],
                entry: [35, 21],
                exit: [36, 35]
            },
            {
                x: [38, 48],
                y: [20, 35],
                entry: [37, 35],
                exit: [48, 19]
            },
            {
                x: [48, 75],
                y: [7, 17],
                entry: [48, 18],
                exit: []
            }
        ]
    }, {
        rooms: [{
                x: [3, 10],
                y: [3, 10],
                entry: [],
                exit: []
            }, {
                x: [9, 20],
                y: [10, 20],
                entry: [],
                exit: []
            },
            {
                x: [20, 41],
                y: [20, 37],
                entry: [],
                exit: []
            },
            {
                x: [40, 61],
                y: [10, 20],
                entry: [],
                exit: []
            },
            {
                x: [59, 78],
                y: [3, 10],
                entry: [],
                exit: []
            }
        ]
    }
];
export const BOARD_WIDTH = 80;
export const BOARD_HEIGHT = 40;
export const ENEMIES_PER_BOARD = 10;
export const WEAPON_PER_BOARD = 1;
export const HEALTH_POINTS_PER_BOARD = 5;
export const HEALTH_PER_ITEM = 10;