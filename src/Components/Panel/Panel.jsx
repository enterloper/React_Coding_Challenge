import React, { Component } from 'react';
import './styles.less';

class Panel extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return ( 
        <div className="panel__wrapper">
            <span>I AM Panel A!!!!</span>
        </div>
    );
    }
}

export default Panel;