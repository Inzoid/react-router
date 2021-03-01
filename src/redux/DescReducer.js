import Setlists from '../store/Setlist';
import Members from '../store/Member';

const initialState = {
  member: [],
  setlist: [],
  encore: [],
}

const DescReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEAM_J':
      return {
        ...state,
        member: Members[0].Team_J,
        setlist: Setlists[0].Team_J,
        encore:  Setlists[0].Team_J.slice(13, 17),
      }
    case 'TEAM_K':
      return {
        ...state,
        member: Members[1].Team_K,
        setlist: Setlists[1].Team_K,
        encore:  Setlists[1].Team_K.slice(13, 17),
      }
    case 'TEAM_T':
      return {
        ...state,
        member: Members[2].Team_T,
        setlist: Setlists[2].Team_T,
        encore:  Setlists[2].Team_T.slice(13, 17),
      }
    case 'ACADEMY':
      return {
        ...state,
        member: Members[3].Academy,
        setlist: Setlists[3].Academy,
        encore:  Setlists[3].Academy.slice(13, 17),
      }
    default:
      return state
  }
}

export default DescReducer;