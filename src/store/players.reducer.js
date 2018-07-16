import { combineReducers } from 'redux'
import {
  LOAD_PLAYERS,
  ADD_PLAYER,
  UPDATE_PLAYER,
  REMOVE_PLAYER,
  SET_EDITED_PLAYER
} from './players.actions'

const initialState = {
  players: [
    {
      "id": 1,
      "name": "Wojciech Szczęsny",
      "position": "Goalkeeper",
    },
    {
      "id": 2,
      "name": "Michał Pazdan",
      "position": "Defender",
    },
    {
      "id": 4,
      "name": "Thiago Cionek",
      "position": "Defender",
    },
    {
      "id": 13,
      "name": "Maciej Rybus",
      "position": "Defender",
    },
    {
      "id": 20,
      "name": "Łukasz Piszczek",
      "position": "Defender",
    },
    {
      "id": 6,
      "name": "Jacek Góralski",
      "position": "Midfielder",
    },
    {
      "id": 10,
      "name": "Grzegorz Krychowiak",
      "position": "Midfielder",
    },
    {
      "id": 11,
      "name": "Kamil Grosicki",
      "position": "Midfielder",
    },
    {
      "id": 16,
      "name": "Jakub Błaszczykowski",
      "position": "Midfielder",
    },
    {
      "id": 19,
      "name": "Piotr Zieliński",
      "position": "Midfielder",
    },
    {
      "id": 9,
      "name": "Robert Lewandowski",
      "position": "Attacker",
    }
  ],
  editedPlayerId: null
}

function players(state = initialState, action) {
  switch (action.type) {
    case LOAD_PLAYERS:
      return {
        ...state,
        players: action.players
      }
    case ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.player]
      }
    case UPDATE_PLAYER:
      return {
        ...state,
        players: state.players.map(player => {
          return player.id === action.player.id ? { ...player, ...action.player } : player;
        }),
        editedPlayerId: null
      }
    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.playerId)
      }
    case SET_EDITED_PLAYER:
      return {
        ...state,
        editedPlayerId: action.playerId
      }
    default:
      return state
  }
}

const playersReducer = combineReducers({
  players
});

export default playersReducer