export const setSelectedCard=(card_obj)=>{
    return {
        type: 'UPDATE_SELECTED_CARD',
        obj:card_obj
        
    };
}

export const openSession=(session_obj)=>{
    return {
        type: 'OPEN_SESSION',
        obj:session_obj
        
    };
}




