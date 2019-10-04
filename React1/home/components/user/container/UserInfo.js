import React, { Component } from 'react';

class UserInfo extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>{this.props.userName}</h1>
                <h2>{this.props.userLastName}</h2>
            </div>
        );
    }
}

export default UserInfo;

