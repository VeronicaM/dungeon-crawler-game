import * as types from '../constants.js';
import { weapons } from '../constants.js';
import GameService from '../services/gameService.js';
const initialState = {
    isDarkness: true,
    board: GameService.createBoard(0),
    level: 0,
    player: {
        health: 180,
        weapon: weapons[0].name,
        attack: weapons[0].attack,
        level: 0,
        nextLevel: 100,
        dungeon: 0
    }
};
export default function gameReducer(state = initialState, action) {
    switch (action.type) {
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
                    weapon: action.health.weapon.name,
                    attack: action.weapon.attack
                }
            }
        case types.TOGGLE_DARKNESS:
            return {...state, isDarkness: !state.isDarkness };
        case types.UPDATE_GAME_LEVEL:
            return {...state, level: state.level + 1 };
        case types.CREATE_BOARD:
            return {...state, board: GameService.createBoard(state.level) };
        default:
            return state;
    }
}