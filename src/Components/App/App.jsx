import React, { Component } from 'react';
import Header from 'Components/Header';
import Content from 'Components/Content';
import Panel from 'Components/Panel';
import simulateDataCall from 'utility/parseMock';
import mockData from 'assets/mockData.json';
import '../../styles/normalize.css';
simulateDataCall(mockData)

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Header />
        <Content>
          <Panel />
          <Panel />
        </Content>
      </div>
    );
  }
}

export default App;