import React, { Component } from 'react';

class Content extends Component {

  render() {
    return (
      <div>
        {props.children}
      </div>
    );
  }
}

export default Content;