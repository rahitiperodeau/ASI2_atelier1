import React, { Component } from 'react';
import Panel from "./containers/Panel"
import { connect } from 'react-redux';



class RightSide extends Component {
    //class constructor whith given properties
  //class constructor whith given properties
  constructor(props) {
    super(props); 
    }
    
  
    
  //render function use to update the virtual dom

  render() {

    if(this.props.card.id ==undefined){
        return <div></div>;
}
     
    return (
            <div align="right">
            
              <Panel card = {this.props.card}>

              </Panel>
            </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
    return {
      card: state.cardReducer
    }
  };

export default connect(mapStateToProps)(RightSide);

//export the current classes in order to be used outside
//export default RightSide;