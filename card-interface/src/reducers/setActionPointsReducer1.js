const setActionPointsReducer1=(state={actionPoints1:0},action)=>{
    switch (action.type){
        case 'SET_ACTION_POINTS_1':
            state.actionPoints1 = action.obj +2;
            let newActionPoints1 = JSON.parse(JSON.stringify(state.actionPoints1));
            return {actionPoints1:newActionPoints1};
        case 'REMOVE_ACTION_POINTS_1':
            state.actionPoints1 = action.obj-1;
            let newActionPointsR1 = JSON.parse(JSON.stringify(state.actionPoints1));
            return {actionPoints1:newActionPointsR1};
        
        default:
            return state;

    }
}
export default setActionPointsReducer1;