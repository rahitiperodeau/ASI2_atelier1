import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import sessionReducer from './sessionReducer'

import userReducer from './userReducer';

const globalReducer = combineReducers({
    userReducer     : userReducer,
    cardReducer     : cardReducer,
    sessionReducer  : sessionReducer
});

export default globalReducer;