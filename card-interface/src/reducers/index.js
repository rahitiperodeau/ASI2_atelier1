import { combineReducers } from 'redux';
import cardReducer from './cardReducer';

import userReducer from './userReducer';

const globalReducer = combineReducers({
    userReducer: userReducer,
    cardReducer: cardReducer
});

export default globalReducer;