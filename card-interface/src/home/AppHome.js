import React, { Component } from 'react';
import * as jsonSourceCards from '../sources/cards.json';
import globalReducer from '../reducers';
import User from '../commonModel/User/User'
import Button from '../commonModel/Button'
import { connect } from 'react-redux';
import CardSide from './components/cardSide/CardSide'
import SessionUser from '../commonModel/SessionUser';
import {userConnection} from '../actions'
import{ createStore } from'redux';
import {Provider} from 'react-redux';
const axios=require('axios') ;

/*const nSession = new SessionUser();
const nUser    = new User()
nSession.state.login = "coucou cams"
const initialStore = {
                        sessionReducer : nSession,
                        user2Reducer    : nUser
                      }

const store=createStore(globalReducer,initialStore);*/

class AppHome extends Component{
    constructor(props){
        super(props);

        let temp_card_list;
        
        temp_card_list=jsonSourceCards.default;
        

        this.state={
            
            
            card_list:temp_card_list,
            
        };

        this.getUser = this.getUser.bind(this);
        this.getUser(this.props.session.state.userId);
    }

    getUser(uId){
        let url = 'http://127.0.0.1:8082/user/'+uId;
        let self = this;
        let usrTemp ;
        usrTemp = new User();
        axios.get(url).then(function(response){
            //console.log(response.data)
            usrTemp.initialiseUser(response.data);

            self.props.dispatch(userConnection(usrTemp));
          
        }).catch(function(err){
            //console.log(err);
        });
        
            
            
        
        //console.log(usrTemp);
        //return usrTemp;
        }

    render(){
        
        
        return(
           
            <div>
                <div className="container-fluid">
                    <h1>Welcome to your card manager</h1>
                </div>
                <div className="col-md-4 col-lg-4" >
                
                <User
                        id = {this.props.user.state.id}
                        surname={this.props.user.state.surname}
                        lastname={this.props.user.state.lastname}
                        username={this.props.user.state.username}
                        money={this.props.user.state.money}

                    />
                <CardSide
                        user_id={this.props.user.state.id}
                        //cards ={this.state.card_list.cards}
                        
                        cards={this.props.user.state.cardList}
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