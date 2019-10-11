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

export const userConnection=(user_obj)=>{
    return {
        type: 'USER_CONNECTED',
        obj:user_obj
        
    };
}



export const GetCardsList=(card_obj)=>{
    return {
        type: 'GET_CARDS_LIST',
        obj:card_obj
        
    };
}

