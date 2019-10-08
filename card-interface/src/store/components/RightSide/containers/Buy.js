import React, { Component } from 'react';

class Buy extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
    return (
               
            <button>Buy :{this.props.price} $</button>
                                                   
 
    );
  }
}

export default Buy;