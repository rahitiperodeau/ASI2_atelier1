import React, {Component} from 'react';

class Label extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="content">
                    <div className="ui-grid">
                        <div className="three column row">
                            <div className="column">
                                <h2>User_id:{this.props.user_id}</h2>
                                <h3>Id:{this.props.id}</h3>
                                <h4>Name:{this.props.name}</h4>
                                <h5>Attack:{this.props.attack}</h5>
                                <h6>Defence:{this.props.defence}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Label;