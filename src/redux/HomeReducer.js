import Team from '../store/Team';

const initialState = {
  dataTeam: [],
}

const HomeReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'HOME':
      return {
        ...state,
        dataTeam: Team,
      }
    default:
      return state
  }
}

export default HomeReducer;