import Setlists from '../store/Setlist';
import Members from '../store/Member';

const initialState = {
  team: [],
  member: [],
  setlist: [],
  encore: [],
}

const DescReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DESC_TEAM_J':
      return {
        ...state,
        team: action.payload,
        member: Members[0].Team_J,
        setlist: Setlists[0].Team_J,
        encore:  Setlists[0].Team_J.slice(13, 17),
      }
    case 'GET_DESC_TEAM_K':
      return {
        ...state,
        team: action.payload,
        member: Members[1].Team_K,
        setlist: Setlists[1].Team_K,
        encore:  Setlists[1].Team_K.slice(13, 17),
      }
    case 'GET_DESC_TEAM_T':
      return {
        ...state,
        team: action.payload,
        member: Members[2].Team_T,
        setlist: Setlists[2].Team_T,
        encore:  Setlists[2].Team_T.slice(13, 17),
      }
    case 'GET_DESC_ACADEMY':
      return {
        ...state,
        team: action.payload,
        member: Members[3].Academy,
        setlist: Setlists[3].Academy,
        encore:  Setlists[3].Academy.slice(13, 17),
      }
    default:
      return state
  }
}

export default DescReducer;