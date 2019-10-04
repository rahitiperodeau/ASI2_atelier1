import React, { Component } from 'react';

class User extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
    }
  
     
  //render function use to update the virtual dom
  render() {

    return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title"> User </h3>
                </div>
                <div className="panel-body">
                    <Label 
                        username={this.props.user.username} 
                        psswd={this.props.user.psswd} 
                    />
                </div>
            </div>
    );
  }
}

export default Robot;