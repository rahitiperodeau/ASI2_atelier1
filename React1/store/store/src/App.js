import React, { Component } from 'react';

import * as jsonSource from './Sources/cards.json';

import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from './Reducers';

const store = createStore(globalReducer);

//extends the object Component
class Main extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        let temp_cards_list;
        
        temp_cards_list=jsonSource.default;
        console.log(temp_cards_list);
        
        
        //creation of an initial state, a json object
        this.state = {
            cards_list:temp_cards_list,
            selected_card_id:0,
        }; 
    }

    
  //render function use to update the virtual dom
  render() {
    
    return (
    <Provider store={store} >
      <div className="container-fluid">
        <div className="row">
            <h1> Welcome to card shop</h1>
        </div>
        <div className="row">
        <thead>
                        <tr>
                            <th>Cards List</th>
                            <th>Description</th>
                           
                        </tr>
                        <tr>
                            <th>
                                  <div className="col-md-4 col-lg-4"  align="left">
               
                                    <LeftSide 
                                        cards={this.state.cards_list}
                                    />
                                  </div>
                            </th>


                            <th>
                                <div className="col-md-4 col-lg-4"  align="right">
          
                                     <RightSide  />
                                 </div> 
                            </th>
                        </tr>
        </thead>

        
        </div>
      </div>
    </Provider>
    );
  }
}

//export the current classes in order to be used outside
export default Main;