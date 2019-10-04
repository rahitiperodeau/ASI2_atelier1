import React, { Component } from 'react';
import User from './user/User.js'
import UserInfo from './user/components/UserInfo.js'
import UserImg from './img/User.png';
//import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

//extends the object Component
class App extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        //creation of an initial state, a json object
        this.state = {  
            login:"",
            pwd:"",           
        };
        //binding of the function given the ability to use this
        this.processInput=this.processInput.bind(this); 
    }
    processInput(ev){
      this.setState({
        login:ev.target.value,
        pwd:ev.target.value,
      });
    }


  render() {
    // return the react specific virtual dom
    return (
      <form className="App">
      <h1 className="ui dividing header"><center>Log in</center></h1>
      <center><img src={UserImg} /></center>
        <div className="field">
          <center>
            <label>Username </label>
            <input type="text" name="login" placeholder="UnTrucFun"></input>
          </center>
          </div>
          <div className="field">
            <center>
              <label>Password </label>
              <input type="password" name="pwd" placeholder="*******"></input>
            </center>
          </div>

          <center><a href="/register.html" >Register</a></center>
         <center><button onclick="processInput(ev)">Let's go!</button></center>
    </form>   

   );
  }
}

//export the current classes in order to be used outside
export default App;