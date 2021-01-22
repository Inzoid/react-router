import { combineReducers, createStore } from 'redux';

import HomeReducer from './HomeReducer';
import TeamReducer from './TeamReducer';

const reducer = combineReducers({ HomeReducer, TeamReducer });
const store = createStore(reducer);

export default store;