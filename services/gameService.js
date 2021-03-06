import * as gameConstants from '../constants/gameConstants.js';
const GameService = (() => {

    const drawRoom = function(board, x, y, entry, exit) {
        for (let i = y[0]; i <= y[1]; i++) {
            for (let j = x[0]; j <= x[1]; j++) {
                let index = i * gameConstants.BOARD_WIDTH + j;
                board[index].type = "floor";
            }
        }
        if (entry.length !== 0) {
            let index = entry[1] * gameConstants.BOARD_WIDTH + entry[0];
            board[index].type = "floor";
        }
        if (exit.length !== 0) {
            let index = exit[1] * gameConstants.BOARD_WIDTH + exit[0];
            board[index].type = "floor";
        }

    };
    const setEnemies = function(board, entities, level) {
        for (let i = 0; i < gameConstants.ENEMIES_PER_BOARD; i++) {
            let index = Math.floor(Math.random() * board.length);
            entities.push(Object.assign({}, board[index], { type: 'enemy', health: level * 20 + 10, attack: level * 2 + 5 }));
        }
    };
    const setWeapons = function(board, entities, level) {
        for (let i = 0; i < gameConstants.WEAPON_PER_BOARD; i++) {
            let index = Math.floor(Math.random() * board.length);
            entities.push(Object.assign({}, board[index], { type: 'weapon', weapon: gameConstants.weapons[level + 1] }));
        }
    };
    const setExit = function(board, entities) {
        let index = Math.floor(Math.random() * board.length);
        entities.push(Object.assign({}, board[index], { type: 'exit' }));
    };
    const setBoss = function(board, entities) {
        let index = Math.floor(Math.random() * board.length);
        let x = board[index].x;
        let y = board[index].y;
        let found = false;
        entities.push(Object.assign({}, board[index], { type: 'boss', health: 100, attack: 20 }));
        entities.push(Object.assign({}, { x: x + 1, y: y, type: 'boss', health: 100, attack: 20 }));
        entities.push(Object.assign({}, { x: x, y: y + 1, type: 'boss', health: 100, attack: 20 }));
        entities.push(Object.assign({}, { x: x + 1, y: y + 1, type: 'boss', health: 100, attack: 20 }));
    };
    const setHealth = function(board, entities) {
        for (let i = 0; i < gameConstants.HEALTH_POINTS_PER_BOARD; i++) {
            let index = Math.floor(Math.random() * board.length);
            entities.push(Object.assign({}, board[index], { type: 'health' }));
        }
    };
    const setPlayer = function(board, entities) {
        let index = Math.floor(Math.random() * board.length);
        entities.push(Object.assign({}, board[index], { type: 'player' }));
        return board[index].y * gameConstants.BOARD_WIDTH + board[index].x;
    };
    const populateBoard = function(board, entities, level) {
        setEnemies(getEmptySpaces(board, entities), entities, level);
        setWeapons(getEmptySpaces(board, entities), entities, level);
        setHealth(getEmptySpaces(board, entities), entities);
        if (level !== gameConstants.LAST_LEVEL) {
            setExit(getEmptySpaces(board, entities), entities);
        }
        let index = setPlayer(getEmptySpaces(board, entities), entities);
        if (level === gameConstants.LAST_LEVEL) {
            setBoss(getEmptySpaces(board, entities), entities);
        }
        return index;
    };
    const getEmptySpaces = function(board, entities) {
        return board.filter((cell) => cell.type === "floor" && entities.filter(e => e.x === cell.x && e.y === cell.y).length === 0);
    };
    const createBoard = function(level) {

        let board = [];
        let entities = [];
        for (let i = 0; i < gameConstants.BOARD_HEIGHT; i++) {
            for (let j = 0; j < gameConstants.BOARD_WIDTH; j++) {
                let cell = {};
                cell.type = "wall";
                cell.x = j;
                cell.y = i;
                board.push(cell);
            }
        }
        for (let i = 0; i < gameConstants.levels[level].rooms.length; i++) {
            let room = gameConstants.levels[level].rooms[i];
            drawRoom(board, room.x, room.y, room.entry, room.exit);
        }
        let playerPosition = populateBoard(board, entities, level);
        return [board, entities, playerPosition];
    };

    const movePlayer = function(direction, playerPosition, board) {
        switch (direction) {
            case 'ArrowUp':
                return playerPosition - gameConstants.BOARD_WIDTH;
            case 'ArrowDown':
                return playerPosition + gameConstants.BOARD_WIDTH;
            case 'ArrowLeft':
                return playerPosition - 1;
            case 'ArrowRight':
                return playerPosition + 1;
            default:
                return playerPosition;
        }
    };
    const updateBoard = function(entities, cell) {
        let newBoard = [].concat(entities);
        let playerIndex = 0;
        let cellIndex = null;
        newBoard.forEach((entity, i) => {
            if (entity.type === 'player') {
                playerIndex = i;
            }
            if (entity.x === cell.x && entity.y === cell.y) {
                cellIndex = i;
            }
        });
        newBoard[playerIndex] = Object.assign({}, newBoard[playerIndex], { x: cell.x, y: cell.y });
        if (cellIndex !== null) {
            newBoard.splice(cellIndex, 1);
        }
        return newBoard;
    };

    const attackEnemy = function(entities, cell, playerLevel, playerAttack) {
        let newBoard = [].concat(entities);
        let playerIndex = 0;
        let cellIndex = null;
        newBoard.forEach((entity, i) => {
            if (entity.type === 'player') {
                playerIndex = i;
            }
            if (entity.x === cell.x && entity.y === cell.y) {
                cellIndex = i;
            }
        });
        let attack = playerAttack + 5 * playerLevel;
        if (cell.type === "boss") {
            newBoard.forEach((entity, i) => {
                if (entity.type === "boss") {
                    newBoard[i] = Object.assign({}, entity, { health: (entity.health - attack) });
                }
            });
            return newBoard;
        }
        newBoard[cellIndex] = Object.assign({}, newBoard[cellIndex], { health: (newBoard[cellIndex].health - attack) });
        return newBoard;
    };

    return {
        createBoard: createBoard,
        movePlayer: movePlayer,
        updateBoard: updateBoard,
        attackEnemy: attackEnemy
    };
})();
export default GameService;