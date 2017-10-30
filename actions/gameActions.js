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
export function setPlayerPosition(cell, index) {
    return { type: types.MOVE_PLAYER, cell, index };
}
export function attackEnemy(cell) {
    return { type: types.ATTACK_ENEMY, cell };
}
export function startGame() {
    return { type: types.START_GAME };
}
export function nextLevel() {
    return { type: types.NEXT_LEVEL };
}