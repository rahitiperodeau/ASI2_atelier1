import React, { Component } from 'react';
import InfoCard from './containers/InfoCard';
import Visual from './containers/Visual';

class Card extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
    }
  
  //render function use to update the virtual dom
  render() {

    return (
            <div className="panel panel-default" > 
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.card.name}</h3>
                </div>
                <div className="panel-body">
                    <Visual 
                        type        = "img" 
                        src         = {this.props.card.visual_src} 
                    />
                    <InfoCard 
                        description = {this.props.card.description}
                        family      = {this.props.card.level}
                        hp          = {this.props.card.level}
                        energy      = {this.props.card.level}
                        defence     = {this.props.card.level}
                        attack      = {this.props.card.level}
                        price       = {this.props.card.price}
                    />
                </div>
            </div>
    );
  }
}

export default Card;