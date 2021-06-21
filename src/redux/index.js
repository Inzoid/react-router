import { combineReducers, createStore } from 'redux';

import storeHome from './HomeReducer';
import storeTeam from './TeamReducer';
import storeDescription from './DescReducer';

const reducer = combineReducers({ storeHome, storeTeam, storeDescription });
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;