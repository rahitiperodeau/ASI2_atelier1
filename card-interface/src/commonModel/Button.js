import React from 'react';
import { switchCase } from '@babel/types';
const axios=require('axios') ;
class Button extends React.Component{
    constructor(props){
        super(props);
            
        this.handleOnButton = this.handleOnButton.bind(this);

    }

    handleOnButton(uId,cId){
        let new_order={};
        let actionButton = this.props.actionButton;
        switch (actionButton) {
            case 'BUY_CARD':
              console.log('We buy a card');
              break;
            case 'SELL_CARD':
                new_order.userId=uId;
                new_order.cardId=cId;
                console.log('We sell a card');
                axios.post("http://127.0.0.1:8082/sell",new_order);
                break
            
            default:
              console.log('Sorry, no action defined');
        }
    }

    render(){
        return(
            <button type="button" onClick = {()=>{this.handleOnButton(this.props.idUser,this.props.idCard)}}>{this.props.message}</button>
        )
    }

   
}

  
  
  export default Button;