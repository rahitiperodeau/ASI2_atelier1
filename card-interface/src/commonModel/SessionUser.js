import React from 'react';
//import User from './User'

class SessionUser extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            login : 0,
            id      : 0
        };
        
        this.openSession = this.openSession.bind(this);

    }

    openSession(pLogin,pID){
        this.state.login = pLogin;
        this.state.id   = pID;
    }

}

  
  
  export default SessionUser;