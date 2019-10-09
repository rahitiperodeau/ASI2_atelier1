import React, { Component } from 'react';
import * as jsonSourceUsers from '../sources/users.json';
import * as jsonSourceCards from '../sources/cards.json';

import User from '../commonModel/User/User'

import { connect } from 'react-redux';
import CardSide from './components/cardSide/CardSide'


class AppHome extends Component{
    constructor(props){
        super(props);

        let temp_card_list;
        
        temp_card_list=jsonSourceCards.default;
        

        this.state={
            session : this.props.session,
            //currentUser_id:this.session.userId,
            currentUser_surname:"Dimitri",
            currentUser_lastname:"Crackers",
            currentUser_username:"dimcracks",
            currentUser_pwd:"coucou",
            currentUser_money:"1000", 
            card_list:temp_card_list,
            
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
                        id={this.state.session.userId}
                        surname={this.state.currentUser_surname}
                        lastname={this.state.currentUser_lastname}
                        username={this.state.currentUser_username}
                        pwd={this.state.currentUser_pwd}
                        money={this.state.currentUser_money}
                    />
                <CardSide
                        cards ={this.state.card_list.cards}
                />
                </div>
                <div className="col-md-4 col-lg-4" >
                    
                </div>
                </div>
        )
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
      session: state.sessionReducer.session
    }
  };


export default connect(mapStateToProps)(AppHome);