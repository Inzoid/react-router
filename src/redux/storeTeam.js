import { createStore } from "redux";

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

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case 'TEAM_J':
      return {
        ...state,
        name: 'J',
        team: Team.slice(0, 1),
        member: Members[0].Team_J,
        schedule: Schedules.TEAM_J,
        banner: Banner.TEAM_J,
      }
    case 'TEAM_K':
      return {
        ...state,
        name: 'KII',
        team: Team.slice(1, 2),
        member: Members[1].Team_K,
        schedule: Schedules.TEAM_K,
        banner: Banner.TEAM_K,
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store