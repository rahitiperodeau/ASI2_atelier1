const cardFightReducer1=(state={cardListToPlay:[]},action)=>{
    switch (action.type){
        case 'LOAD_CARD_FIGHT_1':
            return {cardListToPlay:action.obj}
        case 'FIGHT_CARDS_1':
            let newCardListToPlay=[];
            console.log('cardListToPlay1:'+state.cardListToPlay);
            console.log('carte à enlever dans reducer1:'+action.obj)
            for(let i=0; i<state.cardListToPlay.length;i++){
                if(state.cardListToPlay[i].id!=action.obj.id){
                    newCardListToPlay.push(state.cardListToPlay[i]);
                }
            }
        return {cardListToPlay:newCardListToPlay};
    default:
        return state;
        
    }
}

export default cardFightReducer1;