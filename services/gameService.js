const GameService = (() => {
    const BOARD_WIDTH = 80;
    const BOARD_HEIGHT = 40;
    const createBoard = function() {
        const createRoom = function(width, height) {
            let room = [];
            let cell = {};
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    cell.type = "floor";
                    cell.x = j;
                    cell.y = i;
                    room.push(cell);
                }
            }
            return room;
        }
        let board = [];
        let cell = {};
        for (let i = 0; i < BOARD_HEIGHT; i++) {
            for (let j = 0; j < BOARD_WIDTH; j++) {
                cell.type = "wall";
                cell.x = j;
                cell.y = i;
                board.push(cell);
            }
        }

        return board;
    }
    return {
        createBoard: createBoard
    };
})();
export default GameService;