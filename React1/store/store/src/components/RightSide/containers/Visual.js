import React, { Component } from 'react';

class Visual extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
     return( 
     
     <div>
          <div class="ui special cards" align= "center">
                                <div class="card">
        
                                    <div class="content">
                                            <div class="ui grid">
                                                <div class="three column row">
                                                    <div class="column">
                                                            <h5>{this.props.card.family}</h5>
                                                    </div>
                                                    <div class="column">
                                                    energy: 
                                                        <span id="energyId">{this.props.card.energy}</span> <i class="lightning icon"></i>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div class="image imageCard">
            
                                        <div class="blurring dimmable image">
                                            
                                            <div class="ui fluid image">
                                               
                                                <img id="cardImgId" class="ui centered image" height="25%" width="25%" src={this.props.card.visual_src}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div class="ui form tiny">
                                            
                                                <label id="cardNameId"></label>
                                                <p id="cardDescriptionId" class="overflowHiden" readonly="" rows="5">{this.props.card.description}
                                                </p>
                                            
                                        </div>
                                    </div>
                                   
                                    <div class="content">
                                        <span class="right floated">
                                        Attack:
                                                <span id="cardAttackId">  {this.props.card.attack}</span> 
                                            <i class=" wizard icon"></i>
                                        </span>
                                        <i class="protect icon"></i>
                                        Defense:
                                        <span id="cardDefenceId">{this.props.card.defence}</span> 
                                    </div>
                                   
                                </div>
                            </div>
                            
                             </div> 
       
   
    )
               
                
       
  }
}

export default Visual;