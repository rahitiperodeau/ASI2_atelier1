import React, { Component } from 'react';
import Card from '../../../../Shared_Component/Card/Card'
import CardLabel from './containers/CardLabel'

class ListCards extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
        this.getAllCardsRender=this.getAllCardsRender.bind(this);
    }
  
    getAllCardsRender(){
     let array_render=[];
     let idCard;
     
     for(var i=0;i<this.props.cards.length;i++){
         
        idCard = this.props.cards[i].id

         if(this.props.selected_card_id == idCard){
            array_render.push(
                <div onClick={()=>{this.props.handleOnCardSelected(idCard)}}>
                   <Card
                       key={i}
                       card={this.props.cards[i]}
                       handleOnItemSelected={this.props.handleOnItemSelected}
                   />
                </div>
                );
         }else{
             array_render.push(
                <div onClick={()=>{this.props.handleOnCardSelected(idCard)}}>
                <CardLabel 
                    name={this.props.cards[i].name}
                />
                </div>

             )
         }
         
         
     }
     return array_render;
 }
    
  //render function use to update the virtual dom
  render() {
      const display_list= this.getAllCardsRender();
    return (
            <div>
               {display_list}
            </div>
    );
  }
}
export default ListCards;