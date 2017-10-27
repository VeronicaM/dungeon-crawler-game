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
    name: "Archangel's Sword",
    attack: 30
}];
export const levels = [{
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
}];
export const BOARD_WIDTH = 80;
export const BOARD_HEIGHT = 40;
export const ENEMIES_PER_BOARD = 10;
export const WEAPON_PER_BOARD = 1;
export const HEALTH_POINTS_PER_BOARD = 5;
export const HEALTH_PER_ITEM = 10;