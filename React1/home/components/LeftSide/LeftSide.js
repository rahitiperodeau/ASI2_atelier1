import React, { Component } from 'react';
import User from '../../commonModel/user/User';
import {connect} from 'react-redux';

class LeftSide extends Component{
    constructor(props){
        super(props);
        this.getUSer=this.getUSer.bind(this);
    }

    getUSer(){
        /* let userName = this.props.currUser.userName;
        let surName = this.props.currUser.surName;
        let lastName = this.props.currUser.lastName; */
        let array_render=[];
        
        for(var i=0;i<this.props.currUser.users.length;i++){
            /**
             * ajouter seulement le current User
             */
        }
        return 
    }

    /**
     * place pour la fonction de Seraph
     */

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