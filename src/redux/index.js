import { combineReducers, createStore } from 'redux';

import HomeReducer from './HomeReducer';
import TeamReducer from './TeamReducer';
import DescReducer from './DescReducer';

const reducer = combineReducers({ HomeReducer, TeamReducer, DescReducer });
const store = createStore(reducer);

export default store;