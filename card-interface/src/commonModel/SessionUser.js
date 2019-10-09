import React, { Component } from 'react';
import {openSession} from '../actions'

import { connect } from 'react-redux';
//import User from './User'

class SessionUser extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            login : 0,
            userId      : 0
        };
        
        this.openSessionUser    =   this.openSessionUser.bind(this);
        //this.initSession    =   this.initSession.bind(this);

    }

    

    openSessionUser(pLogin,pID){
        this.state.login = pLogin;
        this.state.userId   = pID;
        //this.props.dispatch(openSession(this.props.session));
    }

}

  
  
  export default SessionUser;