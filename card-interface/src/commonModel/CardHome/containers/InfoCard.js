import React, { Component } from 'react';
import Button from '../../Button'

class InfoCard extends Component {
    constructor(props) {
        super(props);  
        this.state={
            idCard:this.props.idCard,
            
        }      
    }
  

   


  render() {

    return (

        <div className="ui special cards">
            <div className="card">

                <div className="content">
                    <div className="ui form tiny">
                        <div className="field">
                            <label id="cardNameId"></label>
                            <div id="cardDescriptionId" className="overflowHiden" readOnly="" rows="5"> {this.props.description}
                            </div>
                        </div>
                    </div>
                </div>

                <div id="CardId">{this.props.idCard}</div>

                <div className="content">
                    <i className="heart outline icon"></i><span id="cardHPId"> HP {this.props.hp}</span> 
                    <div className="right floated ">
                            <span id="cardEnergyId">Energy {this.props.energy}</span>
                        <i className="lightning icon"></i>
                        
                    </div>
                </div>

                <div className="content">
                    <span className="right floated">
                            <span id="cardAttackId"> Attack {this.props.attack}</span> 
                        <i className=" wizard icon"></i>
                    </span>
                    <i className="protect icon"></i>
                    <span id="cardDefenceId"> defense {this.props.defense}</span> 
                </div>

                <div className="ui bottom attached button">
                    <i className="money icon"></i>
                    Price <span id="cardPriceId"> {this.props.price}$</span>
                </div>

                <Button
                    message = 'SELL_CARD'
                    actionButton = "SELL_CARD"
                    idCard = {this.state.idCard}
                    idUser = {this.props.id}
                />
            

            </div>
        </div>
 
    );
  }
}

export default InfoCard;