import React, { Component } from 'react';

import * as jsonSource from '../sources/cards.json';

import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import User from '../commonModel/User/User'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../reducers';
import { connect } from 'react-redux';


const store = createStore(globalReducer);

//extends the object Component
class Main extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        
        
        
        //creation of an initial state, a json object
        this.state = {
            selected_card_id:0,
        }; 
    }

    
  //render function use to update the virtual dom
  render() {
    if(this.props.cards_list == undefined){
        return <div></div>;
}
    return (
    <Provider store={store} >
      <div className="container-fluid">
        <div className="row">
            <h1> Welcome to card shop</h1>
        </div>
        <User
                     
                     id = {this.props.session.state.userId}
                     surname={this.props.session.state.login}
                     lastname={this.state.currentUser_lastname}
                     username={this.state.currentUser_username}
                     pwd={this.state.currentUser_pwd}
                     money={this.state.currentUser_money}
                    />
        <thead>
                        <tr>
                            <th>Cards List</th>
                            <th>Description</th>
                           
                        </tr>
                        <tr>
                            <th  className="col-md-4 col-lg-4"  align="left">
                                
               
                                    <LeftSide 
                                        cards= {this.props.cards_list}

                                    />
                                
                            </th>


                            <th className="col-md-4 col-lg-4"  align="right">
                               
          
                                     <RightSide user_id={this.props.session.state.userId} />
                               
                            </th>
                        </tr>
        </thead>
      

        
        </div>
      
    </Provider>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cards_list: state.cardReducer,
        session: state.sessionReducer

    }
  };

export default connect(mapStateToProps)(Main);

//export the current classes in order to be used outside
