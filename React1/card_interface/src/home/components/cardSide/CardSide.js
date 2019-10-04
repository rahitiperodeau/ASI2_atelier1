
import React, { Component } from 'react';
import ListCards from './ListCards/ListCards'



//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import globalReducer from './reducers';

//const store = createStore(globalReducer);

//extends the object Component
class CardSide extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        
        
        
        //creation of an initial state, a json object
        this.state = {
            selected_card_id:0
        }; 
    }

    handleOnCardSelected(id){
        console.log("selected card id:"+id);
        this.setState({selected_card_id:id});
        const current_card_obj=this.getCardFromId(id);
    }
        
        
    getCardFromId(id){
        for(var i=0;i<this.props.cards.length;i++){
                if(this.props.cards[i].id==id){
                    return this.props.cards[i];
                }
            }
            return {};
    }
  //render function use to update the virtual dom
  render() {
    
    return (
    
      <div className="container-fluid">
        <div className="row">
            <h1> Welcome to card world</h1>
        </div>
        <div className="row">
            <div className="col-md-4 col-lg-4" >
                <ListCards 
                    cards ={this.props.cards}
                    selected_card_id={this.state.selected_card_id}
                />
            </div>
        </div>
      </div>
    );
  }
}

//export the current classes in order to be used outside
export default CardSide;



