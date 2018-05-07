import React, { Component } from 'react';
import PanelA from 'Components/panelA';
import PanelB from 'Components/panelB';
import Header from 'Components/header';
import simulateDataCall from 'utility/parseMock';
import mockData from 'assets/mockData.json';

simulateDataCall(mockData)
  .then((response) => {console.log('JSON DATA:', response)});

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Header />
        <PanelA />
        <PanelB />
      </div>
    );
  }
}

export default App;