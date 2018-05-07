import React, { Component } from 'react';
import PanelA from './panelA';

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
            {this.state.showMinus ? <span className="plusOrMinus" onClick={this.changeSign}> - </span>
                :
            <span className="plusOrMinus" onClick={this.changeSign}> + </span>}
        </div>
    );
    }
}

export default Header;