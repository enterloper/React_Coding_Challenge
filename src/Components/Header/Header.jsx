import React, { Component } from 'react';
import './styles.less';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMinus: true,
    };
    this.changeSign = this.changeSign.bind(this);
  }
    changeSign() {
        this.setState({ showMinus: !this.state.showMinus });
    }

    render() {
        return (
        <div className="header__wrapper">
            <div>30%</div>
            <div>$200000</div>
            <div>85%</div>
            <div className="header__button-cell" onClick={this.changeSign}>
              <button>
                {this.state.showMinus ? '-' : '+'}
              </button>
            </div>
        </div>
    );
    }
}

export default Header;