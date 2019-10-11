import React, { Component } from 'react';

class InfoCard extends Component {
    constructor(props) {
        super(props);   
        this.handleOnButton = this.handleOnButton.bind(this);     
    }
  

    handleOnButton(pId){

        //TODO
    }


  render() {

    return ( 
            <input 
                    class   =   "favorite styled" 
                    type    =   "button"
                    value   =   {this.props.valueButton}
                    onClick =   {()=>{this.handleOnButton(this.props.idCard)}}>

            </input>
 
    );
  }
}

export default InfoCard;


