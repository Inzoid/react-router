import Team from '../store/Team';
import Members from '../store/Member';
import Banner from '../store/Carousel';
import Schedules from '../store/Schedule';

const initialState = {
  name: [],
  team: [],
  member: [],
  schedule: [],
  banner: [],
}

const TeamReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'GET_TEAM_J':
      return {
        ...state,
        name: 'J',
        team: Team.slice(0, 1),
        member: Members[0].Team_J,
        schedule: Schedules.TEAM_J,
        banner: Banner.TEAM_J,
      }
    case 'GET_TEAM_K':
      return {
        ...state,
        name: 'KII',
        team: Team.slice(1, 2),
        member: Members[1].Team_K,
        schedule: Schedules.TEAM_K,
        banner: Banner.TEAM_K,
      }
    case 'GET_TEAM_T':
      return {
        ...state,
        name: 'T',
        team: Team.slice(2, 3),
        member: Members[2].Team_T,
        schedule: Schedules.TEAM_T,
        banner: Banner.TEAM_T,
      }
    case 'GET_ACADEMY':
      return {
        ...state,
        name: 'Academy',
        team: Team.slice(3, 4),
        member: Members[3].Academy,
        schedule: Schedules.ACADEMY,
        banner: Banner.ACADEMY,
      }
    case 'GET_PACKAGES':
      return {
        ...state,
        name: 'Packages',
        team: Team.slice(4, 5),
        schedule: Schedules.PACKAGES,
        banner: Banner.SHOW_PACKAGES,
      }
    default:
      return state
  }
}

export default TeamReducer