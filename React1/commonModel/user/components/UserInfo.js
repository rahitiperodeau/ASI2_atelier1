import React, { Component } from 'react';

class UserInfo extends Component{

    constructor(props){
        super(props);
        this.state={
            id:this.props.id,
            surname:this.props.surname,
            lastname:this.props.lastname,
            userName:this.props.userName,
            pwd:this.props.pwd,
            money:this.props.money
            
        }
    }
    render(){
        return(
            <div>
                <h1>Username:{this.props.userName}</h1>
                <h2>Surname:{this.props.surName}</h2>
                <h3>Lastname:{this.props.lastName}</h3>
                <h4>Money:{this.props.money}</h4>
            </div>
        );
    }
}

export default UserInfo;
