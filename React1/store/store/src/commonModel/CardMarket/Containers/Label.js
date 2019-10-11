import React, { Component } from 'react';

class Label extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
    return (
                <div>
                    <div className="content">
                                            <div className="ui grid">
                                                <div className="three column row">
                                                    <div className="column">
                                                            <h5>{this.props.name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                   
                
                </div>
 
    );
  }
}

export default Label;