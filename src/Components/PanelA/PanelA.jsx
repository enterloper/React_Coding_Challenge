import React, { Component } from 'react';

class PanelA extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return ( 
        <div className="panels float-left">
            <span>I AM Panel A!!!!</span>
        </div>
    );
    }
}

export default PanelA;