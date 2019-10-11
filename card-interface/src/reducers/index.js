import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import sessionReducer from './sessionReducer'

import user2Reducer from './userReducer';

const globalReducer = combineReducers({
    user2Reducer     : user2Reducer,
    cardReducer     : cardReducer,
    sessionReducer  : sessionReducer
});

export default globalReducer;