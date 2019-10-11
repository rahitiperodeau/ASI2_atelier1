const cardReducer= (state={},action) => {
    //console.log(action);
    switch (action.type) {
        case 'UPDATE_SELECTED_CARD':
            return action.obj;
    default:
      return state;
    }
}

export default cardReducer;