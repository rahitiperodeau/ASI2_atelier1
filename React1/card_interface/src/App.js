import React, { Component } from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as jsonSource from './sources/cards.json';
import ListCards from './home/components/cardSide/ListCards/ListCards'
import CardSide from './home/components/cardSide/CardSide'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from './reducers';


const store = createStore(globalReducer);

//extends the object Component
class App extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        let temp_card_list;
        
        temp_card_list=jsonSource.default;
        
        
        //creation of an initial state, a json object
        this.state = {
            card_list:temp_card_list.cards,
        }; 
    }

    
  //render function use to update the virtual dom
  render() {
    
    return (
        <Provider store={store} >
            <div className="container-fluid">
                <div className="row">
                    <h1> Welcome to card world</h1>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-4" >
                        <CardSide 
                            cards ={this.state.card_list}
                        />
                    </div>
                </div>
            </div>
      </Provider>
    );
  }
}

//export the current classes in order to be used outside
export default App;