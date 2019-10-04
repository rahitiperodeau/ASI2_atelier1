import React, { Component } from 'react';

class CardLabel extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
    }
  
  //render function use to update the virtual dom
  render() {

    return (
            <div className="panel panel-default" > 
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.name} </h3>
                </div>
            </div>
    );
  }
}

export default CardLabel;