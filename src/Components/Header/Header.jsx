import React, { Component } from 'react';
import PanelA from '../PanelA/PanelA';

class Header extends Component {
    state = {
      showMinus: true,
    };

    changeSign = () => {
        this.setState({ showMinus: !this.state.showMinus });
    };

    render() {
        return (
        <div className="header">
            <div>30%</div>
            <div>$200000</div>
            <div>85%</div>
            <span className="plusOrMinus" onClick={this.changeSign}> {this.state.showMinus ? '-' : '+'} </span>
        </div>
    );
    }
}

export default Header;