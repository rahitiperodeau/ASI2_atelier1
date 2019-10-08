import React, { Component } from 'react';
import * as jsonSourceUsers from '../sources/users.json';
import * as jsonSourceCards from '../sources/cards.json';

import User from '../commonModel/User/User'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CardSide from './components/cardSide/CardSide'


class AppHome extends Component{
    constructor(props){
        super(props);

        let temp_card_list;
        
        temp_card_list=jsonSourceCards.default;
        

        this.state={
            currentUser_id:"4",
            currentUser_surname:"Dimitri",
            currentUser_lastname:"Crackers",
            currentUser_username:"dimcracks",
            currentUser_pwd:"coucou",
            currentUser_money:"1000", 
            card_list:temp_card_list.cards,
            
        };
       
    }

    render(){
        return(
            <div>
                <div className="container-fluid">
                    <h1>Welcome to your card manager</h1>
                </div>
                <div className="col-md-4 col-lg-4" >
                <User
                        id={this.state.currentUser_id}
                        surname={this.state.currentUser_surname}
                        lastname={this.state.currentUser_lastname}
                        username={this.state.currentUser_username}
                        pwd={this.state.currentUser_pwd}
                        money={this.state.currentUser_money}
                    />
                <CardSide
                        cards ={this.state.card_list}
                />
                </div>
                <div className="col-md-4 col-lg-4" >
                    
                </div>
                </div>
        )
    };
}
export default AppHome;