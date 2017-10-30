import * as types from '../constants/types.js';
import { weapons } from '../constants/gameConstants.js';
import GameService from '../services/gameService.js';
const initialBoardSettings = GameService.createBoard(0);
const initialState = {
    isDarkness: true,
    board: initialBoardSettings[0],
    dungeon: 0,
    entities: initialBoardSettings[1],
    gameOver: false,
    endGameMessage: "Well done ! You won !",
    player: {
        health: 180,
        weapon: weapons[0].name,
        attack: weapons[0].attack,
        level: 0,
        nextLevel: 100,
        dungeon: 0,
        position: initialBoardSettings[2]
    }
};
export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case types.START_GAME:
            return initialState;
        case types.UPDATE_HEALTH:
            return {
                ...state,
                'player': {
                    ...state.player,
                    health: state.player.health + action.health
                }
            };

        case types.UPDATE_WEAPON:
            return {
                ...state,
                'player': {
                    ...state.player,
                    weapon: action.weapon.name,
                    attack: action.weapon.attack
                }
            }
        case types.TOGGLE_DARKNESS:
            return {...state, isDarkness: !state.isDarkness };
        case types.NEXT_LEVEL:
            const boardSettings = GameService.createBoard(state.dungeon + 1);
            return {...state,
                dungeon: state.dungeon + 1,
                board: boardSettings[0],
                entities: boardSettings[1],
                player: {...state.player, position: boardSettings[2] }
            };
        case types.CREATE_BOARD:
            return {...state, board: GameService.createBoard(state.dungeon) };
        case types.MOVE_PLAYER:
            return {
                ...state,
                entities: GameService.updateBoard(state.entities, action.cell),
                'player': {
                    ...state.player,
                    position: action.index
                }
            }
        case types.WIN:
            return {...state, gameOver: true };
        case types.ATTACK_ENEMY:
            return (state.player.health - action.cell.attack) === 0 ? {...state, gameOver: true, endGameMessage: "Game over, better luck next time !" } : {
                ...state,
                entities: GameService.attackEnemy(state.entities, action.cell, state.player.level, state.player.attack),
                'player': {
                    ...state.player,
                    health: state.player.health - action.cell.attack,
                    nextLevel: (state.player.nextLevel - 10) === 0 ? 100 : (state.player.nextLevel - 10),
                    level: (state.player.nextLevel - 10) === 0 ? state.player.level + 1 : state.player.level
                }
            }
        default:
            return state;
    }
}