import React, { Component } from 'react';
import * as jsonSource from '../sources/usersFight.json';
import User from '../commonModel/User/User';
import CardsFight from './components/CardsFight/CardsFight';
import Button from '../commonModel/Button';
import { connect } from 'react-redux';
import globalReducer from '../reducers/index';

import './components/FightRoom.css';
import { loadCardFight2 } from '../actions/index.js';
import { loadCardFight1 } from '../actions/index.js';


class FightRoom extends Component {
    constructor(props){
        super(props);

        
        let temp_user1;
        let temp_user2;
        let temp_user_list;

        temp_user_list=jsonSource.default.usersFight;
        console.log(temp_user_list);
        temp_user1=temp_user_list[0];
        console.log(temp_user1)
        temp_user2=temp_user_list[1];
        this.state={
            user1:temp_user1,
            user2:temp_user2,
        }
        
        this.getCurrentPlayer=this.getCurrentPlayer.bind(this);
        this.loadCardsFight=this.loadCardsFight.bind(this);
        

    }

    

    

    loadCardsFight(){
        let self = this;
        let list1 = this.state.user1.cardList;
        console.log(list1);
        let list2 = this.state.user2.cardList;
        self.props.dispatch(loadCardFight1(list1));
        self.props.dispatch(loadCardFight2(list2));
    }

    
    getCurrentPlayer(player1,player2){
        let self=this;
        let currPlayer;
        currPlayer="nobody is playing";
        console.log('player1:'+player1);

        console.log('player2:'+player2);
        if(player1==true){
            currPlayer=self.state.user1.login +" is playing";
        }
        else{
            if(player2==true){
                currPlayer=self.state.user2.login+"  is playing";
            }
            
        }
        return currPlayer;
    }

    render(){
        let that=this;
        
        return(
            
            <div>
                <div className="container-fluid">
                <h1>The Fight Room</h1>
            </div>
                <div className="player1" >
                <User
                            /*id = {this.props.user1.id}
                            surname={this.props.user1.surName}
                            lastname={this.props.user1.lastName}
                            username={this.props.user1.login}
                            money={this.props.user1.account}
                            actionPoints={this.props.user1.actionPoints}*/
                            id={this.state.user1.id}
                            surname={this.state.user1.surName}
                            lastname={this.state.user1.lastName}
                            username={this.state.user1.login}
                            money={this.state.user1.account}
                            actionPoints={this.props.actionPoints1}
                            
                        />
                        <Button
                        actionButton='ATTACK1'
                        message='player1 attaque'
                        
                    />
                    <div className="player1Cards">
                        <CardsFight
                            cards={this.props.cardListToPlay1}
                            isPlaying={this.props.currentPlayer1}
                        />
                    </div>    
                    
                    
                </div>
                <div className="player2" align="right">
                <User
                           /*id = {this.props.user2.id}
                            surname={this.props.user2.surName}
                            lastname={this.props.user2.lastName}
                            username={this.props.user2.login}
                            money={this.props.user2.account}
                            actionPoints={this.props.user2.actionPoints}*/
                            id={this.state.user2.id}
                            surname={this.state.user2.surName}
                            lastname={this.state.user2.lastName}
                            username={this.state.user2.login}
                            money={this.state.user2.account}
                            actionPoints={this.props.actionPoints2}
                            
                        />
                        
                        <div className="player2Cards">
                             <CardsFight
                                cards={this.props.cardListToPlay2}
                                isPlaying={this.props.currentPlayer1}
                            />
                        </div>
                   
                       
                </div>
                <div className="currPlayer">
                    {this.getCurrentPlayer(this.props.currentPlayer1,this.props.currentPlayer2)} 
                </div>
                
                <div className="endTurnButton">
                    <Button
                        actionButton="END_TURN"
                        message='end your turn'
                       
                    />
                </div>
                <div className="startButton">
                    <Button
                        actionButton="START_GAME"
                        message='start the game'
                        list1={this.state.user1.cardList}
                        list2={this.state.user2.cardList}
                    />
                </div>
            </div>
        )
        
    };
}

const mapStateToProps = (state,ownProps)=>{
    return{
        cardListToPlay1: state.cardFightReducer1.cardListToPlay,
        cardListToPlay2: state.cardFightReducer2.cardListToPlay,
        currentPlayer1: state.setPlayer1StateReducer,
        currentPlayer2: state.setPlayer2StateReducer,
        actionPoints1: state.setActionPointsReducer1.actionPoints1,
        actionPoints2: state.setActionPointsReducer2.actionPoints2
        
    }
};
export default connect(mapStateToProps)(FightRoom);