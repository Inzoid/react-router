import { createStore } from "redux";
import Team from '../store/Team';

const initialState = {
  dataTeam: [],
  name : 'Team J'
}

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case 'TEAM_J':
      return {
        ...state,
        dataTeam: Team,
        name : 'Team J'
      }
    case 'TEAM_K':
      return {
        ...state,
        dataTeam: Team,
        name: 'Team KII'
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store