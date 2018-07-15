import { combineReducers } from 'redux'
import {
  LOAD_PLAYERS,
  ADD_PLAYER,
  UPDATE_PLAYER,
  REMOVE_PLAYER
} from './players.actions'

const initialState = {
  players: [
    {
      "id": 3176,
      "name": "Matthias Ginter",
      "position": "Defender",
      "dateOfBirth": "1994-01-03T00:00:00Z",
      "countryOfBirth": "Germany",
      "nationality": "Germany",
      "role": "PLAYER"
    },
    {
      "id": 3185,
      "name": "Lars Stindl",
      "position": "Midfielder",
      "dateOfBirth": "1988-01-04T00:00:00Z",
      "countryOfBirth": "Germany",
      "nationality": "Germany",
      "role": "PLAYER"
    },
    {
      "id": 3470,
      "name": "Yann Sommer",
      "position": "Goalkeeper",
      "dateOfBirth": "1988-01-04T00:00:00Z",
      "countryOfBirth": "Switzerland",
      "nationality": "Switzerland",
      "role": "PLAYER"
    },
    {
      "id": 3475,
      "name": "Nico Elvedi",
      "position": "Defender",
      "dateOfBirth": "1996-01-01T00:00:00Z",
      "countryOfBirth": "Switzerland",
      "nationality": "Switzerland",
      "role": "PLAYER"
    },
    {
      "id": 3480,
      "name": "Josip Drmić",
      "position": "Attacker",
      "dateOfBirth": "1991-12-30T00:00:00Z",
      "countryOfBirth": "Switzerland",
      "nationality": "Switzerland",
      "role": "PLAYER"
    },
    {
      "id": 3655,
      "name": "Thorgan Hazard",
      "position": "Midfielder",
      "dateOfBirth": "1993-01-04T00:00:00Z",
      "countryOfBirth": "Belgium",
      "nationality": "Belgium",
      "role": "PLAYER"
    },
    {
      "id": 6666,
      "name": "Christofer Heimeroth",
      "position": "Goalkeeper",
      "dateOfBirth": "1980-12-29T00:00:00Z",
      "countryOfBirth": "Germany",
      "nationality": "Germany",
      "role": "PLAYER"
    },
    {
      "id": 6667,
      "name": "Tobias Sippel",
      "position": "Goalkeeper",
      "dateOfBirth": "1988-01-04T00:00:00Z",
      "countryOfBirth": "Germany",
      "nationality": "Germany",
      "role": "PLAYER"
    },
    {
      "id": 6668,
      "name": "Moritz Nicolas",
      "position": "Goalkeeper",
      "dateOfBirth": "1996-12-30T00:00:00Z",
      "countryOfBirth": "Germany",
      "nationality": "Germany",
      "role": "PLAYER"
    },
    {
      "id": 6669,
      "name": "Oscar Wendt",
      "position": "Defender",
      "dateOfBirth": "1984-12-31T00:00:00Z",
      "countryOfBirth": "Sweden",
      "nationality": "Sweden",
      "role": "PLAYER"
    },
    {
      "id": 6670,
      "name": "Tony Jantschke",
      "position": "Defender",
      "dateOfBirth": "1990-01-01T00:00:00Z",
      "countryOfBirth": "Germany",
      "nationality": "Germany",
      "role": "PLAYER"
    }
  ]
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
        })
      }
    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.playerId)
      }
    default:
      return state
  }
}

const playersReducer = combineReducers({
  players
});

export default playersReducer