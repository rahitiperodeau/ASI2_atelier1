const setPlayer1StateReducer=(state={},action)=>{
    switch(action.type){
        case 'SET_PLAYER1_STATE':
            return action.obj;
        
    default:
        return state;
    }
}
export default setPlayer1StateReducer;