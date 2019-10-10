import React from 'react';
import { switchCase } from '@babel/types';

class Button extends React.Component{
    constructor(props){
        super(props);
            
        this.handleOnButton = this.handleOnButton.bind(this);

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

  
  
  export default Button;