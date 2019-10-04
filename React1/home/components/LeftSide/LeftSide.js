import React, { Component } from 'react';
import User from '../user/User';

class LeftSide extends Component{
    constructor(props){
        super(props);
        this.getUSer=this.getUSer.bind(this);
    }

    getUSer(){
        let user
        
    }

    render(){
        const display_user=this.getUSer();
        return(
            <div>
                {display_user}
            </div>
        );
    }
}
export default LeftSide;