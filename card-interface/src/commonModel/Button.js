import React from 'react';
import { switchCase } from '@babel/types';

import { GetCardsList } from '../actions';

import { connect } from 'react-redux';

var axios=require('axios') ;


import { connect } from 'react-redux';
import {userConnection} from '../actions';
import User from './User/User';
const axios=require('axios') ;

class Button extends React.Component{
    constructor(props){
        super(props);
            
        this.handleOnButton = this.handleOnButton.bind(this);

        this.getCardsList=this.getCardsList.bind(this);
              this.getUserCardList = this.getUserCardList.bind(this);


    }

      
    getCardsList(){


        let self = this ;
    
        axios.get('http://localhost:8082/cards') 
          .then(function (response) {
                self.props.dispatch(GetCardsList(response.data));
              }  )
            }


   

    getUserCardList(uId){
        let self=this;
        
        let usrTemp;
        usrTemp = new User();
        let url = 'http://127.0.0.1:8082/user/'+uId;
        axios.get(url).then(function(response){
            //console.log(response.data)
            usrTemp.initialiseUser(response.data);
            //console.log(usrTemp.cardList);
            self.props.dispatch(userConnection(usrTemp));
        }).catch(function(err){
            //console.log(err);
        })
    }

    handleOnButton(params,uId,cId){
        let that=this;
        let new_order={};
        //console.log(uId);
        //console.log(cId);
        let actionButton = this.props.actionButton;
        switch (actionButton) {
            case 'BUY_CARD':
              //console.log('We buy a card');
              break;
            case 'SELL_CARD':
                    new_order.user_id=uId;
                    
                    new_order.card_id=cId;                
                    //console.log('We sell a card');
                    axios.post("http://127.0.0.1:8082/sell",new_order)
                    .then((response)=>{
                        //console.log(response.data);
                        if(response.data){
                            that.getUserCardList(uId);
                        }
    
                    })
                    .catch(function(err){
                        //console.log(err);
                    });
                
                break;

            case 'GO_STORE':
                        this.getCardsList();

                    params.props.history.push('/market');
                    break;

            
            
            default:

              console.log('Sorry, no action defined');

        }
    }

    render(){
        return(

            <button type="button" onClick = {()=>{this.handleOnButton(this.props.params,this.props.user_id,this.props.idCard)}}>{this.props.message}</button>

        )
    }

   
}

  
export default connect() (Button);

