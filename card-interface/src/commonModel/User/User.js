import React from 'react';
import {connect} from 'react-redux';
import UserInfo from './components/UserInfo'

class User extends React.Component{
    constructor(props){
        super(props);

        this.state = {
       
        }
        

    }


    render(){
        return(
            <div className="panel-body">
                <UserInfo
                    id={this.props.id}
                    username={this.props.username}
                    surname={this.props.surname}
                    lastname={this.props.lastname}
                    money={this.props.money}
                />
            </div>
        )
    }

   
}

  
  
  export default User;