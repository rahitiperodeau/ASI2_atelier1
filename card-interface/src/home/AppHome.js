import React, { Component } from 'react';
import * as jsonSourceCards from '../sources/cards.json';

import User from '../commonModel/User/User'
import Button from '../commonModel/Button'
import { connect } from 'react-redux';
import CardSide from './components/cardSide/CardSide'

import {userConnection} from '../actions'

var axios=require('axios') ;

class AppHome extends Component{
    constructor(props){
        super(props);

        let temp_card_list;
        
        temp_card_list=jsonSourceCards.default;
        

        this.state={
            
            
            card_list:temp_card_list,
            
        };

        this.getUser = this.getUser.bind(this);
       
    }

    getUser(uId){
        let url = 'http://127.0.0.1:8082/user/'+uId;
        let self = this;
        let usrTemp ;
        usrTemp = new User();
        axios.get(url).then(function(response){
            console.log(response.data)
            usrTemp.initialiseUser(response.data);

            self.props.dispatch(userConnection(usrTemp));
          
        }).catch(function(err){
            console.log(err);
        });
        
            
            
        
        //console.log(usrTemp);
        //return usrTemp;
        }

    render(){
        let usr;
        this.getUser(this.props.session.state.userId);
        return(
            <div>
                <div className="container-fluid">
                    <h1>Welcome to your card manager</h1>
                </div>
                <div className="col-md-4 col-lg-4" >
                {console.log(this.props)}
                <User
                        id = {this.props.user.state.id}
                        surname={this.props.user.state.surname}
                        lastname={this.props.user.state.lastname}
                        username={this.props.user.state.username}
                        money={this.props.user.state.money}

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
      session: state.sessionReducer,
      user:     state.user2Reducer
    }
  };


export default connect(mapStateToProps)(AppHome);