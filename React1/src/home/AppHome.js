import React, { Component } from 'react';
import * as jsonSource from '../commonModel/sources/users.json';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import User from '../commonModel/user/User'
import UserInfo from '../commonModel/user/components/UserInfo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from './reducers';

const store =createStore(globalReducer);

class AppHome extends Component{
    constructor(props){
        super(props);
        

        this.state={
            currentUser_id:"4",
            currentUser_surname:"Dimitri",
            currentUser_lastname:"Crackers",
            currentUser_username:"dimcracks",
            currentUser_pwd:"coucou",
            currentUser_money:"1000", 
            
        };
       
    }

    render(){
        return(
            <Provider store={store}>
                <div className="container-fluid">
                    <h1>Page d'accueil</h1>
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
                </div>
                <div className="col-md-4 col-lg-4" >
                    
                </div>
            </Provider>
        );
    };

}
export default AppHome;