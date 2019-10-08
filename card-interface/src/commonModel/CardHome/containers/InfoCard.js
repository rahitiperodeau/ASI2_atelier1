import React, { Component } from 'react';
import Button from '../../Button'

class InfoCard extends Component {
    constructor(props) {
        super(props);        
    }
  

 


  render() {

    return (

        <div class="ui special cards">
            <div class="card">

                <div class="content">
                    <div class="ui form tiny">
                        <div class="field">
                            <label id="cardNameId"></label>
                            <div id="cardDescriptionId" class="overflowHiden" readonly="" rows="5"> {this.props.description}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <i class="heart outline icon"></i><span id="cardHPId"> HP {this.props.hp}</span> 
                    <div class="right floated ">
                            <span id="cardEnergyId">Energy {this.props.energy}</span>
                        <i class="lightning icon"></i>
                        
                    </div>
                </div>

                <div class="content">
                    <span class="right floated">
                            <span id="cardAttackId"> Attack {this.props.attack}</span> 
                        <i class=" wizard icon"></i>
                    </span>
                    <i class="protect icon"></i>
                    <span id="cardDefenceId"> defense {this.props.defense}</span> 
                </div>

                <div class="ui bottom attached button">
                    <i class="money icon"></i>
                    Price <span id="cardPriceId"> {this.props.price}$</span>
                </div>

                <Button
                    message = 'Sell'
                    idCard      = {this.props.idCard}
                />
            

            </div>
        </div>
 
    );
  }
}

export default InfoCard;