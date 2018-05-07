import React, { Component } from 'react';
import './styles.less';

class Content extends Component {

  render() {
    return (
      <div className="content__wrapper">
        {this.props.children}
      </div>
    );
  }
}

export default Content;