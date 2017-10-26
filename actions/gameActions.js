import * as types from '../constants.js';
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