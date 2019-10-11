import React, { Component } from 'react';
import * as jsonSourceCards from '../sources/cards.json';

import User from '../commonModel/User/User'
import Button from '../commonModel/Button'
import { connect } from 'react-redux';
import CardSide from './components/cardSide/CardSide'



class AppHome extends Component{
    constructor(props){
        super(props);

        let temp_card_list;
        
        temp_card_list=jsonSourceCards.default;
        

        this.state={
            
            //currentUser_id:this.session.userId,
          
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
                        id = {this.props.session.state.id}
                        surname={this.props.session.state.login}
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
                <div>
                   <Button 
                        

                            actionButton="GO_STORE" 
                            message="Go to market"
                            params = {this} // we send this to be redirect 

                    />
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
      session: state.sessionReducer
    }
  };


export default connect(mapStateToProps)(AppHome);