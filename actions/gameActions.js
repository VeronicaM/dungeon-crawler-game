import * as types from '../constants/types.js';
export function updateHealth(health) {
    return { type: types.UPDATE_HEALTH, health };
}
export function updateWeapon(weapon) {
    return { type: types.UPDATE_WEAPON, weapon };
}
export function toggleDarkness() {
    return { type: types.TOGGLE_DARKNESS };
}
export function createBoard() {
    return { type: types.CREATE_BOARD };
}

export function updateGameLevel() {
    return { type: types.UPDATE_GAME_LEVEL };
}
export function setPlayerPosition(direction) {
    return { type: types.MOVE_PLAYER };
}