import React, { Component } from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import AppHome from './home/AppHome'
import AppLogin from './Login/Signin'
import AppStore from './store/store'
import AppFight from './FightRoom/FightRoom'

import SessionUser from './commonModel/SessionUser'
import {Provider} from 'react-redux';
import User from './commonModel/User/User'
import{ createStore } from'redux';

import globalReducer from './reducers';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




const nSession = new SessionUser();
const nUser    = new User()

const initialStore = {
                        sessionReducer : nSession,
                        user2Reducer    : nUser,
                        cardReducer :{},



                      }

const store=createStore(globalReducer,initialStore);
//sessionUser.initSession();

//extends the object Component
class App extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        
        
        
        //creation of an initial state, a json object
        this.state = {
        }; 
    }

   
    
  //render function use to update the virtual dom
  render() {
    
    return (

          <Provider store={store}>
              <Router>
                <div>
                  
                  <hr />
          
                  <Route exact path ="/"        component={AppLogin}  />
                  <Route  path      ="/home"    component={AppHome}   />
                  <Route  path      ="/market"  component={AppStore}  />
                  <Route  path      ="/fight"   component={AppFight}  />
                </div>
              </Router>
          </Provider>
        
                  

    );
  }
}

//export the current classes in order to be used outside
export default App;