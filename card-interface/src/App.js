import React, { Component } from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import AppHome from './home/AppHome'




//extends the object Component
class App extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        
        
        
        //creation of an initial state, a json object
        this.state = {
            
        }; 
    }

    
  //render function use to update the virtual dom
  render() {
    
    return (

            
                        <AppHome 
                            
                        />
                  

    );
  }
}

//export the current classes in order to be used outside
export default App;