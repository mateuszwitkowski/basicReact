export const LOAD_PLAYERS = '[Players] Load';
export const ADD_PLAYER = '[Players] Add';
export const SET_EDITED_PLAYER = '[Players] Set edited player'
export const UPDATE_PLAYER = '[Players] Update';
export const REMOVE_PLAYER = '[Players] Remove';

export function loadPlayers(players) {
  return { type: LOAD_PLAYERS, players }
}

export function addPlayer(player) {
  return { type: ADD_PLAYER, player }
}

export function updatePlayer(player) {
  return { type: UPDATE_PLAYER, player }
}

export function removePlayer(playerId) {
  return { type: REMOVE_PLAYER, playerId }
}

export function setEditedPlayer(playerId) {
  return { type: SET_EDITED_PLAYER, playerId }
}
