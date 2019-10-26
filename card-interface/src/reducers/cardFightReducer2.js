const cardFightReducer2=(state={cardListToPlay:[]},action)=>{
    switch (action.type){
        case 'LOAD_CARD_FIGHT_2':
            return {cardListToPlay:action.obj}
        case 'FIGHT_CARDS_2':
            let newCardListToPlay=[];
            console.log('cardListToPlay2:'+state.cardListToPlay);
            console.log('carte à enlever dans reducer2:'+action.obj);
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

export default cardFightReducer2;