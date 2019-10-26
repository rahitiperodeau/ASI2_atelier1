const setActionPointsReducer2=(state={actionPoints2:0},action)=>{
    switch (action.type){
        case 'SET_ACTION_POINTS_2':
            state.actionPoints2 = action.obj +2;
            let newActionPoints2 = JSON.parse(JSON.stringify(state.actionPoints2));
            return {actionPoints2:newActionPoints2};
        case 'REMOVE_ACTION_POINTS_2':
            state.actionPoints2 = action.obj-1;
            let newActionPointsR2 = JSON.parse(JSON.stringify(state.actionPoints2));
            return {actionPoints2:newActionPointsR2};
        
        default:
            return state;

    }
}
export default setActionPointsReducer2;