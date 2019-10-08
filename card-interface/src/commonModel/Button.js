import React from 'react';
import { switchCase } from '@babel/types';

class Button extends React.Component{
    constructor(props){
        super(props);
            
        this.handleOnButton = this.handleOnButton.bind(this);

    }

    handleOnButton(){
        
        let actionButton = this.props.actionButton;
        switch (actionButton) {
            case 'BUY_CARD':
              console.log('We buy a card');
              break;
            case 'SELL_CARD':
                console.log('We sell a card');
                break
            
            default:
              console.log('Sorry, no action defined');
        }
    }

    render(){
        return(
            <button type="button" onclick = {()=>{this.props.handleOnButton()}}>{this.props.message}</button>
        )
    }

   
}

  
  
  export default Button;