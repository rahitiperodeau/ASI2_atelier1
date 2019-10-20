import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import sessionReducer from './sessionReducer'

import user2Reducer from './userReducer';

import cardFightReducer1 from './cardFightReducer1';
import cardFightReducer2 from './cardFightReducer2';

import cardFightingReducer from './cardFightingReducer';
import setPlayer1StateReducer from './setPlayer1StateReducer';
import setPlayer2StateReducer from './setPlayer2StateReducer';
import setActionPointsReducer1 from './setActionPointsReducer1';
import setActionPointsReducer2 from './setActionPointsReducer2';
//import setActionPointsReducer2 from './setActionPointsReducer2';

const globalReducer = combineReducers({
    user2Reducer     : user2Reducer,
    cardReducer     : cardReducer,
    sessionReducer  : sessionReducer,
    cardFightReducer1: cardFightReducer1,
    cardFightReducer2: cardFightReducer2,
    cardFightingReducer:cardFightingReducer,
    setPlayer1StateReducer:setPlayer1StateReducer,
    setPlayer2StateReducer:setPlayer2StateReducer,
    setActionPointsReducer1:setActionPointsReducer1,
    setActionPointsReducer2:setActionPointsReducer2,
   // setActionPointsReducer2:setActionPointsReducer2

});

export default globalReducer;