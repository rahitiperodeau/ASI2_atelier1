import React, { Component } from 'react';
import User from '../commonModel/User/User'
import UserInfo from '../commonModel/User/components/UserInfo'
import UserImg from '../sources/img/User.png';
import SigninInfo from './components/SigninInfo';
import SessionUser from '../commonModel/SessionUser';
//import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
const axios=require('axios');
//extends the object Component
class Signin extends Component {
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
    processInput(pLogin,pPwd){


        let url = 'http://127.0.0.1:8082/authID?login=' + pLogin + '&pwd=' + pPwd ;
        let urlBis ='http://127.0.0.1:8082/auth?login=' + pLogin + '&pwd=' + pPwd ;
        axios.get(url)
        .then(function (response) {
            
            if (response.data >0){
                let sessionUser=new SessionUser();
                sessionUser.openSession(pLogin,response.data);//response.data=id
                window.location.href = '/home';

            }else{
                alert("Password or login incorrect please try-again or send an email to it@cpe.fr")
            }
             

          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
}


  render() {
    // return the react specific virtual dom
    return (
      <SigninInfo
          processInput  = {this.processInput}
          signinImg     = {UserImg}
      />
   );
  }
}
//export the current classes in order to be used outside
export default Signin;