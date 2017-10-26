const GameService = (() => {
    const BOARD_WIDTH = 80;
    const BOARD_HEIGHT = 40;
    const ENEMIES_PER_BOARD = 10;
    const WEAPON_PER_BOARD = 1;
    const HEALTH_POINTS_PER_BOARD = 5;

    const drawRoom = function(board, x, y, entry, exit) {
        for (let i = y[0]; i <= y[1]; i++) {
            for (let j = x[0]; j <= x[1]; j++) {
                let index = i * BOARD_WIDTH + j;
                board[index].type = "floor";
            }
        }
        if (entry.length !== 0) {
            let index = entry[1] * BOARD_WIDTH + entry[0];
            board[index].type = "floor";
        }
        if (exit.length !== 0) {
            let index = exit[1] * BOARD_WIDTH + exit[0];
            board[index].type = "floor";
        }

    }
    const setEnemies = function(board) {
        for (let i = 0; i < ENEMIES_PER_BOARD; i++) {
            let index = Math.floor(Math.random() * board.length);
            board[index].type = "enemy";
        }
    }
    const setWeapons = function(board) {
        for (let i = 0; i < WEAPON_PER_BOARD; i++) {
            let index = Math.floor(Math.random() * board.length);
            board[index].type = "weapon";
        }
    }
    const setHealth = function(board) {
        let index = Math.floor(Math.random() * board.length);
        board[index].type = "exit";
    }

    const setExit = function(board) {
        for (let i = 0; i < HEALTH_POINTS_PER_BOARD; i++) {
            let index = Math.floor(Math.random() * board.length);
            board[index].type = "health";
        }
    }
    const setPlayer = function(board) {
        let index = Math.floor(Math.random() * board.length);
        board[index].type = "player";
    }
    const populateBoard = function(board) {
        setEnemies(getEmptySpaces(board));
        setWeapons(getEmptySpaces(board));
        setHealth(getEmptySpaces(board));
        setExit(getEmptySpaces(board));
        setPlayer(getEmptySpaces(board));
    }
    const getEmptySpaces = function(board) {
        return board.filter((cell) => cell.type === "floor");
    }
    const createBoard = function(level) {
        let levels = [{
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
        let board = [];
        for (let i = 0; i < BOARD_HEIGHT; i++) {
            for (let j = 0; j < BOARD_WIDTH; j++) {
                let cell = {};
                cell.type = "wall";
                cell.x = j;
                cell.y = i;
                board.push(cell);
            }
        }
        for (let i = 0; i < levels[level].rooms.length; i++) {
            let room = levels[level].rooms[i];
            drawRoom(board, room.x, room.y, room.entry, room.exit);
        }
        populateBoard(board);
        return board;
    }
    return {
        createBoard: createBoard
    };
})();
export default GameService;