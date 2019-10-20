const setPlayer2StateReducer=(state={},action)=>{
    switch(action.type){
        case 'SET_PLAYER2_STATE':
            return action.obj;
        
    default:
        return state;
    }
}
export default setPlayer2StateReducer;