import React, { Component } from 'react';
const axios = require('axios');

class Buy extends Component {
    constructor(props) {
        super(props);   
        this.click=this.click.bind(this);     
    }

    click(){
      console.log(" use_id "+this.props.user_id+ "card_id "+this.props.card_id)
      axios.post('http://127.0.0.1:8082/buy',{
        user_id : this.props.user_id,
        card_id:this.props.card_id
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
  render() {
    return (
               
            <button onClick={this.click}>Buy </button>
                                                   
 
    );
  }
}

export default Buy;