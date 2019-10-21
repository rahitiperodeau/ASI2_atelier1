import React from 'react';
import { switchCase, isTSTypeParameterInstantiation } from '@babel/types';

import { GetCardsList } from '../actions';




import { connect } from 'react-redux';
import {userConnection} from '../actions/index';
import {fightCards1} from '../actions/index';
import {fightCards2} from '../actions/index';
import {cleanCardFightList} from '../actions/index';
import {setPlayer1State} from '../actions/index';
import {setPlayer2State} from '../actions/index';
import { loadCardFight2 } from '../actions/index.js';
import { loadCardFight1 } from '../actions/index.js';
import {setActionPoints1} from '../actions/index';
import {setActionPoints2} from '../actions/index';
import {hasAttacked1} from '../actions/index';
import {hasAttacked2} from '../actions/index';
//import User from './User/User';
const axios=require('axios') ;

class Button extends React.Component{
    constructor(props){
        super(props);
            
        this.handleOnButton = this.handleOnButton.bind(this);

        this.getCardsList=this.getCardsList.bind(this);
        this.getUserCardList = this.getUserCardList.bind(this);
        this.bigFight=this.bigFight.bind(this);
        this.startGame=this.startGame.bind(this);
        this.isEndGameForOponent=this.isEndGameForOponent.bind(this);       
        this.isEndGameForYou=this.isEndGameForYou.bind(this);       
    }

    startGame(){
        let self=this;
        let list1=self.props.list1;
        let list2 = self.props.list2;
        let player1First;
        let player2First;
        
        
        //on tire au hasard le joueur qui commence
        let a =parseInt(Math.random()*10)%2;
        if (a==0){
            player1First=true;
            player2First=false;
        }
        else{
            player2First=true;
            player1First=false;
        }
        self.props.dispatch(loadCardFight1(list1));
        self.props.dispatch(loadCardFight2(list2));

        self.props.dispatch(setPlayer1State(player1First));
        self.props.dispatch(setPlayer2State(player2First));

        self.props.dispatch(setActionPoints1(10));
        self.props.dispatch(setActionPoints2(0));
        
        
    }

    tooglePlayer(){
        let self=this;
        let empty_array=[];
        let newPlayer1;
        let newPlayer2;
        let player1=self.props.currentPlayer1;
        let player2=self.props.currentPlayer2;
        if (player1==true){
            self.props.dispatch(cleanCardFightList(empty_array));
            
            newPlayer1=!player1;
            newPlayer2=!player2;

            self.props.dispatch(setPlayer1State(newPlayer1));
            self.props.dispatch(setPlayer2State(newPlayer2));

            self.props.dispatch(setActionPoints1(self.props.actionPoints1));
        }
        else{
            alert(`Ce n'est pas à vous de jouer`);
        }
        
    }

    bigFight(){
        let that = this;
        let temp_selectedCardFightList = that.props.selectedCardFightList;
        let attackCard=temp_selectedCardFightList[0];
        let targetCard =temp_selectedCardFightList[1];
        let empty_array=[];
        let actionPt1=that.props.actionPoints1;
        if (temp_selectedCardFightList.length==2){
                if(actionPt1!=0){
                    //attaque réussie
                    if (attackCard.attack > targetCard.defence){
                        alert('attaque réussie')
                        that.props.dispatch(fightCards2(targetCard));
                        that.isEndGameForOponent();
                    }
                    //attaque ratée
                    else{
                        //celui qui attaque se fait battre
                        if(targetCard.attack>attackCard.defence){
                            alert(`attaque ratée, ton monstre s'est fait battre`);
                            that.props.dispatch(fightCards1(attackCard));
                            that.isEndGameForYou();
                        }
                        //chacun a une attaque inf à la def de l'autre
                        else{
                            alert("Ton monstre et celui de ton adversaire se sont bien battu mais aucun d'entre eux n'est sorti vainqueur");
                        }

                    }
                    that.props.dispatch(hasAttacked1(that.props.actionPoints1));
                    that.props.dispatch(cleanCardFightList(empty_array));
                }
                else{
                    alert(`vous n'avez plus de points d'action`);
                }
        }
        else{
            alert(`veuillez d'abord choisir les cartes`)
        }
              
        
    }

    isEndGameForYou(){
        let that=this;
        let list1= that.props.cardListToPlay1;
        //si c'est la derniere carte     
        if(list1.length-1===0){
            alert(`Vous n'avez plus de cartes. Vous avez perdu...`);
        }
    }

    isEndGameForOponent(){
        let that=this;
        let list2= that.props.cardListToPlay2;
        //si c'est la derniere carte
        if(list2.length-1===0){
            alert(`Votre adversaire n' plus de cartes. Vous avez gagné !`);
        }        
    }

    

    
      
    getCardsList(){


        let self = this ;
    
        axios.get('http://localhost:8082/cards') 
          .then(function (response) {
                self.props.dispatch(GetCardsList(response.data));
              }  )
            }

    
   

    getUserCardList(uId){
        let self=this;
        let usrTemp; 
        let url = 'http://127.0.0.1:8082/user/'+uId;
        axios.get(url).then(function(response){
            usrTemp = response.data;
            self.props.dispatch(userConnection(usrTemp));
        }).catch(function(err){
            console.log(err);
        })
    }

    handleOnButton(params,uId,cId){
        let that=this;
        let new_order={};
        let actionButton = this.props.actionButton;
        
        switch (actionButton) {
            case 'BUY_CARD':
              break;
            case 'SELL_CARD':
                    new_order.user_id=uId;
                    
                    new_order.card_id=cId;                
                    axios.post("http://127.0.0.1:8082/sell",new_order)
                    .then((response)=>{
                        if(response.data){
                            that.getUserCardList(uId);
                            
                        }
    
                    })
                    .catch(function(err){
                        console.log(err);
                    });
                
                break;

            case 'GO_STORE':
                this.getCardsList();

                params.props.history.push('/market');
                break;
            
            case 'GO_HOME':
                params.props.history.push('/home');
                break;
            case 'GO_FIGHT':
                params.props.history.push('/fight');
                break;
            case 'START_GAME':
                that.startGame();
                break;
            case 'END_TURN':
               
                that.tooglePlayer();
                break;
            case 'ATTACK1':
                that.bigFight();
                break;
            default:

              console.log('Sorry, no action defined');

        }
    }

    render(){
        return(

            <button type="button" onClick = {()=>{this.handleOnButton(this.props.params,this.props.user_id,this.props.idCard)}}>
                {this.props.message}
            </button>

        )
    }

   
}
const mapStateToProps = (state,ownProps)=>{
    return{        
        selectedCardFightList: state.cardFightingReducer.cardFightList,
        currentPlayer1: state.setPlayer1StateReducer,
        currentPlayer2: state.setPlayer2StateReducer,
        actionPoints1: state.setActionPointsReducer1.actionPoints1,
        actionPoints2: state.setActionPointsReducer2.actionPoints2,
        cardListToPlay1:state.cardFightReducer1.cardListToPlay,
        cardListToPlay2:state.cardFightReducer2.cardListToPlay
        
    }
};
export default connect(mapStateToProps)(Button);

