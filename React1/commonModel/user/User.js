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
                    userName={this.props.current_user.userName}
                    surName={this.props.current_user.surName}
                    lastname={this.props.current_user.lastName}
                    money={this.props.current_user.money}
                />
            </div>
        )
    }

   
}
const mapStateToProps = (state, ownProps) => {
    return {
        current_user: state.userReducer.user,
    } };
  
  
  export default connect(mapStateToProps)(User);
