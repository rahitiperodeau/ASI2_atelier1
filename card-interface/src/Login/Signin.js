import React, { Component } from 'react';
import UserInfo from '../commonModel/User/components/UserInfo'
import UserImg from '../sources/img/User.png';
import SigninInfo from './components/SigninInfo'

import {openSession} from '../actions'

import { connect } from 'react-redux';

var axios=require('axios') ;

//import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

//extends the object Component
class Signin extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        //creation of an initial state, a json object
       
        //binding of the function given the ability to use this
        this.processInput = this.processInput.bind(this); 
        this.state = {  
            //session : this.props.session,
            login:"",
            pwd:"",           
        };
    }

    
    processInput(pLogin,pPwd){


        let url = 'http://127.0.0.1:8082/authID?login=' + pLogin + '&pwd=' + pPwd ;
        console.log(this.state.login);
        let vSessionopen = 0 ;
        axios.get(url)
        .then(function (response) {
            
            if (response.data >0){
                //console.log(test);
                vSessionopen = 1;
                

            }else{
                alert("Password or login incorrect please try-again or send an email to it@cpe.fr")
            }
             

          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })

        if(vSessionopen == 1){
            this.state.openSessionUser(pLogin,response.data);
            this.props.dispatch(openSession(this.props.session));
            window.location.href = '/home';
        }
    }


  render() {
    // return the react specific virtual dom


    console.log(this.state.login);
    return (
      <SigninInfo
          processInput  = {this.processInput}
          signinImg     = {UserImg}
      />
   );
  }

  
}


//export the current classes in order to be used outside
export default connect()(Signin);