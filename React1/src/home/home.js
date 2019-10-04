import React, { Component } from 'react';
import * as jsonSource from '../commonModel/sources/users.json';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import User from './commonModel/user/User'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from './reducers';

const store =createStore(globalReducer);

class home extends Component{
    constructor(props){
        super(props);
        let temp_users_list;
        temp_users_list=jsonSource.default;

        this.state={
            users_list:temp_users_list,
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
                    />
                </div>
                <div className="col-md-4 col-lg-4" >
                    <RightSide/>
                </div>
            </Provider>
        )
    }

}
export default home;