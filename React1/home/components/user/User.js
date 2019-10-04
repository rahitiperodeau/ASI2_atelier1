import React from 'react';
import {connect} from 'react-redux';

class User extends React.Component{
    constructor(props){
        super(props);
            

    }

    render(){
        return(
            <div className="panel-body">
                <UserInfo
                    userName={this.props.userName}
                    userLastname={this.props.userLastName}
                />
            </div>
        )
    }

   
}
export default User;