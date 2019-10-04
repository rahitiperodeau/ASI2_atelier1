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
                    surName={this.props.surName}
                    lastname={this.props.lastName}
                    money={this.props.money}
                />
            </div>
        )
    }

   
}
export default User;