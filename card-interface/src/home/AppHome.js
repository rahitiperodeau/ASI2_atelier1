import React, { Component } from 'react';
import * as jsonSourceUsers from '../sources/users.json';
import * as jsonSourceCards from '../sources/cards.json';

import User from '../commonModel/User/components/UserInfo'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../reducers';
import CardSide from './components/cardSide/CardSide'
import Axios from 'axios';
const axios=require('axios');
const store =createStore(globalReducer);

class AppHome extends Component{
    constructor(props){
        super(props);
        
        
        let temp_card_list;
	    let temp_user_list;
        
        temp_card_list=jsonSourceCards.default;
        temp_user_list=jsonSourceUsers.default;
        
        this.state={
            currentUser_id:"4",
            currentUser_surname:"Dimitri",
            currentUser_lastname:"Crackers",
            currentUser_username:"dimcracks",
            currentUser_pwd:"coucou",
            currentUser_money:"1000", 
	        currUser:temp_user_list.users[0],
            card_list:temp_card_list.cards,
            current_user:{},
            
        };
       
    }

    getUser(uId){
        let url = 'http://127.0.0.1:8082/user/'+uId;
        axios.get(url).then(function(response){
            let temp_user=response.data;
            console.log(temp_user);
            this.state.current_user=temp_user;
        }).catch(function(err){
            console.log(err);
        });
        
    }

    render(){
        return(
            <Provider store={store}>
                <div className="container-fluid">
                    <h1>Welcome to your card manager</h1>
                </div>
                <div className="col-md-4 col-lg-4" >
                <User
                       /* id={this.state.currentUser_id}
                        surname={this.state.currentUser_surname}
                        lastname={this.state.currentUser_lastname}
                        username={this.state.currentUser_username}
                        pwd={this.state.currentUser_pwd}
                        money={this.state.currentUser_money}*/
			            id={this.state.currUser.id}
                        surname={this.state.currUser.surname}
                        lastname={this.state.currUser.lastname}
                        username={this.state.currUser.login}
                        pwd={this.state.currUser.pwd}
                        money={this.state.currUser.money}
                        /*id={this.state.current_user.id}
                        surname={this.state.current_user.surname}
                        lastname={this.state.current_user.lastname}
                        username={this.state.current_user.login}
                        pwd={this.state.current_user.pwd}
                        money={this.state.current_user.account}*/
                        
                    />
                <CardSide
                        cards ={this.state.card_list}
                />
                </div>
                <div className="col-md-4 col-lg-4" >
                    
                </div>
            </Provider>
        );
    };
}
export default AppHome;
