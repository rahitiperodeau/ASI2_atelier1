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

export const loadCardFight1=(cards_list)=>{
    return{
        type:'LOAD_CARD_FIGHT_1',
        obj:cards_list
    };
}

export const loadCardFight2=(cards_list)=>{
    return{
        type:'LOAD_CARD_FIGHT_2',
        obj:cards_list
    };
}

//quand le joueur 1 veut attaquer
export const fightCards1=(card_to_remove)=>{
    return{
        type:'FIGHT_CARDS_1',
        obj:card_to_remove
    };
}
//quand le joueur 2 veut attaquer
export const fightCards2=(card_to_remove)=>{
    return{
        type:'FIGHT_CARDS_2',
        obj:card_to_remove
    };
}

export const setSelectedCardFight=(card_fight_obj)=>{
    return{
        type:'SELECT_CARD_FIGHT',
        obj:card_fight_obj
    };
}

export const cleanCardFightList=(empty_card_fight_list)=>{
    return{
        type:'CLEAN_CARD_FIGHT',
        obj:empty_card_fight_list
    }
}

//savoir si c'est au joueur 1 de jouer
export const setPlayer1State=(player_state)=>{
    return{
        type:'SET_PLAYER1_STATE',
        obj:player_state
    }
}

//savoir si c'est au joueur 2 de jouer
export const setPlayer2State=(player_state)=>{
    return{
        type:'SET_PLAYER2_STATE',
        obj:player_state
    }
}

export const setActionPoints1=(action_points)=>{
    return{
        type:'SET_ACTION_POINTS_1',
        obj:action_points
    }
}

export const setActionPoints2=(action_points)=>{
    return{
        type:'SET_ACTION_POINTS_2',
        obj:action_points
    }
}



export const hasAttacked1=(action_points)=>{
    return{
        type:'REMOVE_ACTION_POINTS_1',
        obj:action_points
    }
}

export const hasAttacked2=(action_points)=>{
    return{
        type:'REMOVE_ACTION_POINTS_2',
        obj:action_points
    }
}

