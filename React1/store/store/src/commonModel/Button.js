import React from 'react';
import { switchCase } from '@babel/types';
import { updateCardList } from '../actions/index'
import { connect } from 'react-redux';

const axios = require('axios');

class Button extends React.Component{
    constructor(props){
        super(props);
            
        this.handleOnButton = this.handleOnButton.bind(this);
        this.getCardList=this.getCardList.bind(this);


    }
    getCardList(){
        let self = this ;
         axios.get('http://127.0.0.1:8082/cards').then(function(response){
                self.props.dispatch(updateCardList(response.data));
       });
    
    }

    handleOnButton(params){
        
        let actionButton = this.props.actionButton;
        switch (actionButton) {
            case 'BUY_CARD':
              console.log('We buy a card');
              break;
            case 'SELL_CARD':
                console.log('We sell a card');
                break;

            case 'GO_STORE':
                    this.getCardList();
                    params.props.history.push('/market');
                    break;

            
            
            default:
              console.log('Sorry, no action defined');
        }
    }

    render(){
        return(
            <button type="button" onClick = {()=>{this.handleOnButton(this.props.params)}}>{this.props.message}</button>
        )
    }

   
}

  
  
export default connect()(Button);